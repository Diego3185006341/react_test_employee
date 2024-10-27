import './App.css';
import Employee from "./components/Employee";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
           <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Employee/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
