import config from "./config.json"

export const truncate = (hashString: string, truncation: number = 0) => {
  if (hashString.length > 24) {
    let limit = 7

    if (truncation < 0) {
      return hashString
    }

    if (truncation > 0) {
      limit = truncation
    }

    return hashString.substring(0, limit) + "..."
  }
  return hashString
}

const willLog = config.LOGGING
export const logger = (message: string, level: string, ...data: any[]) => {
  if (willLog) {
    switch (level) {
      case "info":
        console.log(`%c${message}`, "color:DodgerBlue;", ...data)
        break

      case "success":
        console.log(`%c${message}`, "color:MediumSeaGreen;", ...data)
        break

      case "get":
        console.log(`%c${message}`, "color:Teal;", ...data)
        break

      case "warn":
        console.warn(message, ...data)
        break

      case "error":
        console.error(message, ...data)
        break

      case "special":
        console.log(`%c${message}`, "color:BlueViolet;", ...data)
        break

      case "log":
      default:
        console.log(message, ...data)
        break
    }
  }
}
