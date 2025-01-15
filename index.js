let random = Math.random()
let first , second ,third;
// teen parts mae divide krna h toh 0.33 0.66 1

if(random<0.33){
    first = "cool"
}
else if(random<0.66 && random>=0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}

random = Math.random()

if(random<0.33){
    second = "Engine"
}
else if(random<0.66 && random>=0.66){
    second = "Foods"
}
else{
    second = "Garments"
}

random = Math.random()

if(random<0.33){
    third = "Bros"
}
else if(random<0.66 && random>=0.66){
    third = "Unlimited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)