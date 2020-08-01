import React from 'react';

export const Search = props => {
  return (
    <div className='search-box'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(event) => props.setQuery(event.target.value)}
        value={props.query}
        onKeyPress={props.search}
      />
    </div>
  )
}