import { useState, useEffect } from "react";
import "./Carapp.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const Carcards = () =>{


    const [carState, setCar] = useState([]);
    console.log(carState);



    useEffect(() =>{
        carDisplay();
    },[]);

    const carDisplay = async() =>{
        try{

            const res = await fetch("http://localhost:8080/car");
            if(!res){
                throw new Error("Network response was not OK");

            }
            const data = await res.json();
            console.log(data);
            setCar(data);
        }
        catch(error){
            console.log("Error fetching car data:", error);
        }
      

        
        
    }





    return(
        <div className="car-cards">
            
            {carState.map((e) =>(

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