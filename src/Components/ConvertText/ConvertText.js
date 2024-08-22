export function convertText(string, type){
    string.split(type).map((des, index) => {
        if(index == 0){
            return des
        }else{
            return <><br key={index}/> &nbsp;&nbsp;&nbsp;&nbsp;{des}</>
        }
    })
}

export class ConvertText {
    constructor(string){
        this.string = string;
    }
    convertBold(){
        convertText(this.string, "*")
    }
}