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
        this._HtmlBuilder(this.arrData)
    }

    _HtmlBuilder (data) {
        const fragment = document.createDocumentFragment()
        const selectCount = data.length
        for (let i = 0; i < selectCount; i++) {
            const select = document.createElement(`select`)
            select.dataset.id = i
            const optionDefault = document.createElement(`option`)
            optionDefault.value = ""
            optionDefault.text = "請選擇"
            optionDefault.selected = true

            select.prepend(optionDefault)
            fragment.appendChild(select)
        }

        Array.from(document.querySelectorAll(this.container))
            .forEach(c => c.appendChild(fragment))
    }

    SetEvent () {
        console.log(`======>CountyCombo SetEvent`)
    }

    SetSubscribe () {
        console.log(`======>CountyCombo SetSubscribe`)
    }
}

export default CountyComboPlugin
