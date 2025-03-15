export type User = {
  id: number;
  fName: string;
  lName: string;
};

export const users: User[] = [{
  id: 1,
  fName: "John",
  lName: "Doe"
},
{
  id: 2,
  fName: "Anakin",
  lName: "Skywalker"
},
{
  id: 3,
  fName: "Foo",
  lName: "Bar"
},
{
  id: 4,
  fName: "Julius",
  lName: "Cesar"
}];