// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//
let total = document.querySelector(".total");
total.innerHTML = getTotalCount();
console.log(getTotalCount());

let notDone = document.querySelector(".left-todo");
const notDoneTasks = getTotalCount() - getDoneCount();
notDone.innerHTML = notDoneTasks;
console.log(notDoneTasks);

colorEveryOddTask(item);

//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() {
    const doneTasks = document.querySelectorAll(".done");
    return doneTasks.length;
}

// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    const allTasks = document.querySelectorAll("li");
    return allTasks.length;
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    const item = document.querySelector("ul");
    const elements = item.querySelectorAll("li:nth-child(2n+1) span");
    elements.forEach((i) => i.style.backgroundColor = "lightgrey");
}
