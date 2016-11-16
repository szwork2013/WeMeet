import React from 'react';
var moment = require('moment');

export default class ChatLeftBubble extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.data;
    }

    render() {
      //default time format
      var time = moment(this.state.date).calendar();
      //if less than 24 hours, use relative time
      if((new Date().getTime()) - 12 <= 86400000)
        time = moment(this.state.date).fromNow();

        return (
          <div className="media friend-msg">
              <div className="media-top">
                  {time}
              </div>
              <div className="media-left">
                  <a className="media-left" href="#">
                      <img className="media-object" src="img/user.png" alt="image" height="40" width="40"></img>
                  </a>
              </div>
              <div className="media-body" style={{
                  'paddingRight': '0'
              }}>
                  <div className="msg">
                    {this.state.text}
                  </div>
              </div>
          </div>
        )
    }
}