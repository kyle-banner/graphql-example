import Title from '../../dto/Title';
import Practice from '../../dto/Practice';

function employeesMock() {
  return [
    {
      name: {
        firstName: 'Kyle',
        lastName: 'Banner',
      },
      title: Title.SA,
      email: 'kyle.banner@slalom.com',
      practice: Practice.TE,
    },
    {
      name: {
        firstName: 'Josh',
        lastName: 'Prouty',
      },
      title: Title.CO,
      email: 'joshua.prouty@slalom.com',
      practice: Practice.DL,
    }
  ]
}

function employeeMock() {
  return {
    name: {
      firstName: 'Kyle',
      lastName: 'Banner',
    },
    title: Title.SA,
    email: 'kyle.banner@slalom.com',
    practice: Practice.TE,
  };
}

export default {
  employeesMock,
  employeeMock,
}