import NavBar from './components/Navbar/Navbar'
import ItenListContainer from './components/ItemListContainer/ItenListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
      <NavBar/>
      <ItenListContainer greeting="Hola un gusto en saludarte 🤗"/>
    </>
  )
}

export default App
