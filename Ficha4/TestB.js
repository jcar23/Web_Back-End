const student = require('./testA');
var secondStu = new student ("Carl Fox", "Vocational Course");
secondStu.studentNumber = Math.ceil(Math.random()*30);
secondStu.studentInfo();
var thirdStu = new student ("Minnie Lin","bachelor");
thirdStu.studentNumber = "23"
thirdStu.studentInfo();