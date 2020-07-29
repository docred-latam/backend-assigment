import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IssueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isSolved: boolean;
}
