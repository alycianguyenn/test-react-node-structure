import React from 'react';
 
const Error = () => {
    return (
       <div className="main-content">

         <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent font-weight-light">
               <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page">Error</li>
            </ol>
         </nav>

          <p className="ml-4">Error: Page does not exist!</p>
       </div>
    );
}
 
export default Error;