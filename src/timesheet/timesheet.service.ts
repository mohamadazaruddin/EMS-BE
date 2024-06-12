import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Timesheet } from './timesheet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private readonly timesheetRepository: Repository<Timesheet>,
  ) {}

  async getTimesheet(userId: number) {
    return this.timesheetRepository.findBy({
      employee: { id: userId },
    });
  }

  async addrecord(record: any) {
    const createRecord = this.timesheetRepository.create(record);
    return this.timesheetRepository.save(createRecord);
  }
}
