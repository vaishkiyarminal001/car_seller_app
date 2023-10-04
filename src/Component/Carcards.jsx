import { useState, useEffect } from "react";
import "./Carapp.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const Carcards = ({pg:[page, setPage], card:[card, setCard]}) =>{


//     const [carState, setCar] = useState([]);
//     console.log(page);

//     const [currentPageData, setCurrentPageData] = useState([]);
//     const cardsPerPage = 6;



//     useEffect(() =>{
//         carDisplay();
//     },[page]);

//     useEffect(() =>{
//         paginateCarData();
//     },[carState, page]);

    
// // display car
//     const carDisplay = async() =>{
//         try{

//             const res = await fetch("http://localhost:8080/car");
//             if(!res.ok){
//                 throw new Error("Network response was not OK");

//             }
//             const data = await res.json();
//             console.log(data);
//             setCar(data);
//         }
//         catch(error){
//             console.log("Error fetching car data:", error);
//         }
      
//     }

// // paginate function

// const paginateCarData = () =>{
//     const startIndex = (page - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;
//     const pageData = carState.slice(startIndex, endIndex);
//     setCurrentPageData(pageData);
// }

    return(
        <div className="car-cards">
            
            {card.map((e) =>(

                <div key={e.image} className="carImage">
                    <img src={e.image} alt={e.name}/>
                    
                    
                    <div className="car-name">
                    <h2>{e.name}</h2>
                    <button>{e.date}</button>
                    </div>
                    

                    <div className="car-details">
                    <p>{e.people}</p>
                    <p>{e.type}</p>
                    <p>{e.speed}</p>
                    <p>{e.automatic}</p>
                    </div>

                    <div className="carPrice">
                        <h3>{e.price}<span>/month</span></h3>
                        <FavoriteBorderIcon/>
                        <button>Rent now</button>
                    </div>
                
                </div>

            ))}
            
        </div>
    );
}