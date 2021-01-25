/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BeforeInsert, BeforeUpdate } from 'typeorm'

import RentRegistersUsersFilms from './RentRegisterUserFilm'
import bcrypt from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  blocked: boolean;

  @ManyToMany(() => RentRegistersUsersFilms, rent_registers_users_films => rent_registers_users_films.user)
  id_name_user: RentRegistersUsersFilms

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword () {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}
export default User
