import "./Searchbar.css";
import SearchIcon from '@mui/icons-material/Search';


export const Searchbar = () =>{
    return (
        <div className="search-bar">
            
            <input type="text" placeholder="Search" />
            {/* <SearchIcon className="search-icon" /> */}
            
            <div className="categories">

            <select >
                 <option>Relevence</option>
            </select>


           <select >
                 <option>All Brand</option>
            </select>


            </div>
        </div>
    );
}