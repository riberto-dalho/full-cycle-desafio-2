import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('routes')
export class RoutesController {
  // constructor(private readonly routesService: RoutesService) {}

  private positions = [
    {
      _id: '1',
      title: 'Primeiro',
      startPosition: { lat: -15.82594, lng: -47.92923},
      endPosition: { lat: -15.82942, lng: -47.92765}
    },
    {
        _id: '2',
        title: 'Segundo',
        startPosition: { lat: -15.82449, lng: -47.92756},
        endPosition: { lat: -15.8276, lng: -47.92621}
    },
    {
        _id: '3',
        title: 'Terceiro',
        startPosition: { lat: -15.82331, lng: -47.92588},
        endPosition: { lat: -15.82758, lng: -47.92532}
    },
    {
        _id: '4',
        title: 'Quarto',
        startPosition: { lat: -15.82301, lng: -47.92901},
        endPosition: { lat: -15.82701, lng: -47.92701}
    },
    {
        _id: '5',
        title: 'Quinto',
        startPosition: { lat: -15.82601, lng: -47.92801},
        endPosition: { lat: -15.82201, lng: -47.92501}
    }];

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    // return this.routesService.create(createRouteDto);
  }

  @Get()
  findAll() {
    // return this.routesService.findAll();
    return this.positions;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.routesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    // return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.routesService.remove(+id);
  }
}
