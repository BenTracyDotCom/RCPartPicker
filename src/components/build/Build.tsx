import React, { useState, useEffect } from 'react';
import PartList from './PartList.jsx'

const Build = (props:{build: {name: String, owner: String, components: { name: String;
  type: string;
  data: Object;
  photoUrl: String;
  prices: {
      host: string;
      url: string;
      price: string;
    }[]
  }[]}, user: String, setBuild: Function}) => {

  const [buildForm, setBuildForm] = useState({
    name: '',
    owner: props.user,
    components: []
  })

  const [runningTotal, setRunningTotal] = useState(0)

  const [stillNeeds, setStillNeeds] = useState([
    'airframe', 'esc', 'transmitter', 'propeller', 'motor'])

  const [complete, setComplete] = useState(false)

  useEffect(() => {
    let stillNeedsCopy = stillNeeds.slice(0);
    if(props.build.components.length > 0){
      const newTotal = props.build.components.reduce((memo, item) => {return memo + parseFloat(item.prices.sort((a, b) => {
        if (parseFloat(a.price) < parseFloat(b.price)) {
          return -1
        }
        if (parseFloat(a.price) > parseFloat(b.price)) {
          return 1
        }
        return 0
      })[0].price)}, 0)
      setRunningTotal(newTotal)
      props.build.components.forEach(component => {
        if(stillNeeds.includes(component.type)){
          stillNeedsCopy.splice(stillNeedsCopy.indexOf(component.type), 1);
          setStillNeeds(stillNeedsCopy)
        }
      })
    } else {
      setRunningTotal(0)
    }
  }, [props.build])

  return (
    <div>
      Build Page! Wooo!
      <div> Your transmitter:
        <div></div>
      </div>

      <PartList build={props.build} stillNeeds={stillNeeds} setStillNeeds={setStillNeeds} setBuild={props.setBuild}/>
      <div>{`Running Total: $${runningTotal.toFixed(2)}`}</div>
      {!complete && <div>{`Your Build Still Needs: ${stillNeeds.join(', ')}`}</div>}
    </div>
  )
}



export default Build