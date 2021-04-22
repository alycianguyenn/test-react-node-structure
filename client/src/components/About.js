// About Page
import React, { Component } from 'react'; //import React Component


const About = () => {
   return (
      <div className="main-content">  
         <main className="d-flex align-items-center flex-column" id="about-us">
            <h1 id="about-us-title">About Us</h1>
            <MainAboutSection />
         </main>
      </div>
   );
}

export class MainAboutSection extends Component {
   render() {
       return (
           <div>
               <p className="about-paragraph">
               A hearing screening is a painless, non-invasive diagnostic to measure a person's ability to hear different sounds, pitches, or frequencies.
               </p>
               <p className="about-paragraph">
               Our online hearing test provides you an accurate test of your hearing from the safety and comfort of your home. The YouHear test provides you an audiogram assessment for each ear. Your results will be saved to your health profile. 
               </p>
           </div>
       );
   }
}

export default About;