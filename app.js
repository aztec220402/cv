var today = new Date();
var hourNow = today.getHours();
var greeting ;

if (hourNow > 18) {
    greeting = "Good Evening!";
} else if (hourNow > 12) {
    greeting = "Good Afternoon!";
} else if (hourNow > 0) {
    geeting = "Good Morning!";
} else {
    greeting = "Welcome!";
}

document.write("<h6>"+ greeting + "</h6>")