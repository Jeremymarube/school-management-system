import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import ClassList from './Pages/ClassList';
// import LandingPage from './Pages/LandingPage';
//  import LoginForm from './Pages/LoginForm';
import StudentList from './Pages/StudentList';
 import StudentForm from './Pages/StudentForm';
// import TeacherList from './Pages/TeacherList';
// import TeacherForm from './Pages/TeacherForm';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> 
         <Route path="/login" element={<LoginForm />} />
         <Route path="/Classes" element={<ClassList />} />  */}
         <Route path="/students" element={<StudentList />} /> 
         <Route path="/students" element={<StudentForm />} /> 
          {/* <Route path="/teachers" element={<TeacherList />} />
         <Route path="/teachers/new" element={<TeacherForm />} />   */}
      </Routes>
    </Router>
  );
}
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import StudentList from './Pages/StudentList';
// import StudentForm from './Pages/StudentForm';

// const App = () => {
//   return (
//     <Router>
      
//       <Navbar />
//       <Routes>
//         {/* Add placeholder routes for now */}
//         <Route path="/students" element={<div>Home Page</div>} />
//         <Route path="/students" element={<div>Students Page</div>} />
//         <Route path="/teachers" element={<div>Teachers Page</div>} />
//         <Route path="/classes" element={<div>Classes Page</div>} />
//         <Route path="/login" element={<div>Login Page</div>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;