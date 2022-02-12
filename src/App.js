import './App.css';
import Navbar from "./component/Navbar/Navbar";
import { Route , Routes , Navigate } from "react-router-dom";
import Main from "./component/Main/Main";

function App () {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Main/> }/>
            </Routes>

        </div>
    );
}

export default App;
