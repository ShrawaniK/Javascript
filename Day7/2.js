//Question 2:
// Write a program that will display the multiplication table of a number on the webpage in a proper
// format. Take the input from the user.
// Input - 5
// Output - 5 x 1 = 5
//  5 x 2 = 10
//  and so on…

function table()
    {
        let no=Number(document.getElementById('inputno').value);
            for(let i=1; i<=10; i++)
            {
                let pTag=document.getElementById('tableprint');
                pTag.innerHTML +=(no*i) + "<br>"
            }
    }
