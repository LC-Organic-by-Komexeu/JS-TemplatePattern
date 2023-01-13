
/**
 * 範本類別
 */
class JsPluginBoilerplate {
    pluginName = `範本`

    constructor () {
        console.log(`===>Start ${this.pluginName}建構式`)
        this.Init()
        this.SetDom()
        this.SetEvent()
        this.SetSubscribe()
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

export default JsPluginBoilerplate
