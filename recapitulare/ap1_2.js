class Person{
    say(name){
    if(name){
        this.#sayWithName(name)
    }else{
        this.#sayEithoutName()
    }
    }
    

#sayWithoutName(){
    console.info('Hello')
}
#sayWithName(name){
    console.log(`Hello ${name}`)
}
}
const pers=new Person()
pers.say()
pers.say('Dan')