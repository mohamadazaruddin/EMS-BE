import { Body, Controller, Get, Post } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { TimesheetDto } from './timesheet.dto';

@Controller('timesheet')
export class TimesheetController {
  constructor(private timesheetservice: TimesheetService) {}
  @Get()
  getRoles() {
    return this.timesheetservice.getTimesheet();
  }
  @Post()
  addRole(@Body() record: TimesheetDto) {
    return this.timesheetservice.addrecord(record);
  }
}
