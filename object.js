//creating object

var myObject={};

console.log(myObject)


var objjhv={
        "foo":"value"
       



};
console.log(objjhv)

var emp1={};
emp1.fistname="rupedj";
emp1.lastname="scott";
emp1.gender="M";
emp1.desigb="regional"

var emp2={};
emp2.fistname="rupedj";
emp2.lastname="scott";
emp2.gender="M";
emp2.desigb="regional"



class Myyob{

//  let rupsh=new Myyob();
    // let rup=new Myyob();


    constructor()
    {
        console.log("constructor called");
    }
    submit(givename,number)
    {
        this.name=givename
     return  this.name+" sumbit the form";
    }
    cancel(givenam,number)
    {
        this.name=givenam
        this.mob=number
        return this.name+" cancel the form  "+this.mob;
    }

   
}

 let rupsh=new Myyob();
    let rup=new Myyob();
     
    // rupsh.submit(rupesh);
    console.log(    rupsh.submit("rupesh", 889989889));

    var n=rup.cancel("i am not",099878787)
    console.log(n)



    ///called the constructor


class constriform{


    constructor()
    {
        console.log("call me  give me a some time")
    }



}

var rupp=new constriform();
let rrr=new constriform();


//passes some value by the use of constructor

class passvalueConstructor{


    constructor(firstname,mobilenumber,city)
  {
    this.name=firstname;
    this.number=mobilenumber;
    this.address=city
  }  

  submit()
  {

    console.log(this.name+" form is sumbitted"+this.number+" "+this.address)
  }

  cancel()
  {
     this.number=987;
     this.name="name change"
    console.log(this.name+" form is sumbitted"+this.number+" "+this.address)
  }
}
let rrrr=new passvalueConstructor("rupesh", 90909090, "pune");
let qqq=new passvalueConstructor("lila",997767,"kolhapur");
rrrr.submit();
rrrr.cancel();
qqq.submit()


///inheritance $ extends keyword  



class animal{
    constructor(name,color)
    {
        this.name=name;
        this.color=color;
    }
    run()
    {
        console.log(this.name+" is runnning");

    }
    shout()
    {
        console.log(this.name+" is shoouting");
        
    }
}
class monkey extends animal
{
    eat()
    {
        console.log(this.name+" is eating");
    } 
}

let ani=new animal("parraot","blue");
let m=new monkey("donkeyt","red");


m.run(); 

m.shout()
m.eat()
// ani.eat();


//Method overriding

class employee{


    logine()
    {
        console.log("emploue log inb")
    }

    logout()
    {
        console.log("emploue log out")
    }

    leave(leaves)
    {

        console.log("employ on leav ");

    }
}
class progma extends employee{

    leave(x)
    {
        console.log("empoloiyse t]has requirde ${x} cofees"+(x+1))
    }
    
}


/// use of super keyword  
class superkeyword1{

    parentmethod()
    {
        console.log("parent method execute");
    }
    
}

class superkeyword2 extends superkeyword1
{
    
    constructor()
    {
        super();
        console.log("i am ther")
    }
    childmethod()
    {
         super.parentmethod();
        // super.parentmethod()
        console.log("child metod execute");
    }
}

let a=new superkeyword1();
let b=new superkeyword2();
b.childmethod()
// a.parentmethod()

//getter setter in js


let nam={
    firstn:'rupesh',
    lastn:'dafare',
    fuame()
    {
        return `${nam.firstn} ${nam.lastn}`

    }

}
 

console.log(nam.fuame());



let getsetobje={
    namee:'rupeh',
    lastneee:'dafa',
    set fullname(value)
    {
        var ppp=value.split(' ');
        this.namee=ppp[0];
        this.lastneee=ppp[1];


    },
    get fullname()
    {
        return `${getsetobje.namee}, ${getsetobje.lastneee}`

    }
}

getsetobje.fullname="rupesh dafare";
console.log(getsetobje);


///static method use

class staticuse{

    constructor(name){
        this.name=name;

    
    }
    walk()
    {
        console.log("static use "+staticuse.staticmethod(this.name)+" is perfectly")
    }
    static staticmethod(name)
    {
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
}

j=new staticuse("jack");
j.walk()

// private field

class privateclass{


    #count =30
    // co()
    // {
    //     this.#count;

    // }
    show()
    {
        return this.#count;
    }

}
let onj=new privateclass();
console.log(onj.show());

//advcance js 

//template string or template literals

var user="google com";
var greet=`heeloo ${user}`
console.log(greet);

//Arrow function



function heloo()
{
    console.log("hii");
}

// or Advance fumction

let hello=(name)=>

{
    return `${name}`

}

console.log(hello("rupesh"));
console.log(typeof hello);

//rest operator

function some()
{
    console.log(arguments);

var sum=0;
    for(let i in arguments)
    {
        sum+=arguments[i];
    }
    
    
    console.log(sum)
}
some("rupesh",10,20,30,40)


function addd(name,...args)
{
    let sum=0;
    for(let i in args)
    {
        sum+=args[i];
    }
    console.log(sum+ `   ${name}`);
}

addd("ram",88,99,100);

//spread opertaor

var arr=[10,20,30];
function spread()
{
    var arr1=[10,20,30];
    var arr2=[40,50,60];
    var arr3=[...arr1,...arr2];
    console.log(arr3);

}
spread();


//object literals

 let na="name";

 var ob={

    na,
    course:"Btech",

    'givenew'()
    {
            console.log(`${na}  i am here1`)
    }


 }
 console.log(ob)
 console.log(ob['givenew']());



 let given="rupesh";
 let ful="ramram"; 
 let taken="batch";

 function student(given,taken)
 {

    let fulllname=given+" "+taken
    return {fulllname};

 }
 console.log(student(given,taken))

//destructuring array

let use=["rupesh",24];
let name=use[0];
let age=use[1];
