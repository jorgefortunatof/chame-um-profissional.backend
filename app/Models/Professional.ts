import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Professional extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public avatarUrl: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public phone: string

  @column()
  public location: string

  @column()
  public categoryId: number

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
}
