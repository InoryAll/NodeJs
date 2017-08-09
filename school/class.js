var student=require('./student');
var teacher=require('./teacher');

function add(teacherName,studentsName) {
    teacher.add(teacherName);
    studentsName.forEach(function (item,index) {
        student.add(item);
    });
}

exports.add=add;