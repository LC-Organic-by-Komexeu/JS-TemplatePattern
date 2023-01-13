import JsPluginBoilerplate from './Boilerplate.js'

/**
 * ListItem類別
 */
class ListItemPlugin extends JsPluginBoilerplate {
    pluginName = `ListItem`

    constructor () {
        console.log(`===>Start ListItem建構式`)
        super()
        console.log(`===>End ${this.pluginName}建構式`)
    }

    Init () {
        console.log(`======>ListItem Init`)
    }
}

export default ListItemPlugin
