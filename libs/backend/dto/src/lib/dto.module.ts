import { Module } from '@nestjs/common';
import { CreateMealDto } from './meal.dto'

@Module({
  controllers: [],
  providers: [],
  exports: [CreateMealDto],
})
export class DtoModule {}
