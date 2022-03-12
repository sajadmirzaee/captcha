import { Injectable } from "@nestjs/common";
import { AppDatabase } from "./app.database";
@Injectable()
export class AppService {
  constructor(private readonly appDatabase: AppDatabase) {}
  getCaptcha(): Promise<Object> {
    return new Promise((resolve) => {
      resolve({
        data: "sajad",
      });
    });
  }
}
