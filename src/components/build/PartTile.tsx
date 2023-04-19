

const PartTile = (props: { part: { name: String, type: String, data: Object, photoUrl: String, prices: { host: String, url: string, price: string }[] } }) => {

  const bestPrice = props.part?.prices.sort((a, b) => {
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1
    }
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1
    }
    return 0
  })[0]

  return (
    <div className="border-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{`+ Add Part`}</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">

          </button>
        </div>
      </div>
    </div>
  )
}

export default PartTile