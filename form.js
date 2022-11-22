// let fname=document.getElementById("fname").value;

// let vr=document.getElementById("f")


function validform()
{
  let x=document.getElementById("fid").value;
  if(x=="")
  {

  
  alert("Username is nulll");
  return false;
  }

  let li=document.getElementById("lid").value;
  if(li=="")
  {

    alert("Email is null");
    return false;
  }
  let pi=document.getElementById("pid").value;
  if(pi=="")
  {

    alert("Password is null");
    return false;
  }

  let fi=document.getElementById("male").value;
  if(fi)
  {

    alert("radio button selected");
    return false;
  }
  else{
    alert("radio button not selected");
    return false;
  }



  

}
// validate(){
//   window.location.href=("");
// }




// {/* <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
//   Name: <input type="text" name="fname"></input> */}