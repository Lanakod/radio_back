import { Column, Table, Model, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

@Table({ tableName: "range" })
export default class Range extends Model {
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
  range: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}
