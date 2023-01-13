import JsPluginBoilerplate from './Boilerplate.js'

/**
 * CountyCombo類別
 */
class CountyComboPlugin extends JsPluginBoilerplate {
    constructor () {
        const plugName = `CountyCombo`
        console.log(`===>Start ${plugName}建構式`)
        super(plugName)
        console.log(`===>End ${this.pluginName}建構式`)
    }

    Init () {
        console.log(`======>${this.pluginName} Init`)
    }

    SetDom () {
        console.log(`======>${this.pluginName} SetStyle`)
    }

    SetEvent () {
        console.log(`======>${this.pluginName} SetEvent`)
    }

    SetSubscribe () {
        console.log(`======>${this.pluginName} SetSubscribe`)
    }
}

export default CountyComboPlugin
