function student(studentName, studentClass){
    this.studentName = studentName,
    this.studentClass = studentClass

}
student.prototype.studentInfo = function () {
    console.log("Student Name : " + this.studentName + 
    "\nStudent Number : " + this.studentNumber + "\nStudent Class : " + this.studentClass )
}
student.prototype.studentNumber = 0


var firstStu = new student ("Jucelio Cruz", "Turma A")
firstStu.studentNumber = Math.ceil(Math.random()*10)
firstStu.studentInfo()

module.exports = student;