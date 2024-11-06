import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: () => void) {
    const { authorization } = request.headers;
    if (!authorization)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    if (authorization !== 'xyz123')
      throw new HttpException('Unauthorized', HttpStatus.FORBIDDEN);
    next();
  }
}
