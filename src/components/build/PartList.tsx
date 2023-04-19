import React from 'react';
import PartTile from './PartTile.jsx'
import AddPartTile from './AddPartTile.jsx'

const PartList = (props:{build: {name: String, owner: String, components: { name: String, type: String, data: Object, photoUrl: String, prices:{ host: String, url: string, price: string }[]}[]}, stillNeeds: String[], setStillNeeds: Function }) => {

  return (
    <div>
      PartsList:
    {props.build.components.map(component => (<PartTile part={component} />))}
    {props.stillNeeds.includes('airframe') && <div className="text-blue-600">Start with an airframe!</div>}
    <AddPartTile />
    </div>
  )
}

export default PartList