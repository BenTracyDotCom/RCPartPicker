import React from 'react';

const Banner = (props: { user: String, setBuilds: Function, builds: { name: String, components: { type: string, name: string, photoUrl?: string, prices?: { host: string, url: string, price: string }[] }[] }[], setUser: Function, setBuild: Function, setPage: Function }) => {

  const handleLogin = () => {
    if (!props.user) {
      const modalCheck = document!.getElementById('login-modal') as HTMLInputElement;
      modalCheck.checked = true;
    } else {
      props.setBuilds([]);
      props.setUser('');
      props.setPage('home')
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
    if (e.currentTarget.value === "+ New Build") {
      props.setPage('build')
      props.setBuild({ name: 'My New Build', owner: props.user, components: [] })
      const selector = document.getElementById('build-selector') as HTMLSelectElement
      selector.selectedIndex = 0;
    } else {
      const buildsCopy = props.builds.slice(0)
      const thisBuild = buildsCopy.filter(build => (build.name === e.currentTarget.value))[0]
      thisBuild.components.map(part => {
        const thisPart = part;
        thisPart.photoUrl = thisPart.photoUrl || ''
        if (thisPart.prices?.length === 0) {
          thisPart.prices = [{ host: '', url: '', price: '0.00' }]
        }
        thisPart.prices = thisPart.prices || [{ host: '', url: '', price: '0.00' }]
        return thisPart
      })
      props.setBuild(thisBuild)
      props.setPage('build')
    }
  }

  return (
    <div className="bg-blue-900 mt-0 flex items-center justify-between">
      <h1 className="text-amber-400 text-4xl w-full font-mono font-bold pl-5">RC Part Picker</h1>
      <div className="w-10/12 h-min py-y flex justify-end">
        <span className="text-amber-400 cursor-pointer hover:text-green-300" onClick={handleLogin}>{!!props.user ? 'logout  |  ' : 'login  |  '}</span>
        {!props.user && <span className="text-amber-400 ml-2 cursor-pointer hover:text-green-300" onClick={handleRegister}> register</span>}
      </div>
      {props.user && <label className="label">
        <span className="label-text  text-amber-400">{`Welcome, ${props.user}!`}</span></label>}
      <select className="select w-full max-w-xs m-5" onChange={handleBuild} id="build-selector">
        <option disabled selected>Your Builds:</option>
        {props.builds.map(build => (<option>{build.name}</option>))}
        <option>+ New Build</option>
      </select>
      {props.user === "Brengeley" && <div onClick={handleAddPart}>Add Part(s)</div>}
    </div>
  )
}

export default Banner