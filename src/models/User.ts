/* eslint-disable camelcase */
import { Entity, PrimaryGeneratedColumn, Column, Long, ManyToMany } from 'typeorm'

import RentRegistersUsersFilms from './RentRegisterUserFilm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: Long;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  blocked: boolean;

  @ManyToMany(() => RentRegistersUsersFilms, rent_registers_users_films => rent_registers_users_films.user)
  id_name_user: RentRegistersUsersFilms
}
export default User
