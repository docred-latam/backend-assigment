import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AgentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isAvailable: boolean;
}
