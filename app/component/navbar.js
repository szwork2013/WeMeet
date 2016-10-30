import React from 'react';

export default class navbar extends React.Component{
    render(){
      return(
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="./img/logo/mipmap-xxhdpi/ic_launcher.png" width="50px" height="50px" alt="" />
                </a>
              </div>

              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav nav-left">
                  <li className="active"><a href="index.html">Activities</a></li>
                  <li><a href="post.html">Trend</a></li>
                  <li><a href="chat.html">Chat</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <div className="dropdown pull-left">
                    <a href="#" className="dropdown-toggle" type="button" id="user-options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <img src="img/user.png" width="50px" height="50px" alt="" /> User
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="user-options">
                      <li><a href="profile.html"><span><i className="fa fa-user" aria-hidden="true"></i></span>Profile</a></li>
                      <li><a href="settings.html"><span><i className="fa fa-cog" aria-hidden="true"></i></span>Settings</a></li>
                      <li><a href="postactivity.html"><span><i className="fa fa-pencil" aria-hidden="true"></i></span>Create Activity</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#"><span><i className="fa fa-sign-out" aria-hidden="true"></i></span>Log out</a></li>
                    </ul>
                  </div>
                    <li className="active"><a href="search.html"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                  <li><a href="notification.html"><i className="fa fa-bell-o" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              {/*.navbar-collapse */}
            </div>
            {/*.container-fluid*/}
          </nav>
        </div>
      );
    }
}
