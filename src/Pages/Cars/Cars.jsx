import React, { useEffect, useState } from 'react'
import Item from '../../Components/Item/Item';
import "./Cars.css";
import firebaseService from '../../Services/firebaseService';
import Pagination from '../../Components/Pagination/Pagination';

function Cars() {

  const[rows,setRows]=useState([]);
  const[brandNames,setBrandNames]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage,setPostsPerPage]=useState(6);
  const[productData,setData]=useState([]);
  const[sortOption, setSortOption] = useState('');
  const[brandOption,setBrandOption]=useState('');

  const lastPostIndex=currentPage*postsPerPage;
  const firstPostIndex=lastPostIndex-postsPerPage;

  const fetchData = async () => {
    try {
      setBrandNames(await firebaseService.getAllBrands());
      const models = await firebaseService.getAllModels();
      const brands=await firebaseService.getAllBrands();
      const brandsMap = {};
      brands.forEach((make) => {
        brandsMap[make.id] = make;
      });
      const updatedRows = models.map((model) => ({
        ...model,
        MakeId: brandsMap[model.MakeId]?.Brand,
      }));

      setRows(updatedRows);
      setData(rows.slice(firstPostIndex,lastPostIndex));

    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const sortData = (data) => {
    if (sortOption === 'nameAsc') {
      const sortedByName = data.slice().sort((a, b) => a.MakeId.localeCompare(b.MakeId));
      setData(sortedByName);
    }else if(sortOption === 'nameDes'){
      const sortedByName = data.slice().sort((a, b) => b.MakeId.localeCompare(a.MakeId));
      setData(sortedByName);
    }else if (sortOption === 'priceLow') {
      const sortedByPrice = data.slice().sort((a, b) => a.Price - b.Price);
      setData(sortedByPrice);
    }else if (sortOption === 'priceHigh') {
      const sortedByPrice = data.slice().sort((a, b) => b.Price-a.Price);
      setData(sortedByPrice);
    }else{
      setData(data);
    }
  };
  
  const filterData = (data) => {
    const filteredRows = brandOption ? data.filter((row) => row.MakeId === brandOption): data;
    setData(filteredRows)
  }

  useEffect(() => {
     fetchData();  
     filterData(productData);
     sortData(productData);
  }, [rows]);


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const handleFilterChange =(event)=>{
    setBrandOption(event.target.value);

  }

  return (
    <div>
      <div className="options">
         <div>
            <label>Filter by: </label>
            <select value={brandOption} onChange={handleFilterChange}>
              <option value=""> Select Brand </option>
              {brandNames.map((brand) => (
                <option key={brand.id} value={brand.Brand}>
                  {brand.Brand}
                </option>
              ))}
            </select>
         </div>
         <div>
            <label>Sort by: </label>
            <select value={sortOption} onChange={handleSortChange}>
              <option>Select</option>
              <option value="nameAsc">Name: asc</option>
              <option value="nameDes">Name: des</option>
              <option value="priceLow">Price: low to high</option>
              <option value="priceHigh">Price: high to low</option>
            </select>
         </div>
      </div>
      <div className="cars" >
        <div className="items">
            {productData.map((row,index)=>{
              return(
                <Item
                  key={index}
                  makeId={row.MakeId}
                  name={row.Name}
                  price={row.Price}
                />
              );
            })}
        </div>
      </div>
         <Pagination 
              totalPosts={rows.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage} />
    </div>
  )
}

export default Cars;