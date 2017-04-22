import React, { Component } from 'react';
import {observer} from 'mobx-react'
import store from './../../store/exampleStore'

@observer
class ExampleFragment extends Component{
	componentDidMount(){
		store.get_lists();
	}
	render(){
		return(
			<div>
				<hr/>
				<h3>Calling list with AJAX</h3>
				<ul>
					<li>{store.data.age}</li>
					<li>{store.data.name}</li>
					<li>{store.data.status}</li>
				</ul>
			</div>
		)
	}
}
export default ExampleFragment