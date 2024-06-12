import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { TimesheetDto } from './timesheet.dto';

@Controller('timesheet')
export class TimesheetController {
  constructor(private timesheetservice: TimesheetService) {}
  @Get(':userId')
  getRoles(@Param('userId') userId: number) {
    return this.timesheetservice.getTimesheet(userId);
  }
  @Post()
  addRole(@Body() record: TimesheetDto) {
    return this.timesheetservice.addrecord(record);
  }
}
