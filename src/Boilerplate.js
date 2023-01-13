
/**
 * 範本類別
 */
class JsPluginBoilerplate {
    pluginName = `範本`
    container
    arrData = []
    constructor (...args) {
        console.log(`===>Start ${this.pluginName}建構式`)
        const arg = args[0]

        this.Init(arg)
        this.SetDom()
        this.SetEvent()
        this.SetSubscribe()
        console.log(`===>End ${this.pluginName}建構式`)
    }

    Init (arg) {
        console.log(`======>${this.pluginName} Init`)
        this.container = arg.container ? arg.container : this.container
        this.arrData = arg.arrData ? arg.arrData : this.arrData
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
