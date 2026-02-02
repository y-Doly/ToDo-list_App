const affirmations = [
    "You are capable of amazing things ",
    "Small steps lead to big success ",
    "Stay consistent, not perfect ",
    "Believe in yourself ",
    "Progress is progress, no matter how small "
];

// Show different affirmation on every refresh
function showAffirmation() {
    let lastIndex = localStorage.getItem("lastAffirmationIndex");
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * affirmations.length);
    } while (newIndex == lastIndex);

    localStorage.setItem("lastAffirmationIndex", newIndex);
    document.getElementById("affirmation").innerText = affirmations[newIndex];
}

showAffirmation();

// Add task
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
