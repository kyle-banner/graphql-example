import { Title, Practice } from '@part3/graphqlTypes';

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
    case "AN":
      return Title.An;
    case "CO":
      return Title.Co;
    case "SA":
      return Title.Sa;
    case "CM":
      return Title.Cm;
    case "PC":
      return Title.Pc;
    case "SP":
      return Title.Sp;
    case "PAL":
      return Title.Pal;
    case "PAD":
      return Title.Pad;
    case "MD":
      return Title.Md;
    case "GM":
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
    case "TE":
      return Practice.Te;
    case "DA":
      return Practice.Da;
    case "DL":
      return Practice.Dl;
    case "BAS":
      return Practice.Bas;
    case "AC":
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