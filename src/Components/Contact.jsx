import React from 'react';
import linkedin from '../images/gold_linkedin.png';
import github from '../images/gold_github.png';
import medium from '../images/gold_medium.png';
import paper_plane from '../images/gold_plane.png';

export default function Contact() {
    
    return(
        <div className='contact ta'>
            <h2>Contact Me!</h2>
            <div className='info border shadow'>
                <p id='reach'>Please feel free to reach out regarding any career opportunities, networking, or if you have any questions.</p>
                <br/>
                <h3>Email</h3>
                <a href={'mailto:cortezd334@gmail.com'} className='email'>cortedz334@gmail.com</a>
                <br/>
                <h3>Location</h3>
                <p>Seattle, WA</p>
                <br/>
                <br/>
                <br/>
                <h3 id='blue'>Find me on...</h3>
                <div className='icons'>
                    <a href={'mailto:cortezd334@gmail.com'} className='email'><img src={paper_plane} alt='Email'/></a>
                    <a href='https://www.linkedin.com/in/daniracortez/' rel="noreferrer" target='_blank' className='icon'><img src={linkedin} alt='Linkedin'/></a><br/>
                    <a href='https://github.com/cortezd334' rel="noreferrer" target='_blank' className='icon'><img src={github} alt='Github'/></a><br/>
                    <a href='https://medium.com/@cortezd334' rel="noreferrer" target='_blank' className='icon'><img src={medium} alt='Medium'/></a><br/>
                </div>
            </div>
        </div>
    )
}