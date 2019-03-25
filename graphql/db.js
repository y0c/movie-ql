import movies from "./Film.json";

let people = [
  {
    name: "hosung",
    age: 26
  },
  {
    name: "test",
    age: 10
  },
  {
    name: "ersdfsdf",
    age: 20
  },
  {
    name: "xcvxcv",
    age: 21
  }
];

people = people.map((v, i) => {
  v["id"] = i;
  return v;
});

const getById = id => people.find(v => v.id === id);

export { people, getById };
