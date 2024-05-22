// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, 
// model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

let smartPhone = {
    phoneDetails : {
        brand : "oneplus",
        model : "oneplus 9",
        storage: "128 GB",
        scr_size: "6.55 inches",
        battery: "4500 mAh"
    }
}

console.log (smartPhone)  // print the entire object
console.log(smartPhone.phoneDetails)  // print object phoneDetails
console.log(smartPhone.phoneDetails.storage)  // print key and value of storage

