import { Controller, Get, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}

  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Get('/findGirlByName/:name')
  findGirlByName(@Param() params): any {
    return this.girlService.getGirlByName(params.name);
  }

  @Post('add')
  addGirl(@Body() body): any {
    // console.log(body);
    // return body;
    return this.girlService.addGirl(body);
  }

  @Get('getGirlById')
  getGirlById(@Query() query): any {
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }

  @Get('/findGirlById/:id')
  findGirlById(@Param() params, @Headers() headers): any {
    console.log('28 headers', headers);
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }

  @Get('/delete/:id')
  deleteGirl(@Param() param): any {
    const id: number = parseInt(param.id);
    return this.girlService.deleteGirl(id);
  }

  @Post('update')
  updateGirl(@Body() body): any {
    return this.girlService.updateGirl(body);
  }
}
