import "./DataTable.css";
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import brandsService from '../../../Services/brandsService';
import modelsService from '../../../Services/modelsService';

function DataTable() {

    const[rows,setRows]=useState([]);
    const navigate=useNavigate();

    const fetchData = async () => {
      try {
        const models = await modelsService.getAllModels();
        //console.log("this is", models)
        const brands = await brandsService.getAllBrands();
        const brandsMap = {};
        brands.forEach((make) => {
          brandsMap[make.id] = make;
        });
        const updatedRows = models.map((model) => ({
          ...model,
          MakeId: brandsMap[model.MakeId]?.Brand,
        }));

        setRows(updatedRows);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
    
    const handleEdit = async (model) => {
      navigate(`/editModels/${encodeURIComponent(JSON.stringify(model))}`)
    };

    const handleDelete = async (id) => {
      try {
        await modelsService.deleteModels(id);
        fetchData();
        console.log('Product successfully deleted!');
        toast.success("Product successfully deleted!")
      } catch (error) {
        console.error('Error deleting product: ', error);
      }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        // { field: 'avatar', headerName: 'Avatar', width: 100,
        //     renderCell:(params)=>{
        //         return <img className="avatar" src={params.row.img || null} alt=""/>
        //     }
        // },
        {
          field: 'MakeId',
          headerName: 'MakeId',
          width: 150,
          editable: true,
        },
        {
          field: 'Name',
          headerName: 'Product name',
          width: 150,
          editable: true,
        },
        {
          field: 'Price',
          headerName: 'Product price',
          width: 150,
          editable: true,
        }, 
        { field: 'actions', headerName: 'Actions', width: 100,
            renderCell:(params)=>{
                return <div className="action">
                    <div className="edit"><Link to={`/editModels/${encodeURIComponent(JSON.stringify(params.row))}`}><FaRegEdit onClick={() => handleEdit(params.row)}/></Link></div>
                    <div className="delete"><IoTrashBinSharp onClick={()=>handleDelete(params.row.id)} /></div>
                </div>
            }
        },
      ];
      
  return (
    <Box sx={{ height: 420, width: '50%' }}>
      <h2 className="titleProducts">Products</h2>
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

export default DataTable;