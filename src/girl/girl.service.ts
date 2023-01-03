import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  constructor(@InjectRepository(Girl) private readonly girl: Repository<Girl>) { }

  getGirls() {
    return this.girl.find();
  }

  addGirl(body: Girl) {
    return this.girl.save(body);
  }

  deleteGirl(id: number) {
    return this.girl.delete(id);
  }

  updateGirl(data: Girl) {
    const { id } = data;
    return this.girl.update(id, data);
  }

  getGirlById(id: number) {
    let reJson: any = {};
    switch (id) {
      case 1:
        reJson = {
          id: 1,
          name: '111',
          age: 18,
        };
        break;
      case 2:
        reJson = {
          id: 2,
          name: '222',
          age: 22,
        };
        break;
      case 3:
        reJson = {
          id: 3,
          name: '333',
          age: 23,
        };
        break;
    }
    return reJson;
  }

  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}
