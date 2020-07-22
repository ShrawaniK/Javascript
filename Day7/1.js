// Question 1:
// Write a program that will iterate over an array of colors and change the background of the page
// after 5 seconds.

var color=["blue","orange","navy","yellow","yellowgreen"];
var currentColorIndex=0;
    function changeColor()
    {
        document.bgColor=color[currentColorIndex];
        currentColorIndex=(currentColorIndex + 1)% color.length;
        setTimeout(changeColor,5000);
    }