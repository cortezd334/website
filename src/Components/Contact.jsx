import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import medium from '../images/medium.png';
import paper_plane from '../images/paper_plane.png';

export default function Contact() {
    
    return(
        <div className='contact'>
            <h2></h2>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/daniracortez/' rel="noreferrer" target='_blank' className='icon'><img src={linkedin} alt='Linkedin'/></a><br/>
                <a href='https://github.com/cortezd334' rel="noreferrer" target='_blank' className='icon'><img src={github} alt='Github'/></a><br/>
                <a href='https://medium.com/@cortezd334' rel="noreferrer" target='_blank' className='icon'><img src={medium} alt='Medium'/></a><br/>
                <a href={'mailto:cortezd334@gmail.com'} className='icon'><img src={paper_plane} alt='Email'/></a>
            </div>
        </div>
    )
}