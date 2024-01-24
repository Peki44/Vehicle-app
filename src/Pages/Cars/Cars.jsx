import React, { useEffect, useState } from 'react'
import Item from '../../Components/Item/Item';
import "./Cars.css";
import Pagination from '../../Components/Pagination/Pagination';
import brandsService from '../../Services/brandsService';
import modelsService from '../../Services/modelsService';

function Cars() {

  const[brandNames,setBrandNames]=useState([]);
  const[totalPosts, setTotalPosts] = useState(0);
  const[currentPage,setCurrentPage]=useState(1);
  const[productData,setProductData]=useState([]);
  const[sortOption, setSortOption] = useState('');
  const[brandOption,setBrandOption]=useState('');

  const postsPerPage=6;

  const fetchData = async () => {
    try {
      setBrandNames(await brandsService.getAllBrands());
      const models = await modelsService.getPaginatedModels(currentPage, postsPerPage,sortOption,brandOption);
      const totalCount = await modelsService.getModelsCount();
      const brands=await brandsService.getAllBrands();
      const brandsMap = {};
      brands.forEach((make) => {
        brandsMap[make.id] = make;
      });
      const updatedRows = models.map((model) => ({
        ...model,
        MakeId: brandsMap[model.MakeId]?.Brand,
      }));

      setProductData(updatedRows);
      setTotalPosts(totalCount);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  useEffect(() => {
     fetchData();  

  }, [currentPage,sortOption,brandOption]);


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  }
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
                <option key={brand.id} value={brand.id}>
                  {brand.Brand}
                </option>
              ))}
            </select>
         </div>
         <div>
            <label>Sort by: </label>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="select">Select</option>
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
              totalPosts={totalPosts}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage} />
    </div>
  )
}

export default Cars;