import { Entity, PrimaryGeneratedColumn, Column, Long, OneToMany } from 'typeorm'

import Film from './Film'

@Entity('directors')
class Director {
  @PrimaryGeneratedColumn('uuid')
  id: Long;

  @Column()
  name: string;

  @OneToMany(() => Film, film => film.director)
  films: Film[];
}

export default Director
