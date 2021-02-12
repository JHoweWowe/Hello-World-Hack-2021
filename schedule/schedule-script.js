
var dayOneButton = document.getElementById("day-one-btn");
var dayTwoButton = document.getElementById("day-two-btn");
var dayThreeButton = document.getElementById("day-three-btn");

var dayOneTimelineSchedule = document.getElementById("day-one-schedule");
var dayTwoTimelineSchedule = document.getElementById("day-two-schedule");
var dayThreeTimelineSchedule = document.getElementById("day-three-schedule");

let dayOneBtn = document.getElementById("day-one-btn");
let dayTwoBtn = document.getElementById("day-two-btn");
let dayThreeBtn = document.getElementById("day-three-btn");

dayOneButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "block";
    dayTwoTimelineSchedule.style.display = "none";
    dayThreeTimelineSchedule.style.display = "none";

    dayOneBtn.style.background = "#B23429";
    dayOneBtn.style.color = "#FFF";
    dayTwoBtn.style.background = "#FFF";
    dayTwoBtn.style.color = "#B23429";
    dayThreeBtn.style.background = "#FFF";
    dayThreeBtn.style.color = "#B23429";
}
dayTwoButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "none";
    dayTwoTimelineSchedule.style.display = "block";
    dayThreeTimelineSchedule.style.display = "none";

    dayOneBtn.style.background = "#FFF";
    dayOneBtn.style.color = "#B23429";
    dayTwoBtn.style.background = "#B23429";
    dayTwoBtn.style.color = "#FFF";
    dayThreeBtn.style.background = "#FFF";
    dayThreeBtn.style.color = "#B23429";
}
dayThreeButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "none";
    dayTwoTimelineSchedule.style.display = "none";
    dayThreeTimelineSchedule.style.display = "block";

    dayOneBtn.style.background = "#FFF";
    dayOneBtn.style.color = "#B23429";
    dayTwoBtn.style.background = "#FFF";
    dayTwoBtn.style.color = "#B23429";
    dayThreeBtn.style.background = "#B23429";
    dayThreeBtn.style.color = "#FFF";
}