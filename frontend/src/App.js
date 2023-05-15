import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobsAvailable from "./pages/JobsAvailable";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <Router>
     <div className="flex flex-col h-screen">

      <Navbar />
      <main className='container mx-auto px-3'>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/jobs-available" element={<JobsAvailable/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
      </main>
      
    </div>
  </Router>
  );
}

export default App;
