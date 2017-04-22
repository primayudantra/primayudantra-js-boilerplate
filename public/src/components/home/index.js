import React, { Component } from 'react';

import ExampleFragment from './../example'

const style = {
	maxHeight:'500px',
	maxWidth:'500px',
}
class HomeFragment extends Component{
	submitLogout(){
    window.location.href = '#/login';
    localStorage.clear();
  }
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-6">
						<h3>Welcome, buddy! | 
							<a style={{cursor:'pointer'}} onClick={this.submitLogout.bind(this)}>
								 >logout
              </a>
						</h3>
					</div>
        </div>
				<ExampleFragment/>
			</div>				
		)
	}
}
export default HomeFragment