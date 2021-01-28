import { Entity, PrimaryGeneratedColumn, Long, CreateDateColumn, ManyToMany } from 'typeorm'
import Film from './Film'
import User from './User'

@Entity('rent_registers_users_films')
class RentRegisterUserFilm {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToMany(() => User, user => user.name)
  user: User;

  @ManyToMany(() => Film, film => film.title)
  title: Film;

  @CreateDateColumn({ name: 'lease_start_at' })
  leaseStartAt: Date;

  @CreateDateColumn({ name: 'lease_end_at' })
  leaseEndAt: Date;

  @CreateDateColumn({ name: 'film_delivered_at' })
  filmDeliveredAt: Date;
}
export default RentRegisterUserFilm
