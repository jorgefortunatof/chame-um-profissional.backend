'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('users', table => {
			table.increments();
			table.string('avatar_url');
			table.string('email').notNullable().unique();
			table.string('name').notNullable();
			table.string('password').notNullable();
			table.string('phone');
			table.enu('type', ['user', 'professional', 'admin']).defaultTo('user');
			table.string('location');
			table
				.integer('category_id')
				.references('id')
				.inTable('categories')
				.onDelete('set null');
			table.text('description');
			table.integer('rating').defaultTo(0);
			table.string('facebook_url');
			table.string('instagram_url');
			table.timestamps();
		});
	}

	down() {
		this.drop('users');
	}
}

module.exports = UserSchema;
