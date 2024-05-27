let choice = prompt("What would you like to do?");
let todo = [];
while (choice !== "quit".toLocaleLowerCase()) {
  if (choice === "new".toLocaleLowerCase()) {
    let newEntry = prompt("Enter new Todo");
    todo.push(newEntry);
    console.log(`${todo[todo.length - 1]} has been added`);
  }
  if (choice === "list".toLocaleLowerCase()) {
    console.log("******************");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("******************");
  }
  if (choice === "delete".toLocaleLowerCase()) {
    let index = prompt("Enter index of Todo to delete");
    console.log(`${index}: ${todo[index]} has been deleted`);
    todo.splice(index, 1);
  }
  choice = prompt("What would you like to do?");
}
console.log("To do list quit");
