'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class Extensions extends Schema {
	up() {
		this.createExtensionIfNotExists('uuid-ossp');
	}

	down() {
		this.dropExtension('uuid-ossp');
	}
}

module.exports = Extensions;
