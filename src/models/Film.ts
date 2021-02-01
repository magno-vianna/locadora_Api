/* eslint-disable camelcase */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'

import RentRegistersUsersFilms from './RentRegisterUserFilm'

export type AvailableRoleType = 'available' |'unavailable';

@Entity('films')
class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_director: number

  @Column()
  title: string;

  @Column({
    name: 'lease_cost',
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0
  })
  leaseCost: number;

  @Column()
  id_genre: number

  @Column({
    type: 'enum',
    enum: ['available', 'unavailable'],
    default: 'available'
  })
  availability: AvailableRoleType;

  @ManyToMany(() => RentRegistersUsersFilms, rent_registers_users_films => rent_registers_users_films.title)
  id_title: RentRegistersUsersFilms
}
export default Film
