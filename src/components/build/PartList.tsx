import React from 'react';
import PartTile from './PartTile.jsx'

const PartList = (props:{build: {name: String, owner: String, components: { name: String, type: String, data: Object, photoUrl: String, prices:{ host: String, url: string, price: string }[]}[]}}) => {

  return (
    <div>
      PartsList:
    {props.build.components.map(component => (<PartTile part={component} />))}
    </div>
  )
}

export default PartList