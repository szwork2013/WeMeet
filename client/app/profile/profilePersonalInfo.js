import React from 'react';
import {getUserData} from '../server';
var moment = require('moment');

export default class ProfilePersonalInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  getData(){
    getUserData(this.props.user,(userData)=>{
        this.setState(userData);
    });
  }

  componentDidMount(){
    this.getData();
  }

  countProgress(){
    var count = 0.0;
    if (this.state.firstname != null){
      count += 1;
    }
    if (this.state.lastname != null){
      count += 1;
    }
    if (this.state.nickname != null){
      count += 1;
    }
    if (this.state.avatar != null){
      count += 1;
    }
    if (this.state.description != null){
      count += 1;
    }
    var len = 0
    for (var o in this.state.location) {
      len++;
    }
    if (len){
      count += 1;
    }
    if (this.state.birthday != null){
      count += 1;
    }
    return count / 7 * 100 | 0;
  }

  render(){
    var progress = this.countProgress();

    return(
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="media">
              {this.state.firstname} have completed {progress}% of profile.
              <br />
              <progress value={progress} max="100"></progress>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="media">
              <div>
                <b>Email</b>
                <br />
                <div className="col-md-offset-1">
                  {this.state.email}
                </div>
              </div>
              <div>
                <b>Birthday</b>
                <br />
                <div className="col-md-offset-1">
                  {moment(this.state.birthday).calendar()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
