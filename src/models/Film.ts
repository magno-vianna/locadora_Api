/* eslint-disable camelcase */
import { Entity, PrimaryGeneratedColumn, Column, Long, ManyToOne, ManyToMany } from 'typeorm'

import Director from './Director'
import Genre from './Genre'
import RentRegistersUsersFilms from './RentRegisterUserFilm'

export type AvailableRoleType = 'available' |'unavailable';

@Entity('films')
class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Director, director => director.films)
  director: Director;

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

  @ManyToOne(() => Genre, genre => genre.films)
  genre: Genre;

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
