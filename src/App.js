import Navbar from "./components/Navbar/Navbar";
import './App.css'
import {action,originals,romance,horror,comedy} from './constants/urls'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url={originals} title='Netflix originals' />
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={romance} title='Romance' isSmall/>
     <RowPost url={horror} title='Horror' />
     <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
 