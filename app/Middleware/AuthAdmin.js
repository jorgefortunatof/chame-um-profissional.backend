'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthAdmin {
	/**
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Function} next
	 */
	async handle({ response, auth }, next) {
		await auth.check();

		if (auth.user.type !== 'admin') {
			return response.status(401).json();
		}

		await next();
	}
}

module.exports = AuthAdmin;
