import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
// import { Zoom } from 'react-awesome-reveal';
import '../style.css'
const Projects = () => {
  return (
    <Container id='project' >
        <div>
        <div className='mm:w-5/6 md:w-full text-left mb-2 mt-12 mm:mx-10 md:mx-0'>
        <div className="text-green-600 text-xl  md:text-center font-bold  ">Customer Review</div>
        <div className="text-neutral-800 mm:text-lg lg:text-3xl  md:text-center font-bold ">What our claint say about my Works</div>
      </div>
        </div>
        <Slide  className='3xl:mx-[6%]
        4xl:mx-[6%]'>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0rem 0;
    padding-bottom:2.5rem;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    .kWcXMd{
        height: 14rem;
        padding: 0px;
        border-radius: 8px;
        margin: 20px 12px;
      }
      .kWcXMd img{
        border-redious: 5px;
      }
      .cmcweB {
        height: auto;
        background-color: #4e515600;
      }
      .slick-dots li button:before{
        font-size: 24px;
      }
      
`

const Slide = styled.div``