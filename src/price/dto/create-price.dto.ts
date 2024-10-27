import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreatePriceDto {
    
    @IsNotEmpty()
    @IsNumber()
    price: number
    
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsNumber()
    responseAmount: number
    
    @IsOptional()
    @IsNumber()
    surveryAmount: number
    
    @IsOptional()
    @IsNumber()
    connectedCalendarAmount: number
}
