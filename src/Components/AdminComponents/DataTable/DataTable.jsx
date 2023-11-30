import "./DataTable.css";
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { Box } from "@mui/material";

function DataTable() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'avatar', headerName: 'Avatar', width: 100,
            renderCell:(params)=>{
                return <img className="avatar" src={params.row.img || null} alt=""/>
            }
        },
        {
          field: 'productName',
          headerName: 'Product name',
          width: 150,
          editable: true,
        },
        {
          field: 'productPrice',
          headerName: 'Product price',
          width: 150,
          editable: true,
        },
        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 110,
        //   editable: true,
        // },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
        { field: 'actions', headerName: 'Actions', width: 100,
            renderCell:(params)=>{
                return <div className="action">
                    <div className="edit"><FaRegEdit /></div>
                    <div className="delete"><IoTrashBinSharp /></div>
                </div>
            }
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

  return (
    <Box sx={{ height: 420, width: '50%' }}>
    <DataGrid
    className="dataGrid"
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 5,
        },
      },
    }}
    pageSizeOptions={[5]}
    checkboxSelection
    disableRowSelectionOnClick
  />
  </Box>
  )
}

export default DataTable;