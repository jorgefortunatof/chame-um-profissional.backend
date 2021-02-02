'use strict';

const BaseExceptionHandler = use('BaseExceptionHandler');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
	/**
	 * Handle exception thrown during the HTTP lifecycle
	 *
	 * @method handle
	 *
	 * @param  {Object} error
	 * @param  {Object} options.request
	 * @param  {Object} options.response
	 *
	 * @return {void}
	 */
	async handle(error, { request, response }) {
		if (error.status === 500) {
			console.log(`[${new Date().toUTCString()}] - ${error}`);

			return response
				.status(error.status)
				.json({ message: 'Erro interno do servidor' });
		}

		switch (error.code) {
			case 'E_USER_NOT_FOUND':
				return response
					.status(error.status)
					.json({ message: 'Usuário não existe' });
			case 'E_PASSWORD_MISMATCH':
				return response
					.status(error.status)
					.json({ message: 'Credenciais incorretas' });
		}

		return response.status(error.status).json({ message: error.message });
	}

	/**
	 * Report exception for logging or debugging.
	 *
	 * @method report
	 *
	 * @param  {Object} error
	 * @param  {Object} options.request
	 *
	 * @return {void}
	 */
	async report(error, { request }) {}
}

module.exports = ExceptionHandler;
