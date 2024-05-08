function palindrom(str){
    let reverceString=str.split('').reverse().join('')
if(str==reverceString){
    return true
}
else{
    return false
}
}

let cuvant='ana'
let cuvant2='mere'
console.log(palindrom(cuvant))
console.log(palindrom(cuvant2))
