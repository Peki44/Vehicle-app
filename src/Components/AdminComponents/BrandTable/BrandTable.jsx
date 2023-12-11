import "./BrandTable.css";
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import firebaseService from "../../../Services/firebaseService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BrandTable() {

    const[rows,setRows]=useState([]);
    const navigate=useNavigate();

    const fetchData = async () => {
      try {
        const brands = await firebaseService.getAllBrands();
        setRows(brands);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleEdit = async (brand) => {
        navigate(`/editBrands/${encodeURIComponent(JSON.stringify(brand))}`);
    };

    const handleDelete = async (id) => {
      try {
        await firebaseService.deleteBrands(id);
        fetchData();
        console.log('Brand successfully deleted!');
        toast.success("Brand successfully deleted!")
      } catch (error) {
        console.error('Error deleting brand: ', error);
        toast.error("Error deleting brand")
      }
    };

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
                <div className="edit"><Link to={`/editBrands/${encodeURIComponent(JSON.stringify(params.row))}`}><FaRegEdit onClick={() => handleEdit(params.row)}/></Link></div>
                <div className="delete"><IoTrashBinSharp onClick={()=>handleDelete(params.row.id)}/></div>
            </div>
        }
    },
      ];

  return (
    <Box sx={{ height: 420, width: '40%' }}>
    <h2 className="titleBrand">Brands</h2>
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