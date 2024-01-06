// App.js
import React, { useEffect, useState } from 'react';
import Posts from './view/Posts';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setProducts(res.products);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  return (
    <div className="App">
      <header className="App-header">

        
        <Posts products={products} />

      </header>
    </div>
  );
}

export default App;