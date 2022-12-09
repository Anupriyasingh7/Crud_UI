// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Setting from './components/Setting';
import Result from './components/Result';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from './components/Adduser';
// import Links from './components/Links';
// import Muitable from './components/Muitable';
// import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* <Navbar/>
      <BrowserRouter>
      <Container/>
      <Routes>
        <Route  path="/" element={<Dashboard/>}/>
          <Route exact path="/result" element={<Result/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path='/adduser' element={<Adduser/>} />
      </Routes>
    </BrowserRouter> */}


<BrowserRouter>
<Navbar/>
<Container/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
          <Route path='result' element={<Result />} />
          <Route path='setting' element={<Setting />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
