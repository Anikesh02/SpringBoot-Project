import React from 'react'
import './Hero.css'
import { Carousel } from 'bootstrap'


const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
    <Carousel>
        {
            movies.map((movie) => {
                return (
                    <Paper>
                        <div className='movie-card-container'>
                            <div className='movie-card'>

                            </div>

                        </div>
                    </Paper>
                )
            })
        }
    </Carousel>
    </div>
  )
}

export default Hero