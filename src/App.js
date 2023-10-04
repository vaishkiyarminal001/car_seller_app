
import './App.css';
import { useEffect, useState } from 'react';

import { Carcards } from './Component/Carcards';
import { Paginitation } from './Component/Paginitation';
import { Searchbar } from './Component/Searchbar';


function App() {

  const [page, setPage] = useState(1);
  const [card, setCard] = useState([]);
  const [paginated, setPaginated] = useState([]);
  const [pageCount, setPageCount] = useState(0);



  useState(() =>{
    fetch(`http://localhost:8080/car`)
    .then((res) => res.json())
    .then((res) =>{
      console.log(res);
      setCard(res);

      const startIndex = (page - 1) * 6;
      const endIndex = startIndex + 6;
      setPaginated(res.slice(startIndex,endIndex));
      setPageCount(Math.floor(res.length/3));
    })

  },[card, setCard]);


  useEffect(() =>{

    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    setPaginated(card.slice(startIndex,endIndex));
    console.log(page+ "triggerd");

  }, [page, setPage]);



  return (
    <div className="App">

      <Searchbar/>
      <Carcards pg={[page, setPage]} card={[paginated, setPaginated]}/>
      <Paginitation pg={[page, setPage]} pc={[pageCount, setPageCount]}/>
    </div>
  );
}

export default App;
