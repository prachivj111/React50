import React, { useState, useEffect } from "react";
import './Pagination.css'

const URL = "https://jsonplaceholder.typicode.com/posts";

const Pagination = () => {
  const [res, setRes] = useState(URL);

  const allPost = async() => {
    try{
        const res = await fetch(URL);
        const json = await res.json();
        console.log(json);
       // setRes(json);
    }
    catch(e){
        console.log(e.message);
    }
  }

  useEffect(()=>{
    allPost();
  },[]);

  return (
    <div className="container">
        <h1>Pagination</h1>
        <div className="card-container">
            {
              
            }
        </div>
    </div>
  )
};

export default Pagination;
