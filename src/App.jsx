import './styles/main.scss';
import Navigation from './components/Navbar';
import CardComponent from './components/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <CardComponent />
    </div>
  );
}

export default App;
