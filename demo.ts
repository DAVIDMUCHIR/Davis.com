/*let input=[1,2]
let first:number=input[0]

let second:number=input[1]
console.log(first + second);

let num:number[]=[1,2,3,4,5]
console.log(num[0])

let[,,m2,m3]=[1,2,3,4]
console.log(m2+m3)

let ob={
a:"foo",
b:12,
c:"bar"
}
let{a,b}=ob
console.log(a+""+b)*/
/*let user={
     department:"software development",
     name:"mwangi",
     favouriteCricketer:{
        first:{
            name:"David",
            comment:"great coder"
        },
        second:{
            name:"edu",
            comment:"excellent coder"

        }
     }

};
console.log{favouriteCricketer:{first:First,second:Second}}=user;
console.log(first.name);
console.log(second.name);*/ 
/*function foo(p1:{a:string, b?:number}){
let{a=" ",b=100}=p1;
console.log(a+""+b)


}
foo({a:"a",b:10})
foo({a:"b"})
*/
/*let a1=[1,2,3]
let a2=[4,5,6]

let a12=[0,...a1,...a2,7]
console.log(a12);*/

/*let obs1={p1:"p1",p2:10,p3=true};
let obs2{...obs1,p4:100};
console.log(obs2.p1+""+obs2.p2+""+obs2.p4)*/
/*function Add(a:number,b:number,c:number=0)
{
    if (!c)
    c=0;
    return a+b+c;
return a + b+ c;

}
console.log(Add(10,20,30));
console.log(Add(10,20));
*/
/*function add4(n:number, ...numbers:number[]){
    let x :number=0
    for (var i=0;i< numbers.length;i++){
        x+=numbers[i]
    }
    return x;
}
console.log(add4(2,3))
console.log(add4(2,3,112))
console.log(add4(2,3,45))*/
/*
function Add(x:string, y:string):string;
function Add(x:number,y:number):number;
function Add(x:boolean,y:string):number;
function Add(x,y):any{
    if (typeof x=="number")
    return x+y;
else
   return x+""+y;
};
console.log(Add(10,20));
console.log(Add("A","B"));
console.log(Add(true,"0"));*/
/*
let sub:(x:number,y:number)=>number;
sub=function(x,y){
    return(x-y) 
}
console.log(sub(25,29))*/
/*var someString='Hello world';
console.log(someString);
let x: string='eeeeee'
console.log(x);

const user={
    name:"davii",
    id:0,
};*/
/*function greet(name:string){
    console.log("Hi" + name.toUpperCase()+"!!")

}


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });
  */
 /*
type User={
   readonly _id:string
    name:string
    email:string
    isactive:boolean
}
let myUser:User={
    _id:"12345",
    name:"h",
    email:"h@gmail.com",
    isactive:false
}

myUser.email="hgmail.com"*/
/*
const superHeroes: string[]=[]
const heroPower: number[]=[]
const superHeroe: Array<string>[]=[]
heroPower.push(2)
superHeroes.push("")
type User={
name:string
isactive:boolean

}
const allUsers:User[]=[]

allUsers.push({name:"",isactive:true}) */
//union type
/*let x :number|string=45;
x=44
x="david"
type User={
    name:string
    id:number
}
type Admin={
    username:string;
    id:number
}

const data:(number| string|boolean)[]=[1,2,3,4,true,"yty"]

let pi:3.14=3.14
pi=3.14

let seatAllotment:"aisle"|"middle"|"window"
seatAllotment:"aisle";
//tuples
//const user:(string|number)[]=[1,"hc"]
let tuser:[string,number,boolean]
tuser=["he",1223,true]

let rgb:[number,number,number]=[255,344,464]

type users=[number,string]
const newuser:users=[112,"dfbkc"]
newuser[1]="gfhdj"*/
/*enum SeatChoice{]
    //enum
AISLE=2,
MIDDLE,
WINDOW,
FOURTH
}
const hcSeat=SeatChoice.AISLE*/
interface user{
readonly dbId:number,
email:string,
userId:number
googleId?:string


}

const davii:user={dbId:21,email:"dac@gmail.com", userId:43}
