/* eslint-disable no-unused-vars */
export function removeSpace(string){
    let splVal = string.split(" ")
    let str = ""
    splVal.map((val, index) => {
        if(index == 0){
            str = val
        }else{
            str += "-" + val
        }
    })
    return str
}
export function replaceWithSpace(string, replace){
    let splVal = string.split(replace)
    let str = ""
    splVal.map((val, index) => {
        if(index == 0){
            str = val
        }else{
            str += " " + val
        }
    })
    return str
}
export function removeText(string, txt){
    let str = ""

    if(typeof(txt) == "object" && txt.length>1){
        txt.map((text, index) => {            
            if(index != txt.length-1){
                if(string.includes(text)){
                    let splVal = string.split(text)
                    splVal.map((val, index) => {
                        str += val
                    })
                    removeText(str, txt[index+1])
                }
            }
        });
    }else{
        if(typeof(txt) == "object"){
            let splVal = string.split(txt[0])
            splVal.map((val, index) => {
                str += val
            })
        }else{
            let splVal = string.split(txt)

            splVal.map((val, index) => {
                str += val
            })
        }
    }
    return str
}


