// Fact Generator - more facts needed
var factList = [
  "Discipline interventions (such as in the TTI) increase relapse by as much as 8%, while counseling intervention (a healthy and positive option) decreases relapse by approximately 13% - NYRA", /*0*/
  "Conversion therapy has only been outlawed in 20 out of 50 states in the U.S. - NYRA", /*1*/
  "Sometimes, teenagers are abducted in the middle of the night and sent to facilities by escort service programs - NYRA", /*2*/
  "With the rise of #breakingcodesilence, parents have no choice but to see these videos embedded within the hashtags of wilderness therapy and boarding schools. It has become an effective way for survivors to reach parents before they make the mistake of sending their child to these programs, and to help them consider safer options - Katherine McNamara for breakingcodeislence.org", /*3*/
  "With over 1,000 residential treatment facilities in operation today, the fight to end this abuse has only just begun. - Joshua Scarpuzzi, Media Lead for Breaking Code Silence" /*4*/
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
