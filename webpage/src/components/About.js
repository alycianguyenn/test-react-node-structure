// About Page
import React, { Component } from 'react'; //import React Component

const About = () => {
   return (
      <main>
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent font-weight-light">
               <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
         </nav>

         <MainAboutSection />
      </main>
   );
}

class MainAboutSection extends Component {
   render() {
      return (
         <div className="py-4 about-page">
            <div className="text-center mb-4">
               <h1 className="display-4">About Us</h1>
            </div>
            <div className="font-weight-light mb-2">
               <p>Sound Sustainability is a Seattle-based medical device startup founded by a hearing-impaired Army veteran. Our mission is to improve hearing health for everyone by educating, engaging, and increasing access. We believe that everyone has the right to hear.</p>
            </div>
            <div className="font-weight-light mb-2">
               <div className="text-center mb-4">
                  <h4>Our UW Informatics Teams</h4>
               </div>
               
               {/* can use this as a template to add new teams (img folder in public folder) */}
               <div className="card mb-3">
                  <div className="card-header text-center">
                     <h5 className="mb-0">Team Trolls</h5>
                  </div>
                  <div className="card-group">
                     <div className="card">
                        <img src="img/mshriner.jpg" className="card-img-top" alt="Michelle Ponting" />
                        <div className="card-body">
                           <h5 className="card-text font-weight-normal">Marcus Shriner</h5>
                           <p className="card-text">Project Manager + Front-End Developer</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src="img/anguyen.jpg" className="card-img-top" alt="Michelle Ponting" />
                        <div className="card-body">
                           <h5 className="card-text font-weight-normal">Alycia Nguyen</h5>
                           <p className="card-text">Back-End Developer + Vizualization Designer</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src="img/mponting.jpg" className="card-img-top" alt="Michelle Ponting" />
                        <div className="card-body">
                           <h5 className="card-text font-weight-normal">Michelle Ponting</h5>
                           <p className="card-text">Front-End Developer + UX Designer</p>
                        </div>
                     </div>
                     <div className="card">
                        <img src="img/swerner.jpg" className="card-img-top" alt="Michelle Ponting" />
                        <div className="card-body">
                           <h5 className="card-text font-weight-normal">Sophie Werner</h5>
                           <p className="card-text">Back-End Developer + Cyber Security Speicalist</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      );
   }
}

export default About;