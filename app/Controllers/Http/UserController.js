const User = use('App/Models/User');

class UserController {
	async create({ request }) {
		const data = request.only(['name', 'email', 'password']);

		const user = await User.create(data);
		delete user.password;

		return user;
	}
}

module.exports = UserController;
