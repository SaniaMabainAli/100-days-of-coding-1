// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on 
// what you need at that moment, like adjusting labels based on user choices.


function flex_key_obj (key: string, value: string){

    let flex_obj = {}
    flex_obj [key] = value
    return flex_obj
}

console.log(flex_key_obj("Name", "Sania"))
console.log(flex_key_obj("Quarter", "01"))
