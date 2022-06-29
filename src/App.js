import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewStudent from './Pages/Students/ViewStudent';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import AddStudents from './Pages/Students/AddStudents';
import EditStudent from './Pages/Students/EditStudent';
import Privateroute from './Components/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Privateroute />}>
          <Route path="" element={<ViewStudent />} />
          <Route path="view-student" element={<ViewStudent />} />
          <Route path="add-student" element={<AddStudents />} />
          <Route path=":id" element={<EditStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;