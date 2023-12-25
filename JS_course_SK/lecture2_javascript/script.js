// // console.log("Hello World!");

// let a =5;
// let b =7;

// // cond1 = a===b;
// // cond2 = b > a;z
// console.log(a===b || b>=a);

// // Conditional Statenets.
// let age = 17;

// if (age>=18)
// {
//     console.log("Can Vote")
// }

// else(age<18)
// {
//     console.log("Can't Vote")
// }

// // ---------------------

// let mode = "dark";
// let color;

// if (mode==="dark")
// {
//     color = "black";
// }

// if (mode === "light")
// {
//     color = "White"
// }

// console.log(color);

// // -------------

// let number = 0;
// let x = 2;
// if (number%x===0)
// {
//     console.log(number,"Is Even");
// }
// else if(number%2===1)
// {
//     console.log(number,"Is Odd");
// }
// else{
//     console.log(number,"can not be taken as an input.");
// }

// let num1 = prompt("Enter the Number:")
// if (num1%5==0)
// {
//     console.log(num1, "This is a Multiple of 5.");
// }
// else {
//     console.log(num1, "is not a multiple of 5.")
// }

let stud_score = prompt("Enter your Marks:");
if (stud_score >= 80 && stud_score<=100)
{
    console.log("Student scored", stud_score, "marks, hence A Grade.")
}
else if (stud_score >= 65 && stud_score<=79)
{
    console.log("Student scored", stud_score, "marks, hence B Grade.")
}
else if (stud_score >= 51 && stud_score<=64)
{
    console.log("Student scored", stud_score, "marks, hence C Grade.")
}
else if (stud_score >= 41 && stud_score<=50)
{
    console.log("Student scored", stud_score, "marks, hence D Grade.")
}
else{
    console.log("Student scored", stud_score, "marks, hence E Grade.") 
}