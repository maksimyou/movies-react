import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;




//const options = {
//  method: 'GET',
//  headers: {
//    'X-RapidAPI-Key': 'cebc5e6215msh5714368ffe50215p18d917jsn3cfd2e0b4b0c',
//    'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
//  }
//};

//fetch('https://www.omdbapi.com/?apikey=e060b931&s=Harry%20Potter', options)
//  .then(response => response.json())
//  .then(response => console.log(response))
//  .catch(err => console.error(err));




{/*https://www.omdbapi.com/?apikey=e060b931&s=Harry%20Potter   строка для поиска по названию фильма   https://www.omdbapi.com/?apikey=e060b931&s=Arrow*/ }

{/*https://www.omdbapi.com/?i=tt0111142&apikey=e060b931&plot=full   если менять название параметра i подгружаются разные фильмы */ }

//https://www.omdbapi.com/?apikey=e060b931&type={params}&s={title}

