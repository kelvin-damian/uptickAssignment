**# UPtick Talent Engineering Programme Assignment II**

*Problem-Solving Question: Data Manipulation with Arrays and Objects*

> **This Repository contains the solution using javascript functions to calculate average grade, returning the information of the student with the highest average grade score and the sorting of students by grades in a descending order format**

##### using the code snippet below as the array of student object;

``let students` = `[`
    `{id:2, name:"samuel", grade: [70, 76, 55] },`
    `{id:4, name:"Bola", grade: [64, 69, 78] },`
    `{id:7, name:"Taiwo", grade: [57, 50, 80] },`
   ` {id:12, name:"Kehinde", grade: [87, 68, 70] },`
    `{id:7, name:"Ngozi", grade: [77, 80, 50] }`
`]`

## # Logic I:

**Calculate Average Grades:** Write a function ***calculateAverageGrades*** that takes the array of student objects and returns a new array of objects. Each object should contain the **id**, **name**, and **averageGrade** of each student.

### Problem Solving:

***calculate the average grade for an array of student object***

First we declare a function called ***studentAverageGrades*** with a parameter attached called the grade.

notice as well, the ***"reduce method"*** was incoorporated in carrying out the summation opeartion within the array of grade keys and it's value.

`function studentAverageGrades(grade)``{`
    `let studentTotalScore = grade.reduce((sum, grade) => sum + grade, 0);`
    `return studentTotalScore / grade.length;`

`}`

*Inputting an array of student object where each object has properties **id**, **name**, and **grade** (assuming it's an array of three score record).*

`let students = ``[`
    `{id:2, name:"samuel", grade: [70, 76, 55] },`
    `{id:4, name:"Bola", grade: [64, 69, 78] },`
    `{id:7, name:"Taiwo", grade: [57, 50, 80] },`
   ` {id:12, name:"Kehinde", grade: [87, 68, 70] },`
    `{id:7, name:"Ngozi", grade: [77, 80, 50] }`
`]`



*Output the average grade which is rounded to two decimal place*

*made use of the for each loop method in order have access to individual indexes within the array of objects*

Declared a separate function called `function calculateAverageGrades(students)`

`function calculateAverageGrades(students)``{`
   ` return students.map(student => {`
        `let studentResult = studentAverageGrades(student.grade);`
      `  return {`
            `id: student.id,`
            `name: student.name,`
           ` averageGrade: `
            `studentResult.toFixed(2),`
       ` };`
   ` });`
`}`

in output our result on the console we carry out the declaring of a varible called ***"dataAverageScore"*** to reference the *"calculateAverageGrades"*

`let dataAverageScore = calculateAverageGrades(students);`
`console.log(dataAverageScore);`

2. ## Logic II

***Find Top Student**: 
Write a `*function findTopStudent*` that takes the array of student objects and returns the object representing the student with the highest average grade.


`function findTopStudent(students){`
    `let averagehighestScore = 0;`
    `let firstPlaceStudent;`
    `for(let student of students){`
        *`let studentAverageGrade =  student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;`*
        *## `if(studentAverageGrade > averagehighestScore){`*
            `averagehighestScore = studentAverageGrade;`
            `firstPlaceStudent = student;`
        `}`
   ` }`

   ` return firstPlaceStudent`;
`}`

`let highestGradeStudent = findTopStudent(students);`
`if(highestGradeStudent){`
    `console.log(``first place:${highestGradeStudent.id} (name:${highestGradeStudent.name})``);`
`}``else{`
   ` console.log('No Record Found.');`
`}`
