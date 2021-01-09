import React from 'react';
import swing from '../images/cancun.jpg'

export default function About() {
    return(
        <div className='ta'>
            <h2 id='name'>Hi, I'm Danira Cortez</h2>
            <div className='about'>
                <div className='des'>
                    <p>I'm a flight attendant turned Software Engineer.</p>
                    <p>I love traveling the world, meeting new people, exploring different cultures, and taking advantage of each opportunity to learn something new. This desire to learn and grow, be it from conversations with others or the books I read, has led me to where I am today! Covid-19 affected the travel industry tremendously, and I knew that I couldn't wait to see what would happen. I decided to invest in myself and my future by enrolling in Flatiron School's Immersive Software Engineering program. I was flooded with information, languages, frameworks, and worked through all of it, becoming more empowered each day. I went from never coding to making multiple web applications in 5 months! I fell in love with the way I can use programming to make an idea a reality.</p>
                    <p>I now seek to combine over 15 years of customer service experience with my newly acquired skills in a Software Engineer role that is either remote or in the Seattle area. I've been lucky enough to work with people from many different backgrounds and look forward to working in an inclusive and diverse environment. My years as a flight attendant have taught me to maintain composure in emergencies while responding quickly and effectively. I'm able to perform well under much stress while communicating calmly and clearly. My experience in unpredictable situations has led me to be adaptable and thrive in new environments.</p>
                    <p>When I'm not trying to solve a bug or exploring a new country, you can find me FaceTiming my family, trying a new restaurant, reading a book, hiking, or working out. I'm also a bit of a thrill-seeker, so it is possible to see me jump out of a plane or under the sea, as I am PADI certified!</p>
                </div>
                <div className='cancun'>
                    <img className='can border shadow' src={swing} alt='Danira'/>
                </div>
            </div>
        </div>
    )
}