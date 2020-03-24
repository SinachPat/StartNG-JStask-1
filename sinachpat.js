//Store your name in a varibale. 

var Name = "Osinachi Patrick";
console.log(Name);

//Store your courses in an array. 
var Courses = ['HTML', 'CSS', 'JavaScript', 'NodeJs'];

console.log(Courses);

/*If the number of courses you are doing is an odd number, 
find and display all odd numbers from 1-200 (inclusive)*/
var i = 0; 

    for (i % 2 != 0; i <= 200; i++){
        if (Courses.length % 2 !== 0)
        console.log(i);
    }
/*If the number of courses you are doing is an even number, 
find and display all even numbers from 1-200 (inclusive)*/
 
    for (i = 0; i <= 200; i++) {
        if (Courses.length % 2 == 0)
        console.log(i);
    }
