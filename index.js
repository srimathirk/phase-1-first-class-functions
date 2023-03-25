function receivesAFunction(callback){  //receives myFunction using callback function as a parameter
     //console.log("Welcome to School")  
    return callback();
}
function myFunction(){  //myFunction is declared to call inside callback function
    return 'helo';
}
console.log(receivesAFunction(myFunction)); 
function returnsAnAnonymousFunction(){
     //console.log("wear seatbelt while driving");
    return function(){
       // console.log("BE SAFE WHILE DRIVING");
    };
}
function returnsANamedFunction(){
       //console.log("Returning a named function")
 return function namedFunction(){
 //console.log('Hello');
};
}
returnsANamedFunction();