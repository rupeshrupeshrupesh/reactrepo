console.log('hi');

num=10;
// Number num=10;
// Number num1=20;
num2=20;
console.log(num+num2);

var a;

var b=2;

a=7;

b=a;
console.log(a);
console.log(b); 

var aa=2;
var bb=3;
var c="ia ma string";

console.log(bb+c);


//Adding number

var sum=10+10;
console.log(sum);

var substract=10-9;
console.log(substract)

var divdi=10/2;
console.log(divdi);

var inc=10;
// inc--
console.log(inc)


var decimal1=5.9;
var decimal=0.09;
console.log(decimal*decimal1)

console.log(10%3);


var fisrt="rupesh";
var last="dafare"

var dou="i am \"double started\"  " ;

console.log(dou)

var mystr="ia ma. "+"i amm";
console.log(mystr)

/**** *
\'  =single quates
\"  =double quates
\\  =backslash
\n  =newline
\r  =carriage return
\t  =tab
\b  =backspace
\f  =formfeed
****/ 


var name="ruoesj";
var nn=0;
console.log( name.length)

console.log(name[10])

var myst="rupesh";
myst[0]="h"
console.log(myst[0 ]);

var aray=["john",23];
var myarray=["rup",33];

console.log(aray)


var multi=[[1,2,3],[4,5,6],[7,8,9]];

console.log(multi)

var outarr=["ruoe","ath","bale"]
// outarr.push(["ghate"]);


console.log(outarr.pop())


var out=["rupesh","hj",["cat"]];
console.log(out.shift())
console.log(out)


var ram=["rupessj","kjccc"];
console.log(ram.unshift());
console.log(ram)


consolelog()
function consolelog()
{
    console.log("ruped","jkcj"); 
}

requejhfj(10,4)
function requejhfj(a,b)
{
    console.log(a-b)
}
 

function nextint(arr,item)
{
    arr.push(item)
    return item;
}
var testarr=[1,2,3,4,5];
// console.log("before"+JSON.stringify(testarr)) 
console.log(nextint(testarr,7))


 function welcmeboolen()
 {
    return false;
 }
 console.log(welcmeboolen());


 function teststrict(val)
 {
    if(val===10)
    {
        return "equal"
    }
    else
    {
        return "not equal"
    }
 }

 console.log(teststrict("10"))

 function lessthan(val)

{
    if(val<=30)
    {
        return "less";
    }
    else
    {
        return "false"
    } 

}

function ifloop(val)
{
    if(val<15)
    {
        return "16";
    }
    else if(val>15)
    {
        return "17"
    }
       return "18"
}

console.log(ifloop(15));

function caseinswitch(val)
{

    var ans="";
    switch(val)
    {
        case 1:
            ans="alpha";
            break;
            case 2:
                ans ="beta";
                break;
    }
    return ans;

}
console.log(caseinswitch(3))