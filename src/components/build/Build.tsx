import React, { useState, useEffect } from 'react';
import PartList from './PartList.jsx';
import api from '../../api/api.js'

const Build = (props: {
  build: {
    name: string, owner: string, components: {
      name: string;
      type: string;
      data: { protocol?: string, engines?: number, voltage?: string, connector?: string, battery?: string};
      photoUrl: string;
      prices: {
        host: string;
        url: string;
        price: string;
      }[]
    }[]
  }, user: string, setBuild: Function, builds: any[], setBuilds:Function, setPage: Function}) => {

  const [buildForm, setBuildForm] = useState({
    name: '',
    owner: props.user,
    components: props.build.components
  })

  const [conflicts, setConflicts] = useState({
    powerConflict: '',
    protocolConflict: '',
    engineConflict: ''
  })

  const [transmitter, setTransmitter] = useState({ photo: '', title: '', protocol: '' });
  const [airframe, setAirframe] = useState({ photo: '', title: '' });

  const [runningTotal, setRunningTotal] = useState(0)

  const [stillNeeds, setStillNeeds] = useState([
    'airframe', 'esc', 'transmitter', 'propeller', 'motor'])

  const [complete, setComplete] = useState(false)

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuildForm({ ...buildForm, name: e.currentTarget.value })
  }

  const handleSubmit = () => {
    if(props.user){
      api.sendBuild(buildForm)
      .then(() => {
        const buildsCopy = props.builds.slice(0);
        buildsCopy.push(buildForm)
        props.setBuilds(buildsCopy)
        })
      .catch(console.log)
    } else {
      const login = document!.getElementById('login-modal') as HTMLInputElement;
      login.checked = true;
    }
  }

  const handleDelete = () => {
    if(props.user){
      api.deleteBuild(buildForm)
      .then(() => {
      })
      .catch(console.log)
    }
    let buildsCopy = props.builds.slice(0);
    buildsCopy = buildsCopy.filter(build => build.name !== props.build.name)
    props.setBuilds(buildsCopy)
    props.setBuild({...props.build, name: '', components: [{name:'', type: '', data: {}, photoUrl: '', prices: [{host: '', url: '', price: '0'}]}]})
    setBuildForm({...buildForm, name: '', components: props.build.components })
    props.setPage('home')
  }

  useEffect(() => {
    setBuildForm({...buildForm, owner: props.user})
  }, [props.user])

  useEffect(() => {
    setBuildForm({...buildForm, name:props.build.name})
  }, [])

  useEffect(() => {

    //reset conflicts, we'll check for them again
    setConflicts({
      powerConflict: '',
      protocolConflict: '',
      engineConflict: ''
    })

    //declare validator objects to check against while we iterate through the build
    const power = { esc: {connector: '', battery: ''},
  battery: {connector: '', voltage: ''}}

  const protocol = { transmitter: '', receiver: ''}

    //Keep track of required parts
    const requiredParts = ['airframe', 'esc', 'transmitter', 'receiver', 'propeller', 'motor']
    //keep form up to date with any imports
    setBuildForm({ ...buildForm, owner: props.build.owner, components: props.build.components })

    //case: we have build components to consider
    if (props.build.components.length > 0) {
      const transmitterQ = props.build.components.filter(part => part.type === 'transmitter')[0]
      //case: build includes a transmitter
      if (!!transmitterQ) {
        setTransmitter({ photo: transmitterQ.photoUrl, title: transmitterQ.name, protocol: transmitterQ.data.protocol! });
      } else {
        //no transmitter
        setTransmitter({ photo: '', title: '', protocol: '' })
      }
      const airframeQ = props.build.components.filter(part => part.type === 'airframe')[0]
      //case: build includes an airframe
      if (!!airframeQ) {
        if(airframeQ.data.engines! > 1){
          let counter = airframeQ.data.engines;
          while(counter!  > 1){
            requiredParts.push(`motor ${counter}`, `propeller ${counter}`)
            counter! --;
          }
        }
        setAirframe({ photo: airframeQ.photoUrl, title: airframeQ.name });
      } else {
        //no airframe
        setAirframe({ photo: '', title: '' })
      }

      //calculate new running total with current items
      const newTotal = props.build.components.reduce((memo, item) => {
        return memo + parseFloat(item.prices.sort((a, b) => {
          if (parseFloat(a.price) < parseFloat(b.price)) {
            return -1
          }
          if (parseFloat(a.price) > parseFloat(b.price)) {
            return 1
          }
          return 0
        })[0].price)
      }, 0)
      setRunningTotal(newTotal)

      //cross build items off the list and check validators
      props.build.components.forEach(component => {
        if (requiredParts.includes(component.type)) {
          if(component.type === 'battery' && component.data.hasOwnProperty('connector')) {
            power.battery.connector = component.data.connector!
            power.battery.voltage = component.data.voltage!
          }
          if(component.type === 'esc' && component.data) {
            power.esc.connector = component.data.connector!
            power.esc.battery = component.data.battery!
          }
          if(component.type === 'receiver' && component.data) {
            protocol.receiver = component.data.protocol!
          }
          if(component.type === 'transmitter' && component.data) {
            protocol.transmitter = component.data.protocol!
          }
          requiredParts.splice(requiredParts.indexOf(component.type), 1);
          setStillNeeds(requiredParts)
          if (requiredParts.length > 0) {
            setComplete(false)
          } else {
            setComplete(true)
          }
        }
      });
      //check the validators for conflicts
      if(power.esc.battery && power.battery.voltage){
        const [max, min] = power.esc.battery.split('-')
        if(parseInt(power.battery.voltage) < parseInt(min)){
          setConflicts({...conflicts, powerConflict: "This ESC requires more power than this battery provides."})
        } else if(parseInt(power.battery.voltage) > parseInt(max)){
          setConflicts({...conflicts, powerConflict: "This battery has too high a voltage for this ESC."})
        } else if(power.battery.connector.slice(-2) !== power.esc.connector.slice(-2)){
          setConflicts({...conflicts, powerConflict: "This battery and ESC have different connectors."})
        }
      }

      if(protocol.transmitter && protocol.receiver && protocol.receiver.split(',').filter((item => protocol.transmitter.split(',').includes(item))).length === 0){
        setConflicts({...conflicts, protocolConflict: "This receiver is incompatible with this transmitter."})
      }

    } else {
      //case: build is empty
      setRunningTotal(0)
      setTransmitter({ photo: '', title: '', protocol: '' })
      setAirframe({ photo: '', title: '' })
    }
  }, [props.build])

  return (
    <div className="w-11/12 m-auto flex-row justify-center">
      <input type="text" value={buildForm.name} className="input input-ghost w-full text-center text-3xl my-3" placeholder="My New Build" onChange={handleTitle} />

     <div>
       <div className="pt-10 mb-32 float-right mr-5"> Your Transmitter:
       {transmitter.title && <img src={transmitter.photo} className="w-32" />}
        </div>
        {airframe.title && <div>
          <img className="h-80" src={airframe.photo} />
          <div className=" -mt-10">{airframe.title}</div>
        </div>}
     </div>
      <div className="pt-5">
      <div className="float-right pb-5">{`Running Total: $${runningTotal.toFixed(2)}`}</div>
      {!complete && <div>{`Your Build Still Needs: ${stillNeeds.join(', ')}`}</div>}
      {conflicts.powerConflict && <div className="text-error">{conflicts.powerConflict}</div>}
      {conflicts.protocolConflict && <div className="text-error">{conflicts.protocolConflict}</div>}
      {complete && !conflicts.powerConflict && !conflicts.protocolConflict && <div>It'll fly!</div>}
        <PartList build={props.build} stillNeeds={stillNeeds} setStillNeeds={setStillNeeds} setBuild={props.setBuild} />
      </div>
      <div className=" pb-10 flex justify-around">
        <button className="btn mb-10" onClick={handleSubmit}>Save</button>
        <button className="btn btn-error mb-10" onClick={handleDelete}>Delete</button>
      </div>



    </div>
  )
}



export default Build