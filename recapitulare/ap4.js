const DAY_IN_MILLISECONDS=1000*60*60*24
function getDaysBetweenDates(dataText1,dataText2){
    const data1=new Date(dataText1)
    const data2=new Date(dataText2)
const diffTime=Math.abs(data2-data1)
const diffDays=Math.ceil(diffTime/DAY_IN_MILLISECONDS)
return diffDays
}
let currDate=new Date()
let days=getDaysBetweenDates(currDate,'06/18/3000')
console.log('nr zile',days)