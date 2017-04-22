import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class IsLoading extends Component{
	render(){
		const style = {
			paddingBottom: '200px',
			paddingTop: '200px'
		};
		return(
			<center>
				<div style={style}>
					<CircularProgress size={80} thickness={5} />
				</div>
			</center>
		);
	}
}
export default IsLoading;
