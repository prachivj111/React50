import React, { useState, useEffect } from "react";
import './Pagination.css'

const URL = "https://jsonplaceholder.typicode.com/posts";

const Pagination = () => {
  const [res, setRes] = useState(URL);
  const[currentPage, setCurrentPage] = useState(1);

  const allPost = async() => {
    try{
        const res = await fetch(URL);
        const json = await res.json();
        console.log(json);
        setRes(json);
    }
    catch(e){
        console.log(e.message);
    }
  }

  useEffect(()=>{
    allPost();
  },[]);

  let itemsPerPage = 10;
  let totalPages = Math.ceil(res.length/itemsPerPage); // 25
  let start = (currentPage - 1) * itemsPerPage; // (1-1) * 4 = 0
  let end = start + itemsPerPage; // 0 + 4 = 4

  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(prev => prev-1);
    }
  }

  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage(prev=> prev+1);
    }
  }

  const handleButton = (id) => {
    setCurrentPage(id);

  }
 
  return (
    <div className="container">
        <h1>Pagination</h1>
        <div className="pagination-btn">
          <button onClick={handlePrev} disabled={currentPage==1}>Prev</button>
            {
              Array.from({length:totalPages}).map((_, index)=><button onClick={()=>handleButton(index+1)} className={currentPage == index+1 ? 'active' : ''} key={index+1}>{index+1}</button>)
            }
              <button onClick={handleNext} disabled={currentPage==totalPages}>Next</button>
          </div>
         
          <br />
        <div className="card-container">
            {
              Array.isArray(res) &&
              res.slice(start, end).map((item)=>{
                return(
                  <div key={item?.id} className="card">
                    <h3> <span>{item?.id}</span>{")"} {item?.title}</h3>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
};

export default Pagination;
