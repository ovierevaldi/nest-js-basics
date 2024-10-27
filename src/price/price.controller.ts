import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './schemas/price.schema';
import { ResponseAPI } from 'src/types/types';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post()
  create(@Body() createPriceDto: CreatePriceDto): Promise<ResponseAPI> {
    return this.priceService.create(createPriceDto);
  }

  @Get()
  findAll(): Promise<Price[]> {
    return this.priceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Price> {
    return this.priceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto): Promise<ResponseAPI> {
    return this.priceService.update(id, updatePriceDto);
  }

  @Delete(':id')
  emove(@Param('id') id: string): Promise<ResponseAPI>  {
    return this.priceService.remove(id);
  }
}
