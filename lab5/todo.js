// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//
function updateCount() {
    let total = document.querySelector(".total");
    total.innerHTML = getTotalCount();

    let notDone = document.querySelector(".left-todo");
    const notDoneTasks = getTotalCount() - getDoneCount();
    notDone.innerHTML = notDoneTasks;
}

addNewItem("Να δηλώσω βιβλία.");
addNewItem("Να δώσω τα λεφτά για την πεζοπορία στο Πήλιο.");
addNewItem("Να πλύνω τα πιάτα που είναι μια βδομάδα στο νεροχύτη.");
colorEveryOddTask(item);

function addNewItem(inputValue) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;
    textSpan.classList.add("task");
    let dateSpan = document.createElement('span');
    let newDate = new Date();
    dateSpan.classList.add("date");
    dateSpan.textContent = newDate.toLocaleDateString('el-GR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        });
    let today = new Date();
    let timeDiff = Math.abs(today.getTime() - newDate.getTime());
    let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    if (diffDays == 0) {
        dateSpan.innerHTML += "<br>" + 'Σήμερα';
    }
    else{
        dateSpan.innerHTML += "<br>" + diffDays + ' ημέρες πριν';
    }
    ul.appendChild(li);
    li.appendChild(dateSpan);
    li.appendChild(textSpan);


    li.addEventListener("click", () => {
        if (li.classList.contains("done")) {
            li.classList.remove("done");
            updateCount();
        }
        else {
            li.classList.add("done");
            updateCount();
        }
    });
    li.addEventListener("dblclick", () => {
        const ul = document.querySelector('ul');
        ul.removeChild(li);
        updateCount();
        colorEveryOddTask(item);
    });

    updateCount();
    colorEveryOddTask(item);
};

let input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addNewItem(input.value);
        input.value = '';
    }
});


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
    const elements = item.querySelectorAll("li:nth-child(2n+1) .task");
    elements.forEach((i) => i.style.backgroundColor = "lightgrey");
}
