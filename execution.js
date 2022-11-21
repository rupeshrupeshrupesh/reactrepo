var global="added";
function a(){
    var fa="2nd funtion op1";
    console.log(fa);
    debugger;
    b();
    console.log(("i am in console 1 st"));
}
function b(){
    debugger;
    console.log("2nd function");
    c();

}
function c(){
    debugger;
    console.log("i am in 3rd function");

}
a();

function hosting()
{
    console.log(a);
    var a="rupesh";
     console.log(a)

}


hosting();
console.log(a);


// function hosting1()
// {
//     console.log(b);
//     let b=10;
//    console.log(b)

// }


// hosting1();
// console.log(b);



function hosting2()
{
   console.log(c);
     const c=10;
    console.log(c)
    console.log(z)
    let z;

}




function myFun() {
    var myName  = "my name";
    console.log(myName);
}

myFun(); //output => "my name"
//  console.log(myName); //output => ReferenceError



//pass by value

var a=10;
var b=a;

console.log(a);
console.log(b);

  b+=5;
  console.log(b)

  //pass by refrence

  var arr1=[1,2,3,4];
  var arr2=arr1;
  console.log(arr1);
  arr2.push(5)
  console.log(arr1);
  console.log(arr2)


  //variable scope 

  //global variable


  var z=10;
  function func(arr1){
    func2(arr1);

    console.log(arr1)
  }  
  func(); 

  //local variable 

  function func2()
  {
    arr1.push(1);
      
    var y=20;

    console.log(y)
  }
  func2();
 // console.log(y)
  
//
//clousur function

// const res = function new1(outer);

function outer(a){
    var b=10;
    function inner(){
        var sum=a+b;
        console.log(`${sum}`);

    }
    return inner();


}
// function v=;
console.log(outer(6));


const outt=(a)=>{

    var b=100;
    const inner=()=>{
        var sum=a+b;
        console.log(`${sum}`);
    }
    inner()

}

console.dir(outt(500));

//Strig and its properties

var str="JavaScript is great is      ";
var str1=100;
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.includes("Is"));
console.log(str.startsWith("Java"));
console.log(str.endsWith("great"));
console.log(str.search("great"));
console.log(str.match(/grat/g));
console.log(str.indexOf("is"));
console.log(str.replace("is","am"));
console.log(str.trim());
console.log(str.charAt(6));
console.log(str.charCodeAt(1));
console.log(String.fromCharCode(65));
console.log(str.concat(str1));
console.log(str.split(" "));
console.log(str.repeat(2));
console.log(str.slice(2));
console.log(str.substr(2,5)); 
console.log(str.substring(2,5));
console.log((str1.toString()));
console.log(str.valueOf())
// lo