import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDatabase } from './app.database';

@Module({
  imports: [AppDatabase],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
