import React, { useState } from 'react';
import useSound from 'use-sound';

// for test purposes 
import { Button } from 'reactstrap';

// importing files
import tone1 from './440Hz_5sec_test.mp3';

// for working with POST and server
import axios from 'axios';

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


// use with http://localhost:5000

// const postToServer = () => {
//     axios.post(`/api/v1/answers`, { answer: "Yes" })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
// }


const handleClick = event => {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/v1/answers`, { answer: "Yes" })
      .then(req => {
        console.log(req);
        console.log(req.data);
      }, (error => {
          console.log("error");
      }));
}

// yes or no button handler stuff
const YesNoButtons = (props) => {
    const [rSelected, setRSelected] = useState(null); // radio button stuff
    return (
        <div>
            <Button color="success" onClick={handleClick} active={rSelected === "Yes"}>Yes!</Button>{' '}
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