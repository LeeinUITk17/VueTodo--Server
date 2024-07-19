import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {

    constructor(
        private readonly databaseService: DatabaseService
      ) {}
    async create(userinfo: any): Promise<any> {
    
        return this.databaseService.user.create({
            data: {             
                email: userinfo.email,
            }
        })
    }
}
