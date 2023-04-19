import React, { useState, useEffect } from 'react';
import PartList from './PartList.jsx'

const Build = (props:{build: {name: String, owner: String, components: { name: String;
  type: string;
  data: Object;
  photoUrl: String;
  prices: {
      host: String;
      url: string;
      price: string;
    }[]
  }[]}, user: String, setBuild: Function}) => {

  const [buildForm, setBuildForm] = useState({
    name: '',
    owner: props.user,
    components: []
  })

  const [stillNeeds, setStillNeeds] = useState([
    'airframe', 'esc', 'transmitter', 'propeller', 'motor'])

  const [complete, setComplete] = useState(false)

  useEffect(() => {
    let stillNeedsCopy = stillNeeds.slice(0);
    if(props.build.components.length > 0){
      props.build.components.forEach(component => {
        if(stillNeeds.includes(component.type)){
          stillNeedsCopy.splice(stillNeedsCopy.indexOf(component.type), 1);
          setStillNeeds(stillNeedsCopy)
        } else {
          setStillNeeds([
            'airframe', 'esc', 'transmitter', 'propeller', 'motor']);
            props.setBuild(props.build)
        }
      })
    }
  }, [props.build])

  return (
    <div>
      Build Page! Wooo!
      <div> Your transmitter:
        <div></div>
      </div>

      <PartList build={props.build} stillNeeds={stillNeeds} setStillNeeds={setStillNeeds} setBuild={props.setBuild}/>
      {!complete && <div>{`Your Build Still Needs: ${stillNeeds.join(', ')}`}</div>}
    </div>
  )
}



export default Build