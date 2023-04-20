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

  const titleTypes = ['', 'Airframes','Batteries', "ESC's", "FC's",'Motors', 'Propellers', 'Receivers', 'Servos', 'Transmitters']

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(titleTypes[e.currentTarget.selectedIndex])
    api.getProducts(e.currentTarget.value)
    .then(res => {
      setItems(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {type && <div className="font-bold text-2xl fixed">{`${type}`}</div>}
          <div className="form-control w-full max-w-xs mt-10">
            <label className="label">
              <span className="label-text">Select a part type:</span>
            </label>
            <select className="select select-bordered" onChange={handleType}>
              <option disabled selected>Pick one</option>
              <option value='airframe'>Airframe</option>
              <option value='battery'>Battery</option>
              <option value='esc'>Electronic Speed Control</option>
              <option value='fc'>Flight Controller</option>
              <option value='motor'>Motor</option>
              <option value='propeller'>Propeller</option>
              <option value='receiver'>Receiver</option>
              <option value='servo'>Servo</option>
              <option value='transmitter'>Transmitter</option>
            </select>
          </div>
        <SearchList items={items} build={props.build} setBuild={props.setBuild}/>
          <div className="modal-action">
            <label htmlFor="search-modal" className="btn btn-primary">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search