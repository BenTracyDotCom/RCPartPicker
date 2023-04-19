import React from 'react';

const Banner = (props: { user: String, setBuilds: Function, builds: { name: String, components: {type: string, name: string, photoUrl?:string, prices?: {host: string, url: string, price: string}[]}[] }[], setUser: Function, setBuild: Function, setPage: Function }) => {

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
    if(e.currentTarget.value === "+ New Build"){
      props.setPage('build')
      const selector = document.getElementById('build-selector') as HTMLSelectElement
      selector.selectedIndex = 0;
    } else {
      const buildsCopy = props.builds.slice(0)
      const thisBuild = buildsCopy.filter(build => (build.name === e.currentTarget.value))[0]
      thisBuild.components.map(part => {
        const thisPart = part;
        thisPart.photoUrl = thisPart.photoUrl || ''
        if(thisPart.prices?.length === 0){
          thisPart.prices = [{host: '', url: '', price: '0.00'}]
        }
        thisPart.prices = thisPart.prices || [{host: '', url: '', price: '0.00'}]
        return thisPart
      })
      console.log(thisBuild)
      props.setBuild(thisBuild)
      props.setPage('build')
    }
  }

  return (
    <div>
      <div>Banner</div>
      <select className="select w-full max-w-xs" onChange={handleBuild} id="build-selector">
        <option disabled selected>Your Builds:</option>
        {props.builds.map(build => (<option>{build.name}</option>))}
        <option>+ New Build</option>
      </select>
      {props.user && <div>{`Welcome, ${props.user}!`}</div>}
      <div onClick={handleLogin}>{!!props.user ? 'logout' : 'login'}</div>
      {!props.user && <div onClick={handleRegister}>register</div>}
      {props.user === "admin" && <div onClick={handleAddPart}>Add Part(s)</div>}
    </div>
  )
}

export default Banner