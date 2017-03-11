import React , {Component} from 'react';

import copy from '../../copy';

class CampList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://images.popmatters.com/news_art/t/tentless.jpg"/>
                                <span className="card-title">{copy.campName}</span>
                                </div>
                            <div className="card-action center-align">

                            <a href="https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enUS735US735&ion=1&espv=2&ie=UTF-8#q=google+maps+nashville&*">Directions</a>
                            <a href="#">Needs</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default CampList;
