//Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.

function restParameter (...hobby: string []) {
    hobby.forEach((hobby) => 
    console.log(`You really enjoy ${hobby}`))
} 

restParameter("reading", "swiming", "coding", "painting")

