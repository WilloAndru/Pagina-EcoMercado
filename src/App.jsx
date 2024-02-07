import './App.css'
import Header from './components/Header';
import SeccionBuscador from './components/SeccionBuscador';
import SeccionCategorias from './components/SeccionCategorias';
import SeccionPopular from './components/SeccionPopular';
import SeccionAvisos from './components/SeccionAvisos';
import SeccionLinks from './components/SeccionLinks';
import SeccionTerminos from './components/SeccionTerminos';
import Footer from './components/Footer';
import Titulo from './components/Titulo';

function App() {
  return (
    <body>
        <Header/>
        <main>
            <h1 id='titulo1'>Compra y vende artículos sostenibles en EcoMercado, una comunidad comprometida con el medio ambiente</h1>
            <SeccionBuscador/>
            <Titulo content="Categorias"/>
            <SeccionCategorias/>
            <Titulo content="Lo mas popular"/>
            <SeccionPopular/>
            <SeccionAvisos/>
            <SeccionLinks/>
            <SeccionTerminos/>
        </main>
        <Footer/>
     </body>
  );
}

export default App
