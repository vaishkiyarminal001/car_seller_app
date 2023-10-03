
import './App.css';
import { Carcards } from './Component/Carcards';
import { Paginitation } from './Component/Paginitation';
import { Searchbar } from './Component/Searchbar';

function App() {
  return (
    <div className="App">

      <Searchbar/>
      <Carcards/>
      <Paginitation/>
    </div>
  );
}

export default App;
