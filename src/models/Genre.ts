import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import Film from './Film'

@Entity('genres')
class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => Film, film => film.genre)
  films: Film[];
}
export default Genre
