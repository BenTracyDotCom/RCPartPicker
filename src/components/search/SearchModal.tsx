import React, { useState } from 'react';
import SearchList from './SearchList.js';
import api from '../../api/api.js'

const Search = (props: {build: {name: String, owner: String, components: { name: String;
  type: String;
  data: Object;
  photoUrl: String;
  prices: {
      host: String;
      url: string;
      price: string;
    }[]
  }[]}, setBuild: Function}) => {

  const [items, setItems] = useState([])
  const [type, setType] = useState('')

  const titleTypes = ['', 'Airframes','Batteries', "ESC's", "FC's", 'Receivers', 'Servos', 'Transmitters']

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(titleTypes[e.currentTarget.selectedIndex])
    console.log(e.currentTarget.selectedIndex, 'index')
    api.getProducts(e.currentTarget.value)
    .then(res => {
      setItems(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {type && <h2>{`${type}`}</h2>}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select a part type:</span>
            </label>
            <select className="select select-bordered" onChange={handleType}>
              <option disabled selected>Pick one</option>
              <option value='airframe'>Airframe</option>
              <option value='battery'>Battery</option>
              <option value='esc'>Electronic Speed Control</option>
              <option value='fc'>Flight Controller</option>
              <option value='receiver'>Receiver</option>
              <option value='servo'>Servo</option>
              <option value='transmitter'>Transmitter</option>
            </select>
          </div>
        <SearchList items={items} build={props.build} setBuild={props.setBuild}/>
          <div className="modal-action">
            <label htmlFor="search-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search