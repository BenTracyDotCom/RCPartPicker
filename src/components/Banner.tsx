import React from 'react';

const Banner = (props:{ user: String, setBuilds: Function, setUser: Function }) => {

  const handleLogin = () => {
    console.log(props.user, 'user', !!props.user)
    if(!props.user){
      const modalCheck = document?.getElementById('my-modal') as HTMLInputElement;
      modalCheck.checked = true;
    } else {
      props.setBuilds([]);
      props.setUser('');
    }
  }

  return (
    <div>
      <div>Banner</div>
      <div>{props.user}</div>
      <div onClick={handleLogin}>{!!props.user ? 'logout' : 'login'}</div>
    </div>
  )
}

export default Banner