import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Employee Lookup</a>
      <form className="form-inline">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="SearchBy">Search By</label>
          </div>
          <select className="custom-select" id="SearchBy" onChange={props.handleInputChangeSearchBy}>
            <option defaultValue>Choose...</option>
            <option value="1">Department</option>
            <option value="2">Title</option>
            <option value="3">Employee Last Name</option>
            <option value="4">Employee First Name</option>
          </select>        
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          name="search"
          value={props.searchValue}
          onChange={props.handleInputChangeSearch} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => props.handleKey(props.keyItem)}>Search</button>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="OrderBy">Order By</label>
          </div>
          <select className="custom-select" id="OrderBy" onChange={props.handleInputChangeOrderBy}>
            <option defaultValue>Choose...</option>
            <option value="1">Department</option>
            <option value="2">Title</option>
            <option value="3">Employee Last Name</option>
            <option value="4">Employee First Name</option>
          </select>
        </div>
      </form>
    </nav>
  )
}

export default Navbar
