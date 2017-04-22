import { observable, action } from 'mobx';
import ajax from 'superagent';
import Config from '../config/config.js'

class ExampleStore{
	@observable data = {}

	@action get_lists(){
		this.isLoading = true;
		ajax
		.get(Config.url.host+'apiTest')
    .end((err, response) => {
    	this.isLoading = false;
    	if(!err && response){
					this.data = response.body;
				}else{
					console.log(err)
			}
    });
	}
}

export default new ExampleStore();