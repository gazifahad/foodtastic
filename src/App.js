import './App.css';
import MyShop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1>Greetings from <span style={{"color":"rgb(0,0,255)"}}>Food-tastic</span> Shop</h1>
      <MyShop></MyShop>
    </div>
  );
}

export default App;
