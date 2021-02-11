
var dayOneButton = document.getElementById("day-one-btn");
var dayTwoButton = document.getElementById("day-two-btn");
var dayThreeButton = document.getElementById("day-three-btn");

var dayOneTimelineSchedule = document.getElementById("day-one-schedule");
var dayTwoTimelineSchedule = document.getElementById("day-two-schedule");
var dayThreeTimelineSchedule = document.getElementById("day-three-schedule");

dayOneButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "block";
    dayTwoTimelineSchedule.style.display = "none";
    dayThreeTimelineSchedule.style.display = "none";
}
dayTwoButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "none";
    dayTwoTimelineSchedule.style.display = "block";
    dayThreeTimelineSchedule.style.display = "none";
}
dayThreeButton.onclick = function() {
    dayOneTimelineSchedule.style.display = "none";
    dayTwoTimelineSchedule.style.display = "none";
    dayThreeTimelineSchedule.style.display = "block";
}