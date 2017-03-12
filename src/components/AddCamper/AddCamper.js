import React , {Component} from 'react';

class AddCamper extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Name" id="camper_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>

                        <div className="input-field inline">
                            <p>{this.props.campName}Camp X</p>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="tel" type="tel" className="validate" />
                            <label htmlFor="tel">Telephone Number</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="birthday" type="text" className="validate" />
                            <label htmlFor="birthday">Birthday</label>
                            </div>
                        </div>

                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="notes" className="materialize-textarea" data-length="120"></textarea>
                        <label htmlFor="notes">Notes</label>
                          </div>
                        </div>

                        <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">done</i></a>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddCamper;
