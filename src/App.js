import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card1 />
      <Card2 />
    </div>
  );
}

export default App;
