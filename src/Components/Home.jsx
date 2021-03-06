import React from 'react';
import linkedin from '../images/blinkedin.png';
import github from '../images/bgithub.png';
import medium from '../images/bmedium.png';
import paper_plane from '../images/bplane.png';

export default function Home() {
    return(
        <>
            <div className='home'>
                <div className='center ta'>
                    <h1 className='bigname'>Danira Cortez</h1>
                    <h3 className='sub'>Software Engineer in the Seattle area.</h3>
                </div>
            </div>
            {/* <button>Explore</button> */}
            <div className='hicons'>
               <a href='https://www.linkedin.com/in/daniracortez/' className='icon' rel="noreferrer" target='_blank'><img src={linkedin} alt='Linkedin'/></a>
               <a href='https://github.com/cortezd334' className='icon' rel="noreferrer" target='_blank'><img src={github} alt='Github'/></a>
               <a href='https://medium.com/@cortezd334' className='icon' rel="noreferrer" target='_blank'><img src={medium} alt='Medium'/></a>
               <a href={'mailto:cortezd334@gmail.com'} className='icon'><img src={paper_plane} alt='Email'/></a>
            </div>
        </>
    )
}