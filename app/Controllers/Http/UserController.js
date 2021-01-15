const User = use('App/Models/User');

class UserController {
	async create({ request }) {
		const data = request.only(['name', 'email', 'password']);

		const user = await User.create(data);
		delete user.password;

		return user;
	}

	async update({ request, params }) {
		// const { id } = params;
		// const data = request.all();

		return { ok: true };
	}
}

module.exports = UserController;
