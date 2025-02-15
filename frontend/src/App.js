import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';




const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App