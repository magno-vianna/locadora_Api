import { Entity, PrimaryGeneratedColumn, Column, Long, OneToMany } from 'typeorm'

import Film from './Film'

@Entity('genres')
class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: Long;

  @Column()
  type: string;

  @OneToMany(() => Film, film => film.genre)
  films: Film[];
}
export default Genre
