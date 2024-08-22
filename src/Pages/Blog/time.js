/* eslint-disable no-unused-vars */
export function time(timeObj){
    
    try {
        let hour = timeObj.hour
        let min = timeObj.min

        return `${hour}:${min}`
    } catch (error) {
        return
    }
}
export function date(dateObj){
    
    try {
        let year = dateObj.year
        let day = dateObj.day
        let month = dateObj.month

        return `${day}-${month}, ${year}`
    } catch (error) {
        return
    }
}