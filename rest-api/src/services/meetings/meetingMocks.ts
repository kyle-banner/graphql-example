import Title from '../../dto/Title';
import Practice from '../../dto/Practice';

function meetingMock() {
  return {
    scheduledTime: '2020-09-08T04:46:46+0000',
    address: {
      line1: '1634 18th St.',
      city: 'Denver',
      state: 'Colorado',
      zipCode: 80202,
    },
    employees: ['1234', '5678']
  };
}

export default {
  meetingMock
}