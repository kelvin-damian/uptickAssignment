let students = [
    {id:2, name:"samuel", grade: [70, 76, 55] },
    {id:4, name:"Bola", grade: [64, 69, 78] },
    {id:7, name:"Taiwo", grade: [57, 50, 80] },
    {id:12, name:"Kehinde", grade: [87, 68, 70] },
    {id:7, name:"Ngozi", grade: [77, 80, 50] }
]

let dataAverageScore = calculateAverageGrades(students);

function studentAverageGrades(grade){
    let studentTotalScore = grade.reduce((sum, grade) => sum + grade, 0);
    return studentTotalScore / grade.length;

}

function calculateAverageGrades(students){
    return students.map(student => {
        let studentResult = studentAverageGrades(student.grade);

        return {
            id: student.id,
            name: student.name,
            averageGrade: 
            studentResult.toFixed(2),
        };
    });
}
console.log(dataAverageScore);

function findTopStudent(students){
    let averagehighestScore = 0;
    let firstPlaceStudent;

    for(let student of students){
        let studentAverageGrade =  student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;
        
        if(studentAverageGrade > averagehighestScore){
            averagehighestScore = studentAverageGrade;

            firstPlaceStudent = student;

        }
    }

    return firstPlaceStudent;

}

let highestGradeStudent = findTopStudent(students);
if(highestGradeStudent){
    console.log(`first place:${highestGradeStudent.id} (name:${highestGradeStudent.name})`);
}else{
    console.log('No Record Found.');
}

//function to sort student by average grade in descending order
function sortStudentsByGrade(students){
    return students.slice().sort((a, b) => {
        let aAverage = studentAverageGrades(a.grade);
        let bAverage = studentAverageGrades(b.grade);

        return bAverage - aAverage;


    });
}

//calling the function
let sortedResult = sortStudentsByGrade(students);
console.log(sortedResult);