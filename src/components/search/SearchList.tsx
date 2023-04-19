import SearchResult from './SearchResult.jsx'

const SearchList = (props: {
  build: {
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
  }, setBuild: Function, items: any[]
}) => {

  return (
    <div>
      {props.items.map(item => (<SearchResult item={item} build={props.build} setBuild={props.setBuild}/>))}
    </div>
  )
}

export default SearchList