import { useState, ChangeEvent, ChangeEventHandler } from 'react'
import api from '../api/api.js'

const LoginModal = (props: { setUser: Function, setBuilds: Function, }) => {

  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, email: e.currentTarget.value})
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
   setForm({...form, password: e.currentTarget.value})
  }

  const handleSubmit = () => {
    if(!!form.email && !!form.password){
      api.validateUser(form)
      .then(res => {
        props.setUser(res.data[0].owner);
        props.setBuilds(res.data);
        const closer = document!.getElementById('login-modal') as HTMLInputElement;
        closer.checked = false;
      })
      .catch(err => console.log(err))
    }

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
            <input type="text" className="input input-bordered w-full" onChange={handleEmail}/>
          </label>
          <label className="input-group mt-5">
            <span>Password</span>
            <input type="password" className="input input-bordered w-full" onChange={handlePassword}/>
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