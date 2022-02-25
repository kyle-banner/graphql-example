import { injectable } from 'inversify';
import IMeetingsService from './meetings.interface';
import { getRepository } from 'typeorm';
import MeetingDto from 'src/dto/Meeting';
import { Meeting as MeetingEntity } from '../../entity/Meeting';
import { meeting as meetingEntityToDomainMapper } from '../../util/mapper/entityToDomain';
import { meeting as meetingDomainToEntityMapper } from '../../util/mapper/domainToEntity';
import meetingMocks from './meetingMocks';

@injectable()
class MeetingsService implements IMeetingsService {
  private meetingRepository = process.env.MOCKS ? undefined : getRepository(MeetingEntity);

  async getMeetings(): Promise<MeetingDto[]> {
    if(process.env.MOCKS) {
      return [meetingMocks.meetingMock(), meetingMocks.meetingMock()];
    }

    // @ts-ignore
    const meetingEntities = await this.meetingRepository.find({
      join: {
        alias: 'meeting',
        leftJoinAndSelect: {
          address: 'meeting.address',
          host: 'meeting.hostEmployeeId',
          joining: 'meeting.joiningEmployeeId',
        },
      },
    });
    if (meetingEntities.length) {
      const meetingDtos: MeetingDto[] = [];
      meetingEntities.forEach((entity) => {
        meetingDtos.push(meetingEntityToDomainMapper.map(entity));
      });
      return meetingDtos;
    }
    return [];
  }

  async getMeetingById(id: string): Promise<MeetingDto | undefined> {
    if(process.env.MOCKS) {
      return meetingMocks.meetingMock();
    }
    // @ts-ignore
    const meetingEntity = await this.meetingRepository.findOne(id, {
      join: {
        alias: 'meeting',
        leftJoinAndSelect: {
          address: 'meeting.address',
          host: 'meeting.hostEmployeeId',
          joining: 'meeting.joiningEmployeeId',
        },
      },
    });
    if (meetingEntity) return meetingEntityToDomainMapper.map(meetingEntity);
    return undefined;
  }

  async createMeeting(createMeetingRequest: MeetingDto): Promise<MeetingDto> {
    if(process.env.MOCKS) {
      return meetingMocks.meetingMock();
    }
    const meetingEntity = meetingDomainToEntityMapper.map(createMeetingRequest);
    // @ts-ignore
    const entityResponse = await this.meetingRepository.save(meetingEntity);
    return meetingEntityToDomainMapper.map(entityResponse);
  }

  async updateMeeting(updateMeetingRequest: MeetingDto): Promise<MeetingDto> {
    if(process.env.MOCKS) {
      return meetingMocks.meetingMock();
    }
    const meetingEntityToSave = meetingDomainToEntityMapper.map(updateMeetingRequest);
    // @ts-ignore
    const meetingEntity = await this.meetingRepository.findOne(meetingEntityToSave.id);
    let updatedMeetingEntity: MeetingEntity;
    if (meetingEntity && meetingEntity.id) {
      // @ts-ignore
      await this.meetingRepository.update(meetingEntity.id, meetingEntityToSave); // bug here where address is not saved, cascade on update isn't working
      updatedMeetingEntity = meetingEntityToSave;
    } else {
      // @ts-ignore
      updatedMeetingEntity = await this.meetingRepository.save(meetingEntityToSave);
    }
    return meetingEntityToDomainMapper.map(updatedMeetingEntity);
  }

  async deleteMeeting(id: string): Promise<MeetingDto | undefined> {
    if(process.env.MOCKS) {
      return meetingMocks.meetingMock();
    }
    // @ts-ignore
    const meetingEntity = await this.meetingRepository.findOne(id);
    if (meetingEntity) {
      // @ts-ignore
      await this.meetingRepository.remove(meetingEntity);
      return meetingEntityToDomainMapper.map(meetingEntity);
    }
    return undefined;
  }
}

export default MeetingsService;
