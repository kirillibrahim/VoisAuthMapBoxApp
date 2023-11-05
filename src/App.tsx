
// App.tsx
import React from 'react';
import './App.css';
import RouterApp from "./RouterApp";
import MainLayout from "./layout/main"; // Rename your Layout component to MainLayout
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <MainLayout /> {/* Use MainLayout here */}
      </Router>
    </div>
  );
}

export default App;
