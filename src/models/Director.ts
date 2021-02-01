import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('directors')
class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Director
