import { Column, Table, Model, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";

@Table({ tableName: "qth" })
export default class QTH extends Model {
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
  qth: string;

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}
