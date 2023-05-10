import { useState, useEffect, ChangeEvent, ChangeEventHandler } from 'react'
import addPart from '../api/api'

const AddPartModal = (props: Object) => {

  const [types, setTypes] = useState(['Airframe', 'Battery', 'ESC', 'FC', 'Motor', 'Propeller', 'Receiver', 'Servo', 'Transmitter',])

  const [form, setForm] = useState({
    name: "",
    type: "",
    data: {},
    photoUrl: "",
    prices: []
  })

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.currentTarget.value })
  }

  const handleType = (e: React.MouseEvent<HTMLOptionElement>) => {
    setForm({ ...form, type: e.currentTarget.value.toLowerCase() })
  }

  const handleNewType = () => {
    console.log('new type new type')
  }

  const handlePhotoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, photoUrl: e.currentTarget.value})
  }

  const handlePrices = () => {

  }

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, data: e.currentTarget.value })
  }

  const handleSubmit = () => {

  }

  return (
    <div>
      <input type="checkbox" id="add-part-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3>Add a part to the database: </h3>
          <div className="form-control">
            <label className="input-group">
              <span>Part Name</span>
              <input type="text" className="input input-bordered w-full" onChange={handleName} />
            </label>
          </div>
          <div className="input-group">
            <select className="select select-bordered w-full mt-5">
              <option disabled selected>Pick category</option>
              {types.map(type => {
                return <option onClick={handleType}>{type}</option>
              })}
              <option onClick={handleNewType}>+ Add new category</option>
            </select>
          </div>
          <label className="input-group mt-5">
              <span>Photo URL</span>
              <input type="text" className="input input-bordered w-full" onChange={handlePhotoUrl} />{form.photoUrl && <div className="h-10 w-20"><img src={form.photoUrl}></img>
            </div>}

            </label>
          <div className="modal-action">
            <label htmlFor="add-part-modal" className="btn btn-primary">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPartModal