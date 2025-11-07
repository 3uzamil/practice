// This is a simple age check program
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
};

// This is a simple grade check program
let marks = prompt("Enter your marks:");
if (marks < 0 || marks > 100) {
    console.log("Invalid marks.");
}
else if (marks !== Number(marks) || marks == "") {
    console.log("Please enter a valid number.");
}
 else {
    if (marks >= 90) {
        console.log("You got an 'A1' grade.");
    } else if (marks >= 80) {
        console.log("You got an 'A' grade.");
    } else if (marks >= 70) {
    console.log("You got a 'B' grade.");
} else if (marks >= 60) {
    console.log("You got a 'C' grade.");
} else if (marks >= 50) {
    console.log("You got a 'D' grade.");
} else {
    console.log("You are failed.");
}
};
