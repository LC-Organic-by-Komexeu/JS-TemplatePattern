import JsPluginBoilerplate from './Boilerplate.js'

/**
 * CountyCombo類別
 */
class CountyComboPlugin extends JsPluginBoilerplate {
    pluginName = `CountyCombo`

    constructor () {
        console.log(`===>Start CountyCombo建構式`)
        super()
        console.log(`===>End ${this.pluginName}建構式`)
    }

    Init () {
        console.log(`======>CountyCombo Init`)
    }

    SetDom () {
        console.log(`======>CountyCombo SetStyle`)
    }

    SetEvent () {
        console.log(`======>CountyCombo SetEvent`)
    }

    SetSubscribe () {
        console.log(`======>CountyCombo SetSubscribe`)
    }
}

export default CountyComboPlugin
