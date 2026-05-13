//To do app
console.log("Welcome to to-do app!");
let tasks = [];
let wish = prompt("Enter whether you want to add/delete task, quit or see the list");

while(true) {
    if(wish=="add") {
        let ad = prompt("Enter the task that you want to add:");
        tasks.push(ad);
        console.log("Task added");
    }
    if(wish=="delete") {
        let re = prompt("Enter the task that you want to remove:");
        tasks.splice(tasks.indexOf(re), 1);
        console.log("Task removed");
    }
    if(wish=="show") {
        console.log("---------------");
        for(let list of tasks) {
            console.log(list);
        }
        console.log("---------------");
    }
    if(wish=="quit") {
        console.log("You quit!");
        break;
    }
    wish = prompt("Enter whether you want to add/remove task, quit or see the list");


}
