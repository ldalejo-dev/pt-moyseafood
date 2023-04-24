import UsersTable from './components/UsersTable';
import UserEdit from './components/UserEdit';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersTable/>} ></Route>
        <Route path='/edit/:id' element={<UserEdit></UserEdit>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;