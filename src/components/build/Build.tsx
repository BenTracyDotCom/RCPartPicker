import React, { useState, useEffect } from 'react';
import PartList from './PartList.jsx'

const Build = (props: {
  build: {
    name: string, owner: string, components: {
      name: string;
      type: string;
      data: { protocol?: string, engines?: number };
      photoUrl: string;
      prices: {
        host: string;
        url: string;
        price: string;
      }[]
    }[]
  }, user: String, setBuild: Function
}) => {

  const [buildForm, setBuildForm] = useState({
    name: 'My New Build',
    owner: props.user,
    components: [{}]
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

  useEffect(() => {
    //Keep track of required parts
    const requiredParts = ['airframe', 'esc', 'transmitter', 'propeller', 'motor']
    //keep form up to date with any imports
    setBuildForm({ name: props.build.name, owner: props.build.owner, components: props.build.components })

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


      props.build.components.forEach(component => {
        if (requiredParts.includes(component.type)) {
          requiredParts.splice(requiredParts.indexOf(component.type), 1);
          setStillNeeds(requiredParts)
          if (requiredParts.length > 0) {
            setComplete(false)
          } else {
            setComplete(true)
          }
        }
      });
    } else {
      //case: build is empty
      setRunningTotal(0)
      setTransmitter({ photo: '', title: '', protocol: '' })
      setAirframe({ photo: '', title: '' })
    }
  }, [props.build])

  return (
    <div>
      <input type="text" value={buildForm.name} className="input input-ghost w-full text-center text-3xl" placeholder="My New Build" onChange={handleTitle} />

      {transmitter.title && <div className="float-left pt-10"> Your transmitter:
        <img src={transmitter.photo} className="w-32" />
      </div>}
      {airframe.title && <div>
        <img src={airframe.photo} />
        <div>{airframe.title}</div>
      </div>}

      <PartList build={props.build} stillNeeds={stillNeeds} setStillNeeds={setStillNeeds} setBuild={props.setBuild} />
      <div>{`Running Total: $${runningTotal.toFixed(2)}`}</div>
      {!complete && <div>{`Your Build Still Needs: ${stillNeeds.join(', ')}`}</div>}
      {complete && <div>It'll fly!</div>}
    </div>
  )
}



export default Build