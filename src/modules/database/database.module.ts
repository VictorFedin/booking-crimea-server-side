import { Module } from '@nestjs/common';
import { CountriesModule } from '../countries/countries.module';
import { StatesModule } from '../states/states.module';
import { CitiesModule } from '../cities/cities.module';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CountriesModule, StatesModule, CitiesModule, AuthModule],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
