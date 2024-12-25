import "./App.css";
import RouterView from "./router";

function App() {
  return <RouterView />;
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/layout';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/users" element={<Users />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;