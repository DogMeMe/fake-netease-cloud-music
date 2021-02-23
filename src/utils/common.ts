import { App } from "vue"

export const padStartN = (val: string | number, n = 2, fill = '0') => {
    val = String(val)
    return val.padStart(n,  fill)
}

export default {
    install(app: App){
        app.config.globalProperties.formatDate = (date: number, format: string) => {
            const dateObj = new Date(date)
            const year = dateObj.getFullYear()
            const month = padStartN(dateObj.getMonth())
            const day = padStartN(dateObj.getDate())
            const returnDate = format.replace('YYYY', year+'').replace('MM', month).replace('DD', day)
            return returnDate
        }
        app.config.globalProperties.formatDuration = (date: number): string => {
            const secondTotal =  date / 1000
            const hours = Math.floor(secondTotal / 3600) 
            const minutes = Math.floor((secondTotal - hours * 3600) / 60)
            const seconds = Math.floor(secondTotal - hours * 3600 -minutes * 60)
            return `${hours > 0 ? hours + ':' : ''}${padStartN(minutes)}:${padStartN(seconds)}`
        }
    }
}