
import React from 'react'
import './Collection.css'
import EmployeeCard from '../../components/EmployeeCard'
const Collection = (props) => {
  return (
    <div className="card-deck">
      {props.employeeDisplay.map(employee => ( 
        <EmployeeCard employee={employee}/>
      ))
      }
    </div>
  )
}

export default Collection
