
import axios from 'axios';
import { DatabaseService } from 'src/database/database.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async googleLogin(token: string) {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
    );
   console.log(response.data);
    var { email,hd } = response.data;
    
    if (hd !== 'sun-asterisk.com') {
      console.log('Unauthorized');
      throw new Error('Unauthorized');
    }
    console.log('Authorized');
    const userData: CreateAuthDto = {
      email,
    };

    let user = await this.databaseService.user.findUnique({ where: { email } });
    if (!user) {
      user = await this.databaseService.user.create({
        data: userData,
      });
    } else {
      user = await this.databaseService.user.update({
        where: { email },
        data: userData,
      });
    }

    return user;
  }
}