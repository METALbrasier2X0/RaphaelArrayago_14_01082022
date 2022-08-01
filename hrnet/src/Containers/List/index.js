import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

/**
 * Code to show the employee list
 * @return  {React element}             Containers that shows the list of employees  
 */

 function getEmployee() {
    const employees = JSON.parse(localStorage.getItem('employees'));

    document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#employee-table');
    });

      table.DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
 }

function List() {

    getEmployee()

  return (
   <>

     <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <a href="/">Home</a>
        </div>

   </>

  );
}

export default List;