import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convenience } from './convenience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Convenience])],
  controllers: [],
  providers: [],
  exports: [],
})
export class ConveniencesModule {}
