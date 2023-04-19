import React from 'react';

const Banner = (props: { user: String, setBuilds: Function, builds: { name: String }[], setUser: Function, setBuild: Function }) => {

  const handleLogin = () => {
    if (!props.user) {
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

  const handleAddPart = () => {
    const partModalCheck = document!.getElementById('add-part-modal') as HTMLInputElement;
    partModalCheck.checked = true;
  }

  const handleBuild = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const buildsCopy = props.builds.slice(0)
    const thisBuild = buildsCopy.filter(build => (build.name === e.currentTarget.value))
    props.setBuild(thisBuild)
  }

  return (
    <div>
      <div>Banner</div>
      <select className="select w-full max-w-xs" onChange={handleBuild}>
        <option disabled selected>Your Builds:</option>
        {props.builds.map(build => (<option>{build.name}</option>))}
      </select>
      <div>{`Welcome, ${props.user}!`}</div>
      <div onClick={handleLogin}>{!!props.user ? 'logout' : 'login'}</div>
      {!props.user && <div onClick={handleRegister}>register</div>}
      {props.user === "admin" && <div onClick={handleAddPart}>Add Part(s)</div>}
    </div>
  )
}

export default Banner