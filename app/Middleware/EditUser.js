'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminOrSelf {
	/**
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Function} next
	 */
	async handle({ request, response, auth, params }, next) {
		const { id } = params;
		await auth.check();

		if (auth.user.type !== 'admin') {
			if (auth.user.id === id) {
				if (request.method() === 'PUT') {
					const { type } = request.all();

					if (type === 'admin') {
						return response.status(401).json();
					}
				}
			} else {
				return response.status(401).json();
			}
		}

		return await next();
	}
}

module.exports = AdminOrSelf;
