import "./Paginitation.css";
import { useNavigate, useParams } from "react-router-dom";

export const Paginitation = ({pc: [pageCount, setPageCount], pg: [page, setPage] }) => {
  const totalPage = 10;
  const pageNumber = Array.from({length: totalPage}, (_, index) => index + 1);
  
  // const { pageButton } = useParams(); 
  // const currentPage = parseInt(pageButton) || 1;

  // const navigate = useNavigate();

  const navigateToPage = (pageNumber) => {
   console.log(`Navigate to page ${pageNumber}`);
   setPage(pageNumber);
  };

  // const pageNumberArray = Array.from({ length: totalPage }, (_, index) => index + 1);


  // const handlePrevious = () =>{
  //   const newPage = (currentPage - 1);
  //   setPage(newPage);
  //   navigateToPage(newPage);
  // }


  // const handleNext = () =>{
  //   const newPage = (currentPage + 1);
  //   setPage(newPage);
  //   navigateToPage(newPage);

  // }


  return (
    <div className="paginitation">
       {page > 1 && (
        <button
          className="page-button"
          onClick={() => navigateToPage(page - 1)}
        >
          Previous
        </button>
      )}

      {pageNumber.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`page-number ${pageNumber === page ? "active" : ""}`}

          onClick={() => navigateToPage(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}

      {page < totalPage && (
        <button
          className="page-button"
          onClick={() => navigateToPage(page + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};
