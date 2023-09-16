import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Sarah.</span> 
                <br></br>Software Engineer</span>
                <p className='introPara'>I'm a driven, creative and curious software engineer 
                <br/>with a passion for elegant problem-solving and life-long learning.</p>
            </div>
        </section>
    )
}

export default Intro;
