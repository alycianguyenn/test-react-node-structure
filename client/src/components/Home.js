import React from 'react';

// temporary for adding buttons to test
// import { useState } from 'react'; 
//, ButtonGroup from 'reactstap'
import { Button } from 'reactstrap';


const home = () => {
    return (
       <div className="main-content">
          <h1>Home</h1>
          {/* <Button as="input" type="button" value="Test" />  */}
          <Button color="success" active>Yes</Button>{' '}
          <Button color="danger" active>No</Button>{' '}
       </div>
    );
}
 
export default home;