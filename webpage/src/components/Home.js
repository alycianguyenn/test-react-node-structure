import React, { useState } from 'react';
import useSound from 'use-sound';

// for test purposes 
import { Button } from 'reactstrap';

// importing files
import tone1 from './440Hz_5sec_test.mp3';

const PlayAudioButton = () => {
    return (
        <div>
            <p>Button to Play Tone</p>
            <ToneButton></ToneButton>
        </div>
    );
   }
    
// ToneButton is called above as an HTML element.
const ToneButton = () => {
    const [play] = useSound(tone1);
    return (
        <p><button onClick={play}>Play Tone</button></p>
    );
}

// yes or no button handler stuff
const YesNoButtons = (props) => {
    const [rSelected, setRSelected] = useState(null); // radio button stuff
    return (
        <div>
            <Button color="success" onClick={() => setRSelected("Yes")} active={rSelected === "Yes"}>Yes!</Button>{' '}
            <Button color="danger" onClick={() => setRSelected("No")} active={rSelected === "No"}> Nope!</Button>{' '}
            <p>Selected: {rSelected}</p>
       </div>
    );

};

const home = () => {
    return (
       <main>
          <h1>Home</h1>
           <p>Put hearing all groups landing page here</p>
           <PlayAudioButton />
           <YesNoButtons />
       </main>
    );
}
 
export default home;