import React from 'react';

const Pagination = ({ totalArticles, pageSize, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalArticles / pageSize);

  return (
    <div id="pagination" className="d-flex justify-content-center mt-4">
      {pageCount > 0 ? Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          className={`btn btn-sm ${i === currentPage ? 'btn-dark' : 'btn-outline-danger'} mx-1`}
          onClick={() => setCurrentPage(i)}
        >
          {i + 1}
        </button>
      )) : null}
    </div>
  );
};

export default Pagination;
