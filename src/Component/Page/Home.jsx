import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Carapp.css";
import "./Searchbar.css";
import "./Paginitation.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';


export default function Home() {

    const [carState, setCar] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    // console.log(search);
    const [totalElement, setTotalElement] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        carDisplay();  
        countLength(); 
    },[page, search]);


    let limit = 6
    
    
    // display card
    const carDisplay = async() =>{


        let res = await axios.get(`http://localhost:8080/car?q=${search}&_page=${page}&_limit=${limit}`);
        setCar(res.data);
        // console.log(res.data);
        
    }


    // function for display pagination or count

    const countLength = async () =>{
        let res = await fetch("http://localhost:8080/car");
        let data = await res.json();
        setTotalElement(data.length);
        // console.log(data.length);
    }


    let totalPage = 0;
    

    if(totalElement > 0){
        totalPage = Math.ceil(totalElement/limit);
        
    }else {
        totalPage = 1;
    }

    // console.log(totalPage);

    const arr = new Array(totalPage).fill(0);

    // function for navigate

const handlePrevious = () =>{
    setPage(page - 1)
    navigate(`/page/${page-1}`)
    
}

const handleNext = () =>{
    setPage(page + 1)
    navigate(`/page/${page+1}`)
    
}


const hadleTabulation = (i) =>{
    setPage(i+1)
    navigate(`/page/${i+1}`)
}


  return (
    <div>

<div className="search-bar">
        <input onChange={(e) =>{setSearch(e.target.value)}} type="text" placeholder="Search by name"/>

        <div className="categories">

            <select >
                 <option>Relevence</option>
            </select>


           <select >
                 <option>All Brand</option>
            </select>


            </div>
        </div>


            <div className="car-cards">
            {carState.map((e) =>(

                <div key={e.id} className="carImage">
                    <img src={e.image} alt={e.name}/>
                    
                    
                    <div className="car-name">
                    <h2>{e.name}</h2>
                    <button>{e.date}</button>
                    </div>
                    

                    <div className="car-details">
                    <p><PeopleAltIcon className="icon"/>{e.people}</p>
                    <p><LocalGasStationIcon className="icon" />{e.type}</p>
                    <p><SpeedIcon className="icon"/>{e.speed}</p>
                    <p><MotionPhotosAutoIcon className="icon"/> {e.automatic}</p>
                    </div>

                    <div className="carPrice">
                        <h3>{e.price}<span>/month</span></h3>
                        <FavoriteBorderIcon className="heart"/>
                        <button>Rent now</button>
                    </div>
                
                </div>

            ))}

</div>

     {/* paginitation  */}


<div className="paginitation">

             <button className="page-button" 
                onClick={handlePrevious} 
            disabled={page === 1}>Pervious</button>

    {
        arr.map((e,i) =>{
            return(
                <button className="page-button" 
                onClick={()=>{hadleTabulation(i)}} 
                disabled={page === i+1} 
                style={{border: page === i+1 ? "2px solid rgb(74, 179, 254)" : "none"}}>{i+1}</button>
            )
        })
    }
    <button className="page-button" 
    onClick={handleNext}  
    disabled={page === totalPage}>Next</button>

</div>
            
            


            
        </div>
  )
}
