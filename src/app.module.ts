import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppDatabase } from "./app.database";
import { CaptchaModel } from "./captchaModel";

@Module({
  imports: [AppDatabase, CaptchaModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
