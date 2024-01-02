import React, { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import './App.css';
import pic from './comments.png'

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
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center' }}>Post</h1>
        {products.length &&
          products.map(function (item, index) {
            return (
              <div>
                <h1>{item.title}</h1>
                <h3>{item.brand}</h3>
                <br/>
                <p>{item.description}</p>

                {item.images && <FbImageLibrary images={item.images} />}
                <div style={{}}><img style={{width:'100vw'}} src={pic}/></div>
                <div style={{border :'solid 1px black', textAlign:"center",display:'flex',justifyContent:'space-around'}} >
                  <div>
                  <img style={{width :"25%",height:"55%",}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUjSN0nxSfH5bbLbba5lzGaq4t6wgXx5ALA&usqp=CAU'></img><p>Like</p>
                  </div>
                  <div>
                  <img style={{width :"25%",height:"55%",}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uOFm8Gqpi4N6pjZOUOiSSI0nNEC6NSWPKw&usqp=CAU'></img><p>Comment</p>
                  </div>
                  <div>
                  <img style={{width :"25%",height:"55%",}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXvuBh44EUYz1kzTUWYcqz-pxBwsVtfNlaQ&usqp=CAU'></img><p>Comment</p>
                  </div>
                </div>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
