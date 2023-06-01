import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobsAvailable from "./pages/JobsAvailable";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
      </main>
      
    </div>
  </Router>
  );
}

export default App;
