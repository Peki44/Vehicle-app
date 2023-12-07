import "./BrandTable.css";
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import firebaseService from "../../../Services/firebaseService";

function BrandTable() {

    const[rows,setRows]=useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const brands = await firebaseService.getAllBrands();
          setRows(brands);
        } catch (error) {
          console.error('Error fetching brands:', error);
        }
      };
  
      fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
          field: 'Brand',
          headerName: 'Brand',
          width: 150,
          editable: true,
        },
        {
          field: 'Abrv',
          headerName: 'Abrv',
          width: 150,
          editable: true,
        },
        { field: 'actions', headerName: 'Actions', width: 100,
        renderCell:(params)=>{
            return <div className="action">
                <div className="edit"><FaRegEdit /></div>
                <div className="delete"><IoTrashBinSharp /></div>
            </div>
        }
    },
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
    disableRowSelectionOnClick
  />
  </Box>
  )
}

export default BrandTable;