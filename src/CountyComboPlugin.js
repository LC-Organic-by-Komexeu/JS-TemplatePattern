import JsPluginBoilerplate from './Boilerplate.js'

/**
 * CountyCombo類別
 */
class CountyComboPlugin extends JsPluginBoilerplate {
    pluginName = `CountyCombo`

    constructor (params) {
        console.log(`===>Start CountyCombo建構式`)
        super(params)
        console.log(`===>End ${this.pluginName}建構式`)
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
