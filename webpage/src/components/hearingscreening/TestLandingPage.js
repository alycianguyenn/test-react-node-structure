// Hearing Screening Trolls Landing Page
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <main>
                <FirstView />
                <Facts />
                <HearingInfo />
                <Trust />
            </main>
        );
    }
}

class FirstView extends Component {
    render() {
        return (
            <div className="bg-image">
                <div className="container float-left">
                    <div className="jumbotron bg-transparent">
                        <h2 className="bg-danger text-white shadow py-2 px-4">Online Hearing Screening</h2>
                        <h5 className="bg-danger text-white shadow py-2 px-4">Take the first step to better hearing health today!</h5>
                        <div className="pt-5">
                            <NavLink to="/audioscreening" type="button" className="btn btn-primary text-white px-4 py-2 shadow" size="lg" href="/audioscreening">
                                <h4 className="m-0 font-weight-normal">Begin Your Hearing Screening</h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Facts extends Component {
    render() {
        return (
            <div className="facts">
                <div className="m-3 d-flex justify-content-center flex-wrap">
                    <div className="p-2 text-center">
                        <h2>Are you worried about your hearing?</h2>
                    </div>
                    <div className="p-2 d-flex flex-column font-weight-light">
                        <div className="p-2 d-inline-flex align-items-center">
                            <div>
                                <svg className="mr-3" alt="checkmark"
                                    width="25" viewBox="0 0 41 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.7812 3L14.5938 26.1865L3 14.5938" stroke="#FF914D" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="d-inline">Over 400 million adults worldwide have reported trouble hearing</p>
                            </div>
                        </div>
                        <div className="p-2 d-inline-flex align-items-center">
                            <div>
                                <svg className="mr-3" alt="checkmark"
                                    width="25" viewBox="0 0 41 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.7812 3L14.5938 26.1865L3 14.5938" stroke="#FF914D" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="d-inline">Globally, there is a cost of US $750 billion due to unaddressed hearing loss</p>
                            </div>
                        </div>
                        <div className="p-2 d-inline-flex align-items-center">
                            <div>
                                <svg className="mr-3" alt="checkmark"
                                    width="25" viewBox="0 0 41 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.7812 3L14.5938 26.1865L3 14.5938" stroke="#FF914D" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="d-inline">Age is the strongest predictor of hearing loss </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class HearingInfo extends Component {
    render() {
        return (
            <div className="bg-secondary py-4 px-5">
                <div className="text-center">
                    <h2 className="text-dark mb-2">Sounds you might miss with hearing loss...</h2>
                </div>
                <div className="text-center mb-4">
                    <NavLink to="/faq" type="button" className="btn btn-link text-dark">
                        <h4>What do these numbers mean?</h4>
                    </NavLink>
                </div>
                <div className="card-deck lp-card-deck font-weight-light">
                    <div className="card">
                        <div className="card-header text-center">
                            <h1 className="display-1">4</h1>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Mild Hearing Loss</h4>
                            <p className="card-text">Difficulty hearing 26-40dB in adults</p>
                            <p className="card-text">You may have difficultly with speech and sounds in noisy or reverberating environments but do well in quiet environments.</p>
                            <p className="card-text">Sounds you may miss: l, ng, m, v, f, th and s</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header text-center">
                            <h1 className="display-1">3</h1>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Moderate Hearing Loss</h4>
                            <p className="card-text">Difficulty hearing 41-70dB in adults</p>
                            <p className="card-text">You may have issues understanding speech, especially with background noises,  and require higher levels of volume for TV, radio and phone.</p>
                            <p className="card-text">Sounds you may miss: j, z, g, i, u, b, d, a, o, r, p, ch, sh, h and k</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header text-center">
                            <h1 className="display-1">2</h1>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Severe Hearing Loss</h4>
                            <p className="card-text">Difficulty hearing 71-90dB in adults</p>
                            <p className="card-text">Regular speech may be inaudible, even when loud, and there may be difficultly when trying to discriminate speech. Comprehension is possible via amplification but still not “normal."</p>
                        </div>
                    </div>
                </div>
                <div className="m-2 mt-4 text-center">
                    <NavLink to="/audioscreening" type="button" className="btn btn-primary text-white px-4 py-2 shadow" size="lg" href="/audioscreening">Begin Your Hearing Screening</NavLink>
                </div>
            </div>
        );
    }
}

class Trust extends Component {
    render() {
        return (
            <div className="my-2 mw-200 d-flex flex-wrap justify-content-center lp-trust-content">
                <div className="p-2 text-center">
                    <h2>Why Trust Us?</h2>
                </div>
                <blockquote className="blockquote">
                    <p className="mb-0 font-weight-light">As four undergraduate students in Informatics, we aim to give you a screening that is accurate with secure results that allow you to be better informed with accessible next steps. In partnership with our sponsor Sound Sustainability, a Seattle-based medical device startup founded by a hearing-impaired Army veteran Robert White, our mission is to improve hearing health for everyone by educating, engaging, and increasing access.</p>
                    <footer className="blockquote-footer">UW Informatics Capstone 2021 Team Trolls</footer>
                </blockquote>
                <div className="p-2 text-center">
                    <p className="font-weight-bold d-inline text-primary">We believe that everyone has the right to hear their world.</p>
                </div>
            </div>
        );
    }
}
 
export default Landing;