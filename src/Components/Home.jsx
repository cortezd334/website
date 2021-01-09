import React from 'react';
import linkedin from '../images/gold_linkedin.png';
import github from '../images/gold_github.png';
import medium from '../images/gold_medium.png';
import paper_plane from '../images/gold_plane.png';

export default function Home() {
    return(
        <>
            <div className='home'>
                <div className='center ta'>
                    <h1 className='bigname'>Danira Cortez</h1>
                    <h3 className='sub'>I'm a Software Engineer in the Seattle area.</h3>
                </div>
            </div>
            <div className='icons'>
               <a href='https://www.linkedin.com/in/daniracortez/' classname='icon' rel="noreferrer" target='_blank'><img src={linkedin} alt='Linkedin'/></a>
               <a href='https://github.com/cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={github} alt='Github'/></a>
               <a href='https://medium.com/@cortezd334' classname='icon' rel="noreferrer" target='_blank'><img src={medium} alt='Medium'/></a>
               <a href={'mailto:cortezd334@gmail.com'} classname='icon'><img src={paper_plane} alt='Email'/></a>
            </div>
        </>
    )
}