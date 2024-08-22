export function smallSection(string){
    let sub = ""
    let subSpl = string.split(" ")
    subSpl.map(((item, index) => {
        if(index <= 4){
            if(index == 0){
                sub = item
            }else{
                sub += " " + item
                if(index == 4){
                    sub += "..."
                }
            }
        }
    }))
    return sub
}