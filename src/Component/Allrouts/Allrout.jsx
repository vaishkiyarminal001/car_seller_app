import {Routes, Route} from "react-router-dom";
import Home from "../Page/Home";

export const Allrout = () =>{

    return(
        
        <Routes>
            
            <Route path="/" element={<Home/>}>
            <Route path="/page/:page" element={<Home/>}/>
                
            </Route>
        </Routes>
    )
}