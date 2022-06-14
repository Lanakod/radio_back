import Range from "@models/range.model";

export default class RangeService {
  static async add(range: string) {
    const created = await Range.create({
      range,
    });
    return created;
  }

  static async get() {
    const ranges = await Range.findAll();
    return ranges;
  }

  static async delete(id: number) {
    const range = await Range.findByPk(id);
    if (range) await range.destroy();
  }
}
