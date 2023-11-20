import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import AppRouter from './AppRouter.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
