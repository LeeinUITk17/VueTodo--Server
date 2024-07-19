
import axios from 'axios';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-auth.dto';


export class AuthService {
  constructor(private readonly prisma: DatabaseService) {}

  async googleLogin(token: string) {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
    );

    const { email } = response.data;

    const userData: CreateUserDto = {
      email,
      accessToken: token,
    };

    let user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.user.create({
        data: userData,
      });
    } else {
      user = await this.prisma.user.update({
        where: { email },
        data: userData,
      });
    }

    return user;
  }
}