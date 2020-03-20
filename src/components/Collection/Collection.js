
import React from 'react'
import './Collection.css'
import EmployeeCard from '../../components/EmployeeCard'
const Collection = (props) => {
  return (
    <div>
      {props.employeeDisplay.map(employee => ( 
        <EmployeeCard key={employee.id} employee={employee}/>
      ))
      }
    </div>
  )
}

export default Collection
