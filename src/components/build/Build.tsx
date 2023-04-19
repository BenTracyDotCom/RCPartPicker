import React, { useState } from 'react';
import PartList from './PartList.jsx'

const Build = (props:{build: {name: String, owner: String, components: { name: String;
  type: String;
  data: Object;
  photoUrl: String;
  prices: {
      host: String;
      url: string;
      price: string;
    }[]
  }[]}, user: String}) => {

  const [buildForm, setBuildForm] = useState({
    name: '',
    owner: props.user,
    components: []
  })


  return (
    <div>
      Build Page! Wooo!
      <div> Your transmitter:
        <div></div>
      </div>

      <PartList build={props.build}/>
    </div>
  )
}

export default Build