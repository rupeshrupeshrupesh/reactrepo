

const posts=[

    {
        title:'post one',
        body:'this is one post'
    },

    {
        title:'post two',
        body:'this is two post'
    }
];

function getpost(){


    setTimeout(() => {
            let output ='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title}</li>`

                console.log(output);
            })
document.body.innerHTML=output

    }, 1000);
}

createpost()
{
    setTimeout(() => {
        posts.push(post);
        callback();
        
    }, 2000);
}
getpost();

createpost({
    title:'post three ',
    body: 'this is post three'
});





const stuedent=[

    {
        title:'post one',
        body:'this is one post'
    },

    {
        title:'post two',
        body:'this is two post'
    }
];

function enroll(student){

    setTimeout((functi) => {

        stuedent.push(student);
        
    }, 3000);
}
function getstudent(student){
    setTimeout((funct) => {
          
        
    }, timeout);
}




// hii

const funa=()=>
{
        setTimeout((name) => {
         console.log("welcome to fun a")
         funb();

            
            
        }, 3000);



}
const funb =()=>{
    console.log("welcome to fun b")
}

funa();


//call back  

let persone=(friend,callfrd)=>


{

    console.log(`hiii friend  ${friend}`);
    callfrd();


}


let persone2=()=>


{

    console.log("hiii friend  dekha")

    
}

persone("thapa",persone2);
// persone2();


// sychronous js



let func1=()=>{
    console.log("fun 1 is strting");//1
    func2();
    console.log("fun 1 is ending");//3
}
let func2=()=>{


    setTimeout(() => {
        console.log("fun2 is strating");//2
        
    }, 3000);


}

func1();


//arrys method



const fruits=['orange','Apple','pinapple'];
const mixed=['str',87,[3,4]];

const arr=new Array(23,123,21,'orange');
console.log(arr);
console.log(arr.length);
let value=marks.indexOf(43);
console.log(value);

// modifying arrays
marks.push(234);

//add ele at staring of array
marks.unshift(12342);

//remove ele from end
marks.pop();
// remove ele from starat
marks.shift();

// remove ele more than one on basis of index
marks.splice(2,3);
// reverse arr
marks.reverse();
console.log(marks);

// Objects creation and operations

let myobj ={

    name: 'Liladhar',
    collage: 'COCSIT',
    isActive:true,
    mark:[1,2,3,4]
}
console.log(myobj);
console.log(myobj.isActive)


//promise all




const promise1=Promise.resolve(123);
promise1.then((value)=>{
    console.log(value)

})



function prom(a,b)
{

return new Promise(function(resolve,reject){


    var c=a/b;
    if(c)
    {
        resolve(` your answere :  ${c}`)

    }
    else{
        reject("i am failed");

    }
});

}


prom(5,3).then((result)=>{
    console.log(result);

}).catch((error)=>{
    console.log(error);

})

"use strict";

var promise2= Promise.resolve(123);
promise1.then(function (value) {
  console.log(value);
});

function prom(a, b) {
  return new Promise(function (resolve, reject) {
    var c = a / b;

    if (c) {
      resolve(" your answere :  ".concat(c));
    } else {
      reject("i am failed");
    }
  });
}

prom(5, 3).then(function (result) {
  console.log(result);
})["catch"](function (error) {
  console.log(error);
});