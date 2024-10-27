import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Price, PriceSchema } from './schemas/price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Price.name, schema: PriceSchema}])
  ],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
