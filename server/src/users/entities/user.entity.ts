import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  EDITOR = 'editor',
  GUEST = 'guest',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole;
}
