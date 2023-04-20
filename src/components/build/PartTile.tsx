

const PartTile = (props: { part: { name: String, type: String, data?: Object, photoUrl?: String, prices: { host: string, url: string, price: string }[] }, build: any, setBuild: Function }) => {

  const handleDelete = () => {

    const components = props.build.components.slice(0)
    const index = components.findIndex((item: { name: string }) => item.name === props.part.name)
    components.splice(index, 1)
    props.setBuild({ ...props.build, components: components })
  }


  const bestPrice = props.part?.prices?.sort((a, b) => {
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1
    }
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1
    }
    return 0
  })[0]


  return (
    <div className="border-2 rounded-lg drop-shadow-md my-1">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <label className="label">
            <span className="label-text">{props.part.type.toUpperCase()}</span>
          </label>
          <a href={bestPrice.url} className="btn btn-ghost normal-case text-xl" target="_blank">{props.part.name}</a>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <span className="mx-5 font-bold">{parseFloat(bestPrice.price).toFixed(2)}</span>
              <span className="btn btn-error btn-xs" onClick={handleDelete}>X</span>
          </div>
          <div className="form-control -mb-2">
            <label className="label cursor-pointer">
              <span className="label-text mr-2 text-blue-700">ordered</span>
              <input type="checkbox" className="checkbox checkbox-xs checkbox-info" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartTile