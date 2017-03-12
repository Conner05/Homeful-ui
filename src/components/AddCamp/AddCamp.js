import React , {Component} from 'react';

class AddCamp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Camp Name" id="camp_name" type="text" className="validate" />
                            <label htmlFor="camp_name">Camp Name</label>
                            </div>
                        </div>


                    <div className="center-align">
                        <div className="input-field col s12">
                                <input id="address" type="text" className="validate" />
                            <label htmlFor="address">Address Field</label>
                            </div>
                            <h6 className="center-align">OR</h6>
                            <a className="waves-effect waves-light btn-large ">Locate Me</a>

                        </div>






                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="camp_notes" className="materialize-textarea" data-length="120"></textarea>
                        <label htmlFor="notes">Optional Notes about the camp</label>
                          </div>
                        </div>

                        <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">done</i></a>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddCamp;
