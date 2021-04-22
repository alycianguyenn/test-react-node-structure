import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";

import Audio from './screening_routes/audio';
import Calibration from './screening_routes/calibration';
import Instructions from './screening_routes/instructions';
import Results from './screening_routes/results';

const PAGES = [
    { id:Instructions, path: "/instructions", now:"0" },
    { id:Calibration, path: "/calibration", now:"33" },
    { id:Audio, path: "/audio", now:"66" },
    { id:Results, path: "/results", now:"100" }
];
 
class AudioScreening extends Component {
    render() {
        let audioTestStage = 0

        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent font-weight-light">
                    <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-danger" href="/screeninghome">Screening Info</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Screening</li>
                    </ol>
                </nav>

                <Progress percentage={PAGES}></Progress>
                <Test pages={PAGES} testStage={audioTestStage}></Test>
                
            </div>
        );
    }
}


class Progress extends Component {
    render() {
        let now = this.props.percentage.map((playlistInfo) => {
            return (playlistInfo.now);
        });

        return (
            <div>
                <ProgressBar now={now} label={`${now}%`} />
            </div>
        );
    }
}

class Test extends Component {
    render() {

        return(
            <Router>
                <div>
                    <button type="button" class="btn btn-primary">Back</button>
                    <button type="button" class="btn btn-secondary">Next</button>
                    <button type="button" class="btn btn-secondary">Instructions</button>
                    <button type="button" class="btn btn-secondary">Restart</button>

                    <Switch>
                        <Route path="/about">
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
 
export default AudioScreening;