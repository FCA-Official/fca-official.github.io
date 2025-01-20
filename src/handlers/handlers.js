import localForage from "localforage"
import * as K from "../constants/constants"

export const storage = {
    set: async (name, value) => {
        localForage.setDriver([localForage.INDEXEDDB, localForage.LOCALSTORAGE])
        if (typeof value == "object") {
            value = JSON.stringify(value)
        } else {
            value = value.toString()
        }
        try {
            await localForage.setItem(name, value)
            K.print(`saved: ${name}`)
            return true
        } catch (err) {
            K.error(err)
            return false
        }
    },
    get: async (name) => {
        localForage.setDriver([localForage.INDEXEDDB, localForage.LOCALSTORAGE])
        try {
            const value = await localForage.getItem(name)
            return value
        } catch (err) {
            K.error(err)
            return null
        }
    },
    remove: async (name) => {
        localForage.setDriver([localForage.INDEXEDDB, localForage.LOCALSTORAGE])
        try {
            await localForage.removeItem(name)
            K.print(`${name} removed`)
        } catch (err) {
            K.error(err.message)
        }
    },
    clear: async () => {
        localForage.setDriver([localForage.INDEXEDDB, localForage.LOCALSTORAGE])
        try {
            await localForage.clear()
            K.print(`cleared`)
        } catch (err) {
            K.error(err.message)
        }
    }
}

export const getPWADisplayMode = () => {
    const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
    ).matches
    if (document.referrer.startsWith("android-app://")) {
        return "twa"
    } else if (navigator.standalone || isStandalone) {
        return "standalone"
    }
    return "browser"
}

export const copyToClipboard = (str) => {
    const el = document.createElement("textarea") // Create a <textarea> element
    el.value = str // Set its value to the string that you want copied
    el.setAttribute("readonly", "") // Make it readonly to be tamper-proof
    el.style.position = "absolute"
    el.style.left = "-9999px" // Move outside the screen to make it invisible
    document.body.appendChild(el) // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
            ?
            document.getSelection().getRangeAt(0) // Store selection if found
            :
            false // Mark as false to know no selection existed before
    el.select() // Select the <textarea> content

    if (!navigator.clipboard) {
        document.execCommand("copy") // Copy - only works as a result of a user action (e.g. click events)
    } else {
        navigator.clipboard.writeText(str).then(
            function () { }).catch(function () { })
    }

    document.body.removeChild(el) // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges() // Unselect everything on the HTML document
        document.getSelection().addRange(selected) // Restore the original selection
    }
}


export const deviceMode = {
    browser: 'browser',
    pwa: 'pwa',
    auto: 'auto'
}
export const devDeviceType = (devType = deviceMode.auto) => {
    let setType = ''
    if (!K.devMode) {
        devType = deviceMode.auto
    }
    switch (devType) {
        case deviceMode.browser:
            setType = deviceMode.browser
            break
        case deviceMode.pwa:
            setType = deviceMode.pwa
            break
        default:
            setType = getPWADisplayMode()
    }
    return setType
}