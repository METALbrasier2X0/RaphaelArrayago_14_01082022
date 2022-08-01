import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

import saveEmployee from "./functions/saveEmployee";
/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */


function Home() {

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

            <button onClick={saveEmployee}>Save</button>
        </div>
        <div id="confirmation" className="modal">Employee Created!</div>

   </>

  );
}



export default Home;