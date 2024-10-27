import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceModule } from './price/price.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/meeting_appsDB'),
    UserModule,
    PriceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
