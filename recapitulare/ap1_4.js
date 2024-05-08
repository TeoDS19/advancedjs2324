class ThirdPartyLibrary{
    printText(text){
        console.log(text)
    }
}
class TextPrinter{
    displayText(text)
}
class TextPrinterAdapter extends TextPrinter{
    constructor(thirdPartyLibrary){
        super()
        this.thirdPartyLibrary=thirdPartyLibrary
    }
    displayText(text){
        this.thirdPartyLibrary.printText(text)
    }
}
console.text='Hello, world!'
const thirdPartyLibrary=new ThirdPartyLibrary()
const TextPrinter=new TextPrinterAdapter(thirdPartyLibrary)
TextPrinter.displayText(text)