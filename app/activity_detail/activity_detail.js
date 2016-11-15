import React from 'React';
import Navbar from '../component/navbar';
import Ad_body from './ad_body';
import {getUserData} from '../server';

export default class Activity_detail extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  getData(){
    getUserData(this.props.user,(data)=>{
      this.setState(data);
    });
  }


  render(){
    return(
      <div>
      <Navbar activity="active" user={this.state}/>
      <Ad_body id={this.props.id} currentUser={this.props.user._id}/>
      </div>
    )
  }

  componentDidMount() {
      this.getData();
  }
}