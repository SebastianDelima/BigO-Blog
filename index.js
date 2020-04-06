
let family = ["David", "Carla", "Sebastian"]

function greetMembers(family){
    
       family.forEach(person => {
        family.forEach(member => {

            if(member !== person){

                console.log(`Hello ${member} my name is ${person}`)
            }
        })
    });
}




