import React, { useState, useEffect } from "react";
import "./Pagination.css";

const PaginationServer = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setToalPages] = useState(0);
  const itemsPerPage = 10;

  const getAllPost = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`,
      );
      const json = await res.json();
      setPost(json);

      const totalCount = res.headers.get("x-total-count"); //
      const totalPages = Math.ceil(totalCount / itemsPerPage);
      setToalPages(totalPages);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAllPost();
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <h1>Pagination</h1>

      <div className="pagination-btn">
        <button onClick={handlePrev}>Prev</button>
        {Array.from({ length: totalPages }).map((_, index) => {
          return <button key={index}>{index}</button>;
        })}
        <button onClick={handleNext}>Next</button>
      </div>
      
      <br />


      <div className="card-container">
        {post.map((item) => {
          return (
            <div key={item?.id} className="card">
              {item?.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationServer;
