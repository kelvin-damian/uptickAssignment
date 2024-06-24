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

*made use of the map method in order have access to individual indexes within the array of objects*

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

*we started with the set of student object each containing their unique id, name and an array of grades*

*made use of the for each loop method in order have access to individual indexes within the array of objects*

*Created a function called `findTopStudent` with an atttached argument(students) array, making use of the **sfor each loop method**, this craetes a control flow operation on set condition to be fufilled so access to each index that meets the condition and terminates if it does not.*



`function findTopStudent(students){`
    `let averagehighestScore = 0;`
    `let firstPlaceStudent;`
    `for(let student of students){`
        *`let studentAverageGrade =  student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;`*
        `if(studentAverageGrade > averagehighestScore){`
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


## Logic III

**Sort Students by Average Grade:** Write a *function sortStudentsByGrade* that takes the array of student objects and returns a **new array sorted by the average grade** in descending order.

*we started with the set of student object each containing their unique id, name and an array of grades*

*we have already worked with a function called the studentAverageGrade which takes the array of grades, sums them up using `reduce` and then the division of the number of grades to get our average grade*

*in keeeping our array intact and not modified we make use of the `slice()` method*


*Created a function called `sortStudentsByGrade` with an atttached argument(students) array, making use of the **sort method**, this craetes a comparison between two students average average grade outcome using the studentAverageGrades function to arrange the return array in descending order `(bAverage - aAverage)`*

The function `sortStudentsByGrade` is called with the **students** as it argument whereby the result is stored in the `sortedResult` and displayed in the console using the `console.log(sortedResult) `


`function sortStudentsByGrade(students){`
    `return students.slice().sort((a, b) => {`
        `let aAverage = studentAverageGrades(a.grade);`
        `let bAverage = studentAverageGrades(b.grade);`
        `return bAverage - aAverage;`
    `});`
`}`


`let sortedResult = sortStudentsByGrade(students);`
`console.log(sortedResult);`






