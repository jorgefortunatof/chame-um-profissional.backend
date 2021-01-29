'use strict';

const Helpers = use('Helpers');

class AvatarController {
	async create({ request, auth }) {
		await auth.check();
		const { id } = auth.user;

		const userDirectory = `/uploads/${id}`;

		const avatar = request.file('avatar', {
			types: ['image'],
			size: '2mb',
		});

		await avatar.move(Helpers.publicPath(userDirectory), {
			name: 'avatar.jpg',
			overwrite: true,
		});

		if (avatar.moved()) {
			auth.user.avatar_url = `${userDirectory}/avatar.jpg`;
			await auth.user.save();

			return avatar.error();
		}
	}
}

module.exports = AvatarController;
