import React from 'react'; //import React Component
import { Accordion, Card } from "react-bootstrap";
 
const Faq = () => {
   return (
      <div className="font-weight-light">
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
               <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
         </nav>
         <div className="mx-4">
            <div className="mb-4">
               <h4>Frequently Asked Questions</h4>
            </div>
            <Accordion>
               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="0" aria-expanded="false">
                     What is a hearing screening?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                     <Card.Body className="mx-4">
                        <p>A hearing screening is a painless, non-invasive diagnostic to measure a person's ability to hear different sounds, pitches, or frequencies.</p>
                        <p>Our online hearing test provides you an accurate test of your hearing from the safety and comfort of your home. The YouHear test provides you an audiogram assessment for each ear. Your results will be saved to your health profile.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="1" aria-expanded="false">
                     What does my hearing screening score mean?
                   </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                     <Card.Body className="mx-4">TODO</Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="2" aria-expanded="false">
                     What do I need to take Sound Sustainability's Hearing Screening?
                   </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                     <Card.Body className="mx-4">TODO</Card.Body>
                  </Accordion.Collapse>
               </Card>
            </Accordion>
         </div>

      </div>
   );
}

export default Faq;