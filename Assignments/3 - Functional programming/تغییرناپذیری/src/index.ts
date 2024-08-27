type Person = {
  id: string;
  name: string;
  age: number;
};

function excludeYoungPersons(people: readonly Person[]): readonly { readonly id: string; name: string; age: number }[] {
  return people.filter((person) => person.age > 30);
}


export { excludeYoungPersons };
