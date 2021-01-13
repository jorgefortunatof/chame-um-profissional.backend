import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateCategory extends BaseSchema {
  protected tableName = 'category'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('name').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
