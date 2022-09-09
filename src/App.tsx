import React from 'react';
import Header from "./components/Header/Header";
import './index.css'
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="page">
        <Header />
        <Search />
    </div>
  );
}

export default App;
