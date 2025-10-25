/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr.map((person) => {
    if (person.profession === "developer") {
      return person;
    }
  });
  for (let dev of developers) {
    if (dev !== undefined) {
      console.log(dev);
    }
  };
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newPerson = { id: 4, name: "abhinav", age: "20", profession: "intern" };
  arr.push(newPerson);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((person) => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    { id: 7, name: "charlie", age: "21", profession: "tester" },
  ];
  let combinedArr = arr.concat(newArr);
  console.log(combinedArr);
}
