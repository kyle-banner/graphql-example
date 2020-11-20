import { Title, Practice } from '@part2/graphqlTypes';

const convertEmployeeTitle = (restTitle) => {
  switch(restTitle) {
    case "Analyst":
      return Title.An;
    case "Consultant":
      return Title.Co;
    case "Solution Architect":
      return Title.Sa;
    case "Consultant Manager":
      return Title.Cm;
    case "Principal Consultant":
      return Title.Pc;
    case "Solution Principal":
      return Title.Sp;
    case "Practice Area Lead":
      return Title.Pal;
    case "Practice Area Director":
      return Title.Pad;
    case "Managing Director":
      return Title.Md;
    case "General Manager":
      return Title.Gm;
    default:
      throw new Error("Server returned invalid title");
  }
}

const convertEmployeePractice = (restPractice) => {
  switch(restPractice) {
    case "Technology Enablement":
      return Practice.Te;
    case "Data and Analytics":
      return Practice.Da;
    case "Delivery Leadership":
      return Practice.Dl;
    case "Business Advisory Services":
      return Practice.Bas;
    case "Accounts":
      return Practice.Ac;
    default:
      throw new Error("Server returned invalid practice");
  }
}

const convertRestToGraphEmployeeEnums = (employee) => {
  employee.title = convertEmployeeTitle(employee.title);
  employee.practice = convertEmployeePractice(employee.practice);
  return employee;
};

export default convertRestToGraphEmployeeEnums;