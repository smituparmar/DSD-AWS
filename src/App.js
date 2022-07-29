import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
       <Container>
          <Routes>
              <Route path="/" element={<HomeScreen/>} exact/>
            </Routes>       
        </Container> 

      </main>
    </Router>
  );
}

export default App;
