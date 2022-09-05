import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken } from './Sessions/userSession'

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */


function Home() {
const dispatch = useDispatch()
 
 function Closemodal() {

   const zipCode = document.getElementById('confirmation');

   zipCode.style.display = 'none';


}

function modal() {

   const zipCode = document.getElementById('confirmation');

   zipCode.style.display = 'block';
}


 function SaveEmployee(){
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');


    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        startDate: startDate.value,
        department: department.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value
    };

    employees.push(employee);
    dispatch(storeToken(JSON.stringify(employees)));
    localStorage.setItem('employees', JSON.stringify(employees));
    modal()
}

  return (
   <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        
           <div className="container">
            <a href="/list">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name"></input>


                <label htmlFor="last-name">Last Name</label>
                <input id="last-name"></input>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth"></input>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date"></input>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street"></input>

                    <label htmlFor="city">City</label>
                    <input id="city"></input>

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"> </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code"></input>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button onClick={SaveEmployee}>Save</button>
        </div>
        <div id="confirmation" className="modal">
         <div className="modal-content">
    <span className="close" onClick={Closemodal} id="close">&times;</span>
    <p>Employee Created!</p>
  </div>
  </div>

   </>

  );
}


export default Home;