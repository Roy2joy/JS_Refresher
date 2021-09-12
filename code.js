// //full documentation is provided in my oneNote

// //---------------------------------------const vs let vs var
// function tempVAR(a){
//     console.log(input) //will work b/c of hoisted property of var (but since no assigment so undefined)
//     if(a=='123'){
//         var input='abcdefgh'
//     }else{
//         var input='1123123123'
//     }
//     console.log(input) //will work b/c of hoisted property of var
    
// }
// // tempVAR('123')  //call this and check output

// function tempLET(a){
//     if(a=='123'){
//         let input='abcdefgh'
//     }else{
//         let input='1123123123'
//     }
//     console.log(input) //will work b/c of hoisted property of var
// }
// //tempLET('123') //call this and check output

// //-----------------------------------------arrow functions
// //typical function 
// let multiple20=function (){
//     return 20;
// }

// //arrow function
// //eg1
// const multiple10= a => 10*a;  //this is arrow function
// console.log(multiple10(2))

// //eg2
// const squareSum= (a,b) =>{
//     a*=a;
//     b*=b;
//     return a+b;
// }
// console.log(squareSum(1,3));

//OOP Cooncepts
