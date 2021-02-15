import logo from './2029413.svg';
import './App.css';
import './style/style.css'
import {BrowserRouter} from 'react-router-dom';
import MainLayout from './container/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <MainLayout />
    </BrowserRouter>
  );
}

export default App;
