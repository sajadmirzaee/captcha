import { Injectable } from "@nestjs/common";
import { createClient } from "redis";
@Injectable()
export class AppDatabase {
  #client: Object;
  constructor() {
    this.#client = createClient();
  }

  async insertDatabse(): Promise<boolean>{
    return true;
  }
}
