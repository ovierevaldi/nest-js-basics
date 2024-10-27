import { NestMiddleware } from "@nestjs/common";

export class LoggerMiddleWare implements NestMiddleware{
    use(req: any, res: any, next: (error?: Error | any) => void) {
        console.log('Middleware')
        next();
    }
}