import './App.css';
import AutoPlay from './Components/AutoPlay';
import PaginationSlide from './Components/PaginationSlide';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Slider/>
      <h1 className='hmmm'>Pegination Slide</h1>
      <PaginationSlide/>
      <h1 className='hmmm'>AutoPlay Slide</h1>
      <AutoPlay/>
    </div>
  );
}

export default App;
