import './App.css';
import Table from './Components/Table';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => {
        console.log({ res });
        return JSON.parse(res);
      })
      .then(dat => setData(dat))
      .catch(err => console.log(err.message));
  }, [])


  return (
    <div className="App">
      <Table {...data} />
    </div>
  );
}

export default App;
