

const PartTile = (props: { part: { name: String, type: String, data?: Object, photoUrl?: String, prices?: { host: string, url: string, price: string }[] }, build: any, setBuild: Function }) => {

  const handleDelete = () => {

    const components = props.build.components.slice(0)
    const index = components.findIndex((item: {name: string}) => item.name === props.part.name)
    components.splice(index, 1)
    props.setBuild({...props.build, components:components})
  }

  let bestPrice = {host: '', url: '', price: "0"}

  if(!!props.part.prices){
    bestPrice = props.part?.prices?.sort((a, b) => {
      if (parseFloat(a.price) < parseFloat(b.price)) {
        return -1
      }
      if (parseFloat(a.price) > parseFloat(b.price)) {
        return 1
      }
      return 0
    })[0]
  }

  return (
    <div className="border-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href={bestPrice.url} className="btn btn-ghost normal-case text-xl" target="_blank">{props.part.name}</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-error btn-xs" onClick={handleDelete}>X</button>
        </div>
      </div>
    </div>
  )
}

export default PartTile