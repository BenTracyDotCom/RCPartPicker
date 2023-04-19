

const SearchResult = (props: {
  item: { name: String, type: String, data: Object, photoUrl: string, prices: { host: String, url: string, price: string }[] }, build: {
    name: String, owner: String, components: {
      name: String;
      type: String;
      data: Object;
      photoUrl: String;
      prices: {
        host: String;
        url: string;
        price: string;
      }[]
    }[]
  }, setBuild: Function
}) => {

  const handleAddPart = (e: React.MouseEvent<HTMLElement>) => {
    const thisPart = props.item;
    const components = props.build.components;
    components.push(thisPart);
    props.setBuild({...props.build, components:components})
    const closer = document.getElementById('search-modal') as HTMLInputElement;
    closer.checked = false;
  }

  const bestPrice = props.item.prices.sort((a, b) => {
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1
    }
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1
    }
    return 0
  })[0]

  return (
    <div className="pt-5">
      <button className="btn btn-circle btn-s btn-success float-right" onClick={handleAddPart}>+</button>
      <div>{props.item.name}</div>
      <div>{bestPrice.price}</div>
      <img src={props.item.photoUrl} className="h-40 w-40 m-auto" />
    </div>
  )
}

export default SearchResult