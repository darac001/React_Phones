import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = (props) => {
  // Set first image [0] in array to be main. Set images default parameter [{url:''}] to be initilized when undefined is passed
  // images prop from SingleProductPage
  const { images = [{ url: "" }] } = props;
  const [main, setMain] = useState(images[0]);
  // console.log(main);
  return (
    <Wrapper>
      <div className='image-container'>
        <div className="gallery">
          {images.map((image, index) => {
            return (
              <div className={`${image.url === main.url ? "thumb active" : "thumb"}`} onMouseEnter={() => setMain(images[index])}>
                <img
                  src={image.url}
                  alt="thumb"
                  key={index}
                  className={`${image.url === main.url ? "active" : null}`}
                />
              </div>
            );
          })}
        </div>
        <img src={main.url} alt="main" className="main"/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {    
    height: 150px;
  }
  .image-container{
    display: flex;
  }
  .thumb{
    width: 70px;
    height: 70px;
    border: 1px solid var(--clr-grey-8);
  }
  img {
    display: flex;
    align-items: center;
    margin: auto;
    height: 100%;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    justify-self: start;
    grid-template-columns: repeat(100px);   
    column-gap: 1rem;
    img {      
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 15px 1px #685D0A;
  }
  @media (max-width: 576px) {
    .main {
      height: 250px;
    }
  
  }
  @media (min-width: 992px) {
    .main {
      object-fit: cover;
      height:400px ;
    }
    .thumb{
    width: 70px;
    height: 70px;
    /* border: 1px solid red; */
  }
  img {
    display: flex;
    align-items: center;
    margin: auto;
    height: 100%;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    justify-self: start;
    grid-template-columns: repeat(100px);   
    column-gap: 1rem;
    img {      
      cursor: pointer;
    }
  }
`

export default ProductImages
