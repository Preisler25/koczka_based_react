//inporting css files
import './App.css';
import './components/core/button/style.Button.css'
import './components/core/navbar/style.Navbar.css'

//importing components
import Button from './components/core/button/Button';
import Navbar from './components/core/navbar/Navbar';

//main app
function App() {
  return (
    <div className="App">
      <Navbar />
      {Button({ children: 'Click me', onClick: () => alert('Hello'), className: 'btn' })}
    </div>
  );
}

export default App;
