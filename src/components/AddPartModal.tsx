import addPart from '../api/api'

const AddPartModal = (props: Object) => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <input type="checkbox" id="add-part-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
<h1>Add a part to the database: </h1>
          <div className="modal-action">
            <label htmlFor="add-part-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPartModal