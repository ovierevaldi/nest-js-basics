import { BadRequestException, ConflictException, HttpCode, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Price } from './schemas/price.schema';
import { ResponseAPI } from 'src/types/types';

@Injectable()
export class PriceService {
  constructor(@InjectModel(Price.name) private priceModel: Model<Price>){}

  async create(createPriceDto: CreatePriceDto): Promise<ResponseAPI> {
    try {
      const price = await this.priceModel.create(createPriceDto);
      return { message: 'Success creating price', details: { price } };
    } catch (error) {
      if(error.code === 11000)
        throw new HttpException('Price with this name already exsist', HttpStatus.CONFLICT)
      else
        throw new InternalServerErrorException()
    }
  }
  async findAll(): Promise<Price[]> {
    return await this.priceModel.find();
  }

  async findOne(id: string): Promise<Price> {
    if(isValidObjectId(id) === false){
      throw new BadRequestException('Not valid objectID')
    }

    return await this.priceModel.findById(id)
  }

  async update(id: string, updatePriceDto: UpdatePriceDto): Promise<ResponseAPI> {
    if(isValidObjectId(id) === false){
      throw new BadRequestException('Not valid objectID')
    }

    try {
      const updatedPrice = await this.priceModel.findOneAndUpdate({_id: id}, updatePriceDto, {new: true});
      return { message: 'Success updating price data', details: { updatedPrice } };
    } catch (error) {
      console.log(error)
      return new HttpException(error, HttpStatus.CONFLICT)
    }
  }

  async remove(id: string): Promise<ResponseAPI>  {
    if(isValidObjectId(id) === false){
      throw new BadRequestException('Not valid objectID')
    }

    try {
      const deletedPrice = await this.priceModel.deleteOne({_id: id});
      return { message: 'Price data deleted', details: { deletedPrice } };
    } catch (error) {
      console.log(error)
      return new HttpException(error, HttpStatus.CONFLICT)
    }
  }
}
