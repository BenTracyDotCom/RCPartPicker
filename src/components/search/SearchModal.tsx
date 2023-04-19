import React from 'react';
import SearchResult from './SearchResult.js'

const Search = (props: Object) => {

  return (
    <div>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="search-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search