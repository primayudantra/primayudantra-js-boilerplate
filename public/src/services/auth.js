export default class Auth {

	constructor () {}

	ensureAuth (nextState, replace) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			replace({
				pathname: '/login',
				state: { nextPathname: nextState.location.pathname }
			});
		}	
	}

	getUser () {
		return localStorage.getItem('user');
	}

	setUser (user) {
		localStorage.setItem('user', JSON.stringify(user));
	}
}
