import { Column, Table, Model, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

@Table({ tableName: "session" })
export default class Session extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  myRange: string;

  @Column({
    type: DataType.STRING,
  })
  myQTH: string;

  @Column({
    type: DataType.STRING,
  })
  callSign: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  QTH: string;

  @Column({
    type: DataType.STRING,
  })
  signal: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}
