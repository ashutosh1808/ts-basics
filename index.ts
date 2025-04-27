// const add = (a:number,b:number) : number =>{
//     return a+b
// }

// const joinStrings = (a:string, b:string) : string => {
//     return a+b
// }

// function add(a:number,b:number){
//     return a+b
// }

// const joinStrings = function(a:string, b:string) {
//    return a+b 
// }

// interface Post{
//     title:string;
//     daysOld:number;
//     published:boolean;
// }

// const post={
//     title:"My post",
//     daysOld:10,
//     published:true
// }

// const printPost = (postToPrint:Post) =>{
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`
// }

// console.log(printPost(post))

// class Car{
//     constructor(public color:string, private year:number){
//     }

//     drive(){
//         this.putInGear();
//         this.pressPedal();
//         this.turnWheel();
//     }

//     private putInGear(){}

//     private pressPedal(){}

//     private turnWheel(){}
// }

// const myCar=new Car('red',2000)
// console.log(myCar.color);
// myCar.drive();

// const Component = (target:any) => {
//     console.log(target)
// }

// @Component
// class Car{

// }

// interface Driveable{
//     speed:number;
//     drive():string;
// }

// class Car implements Driveable{
//     speed=10;

//     drive(){
//         return `I am driving at ${this.speed}`;
//     }
// }

class NumberHolder{
    value:number;
}

class StringHolder{
    value:string;
}

class BooleanHolder{
    value:boolean;
}

class ValueHolder<TypeForValueProperty>{
    value:TypeForValueProperty
}