import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import DataTable from 'react-data-table-component';
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
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'column2',
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: 'column3',
    sortable: true,
  }, 
  {
    name: 'Department',
    selector: 'column4',
    sortable: true,
  }, 
  {
    name: 'Date Of Birth',
    selector: 'column5',
    sortable: true,
  }, 
  {
    name: 'Street',
    selector: 'column6',
    sortable: true,
  }, 
  {
    name: 'City',
    selector: 'column7',
    sortable: true,
  }, 
  {
    name: 'State',
    selector: 'column8',
    sortable: true,
  }, 
  {
    name: 'Zip Code',
    selector: 'column9',
    sortable: true,
  },
];


const list = new Array;

if (employees == '' || employees == null || employees == undefined)  {

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
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    
  </>
);

const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = list.filter(
    item => item.column1 && item.column1.toLowerCase() && item.column2 && item.column2.toLowerCase() .includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
   <>

     <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable


      title="Contact List"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead

            />
            <a href="/">Home</a> <a href="#" onClick={Clear}> Clear</a>
        </div>

   </>

  );
}

export default List;