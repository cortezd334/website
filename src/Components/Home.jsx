import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import medium from '../images/medium.png';
import paper_plane from '../images/paper_plane.png';

export default function Home() {
    return(
        <>
            <div className='construct'>
                <h1>Under Construction</h1>
            {/* </div> */}
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/daniracortez/' classname='icon' rel="noreferrer" target='_blank'><img src={linkedin} alt='Linkedin'/></a>
                    <a href='https://github.com/cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={github} alt='Github'/></a>
                    <a href='https://medium.com/@cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={medium} alt='Medium'/></a>
                    <a href={'mailto:cortezd334@gmail.com'} classname='icon'><img src={paper_plane} alt='Email'/></a>
                </div>
            </div>
        </>
    )
}