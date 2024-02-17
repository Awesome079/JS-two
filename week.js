// let company = "203"

// switch(company){
//     case "200" :
//         console.log("At least two numbers are equal")

//     case "201" :
//         console.log("At least two numbers are equal")

//     case "202" :
//          console.log("At least two numbers are equal")

//     default :
//     console.log("No two number are equal.")

// } 

const pin = 123
let first = 1
let second = 2
let third = 3

    const barca = prompt ("Enter your pin.")


    if (barca == pin){


        console.log("At least two number are equal.")

    // alert("contiue transaction")
    }else if(barca == first && barca == second){
        console.log("At least two number are equal.")

    }else if  (barca == first && barca == third){
        console.log("At least two number are equal.")
 
    }else if (barca == second && barca == third){
        console.log("At least two number are equal.")

    }else if (barca == second && barca == first){
        console.log("At least two number are equal.")

    }else if (barca == third && barca == first){
        console.log("At least two number are equal.")

    }else if (barca == third && barca == second){
        console.log("At least two number are equal.")
    }



else{ 

    alert("No two number are equal.")

}