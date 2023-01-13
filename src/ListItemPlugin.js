import JsPluginBoilerplate from './Boilerplate.js'

/**
 * ListItem類別
 */
class ListItemPlugin extends JsPluginBoilerplate {
    constructor () {
        const plugName = `ListItem`
        console.log(`===>Start ${plugName}建構式`)
        super(plugName)
        console.log(`===>End ${this.pluginName}建構式`)
    }

    Init () {
        console.log(`======>${this.pluginName} Init`)
    }
}

export default ListItemPlugin
