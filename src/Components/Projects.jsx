import React from 'react';
import mesa from '../images/MapView.png'
import ohohoh from '../images/ApproveOrDeny.png'
import volun from '../images/volun.png'

export default function Projects() {
    return(
        <>
        <h2 className='heading'>Projects</h2>
        <div className='container auto40'>
            <div className='crd ab border shadow'>
                <div>
                    <img className='crdImg tb' src={volun} alt='Voluntheroes'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>Voluntheroes</h3>
                    <div className='crdTxt'>
                        <p className='special'>Valtech Social Impact Hackathon 2021</p>
                        <p className='crdDes'>During this 52 hour hackathon, we created an application catered to the elderly community. We wanted to provide a way for senior citizens to feel more connected and get help with things needing to be done such as, a ride to an appointment, have groceries delivered, or go for a walk. Volunteers can then pick up the tasks created.</p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React.js</p>
                        <p className='tech'>Ruby on Rails</p>
                        <p className='tech'>SQLite</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://www.youtube.com/embed/6JEI141ehxA" rel="noreferrer" target='_blank'>DEMO</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/tshlos/voluntheros" rel="noreferrer" target='_blank'>REPO</a>
                    </div>
                </div>
            </div>
            <div className='crd ab border shadow'>
                <div>
                    <img className='crdImg tb' src={mesa} alt='MesaAwaits'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>MesaAwaits</h3>
                    <div className='crdTxt'>
                        <p className='crdDes'>Restaurant booking application utilizing Yelp, Google Maps, and Geolocation APIs, to display restaurants according to user's location or their search input. MesaAwaits combines a Rails API backend with a React frontend to provide users with the ability to favorite restaurants, book reservations, and edit their profiles. </p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React.js</p>
                        <p className='tech'>Ruby on Rails</p>
                        <p className='tech'>PostgrSQL</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://www.youtube.com/embed/WzNPjo4vRLk" rel="noreferrer" target='_blank'>DEMO</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/cortezd334/mesaawaits-frontend" rel="noreferrer" target='_blank'>Frontend REPO</a>
                        <a className='lnk' href="https://github.com/cortezd334/mesaawaits-backend" rel="noreferrer" target='_blank'>Backend REPO</a>
                    </div>
                </div>
            </div>
            <div className='crd ab border shadow'>
                <div>
                    <img className='crdImg tb' src={ohohoh} alt='OHOHOH'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>OHOHOH</h3>
                    <div className='crdTxt'>
                        <p className='crdDes'>This single-page application, comprised of a JavaScript frontend and Rails API backend, facilitates the pet adoption process. An OHOHOH administrator can add new pets, approve or deny pending adoptions, and view a record of previously adopted pets. A user is able to view all pets, request to adopt a pet, view adoption status, and edit profile.</p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>Ruby on Rails</p>
                        <p className='tech'>PostgrSQL</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://www.youtube.com/embed/Tctau4NhWMI" rel="noreferrer" target='_blank'>DEMO</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/cortezd334/OHOHOH" rel="noreferrer" target='_blank'>REPO</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}