import React, {useEffect} from 'react';
import PartTile from './PartTile.jsx'
import AddPartTile from './AddPartTile.jsx'

const PartList = (props:{build: {name: String, owner: String, components: { name: String, type: String, data: Object, photoUrl: String, prices:{ host: string, url: string, price: string }[]}[]}, stillNeeds: String[], setStillNeeds: Function, setBuild: Function }) => {

  useEffect(() => {
    if(props.build.name === ''){
    const components = props.build.components.slice(0)
    components.splice(0, 1)
    props.setBuild({ ...props.build, components: components })
    }
  }, [])

  return (
    <div className="w-10/12 m-auto">
      <AddPartTile />
    {props.build.components.map(component => (<PartTile part={component} build={props.build} setBuild={props.setBuild}/>))}
    </div>
  )
}

export default PartList