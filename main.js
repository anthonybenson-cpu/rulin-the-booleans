/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num){
  return num > 5
}
function isNewTopScore(score, topScore){
  return score > topScore 
}
function isInDanger(num){
  return num >= 60 && num <= 71
}
function isCoasting(grade){
  return grade >= 72 && grade <= 83
}
function isSucceeding(grade){
  return grade >= 84 && grade <= 92
}
function isFailing(grade){
  return grade < 60
}
function isAcing(grade){
  return grade > 92
}
function isStudent(role){
  return role === "student"
}
function isTeacher(role){
  return role === "teacher"
}
function isAdmin(role){
  return role === "admin" 
}
function isElementary(schoolLevel){
  return schoolLevel === "elementary"
}
function areDifferentPeople(benson, williams){
  return benson != williams
}
function isMiddleSchoolTeacher(role, level){
  return role === "teacher" && level >= 6 && level <= 8
}
function notAnElementarySchoolAdministrator(level, role){
  return !(level === "elementary" && role === "admin")
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
