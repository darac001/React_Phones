import React from 'react'
import styled from 'styled-components'

function FunkyArrowSmall({ title, arrow }) {

  return (<>
    <Wrapper >

      {arrow ? (<div className='shop-button arrow'>
        <h5 className='details'>{title}</h5>
        <svg width="60" height="14" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="triangles" clipPath="url(#clip0_6_11)">
            <g id="darkGroup">
              <path id="dark1" opacity="0.7" d="M23.212 10.65C24.3403 11.1963 24.3403 12.8037 23.212 13.35L4.90373 22.2154C3.90761 22.6978 2.75 21.9721 2.75 20.8654L2.75 3.13462C2.75 2.02785 3.90761 1.30222 4.90373 1.78457L23.212 10.65Z" />
              <path id="dark2" opacity="0.7" d="M37.212 10.65C38.3403 11.1963 38.3403 12.8037 37.212 13.35L18.9037 22.2154C17.9076 22.6978 16.75 21.9721 16.75 20.8654L16.75 3.13462C16.75 2.02785 17.9076 1.30222 18.9037 1.78457L37.212 10.65Z" />
            </g>
            <g id="lightGroup">
              <path id="light1" opacity="0.7" d="M23.212 10.65C24.3403 11.1963 24.3403 12.8037 23.212 13.35L4.90373 22.2154C3.90761 22.6978 2.75 21.9721 2.75 20.8654L2.75 3.13462C2.75 2.02785 3.90761 1.30222 4.90373 1.78457L23.212 10.65Z" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_6_11">
              <rect width="80" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>) : <div className='shop-button btn-arrow arrow'><svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="triangles-left" clipPath="url(#clip0_9_17)">
          <g id="darkGroup">
            <path id="left-dark1" opacity="0.7" d="M56.788 13.35C55.6597 12.8037 55.6597 11.1963 56.788 10.65L75.0963 1.78457C76.0924 1.30222 77.25 2.02785 77.25 3.13462L77.25 20.8654C77.25 21.9721 76.0924 22.6978 75.0963 22.2154L56.788 13.35Z"  />
            <path id="left-dark2" opacity="0.7" d="M42.788 13.35C41.6597 12.8037 41.6597 11.1963 42.788 10.65L61.0963 1.78457C62.0924 1.30222 63.25 2.02785 63.25 3.13462L63.25 20.8654C63.25 21.9721 62.0924 22.6978 61.0963 22.2154L42.788 13.35Z"  />
          </g>
          <g id="lightGroup">
            <path id="left-light1" opacity="0.7" d="M42.788 13.35C41.6597 12.8037 41.6597 11.1963 42.788 10.65L61.0963 1.78457C62.0924 1.30222 63.25 2.02785 63.25 3.13462L63.25 20.8654C63.25 21.9721 62.0924 22.6978 61.0963 22.2154L42.788 13.35Z" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_9_17">
            <rect width="80" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
        <h5>{title}</h5>
      </div>

      }

    </Wrapper>
  </>
  )
}
const Wrapper = styled.section`
.details{
  font-size: 0.9rem !important;
}
.shop-button:hover > svg #light1 {
        transform: translateX(20%);
      }
.shop-button:hover > svg #dark2 {
        transform: translateX(40%);
        opacity: 0;
      }
.shop-button:hover > svg #dark1 {
        transform: translateX(0%);
      }
.shop-button:hover > svg #left-light1 {
        transform: translateX(-5%);
      }
.shop-button:hover > svg #left-dark2 {
        transform: translateX(-50%);
        opacity: 0;
      }
.shop-button:hover > svg #left-dark1 {
        transform: translateX(-3%);
        
      } 




      svg {
        cursor: pointer;
        
      }

      #darkGroup {
        fill: var( --clr-primary-7);
      }
      #lightGroup {
        fill: var( --clr-primary-8);
      }
      #dark1,
      #light1,
      #dark2,
      #left-dark1,
      #left-light1,
      #left-dark2 {
        transition: all 1s ease;
      }
      #dark1 {
        transform: translateX(-100%);
      }
      svg:hover #light1 {
        transform: translateX(20%);
      }
      svg:hover #dark2 {
        transform: translateX(40%);
        opacity: 0;
      }
  

      #left-dark1{
        transform: translateX(80%);
      }
      #left-dark2{
        transform: translateX(-5%);
      }
      #left-light1{
        transform: translateX(15%);
      }
      svg:hover #left-light1 {
        transform: translateX(-5%);
      }
      svg:hover #left-dark2 {
        transform: translateX(-50%);
        opacity: 0;
      }
      svg:hover #left-dark1 {
        transform: translateX(-3%);
        
      } 


.shop-button{
  padding: 0;
}
 
 .arrow{
   display: flex;
   align-items: center;
   
   h5{
     color: var(--clr-primary-5);
     font-size: 1.5rem;
     padding-left: 0;
     margin: 0;
     
     
   }
 }
`
export default FunkyArrowSmall