import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsers extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('avatar_url')
      table.string('email').notNullable().unique()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.string('phone')
      table.boolean('is_professional')
      table.string('location')
      table.integer('category_id').references('id').inTable('categories').onDelete('set null')
      table.text('description')
      table.integer('rating').defaultTo(0)
      table.string('facebook_url')
      table.string('instagram_url')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
