//using if-else
console.log("Use of Conditional Statements");
function grade(marks)
{
    if(marks==50)
    {
        console.log("Marks are "+marks+" and Grade is B");
    }
    else if(marks>50)
    {
        console.log("Marks are "+marks+" and Grade is A");

    }
    else
    {
        console.log("Marks are "+marks+" and Grade is C");

    }
}
grade(65);
grade(45);
grade(95);
grade(50);


//using ternary
console.log("Use of Ternary");
let marks1=50;
let result=(marks1 == 50) ? 'and Grade is B': (marks1 > 50) ? 'and Grade is A' : (marks1 < 50) ? 'and Grade is C' : null;
console.log("Marks are "+marks1,result);

//using switch
console.log("use of switch case");
let marks2=50;
switch(marks2)
{
    case 50:console.log("Marks are "+marks2+" and Grade is B");
    break;
    case 55:console.log("Marks are "+marks2+" and Grade is A");
    break;
    case 45:console.log("Marks are "+marks2+" and Grade is C");
    break;
    default:console.log(" ");
}