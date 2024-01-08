
import './style.css';
import React from 'react';
import freind from './freind.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FbImageLibrary from 'react-fb-image-grid';
import Navbar from '../navbar';

function Posts(props) {
  function handleLikeClick(e) {
    e.target.classList.toggle('blue');
  }

  return (
    <div className="body" style={{ background: 'white' }}>
      <>
        <Navbar />


        {props.products.length > 0 &&
          props.products.map((item, index) => {

            return (

              <div className='container'>
                <div className='profile ms-3'>
                  <img src='https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png' />
                  <h4 className=''>{item.title}</h4>
                </div>

                <p className='ms-3 mb-1'> {item.brand} but the majority have suffered alteration in some form, by </p>
                <p className='ms-3'>{item.description}</p>
                <div>
                  {console.log(item.images)}

                  {item.images && <FbImageLibrary images={item.images || []} />}
                </div>
                <br/>
                <div>
                  <div>
                    <p className='likeText '>&#x1F499; Like this post!</p>
                    <span className='first p-2' >&#x1F44D;&#10084;&#128515;&#128549;&#128514;Muhammad Kamran Khan,Sir Kashif Sulamani and 1.5M Others 150Comments 5KShares</span>
                    <br />
                    <span className='mobile'>&#x1F44D;&#128514;</span>
                    <span className='mobile'>1.5M Others 150Comments 5KShares</span>
                  </div>
                  <div className='likeLine'>
                    <div>
                      <span onClick={handleLikeClick} ><FontAwesomeIcon icon={faThumbsUp} className='likeBtn' /></span><p>Like</p>
                    </div>
                    <div>
                      <img className='likeBtn' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uOFm8Gqpi4N6pjZOUOiSSI0nNEC6NSWPKw&usqp=CAU'></img><p>Comment</p>
                    </div>
                    <div>
                      <img className='likeBtn' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXvuBh44EUYz1kzTUWYcqz-pxBwsVtfNlaQ&usqp=CAU'></img><p>Share</p>
                    </div>
                  </div>
                </div>

              </div>

            );
          })}
      </>
    </div>
  );
}

export default Posts;