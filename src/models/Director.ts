import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import Film from './Film'

@Entity('directors')
class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Film, film => film.director)
  films: Film[];
}

export default Director
