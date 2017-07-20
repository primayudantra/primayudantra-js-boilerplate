import React, { Component } from 'react';
import {observer} from 'mobx-react'
import firebase from 'firebase'
import store from './../../store/exampleStore'

var config = { apiKey: "AIzaSyAsGNZe5W9tw1WYz6I027YvoB7gqpCj3N0",
 authDomain: "burning-torch-5036.firebaseapp.com",
 databaseURL: "https://burning-torch-5036.firebaseio.com",
 projectId: "burning-torch-5036",
 storageBucket: "burning-torch-5036.appspot.com",
 messagingSenderId: "709402408602"
};

var fb = firebase.initializeApp(config)
var cr = ''

@observer
class ExampleFragment extends Component{
	constructor(props){
		super(props)
		this.state = {
      messages : [],
    }
		this.fb = fb.database();
		this.cr = this.fb.ref('/message/')
	}

	componentWillMount() {
    this.cr.on('child_added', data => {
      var messages = this.state.messages;
      messages.push(data.val());
      this.setState({messages: messages});
    });
  }

	submitChat = () => {
		let p = this.cr.push();
    p.set({
      message: this.refs.chatMessage.value
    });
	}
	render(){
		return(
			<div>
				<hr/>
				<h3>Chat</h3>
				{ this.state.messages.map((v,i) => <p key={i}>{v.message}</p>) }
				<textarea ref="chatMessage"></textarea>
				<button onClick={this.submitChat}>Click!</button>
			</div>
		)
	}
}
export default ExampleFragment
