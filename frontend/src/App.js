import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListStudentsComponent from './components/ListStudentsComponent';
import AddStudentComponent from './components/AddStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <HeaderContainer/>
        <div className='container'>
          <Routes>
            <Route path="/" exact element={<LoginContainer />} />
            <Route path="/students-list" element={ <ProtectedRoute Component={ListStudentsComponent} />} />
            <Route path="/add-student" element={ <ProtectedRoute Component={AddStudentComponent} /> } />
            <Route path="/add-student/:id" element={<AddStudentComponent />} />
            <Route path="/view-student/:id" element={<ViewStudentComponent />} />
            <Route path="/signup" element={ <SignupContainer /> } />
            <Route path="/login" element={ <LoginContainer /> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
