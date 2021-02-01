import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from 'typeorm'
import Film from './Film'
import User from './User'

@Entity('rent_registers_users_films')
class RentRegisterUserFilm {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'id_name_user' })
  idNameUser: number;

  @ManyToMany(() => User, user => user.name)
  user: User;

  @Column({ name: 'id_title' })
  idTitle: number;

  @ManyToMany(() => Film, film => film.title)
  title: Film;

  @Column({ name: 'lease_start_at' })
  leaseStartAt: Date;

  @Column({ name: 'lease_end_at' })
  leaseEndAt: Date;

  @Column({ name: 'film_delivered_at' })
  filmDeliveredAt: Date;
}
export default RentRegisterUserFilm
