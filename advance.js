//destructing array

let user=["rupesh",25,"delhi"];
let [name,age,city]=user;
console.log(name);
console.log(age);
console.log(city )
 


function use([name,age,city])
{
    console.log(name);
    console.log(age);
    console.log(city);
}
use(["ram",26,"pune"]);

//return aray

function ram()
{
    return (["rupesh",45,"nagpur"])
}
let [bnaam,marks,gav]=ram();
console.log(marks);
console.log(city);

//destructing object

let object={
    nnn:"rupesh",
    a:80,
    c:"nagpur"

}
let {nnn:n, a:hj,c}=object
console.log(n);
console.log(hj);
console.log(c);

//oop what is oop

// Object orientend programming

class hello
{
     message()
    {
        console.log("heelo world");
    }
    static wihoutobject()
    {
        console.log("without object");
    }
}

let a=new hello();

a.message();
hello.wihoutobject();

//types of method


//constructo  or   prortype  or  static  

class aaa{

    constructor(name,age)
    {
        this.myname=name;
        this.myage=age;
    

    }
    hello()
    {
        console.log(this.myname+"  "+this.myage);

    }
    static message()
    {

    }

    
}

let b=new aaa("rupesh ",56);
b.hello();

//module .js es6 version

// import{msg} from "./imp.js"

// // user();

// console.log(msg);

//promises use basic concept



let complete=false;

function prom(complete)
{
    return new Promise(function(resolve,reject){


        console.log("fetching data please wait");

        // if(complete){
        //     resolve("i am successful");
    
        // }
        // else
        // {
        //     reject("i am failed");
        // }

        setTimeout(()=>
        
        
        {


        if(complete){
            resolve("i am successful");
    
        }
        else
        {
            reject("i am failed");
        }

        },1000)
    }
    
    
    );
    

}

let onful=(result)=>
{

    console.log( result)
}
let onrej=(error)=>
{

    console.log( error)
}

prom(true).then(onful).catch(onrej); 




//promise all


let p1= new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log("the first promise resolve");
        resolve(10);
    },1000);


})

let p2= new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log("the secrst promise resolve");
        resolve(20);
    },2000);


})
let p3= new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log("the third promise resolve");
        resolve(30);
    },3000);


})

var total=0;

Promise.all([p1,p2,p3]).then((result)=>{



    for(var i in result)
    {
        total+=result[i];
    }

    console.log(`result ${result}`);
    console.log(`total ${total}`);
}).catch((result)=>{

console.log(`result  ${result}`)

});


//fetch api


// fetch("home/lnv188/Desktop/HTmlFile/javasscript/raedme.txt").then((response)=>{

//     console.log(response);
// });

 

//asyns and await
 

async function test()
{
    return "h";
}

test().then((result)=>
{
    console.log(result);
    
})

async function tt()
{
    console.log("2 ::::mgg");
   await console.log("3:::: msg")
    console.log("4:::::msg");
}

console.log("1 :::: msg");
tt();
console.log("5::::msg");


//symbol datatype

let id=Symbol("hello");
let id2=Symbol("hello")


console.log(id==id2);

 console.log(id.description)


 let agee=Symbol();

 let u={
    name:"yahhho",
    class:"btech",
    [agee]:25

 }
 console.log(u)
 console.log(agee);

 //iterator 

 var x=["apple ","orange","grapes"]

 let itr=x[Symbol.iterator]()
 console.log(itr);

 console.log(itr.next().value);
 let y=x[Symbol.iterator]();
 y.next();

 console.log(typeof x[Symbol.iterator]);

let re=itr.next();

while(!re.done)
{
    console.log(re.value);
    re=itr.next();
}



function numberiter(arr)
{
    var nextnumb=0;
    return{
        next()
        {

            if(nextnumb<arr.length)
            {
                return{

             
                value :arr[nextnumb++],
                done:false
            }

            }
            else{

                return {
                    value :arr[nextnumb++],
                    done:false
                }

            }
           
        }
    }
}

let numbe=[100,200,300,400];
let nu=numberiter(numbe);
console.log(nu.next());
nu.next();
console.log(nu.next().value);
console.log(nu.next().value);
console.log(nu.next().value);

//javascript geneator



function *genetrate(){
    console.log("first msg");
    yield "hello i am yield"
    console.log("deecond msg");
    yield "hello i am 2nd yield"
}
 let g=genetrate();


 g.next();
 console.log(g.next());
//  console.log(g.next());

 console.log(g.next());



 function *rrr(){
    let n=300;
    while(true)
    {
        yield(n++);
    }
 }
 let m=rrr();

 console.log(m.next().value);
 console.log(m.next().value);
 console.log(m.next().value);
 console.log(m.next().value);
 console.log(m.next().value);

 //strict mode


 "use strict";

 a=999;

 function te()
 {
    b=222;
 }

 console.log(b);
 te();

 //error handling 



 try{

    blabk()
    console.log("start of try");
    console.log("end of try");

 }catch(error)
 {
    console.log("error id is occiured");

    // console.log(error);
    if(error instanceof ReferenceError)
    {
        console.log(ReferenceError);
    }



    }
    finally{
        console.log("finaly block is executed")

    }
 
 

