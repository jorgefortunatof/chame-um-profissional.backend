import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Category from './Category'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public avatarUrl: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public password?: string

  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public location: string

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column()
  public description: string

  @column()
  public rating: number

  @column()
  public facebookUrl: string

  @column()
  public instagramUrl: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password && user.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
