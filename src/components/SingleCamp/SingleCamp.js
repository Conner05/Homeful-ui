import React , {Component} from 'react';

class SingleCamp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>{this.props.campName}Camp X</h1>
                    <p className="right-align">{this.props.numberCampers} 20 campers</p>
                </div>
                <hr/>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a href="#test1">Camp Needs </a></li>
                            <li className="tab col s3"><a className="active" href="#test2">Individual Needs {this.props.numberSpecialNeeds}</a></li>
                        </ul>
                        <hr/>
                    </div>

                    <div id="test1" className="col s6">
                        <h1>Camp Needs</h1>
                        <ul>
                            <li>Toilet Paper</li>
                            <li>Toothbrush</li>
                            <li>Tents</li>
                            <li>Tarps</li>
                            <li>Great</li>
                            <li>Tape</li>
                            <li>Batteries</li>
                        </ul>
                    </div>
                        <div id="test2" className="col s6"></div>
                </div>
                <div className="card">
                    <div className="card-action center-align">

                    <a href="#">Add Camper</a>
                    <a href="#">Add Needs</a>

                    </div>
                </div>
            </div>

        );
    }
}
export default SingleCamp;
