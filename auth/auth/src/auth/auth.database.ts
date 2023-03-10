import mongoose from 'mongoose';
import { singleton } from "tsyringe";

@singleton()
export class AuthDatabase {
  constructor(
    private readonly uri: string,
    private readonly dbName: string
  ) { }

  async connect() {
    await mongoose.connect(this.uri, {
      dbName: this.dbName
    });
  }
}
