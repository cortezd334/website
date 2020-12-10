import React from 'react';
// import linkedin from '../images/linkedin.png';
// import github from '../images/github.png';
// import medium from '../images/medium.png';
// import paper_plane from '../images/paper_plane.png';

export default function Construction() {
    return(
        <>
            <div className='construct'>
                <h1 id='uc'>Under Construction</h1>
                <div className='progress'>
                    <div id='bar'>15%</div>
                </div>
                <h3 className='sub first'>Working hard to bring you this website.</h3><h3 className='sub second'>In the meantime please watch this interview I had with 1000hires.</h3>
                <div className='video'>
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6742854464757080064?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
            </div>

        </>
    )
}