import "./Paginitation.css";

export const Paginitation = () =>{

    const totalPage = 10;
    const currentPage = 2;

    const pageNumber = Array.from({length: totalPage}, (_, index) => index + 1);
    return(
        <div className="paginitation">
            {currentPage > 1 && (
                
                <button className="page-button" onClick={() => navigateToPage(currentPage -1)}>
                    Previous
                </button>
            )}
            
            {pageNumber.map((pageNumber) =>(
                <span
                key={pageNumber}
                className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
                onClick={() => navigateToPage(pageNumber)}
              >
                {pageNumber}
              </span>


            ))}

{currentPage < totalPage && (
        <button className="page-button" onClick={() => navigateToPage(currentPage + 1)}>
          Next
        </button>
)}
        </div>
    );

    function navigateToPage(pageNumber) {
       
        console.log(`Navigating to page ${pageNumber}`);
      }
};