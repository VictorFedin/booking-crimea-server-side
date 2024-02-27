import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landlord } from './entities/landlord.entity';
import { ContactPerson } from './entities/contact.person.entity';
import { LandlordSocialLinks } from './entities/landlord.social.links.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Landlord, ContactPerson, LandlordSocialLinks]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class LandlordsModule {}
