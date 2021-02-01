import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('genres')
class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
export default Genre
