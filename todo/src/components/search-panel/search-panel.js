import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  }
  return (
    <input type="text" 
    className="form-control search-input"
    // style={searchStyle} 
    // placeholder={searchText}
    placeholder='Type to search'
    />
  )
};

export default SearchPanel;