import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import Modal from 'modal-react-raphael' 
import Open from 'modal-react-raphael/dist/Open.js' 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from "./Dropdown"

import { storeToken, clearToken,  selectToken  } from './Sessions/userSession'

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */


function Home() {
const dispatch = useDispatch()
let employees = useSelector(selectToken);
    
    /*function to parse and send the employee data to redux*/

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

    if (firstName.value == "") { firstName.value =("N/A") };
    if (lastName.value == "") { lastName.value =("N/A") };
    if (department.value == "") { firstName.value =("N/A") };
    if (street.value == "") { lastName.value =("N/A") };
    if (city.value == "") { firstName.value =("N/A") };
    if (state.value == "") { lastName.value =("N/A") };
    if (zipCode.value == "") { firstName.value =("N/A") };

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



    if (employees == '' || employees == null || employees == undefined) {
        employees = [employee]
    } else {
    employees = JSON.parse(employees || []);
    employees.push(employee);
    }
    
     Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
    );

    dispatch(storeToken(JSON.stringify(employees)));
    Open()
}




const [startDate, setStartDate] = useState(new Date());
const [birthDate, setBirthDate] = useState(new Date());

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
                <DatePicker id="date-of-birth" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" selected={birthDate} onChange={(date:Date) => setBirthDate(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" selected={startDate}  onChange={(date:Date) => setStartDate(date)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street"></input>

                    <label htmlFor="city">City</label>
                    <input id="city"></input>
                    <Dropdown> </Dropdown>

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
        <Modal Content={[<p> Employee Created! </p>]} showClose={true} outsideClose={false}/>

   </>

  );
}

export default Home;