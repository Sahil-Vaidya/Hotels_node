// var a = 5;
// var b = 3;
// var ans = a+b;
// console.log(ans);
// // ans = ans + 100;
// // console.log(ans); 
// const name="sahil";
// console.log(name);
// console.log(typeof name);
// console.log(typeof ans);

                                //array

// const cars=['merc','lam','gwagon',32];
// cars.push("tesla");
// console.log(cars);

// console.log(cars[2]);

//                         //if-else

// var hours=10;

// if(hours> 12){
//     console.log("you are on time");
// }
// else{
//     console.log("you are not");
// }

                                  //LOOp

// var count=10;
// for(var i=1;i<=count;i++){
//     console.log(i);
// }

                                //OBJECT

// const person = {
//     name :'ram',
//     age: 20,
//     isstudent :'false'
// };

// console.log(person);
// console.log(person.age);

// const age=[20,16,60];
// const result = age.filter(checkAge);

// function checkAge(age){
//     return age>=18;
// }

// console.log(result);

                         // taking user to input

var prompt = require('prompt-sync')();

const age = prompt("enter your age :");
if(age>=18){
    console.log("you are eligible");
}
else{
    console.log("you are not");
}

                        //how to write FUNCTION 

// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }

// var add = (a,b) => { return a+b};

var add = (a,b) => a+b;

var result = add(3,7);
console.log(result);

(function(){
    console.log("sahil");
})();

                        // call back function 

// function callback(){
//     console.log("adding function");
// }

// const add= function(a,b, callback){
//     var result=a+b;
//     console.log(result);
//     callback();
// }

// add(3,4,callback);

  ///by optimize
  const add= function(a,b, sahil){
        var result=a+b;
        console.log(result);
        sahil();
    }
    
    // add(2,3, function(){
    //     console.log("completed");
    // });
    
    add(2,3 , () => console.log('complete'));


                        // FS AND OS MODULE

    var fs = require('fs');
    var os = require('os');
    
    var user = os.userInfo();//deatil about machine
    console.log(user);
    console.log(user.username);
    
    fs.appendFile('greeting.txt','hello' +user.username+ '!\n' , () =>{
        console.log('file is created');
    })
    
    console.log(fs);

        //  EXPORT FROM ANOTHER FILE

// const notes = require('./notes.js');
// var _ = require('lodash');

// console.log("server is loaded");

// var age=notes.age;

// var result = notes.addnumber(age+18,15);
// console.log(age);
// console.log('result is :' +result);


// var data = ['peer','person',1,1,2,3,2,'name','age'];
// var filter= _.uniq(data);
// console.log(filter);

// console.log(_.isString('sahil'));



        //  JSON  TO  OBJECT

const jsonSrting =  '{"name":"sahil" , "age" : 30, "city" : "nagpur"}';
const jsonObject = JSON.parse(jsonSrting);
console.log(jsonObject.name);