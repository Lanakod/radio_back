import QTH from "@models/qth.model";

export default class QTHService {
  static async add(qth: string) {
    const created = await QTH.create({
      qth,
    });
    return created;
  }

  static async get() {
    const qths = await QTH.findAll();
    return qths;
  }

  static async delete(id: number) {
    const qth = await QTH.findByPk(id);
    if (qth) await qth.destroy();
  }
}
