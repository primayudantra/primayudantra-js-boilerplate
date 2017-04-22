import React, { Component } from 'react';
import {observer} from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';


import Auth from '../../services/auth';
let auth = new Auth();

const style = {
	stylePaper : {
	  width: 300,
	  margin: 100,
	  paddingTop: 20,
	  textAlign: 'center',
	  display: 'inline-block',
	},
	loginBackground: {
		backgroundColor: '#3540a3'
	},
	underline:{
		color: '#91C11E'
	},
};

@observer
class LoginFragment extends Component{
	constructor(){
		super();
		this.state = {
			username:'',
			password:''
		}
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	handleChangeUsername(e){
		this.setState({username:e.target.value})
	}
	handleChangePassword(e){
		this.setState({password:e.target.value})
	}

	submitLogin() {
		let data = this.state;
		if(data.username == 'primayudantra' && data.password == 'test'){
			const user = { fullname: 'Prima Yudantra', email: 'prima.yudantra@gmail.com' };
			auth.setUser(user);
			this.props.router.push('/');
		}else{
			window.location.href = '#/login';
		}
	}

	render(){
		return(
		<MuiThemeProvider>
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
				    	<Paper style={style.stylePaper} zDepth={5} rounded={false}>
				    		<form onSubmit={this.submitLogin}>
					    		<div>
					    			<TextField
								      hintText="Username" value={this.state.username} onChange={this.handleChangeUsername}
											floatingLabelText="Username"
											underlineFocusStyle={{color:"#91C11E"}}
								    /><br />
								    <TextField
								      hintText="Password" value={this.state.password} onChange={this.handleChangePassword}
											floatingLabelText="Password"
											underlineFocusStyle={style.underline}
								      type="password"
								    /><br />
								    <button 
								    	className="btn btn-md btn-success"
								    	type="submit"
								    	value="submit">
								    	Submit
								    </button>
					    		</div>
					    	</form>
				    	</Paper>
				  	</div>
				 </div>
				</div>
			</div>
		</MuiThemeProvider>
		)
	}
}
export default LoginFragment