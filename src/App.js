import './App.css';
import { HomePage } from './components/HomePage';
import { UserListPage } from './components/UserListPage';
import { CreateUserPage } from './components/CreateUserPage';
import { UserEditPage } from './components/EditUserPage';


import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users' element={<UserListPage/>}/>
        <Route path='/user/:id' element={<UserEditPage/>}/>
        <Route path='/user/create' element={<CreateUserPage/>}/> 
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;







