function addtask() 
{
  var input = document.getElementById('input').value;
  if (input == "") 
  {
    window.alert("Add Task to List.");
  }
  else 
  {
    var List = document.getElementById('todo');
    List.innerHTML +="<li onclick='removetask()'>" + input +   "<button id='delete'> Task Completed/Delete Task</button></li><br>";
  }
}
function removetask() 
{
   event.currentTarget.remove();
}