import React from 'react';
import mesa from '../images/MapView.png'
import ohohoh from '../images/ApproveOrDeny.png'

export default function Projects() {
    return(
        <>
        <h2 className='heading'>Projects</h2>
        <div className='container auto40'>
            <div className='crd ab border shadow'>
                {/* <div className='card-image' style={{backgroundImage: MapView}}> */}
                <div>
                    <img className='crdImg tb' src={mesa} alt='MesaAwaits'/>
                </div>
                <div className='crdBdy'>
                    <h3 className='crdTitle'>MesaAwaits</h3>
                    <div className='crdTxt'>
                        <p>Booking application that displays restaurants according to user's location or their search input. </p>
                        <br/>
                        <h5>Technologies</h5>
                        <p className='tech'>React</p>
                        <p className='tech'>JavaScript</p>
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
                        <p>Facilitates the pet adoption process for both users and agency. view pets, request to adopt, view adoption status, agency approve or deny, add pets, view adopted pets</p>
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