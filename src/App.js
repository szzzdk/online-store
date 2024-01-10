import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import TopNav from './components/TopNav/TopNav'
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"
import MultiPage from "./pages/MultiPage"
import OnlineStore from "./pages/OnlineStore"
import Portfolio from "./pages/Portfolio"
import './index.css'
import './App.css'
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
      <Row justify="center">
        <Col span={14} className="main__container">
          <TopNav />  
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/landing' element={<LandingPage />}/>
            <Route path='/multipage' element={<MultiPage />}/>
            <Route path='/onlinestore' element={<OnlineStore />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </Col>
      </Row>
  );
}

export default App;
