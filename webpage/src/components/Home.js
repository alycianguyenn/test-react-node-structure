import React from 'react';
import useSound from 'use-sound';

// importing files
import tone1 from './440Hz_5sec_test.mp3';

const Contact = () => {
    return (
        <div className="main-content">
            <h1>Hearing Screening</h1>
            <ToneButton></ToneButton>
        </div>
    );
   }
    
// ToneButton is called above as an HTML element.
const ToneButton = () => {
    const [play] = useSound(tone1);
    return (
    <button onClick={play}>Play Tone</button>
    );
}

const home = () => {
    return (
       <main>
          <h1>Home</h1>
           <p>Put hearing all groups landing page here</p>
           <Contact></Contact>
       </main>
    );
}
 
export default home;