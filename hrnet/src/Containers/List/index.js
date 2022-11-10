import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import DataTable from 'react-data-table-component';
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken, selectToken } from '../Sessions/userSession'

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';

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

/*  fetches and formats the data form redux to the table*/

    if (employees == '') {
    } else {
    employees = JSON.parse(employees);
    }


const nodes = [
];

if (employees == '' || employees == null || employees == undefined)  {

nodes.push({
    key:'',
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',

  },)}  else {

for (var i = employees.length - 1; i >= 0; i--) {
   let current = employees[i];

    nodes.push({
    key : i ,
    firstName: current.firstName, 
    lastName: current.lastName,
    startDate: current.startDate,
    department: current.department,
    dateOfBirth: current.dateOfBirth,
    street: current.street,
    city: current.city,
    state: current.state,
    zipCode: current.zipCode,

  },)
};

}
let data = { nodes };

/*configuration for the table*/

  const theme = useTheme(getTheme());
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

    const sizes = [10, 25, 50, 100];

    const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        FIRSTNAME: (array) => array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
        LASTNAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
        STARTDATE: (array) => array.sort((a, b) => a.startDate.localeCompare(b.startDate)),
        DEPARTEMENT: (array) => array.sort((a, b) => a.department.localeCompare(b.department)),
        LASTNAME: (array) => array.sort((a, b) => a.dateOfBirth.localeCompare(b.dateOfBirth)),
        DATEOFBIRTH: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
        CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
        STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
        ZIPCODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
      },
    },
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }


const COLUMNS = [
  { label: 'First Name', renderCell: (item) => item.firstName , sort: { sortKey: 'FIRSTNAME' } },
  { label: 'Last Name', renderCell: (item) => item.lastName , sort: { sortKey: 'LASTNAME' } },
  { label: 'Start Date', renderCell: (item) => item.startDate  , sort: { sortKey: 'STARTDATE' } },
  { label: 'Department', renderCell: (item) => item.department , sort: { sortKey: 'DEPARTEMENT' }  },
  { label: 'Date Of Birth', renderCell: (item) => item.dateOfBirth , sort: { sortKey: 'LASTNAME' }   },
  { label: 'Street', renderCell: (item) => item.street  , sort: { sortKey: 'DATEOFBIRTH' }  },
  { label: 'City', renderCell: (item) => item.city , sort: { sortKey: 'CITY' }  },
  { label: 'State', renderCell: (item) => item.state , sort: { sortKey: 'STATE' }  },
  { label: 'ZipCode', renderCell: (item) => item.zipCode , sort: { sortKey: 'ZIPCODE' }  }
];


  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
     nodes: data.nodes.filter((item) =>  item.firstName.toLowerCase().includes(search.toLowerCase()) || item.lastName.toLowerCase().includes(search.toLowerCase())
      || item.startDate.toLowerCase().includes(search.toLowerCase()) || item.department.toLowerCase().includes(search.toLowerCase())
      || item.dateOfBirth.toLowerCase().includes(search.toLowerCase()) || item.state.toLowerCase().includes(search.toLowerCase())
      || item.street.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase())
      || item.zipCode.toLowerCase().includes(search.toLowerCase())),
  };


  return (
   <>

     <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div className="list-header">
                     <span> Show&nbsp; 
                    <select>
            Page Size:{' '}
            {sizes.map((size) => (
              <option
                key={size}
                type="option"
                style={{
                  fontWeight: pagination.state.size === size ? 'bold' : 'normal',
                }}
                onClick={() => pagination.fns.onSetSize(size)}
              >
                {size}
              </option>
            ))}
            <option
              type="option"
              style={{
                fontWeight: pagination.state.size === nodes.length ? 'bold' : 'normal',
              }}
              onClick={() => pagination.fns.onSetSize(nodes.length)}
            >
              All
            </option>
             </select>
              &nbsp;entries
          </span>



              <label htmlFor="search">
        Search by Name:&nbsp;
        <input id="search" type="text" value={search} onChange={handleSearch} />
      </label>
      </div>
      <br />
            
            <CompactTable columns={COLUMNS} data={data} theme={theme} pagination={pagination} sort={sort}  />
            <br />
                    <div className='list-browse' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            Showing {pagination.state.getPageBoundaries(data.nodes).start}
            {' to '}
            {pagination.state.getPageBoundaries(data.nodes).end}
            {' of '}
            {data.nodes.length}{' entries'}
            </span>
            <span>
            <button
              type="button"
              disabled={pagination.state.page === 0}
              onClick={() => pagination.fns.onSetPage(0)}
            >
              {'|<'}
            </button>
            <button
              type="button"
              disabled={pagination.state.page === 0}
              onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
            >
              {'<'}
            </button>
            <button
              type="button"
              disabled={pagination.state.page + 1 === pagination.state.getTotalPages(data.nodes)}
              onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
            >
              {'>'}
            </button>
            <button
              type="button"
              disabled={pagination.state.page + 1 === pagination.state.getTotalPages(data.nodes)}
              onClick={() =>
                pagination.fns.onSetPage(pagination.state.getTotalPages(data.nodes) - 1)
              }
            >
              {'>|'}
            </button>
          </span>
        </div>

      <br />


           <span> <a href="/">Home</a> - <a href="#" onClick={Clear}> Clear</a> </span>
         </div>

   </>

  );
}


export default List;