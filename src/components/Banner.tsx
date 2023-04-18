import React from 'react';

const Banner = (props:{ user: String, setBuilds: Function, setUser: Function }) => {

  const handleLogin = () => {
    if(!props.user){
      const modalCheck = document!.getElementById('login-modal') as HTMLInputElement;
      modalCheck.checked = true;
    } else {
      props.setBuilds([]);
      props.setUser('');
    }
  }

  const handleRegister = () => {
    const registerCheck = document!.getElementById('register-modal') as HTMLInputElement;
    registerCheck.checked = true;
  }

  return (
    <div>
      <div>Banner</div>
      <div>{props.user}</div>
      <div onClick={handleLogin}>{!!props.user ? 'logout' : 'login'}</div>
      {!props.user && <div onClick={handleRegister}>register</div>}
    </div>
  )
}

export default Banner