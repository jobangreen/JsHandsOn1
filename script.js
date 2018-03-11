alert("Please enter grades 0-100 only");
let grades = [];
function findLetter(){
    let input = document.getElementById("grade").value;
    grades.push(input);
console.log(grades);
if (input >100 || input <0)
{
    var noGrade = document.createElement("h1");  
    var t = document.createTextNode("Please enter number between 0-100");  
    noGrade.appendChild(t);                                
    document.body.appendChild(noGrade);
}
else if (input >=90){
    var gradeA = document.createElement("h1");  
    var t = document.createTextNode("Letter Grade : A");  
    gradeA.appendChild(t);                                
    document.body.appendChild(gradeA);
}
else if (input>=80){
    var gradeB = document.createElement("h1");  
    var t = document.createTextNode("Letter Grade : B");  
    gradeB.appendChild(t);                                
    document.body.appendChild(gradeB);
}
else if (input>=70){
    var gradeC = document.createElement("h1");  
    var t = document.createTextNode("Letter Grade : C");  
    gradeC.appendChild(t);                                
    document.body.appendChild(gradeC);
}
else if (input>=60){
    var gradeD = document.createElement("h1");  
    var t = document.createTextNode("Letter Grade : D");  
    gradeD.appendChild(t);                                
    document.body.appendChild(gradeD);
}
else if (input >=0){
    var gradeF = document.createElement("h1");  
    var t = document.createTextNode("Letter Grade : F");  
    gradeF.appendChild(t);                                
    document.body.appendChild(gradeF);
}

var sum = 0;
for (var i=0; i < grades.length; i++){
     sum += parseInt (grades[i]);
}
var avg = sum / grades.length;
console.log (sum, avg, grade.length)
document.getElementById("average").innerHTML = "Average Grade: " + avg;

}
