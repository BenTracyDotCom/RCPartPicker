import axios from 'axios'
import './api/api'

const LoginModal = (props: { setUser: Function }) => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="pb-5 text-xl">Login</div>
            <label htmlFor="login-modal" className="btn btn-error btn-xs float-right -mt-11">X</label>
          <label className="input-group">
            <span>Email</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          <label className="input-group mt-5">
            <span>Password</span>
            <input type="text" className="input input-bordered w-full" />
          </label>
          <div className="modal-action">
            <button className="btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal