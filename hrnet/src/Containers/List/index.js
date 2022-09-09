import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import ReactDataTable from 'data-table-reactjs';
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken, selectToken } from '../Sessions/userSession'

/**
 * Code to show the employee list
 * @return  {React element}             Containers that shows the list of employees  
 */



function List() {

    const dispatch = useDispatch()
    const List = useSelector(selectToken);
    let employees = List;

      function Clear(){

      dispatch(clearToken());
}     

    if (employees == '') {
    } else {
    employees = JSON.parse(employees);
    }
    const columns = [
  {
    name: 'First Name',
    selector: 'column1',
  },
  {
    name: 'Last Name',
    selector: 'column2',
  },
  {
    name: 'Start Date',
    selector: 'column3',
  }, 
  {
    name: 'Department',
    selector: 'column4',
  }, 
  {
    name: 'Date Of Birth',
    selector: 'column5',
  }, 
  {
    name: 'Street',
    selector: 'column6',
  }, 
  {
    name: 'City',
    selector: 'column7',
  }, 
  {
    name: 'State',
    selector: 'column8',
  }, 
  {
    name: 'Zip Code',
    selector: 'column9',
  },
];


const list = new Array;

if (employees == null) {

list.push({
    column1: '',
    column2: '',
    column3: '',
    column4: '',
    column5: '',
    column6: '',
    column7: '',
    column8: '',
    column9: '',

  },)}  else {

for (var i = employees.length - 1; i >= 0; i--) {
   console.log(employees[i])
   let current = employees[i];

    list.push({
    column1: current.firstName,
    column2: current.lastName,
    column3: current.startDate,
    column4: current.department,
    column5: current.dateOfBirth,
    column6: current.street,
    column7: current.city,
    column8: current.state,
    column9: current.zipCode,

  },)
};

}


const MyComponent = () => (
  <ReactDataTable
    columns={columns}
    list={list}
  />
)

  return (
   <>

     <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <MyComponent/>
            <a href="/">Home</a> <a href="#" onClick={Clear}> Clear</a>
        </div>

   </>

  );
}

export default List;