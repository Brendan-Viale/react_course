import './App.css';
import { Header } from './components/Header';
import { Router } from './components/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
