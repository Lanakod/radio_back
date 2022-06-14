import Session from "@models/session.model";

export default class SessionService {
  static async add(myRange: string, myQTH: string, callSign: string, name: string, QTH: string, signal: string) {
    const created = await Session.create({
      myRange,
      QTH,
      callSign,
      myQTH,
      name,
      signal,
    });
    return created;
  }

  static async get() {
    const radios = await Session.findAll();
    return radios;
  }

  static async delete(id: number) {
    const session = await Session.findByPk(id);
    if (session) await session.destroy();
  }
}
