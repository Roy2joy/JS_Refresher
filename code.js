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

//inheritance  (code resuability)
//poly (ability to make code behave different at run time based on type of object.change of code.)
//abstraction (hide implementation details-abstract something from its user -also another definition in design paradigm)
//encapsulation (providing controlled interface for implementation ,provide complete packages)



//---------------------------------------------------------------------
//---------------------------------INHERITANCE
// ---------------------------------------------------------------------

//-----------------------inheritance with public members and private members
class Engine{
    chasisCountry
    #secretNote
    constructor(ch)
    {
        this.chasisCountry=ch;
        this.#secretNote="this is top secret car"
    }
    printSecret=()=>{
        console.log(this.#secretNote);
    }
}

class Car extends Engine{
    constructor(chCountry){
        super(chCountry)  //calling a parent constructor
    }
    print(){
        console.log(this.chasisCountry);
        console.log('\nWith the help of private constructor of super class')
        this.printSecret();
    }
}

let car=new Car('Japan');
car.print();

//--------------------------ABSTRACT CLASS-------------------------------------
class Vehicle{
    name;
    constructor(){
            console.log('abstract constructor called')
            if(this.constructor === Vehicle){
                throw new Error("Cant declare abstract class")
            }
    }    
}

class Drive extends Vehicle{
    constructor(){
        super();
    }
    driverCar(){
        this.name='duccati'
        console.log(this.name)
    }
}

let temp=new Drive();
temp.driverCar();

let temp2=new Vehicle(); // as it is abtract class

// ----------------------------------------------------------------------------------