// I am declaring this variables so that I can get references to important elements in my HTML
const form = document.getElementById("guest-form");
const nameInput = document.getElementById("guest-name");
const categorySelect = document.getElementById("guest-category");
const guestList = document.getElementById("guest-list");

// I add an eventlistener that waits for a submit button to be clicked and I add an event element that prevents the webpage from reloading when I press submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
// This ensures people in the event do not exceed 10
    if (guestList.children.length >= 10) {
        alert("The maximum number of people for this event has reached!");
        return;
    }
// Declare new variables that store the input that was put by the user
    const name = nameInput.value.trim();
    const category = categorySelect.value;
// This makes sure an empty name is not put as input
    if (name === "") return;
// Created a li element
    const li = document.createElement("li");
// Created a variable tag where I store the values for the category and I created two CSS classes for tag and category
    const tag = document.createElement("span");
    tag.textContent = category;
    tag.classList.add("tag", category);
// Created a span to display the guest name and put the current time next to it and added style.flex to make the span to fill the available space
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${name} (${new Date() .toLocaleTimeString()})`;
    nameSpan.style.flex = 1;
// Created this rsvp button so that guest can be marked as attending and not attending
    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Attending";
    rsvpBtn.className = "rsvp";
    rsvpBtn.onclick = () => {
        rsvpBtn.textContent = rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
    };
// Added a remove button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();
// Added an edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => {
        const newName = prompt("Enter new name:", name);
        if (newName && newName.trim() !=="") {
            nameSpan.textContent = `${newName.trim()} (${new Date () .toLocaleTimeString()})`
        }
    };

// Add all the created elements to the line
    li.append(nameSpan, tag, rsvpBtn, editBtn, deleteBtn);
// Add the li to the guest list
    guestList.appendChild(li);
// Cleares the form input after you press add guest
    form.reset();
});