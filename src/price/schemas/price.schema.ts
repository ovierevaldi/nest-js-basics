import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Price {
    @Prop({required: true})
    price: number

    @Prop({required: true, unique: true})
    name: string

    @Prop({default: 0})
    responseAmount: number

    @Prop({default: 0})
    surveryAmount: number

    @Prop({default: 0})
    connectedCalendarAmount: number
}

export const PriceSchema = SchemaFactory.createForClass(Price);