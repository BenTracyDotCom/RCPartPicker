

const PartTile = (props: {part: { name: String, type: String, data: Object, photoUrl: String, prices:{ host: String, url: string, price: string }[] }}) => {

  const bestPrice = props.part?.prices.sort((a, b) => {
    if(parseFloat(a.price) < parseFloat(b.price)){
      return -1
    }
    if(parseFloat(a.price) > parseFloat(b.price)){
      return 1
    }
    return 0
  })[0]

  return (
    <div className="border-2">
    <a href={bestPrice.url}>{props.part.name}</a>
      Part Tile
    </div>
  )
}

export default PartTile