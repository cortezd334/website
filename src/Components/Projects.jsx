import React from 'react';
import mesa from '../images/MapView.png'
import ohohoh from '../images/ApproveOrDeny.png'
import web from '../images/web.png'
import volun from '../images/volun.png'
import shoppies from '../images/shoppies.png'
import lesson from '../images/lesson.png'
import landing from '../images/Landing.png'

export default function Projects() {
    return(
        <div className='bottom'>
        <h2 className='heading'>Projects</h2>
        <div className='container auto40'>
            <div className='crd ab border shadow'>
                <div>
                    <img className='crdImg tb' src={landing} alt="Teacher's Pet"/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>Teacher's Pet</h3>
                    <div className='crdTxt'>
                        <p className='special'>TechTogether Seattle Hackathon 2021</p>
                        <p className='crdDes'>Created this application during TechTogether's 50-hour hackathon. Teacher's Pet gives teachers the power to create customized flashcards and a fun way to interact with their students. We incorporated an anxiety-reducing timer that shows a progress bar instead of a countdown. Additionally, Microsoft's Azure mySQL database was included to allow full CRUD functionality for students, lessons, and cards. This project was my first time working with cloud technology, and I look forward to learning more.</p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React.js</p>
                        <p className='tech'>Ruby on Rails</p>
                        <p className='tech'>Azure mySQL</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://www.youtube.com/embed/vd_0YPhAa5w" rel="noreferrer" target='_blank'>DEMO</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/cortezd334/teacherspet" rel="noreferrer" target='_blank'>REPO</a>
                    </div>
                </div>
            </div>
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
                    <img className='crdImg tb' src={shoppies} alt='The Shoppies'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>The Shoppies</h3>
                    <div className='crdTxt'>
                        <p className='crdDes'>The Shoppies combines React with OMDB's API to allows users to view and nominate their favorite movies for The Shoppies: Movie Awards for Entrepreneurs. As per Shopify's requirements, one can search OMBD, display only movie results, add a film to the nomination list, view the nomination list, and remove a movie from the nomination list. </p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React.js</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://cortezd334-shoppies.netlify.app/" rel="noreferrer" target='_blank'>SITE</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/cortezd334/shoppies" rel="noreferrer" target='_blank'>REPO</a>
                    </div>
                </div>
            </div>
            <div className='crd ab border shadow'>
                <div>
                    <img className='crdImg tb' src={web} alt='Portfolio'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>Portfolio</h3>
                    <div className='crdTxt'>
                        <p className='crdDes'>Styled with custom CSS, this website highlights Danira Cortez's projects and blog. You will also find a brief description of her and her contact information.</p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React.js</p>
                    </div>
                    <br/>
                    <div className='crdLnk'>
                        <a className='lnk' href="https://daniracortez.com" rel="noreferrer" target='_blank'>SITE</a>
                        {/* make a pop-up window */}
                        <a className='lnk' href="https://github.com/cortezd334/website" rel="noreferrer" target='_blank'>REPO</a>
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
                        <p className='crdDes'>Restaurant booking application utilizing Yelp, Google Maps, and Geolocation APIs, to display restaurants according to user's location or their search input. MesaAwaits combines a Rails API backend with a React frontend to provide users with the ability to favorite restaurants, book reservations, and edit their profiles.</p>
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
        </div>
    )
}