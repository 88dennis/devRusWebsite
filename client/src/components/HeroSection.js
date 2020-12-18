import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
function HeroSection() {
    return (
        <div className="hero_container">
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>LETS GET YOUR APP UP!</h1>
            <p>What are you waiting for?</p>

            <div className="hero_btns">

                <Button
                    className='btns' 
                    buttonStyle='btn__outline'
                    buttonSize='btn__large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns' 
                    buttonStyle='btn__primary'
                    buttonSize='btn__large'
                >
                    WATCH PREVIEW <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
