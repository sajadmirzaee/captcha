import { Injectable } from "@nestjs/common";
import { AppDatabase } from "./app.database";
import { CaptchaModel } from "./captchaModel";
@Injectable()
export class AppService {
  constructor(
    private readonly appDatabase: AppDatabase,
    private readonly captchaModel: CaptchaModel
  ) {}
  async getCaptcha(): Promise<Object> {
    var model: CaptchaModel = {
      token: "123456",
      captcha: "dfajkhfihqaer",
    };
    var result = await this.appDatabase.insertDatabse();
    return model;
  }
}
