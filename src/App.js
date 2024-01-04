
import React, { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import './App.css';
import pic from './comments.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


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
function handleLikeClick(e) {
    e.target.classList = (e.target.classList[0] === 'blue' ? '' : 'blue');
}

  return (
    <div className="App">
      <header className="App-header">
        <div className='body' >
        <h1 style={{ textAlign: 'center' }}>Post</h1>
        {products.length &&
          products.map(function (item, index) {
            return (
              <div style={{marginTop:'40px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding:'10px',borderRadius:25,background:'white'}}>
                
                <h1><span><img className='profile' style={{width:'20%',marginLeft:'-5%'}} src='https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png'/></span>{item.title}</h1>
                <h3>{item.brand}</h3>
                <br/>
                <p>{item.description}</p>
<div style={{background:'blue'}}>
                {item.images && <FbImageLibrary images={item.images} />}
     </div>           {/* <div style={{width:'100%'}}><img style={{borderRadius:'33px',width:'100%'}} src={pic}/></div> */}
                <div>
                <div>
                <p style={{color: 'blue',}}>&#x1F499; Like this post!</p>

                <span className='first' style={{fontSize:'113%'}}>&#x1F44D;&#10084;&#128515;&#128549;&#128514;Muhammad Kamran Khan,Sir Kashif Sulamani and 1.5M Others 150Comments 5KShares</span>
                <br/>
                <span className='mobile'>&#x1F44D;&#128514;</span>
                <span className='mobile'>1.5M Others 150Comments 5KShares</span>

</div>


                <div style={{background:'white', borderRadius:'26px', textAlign:"center",display:'flex',justifyContent:'space-around'}} >
                  <div>
                  <span onClick={handleLikeClick} ><FontAwesomeIcon icon={faThumbsUp} style={{width :"25%",height:"55%",}} /></span><p>Like</p>
                  </div>
                  <div>
                  <img style={{width :"25%",height:"55%",}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uOFm8Gqpi4N6pjZOUOiSSI0nNEC6NSWPKw&usqp=CAU'></img><p>Comment</p>
                  </div>
                  <div>
                  <img style={{width :"25%",height:"55%",}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXvuBh44EUYz1kzTUWYcqz-pxBwsVtfNlaQ&usqp=CAU'></img><p>Share</p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
          </div>
      </header>
    </div>
  );
}



export default App;