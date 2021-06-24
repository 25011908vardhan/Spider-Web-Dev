
var schedDate= document.getElementById("calendar");
var todo;
function get_input()
{
    console.log(schedDate.value);
    if(localStorage.getItem(schedDate.value)==null)
    { 
      var task=prompt("Enter Your Task");
    localStorage.setItem(schedDate.value,JSON.stringify(task));
  }
     var taskDisp= document.getElementsByClassName('tasks');
     if(JSON.parse(localStorage.getItem(schedDate.value))==null)
     taskDisp[0].innerHTML="";
     else
     taskDisp[0].innerHTML= JSON.parse(localStorage.getItem(schedDate.value));

}
function add()
{
  // localStorage.setItem(schedDate.value)
  var addedTask="<br></br>"+prompt("Enter your new task!");
  var alreadyPresent= JSON.parse(localStorage.getItem(schedDate.value));
  alreadyPresent+=addedTask;
  console.log(addedTask);
  localStorage.setItem(schedDate.value,JSON.stringify(alreadyPresent))
 document.getElementsByClassName('tasks')[0].innerHTML+= addedTask;
}
(function ()
{function start(){
  var today= new Date();
  var hours= today.getHours();
  var min=today.getMinutes();
  var sec=today.getSeconds();
  if(hours<10)
  hours="0"+hours;
  if(min<10)
  min="0"+min;
  if(sec<10)
  sec="0"+sec;

  document.getElementById('time').innerHTML=hours+':'+min+':'+sec;
  var temp= setTimeout(() => {
    start();
  }, 500);
}
start();
})();
