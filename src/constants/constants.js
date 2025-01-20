export const devMode = false
export const version = '1.0.0'

export const title = 'FCA Official'

export const print = (text) => {
    if (devMode && process.env.NODE_ENV != 'production') {
        console.log(text)
    }
}

export const error = (text) => {
    if (devMode && process.env.NODE_ENV != 'production') {
        console.error(text)
    }
}