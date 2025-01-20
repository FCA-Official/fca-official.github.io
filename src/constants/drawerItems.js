import { getPWADisplayMode } from "../handlers/handlers"
import * as K from "./constants"
import { routes } from "../router/index"

const selectItems = [
    'FCA Official',
    'Blog',
    'Contacts',
    'Settings'
]

export let drawerItems = selectItems.map(e => {
    return routes.filter(r => {
        return r.name == e
    })[0]
})