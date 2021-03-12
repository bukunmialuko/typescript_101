type StringOrNum = string | number;
type ObjWIthName = { name: string, uid: string | number };

const loginDetail = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWIthName) => {
  console.log(`${user.name} says hello`);
}

loginDetail("12345", "Bukunmi");

greet({ name: "Bukunmi", uid: 12345 });