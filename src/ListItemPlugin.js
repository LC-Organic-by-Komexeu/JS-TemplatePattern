import JsPluginBoilerplate from './Boilerplate.js'

/**
 * ListItem類別
 */
class ListItemPlugin extends JsPluginBoilerplate {
    pluginName = `ListItem`

    constructor (params) {
        console.log(`===>Start ListItem建構式`)
        super(params)
        console.log(`===>End ${this.pluginName}建構式`)
    }

    SetDom () {
        console.log(`======>ListItem SetStyle`)
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

            if (i === 0) {
                const currentData = data[i]
                for (let j = 0; j < currentData.length; j++) {
                    const option = document.createElement(`option`)
                    option.value = currentData[j]
                    option.text = currentData[j]
                    select.appendChild(option)
                }
            }

            select.prepend(optionDefault)
            fragment.appendChild(select)
        }

        Array.from(document.querySelectorAll(this.container))
            .forEach(c => c.appendChild(fragment))
    }

    SetEvent () {
        console.log(`======>ListItem SetEvent`)
        Array.from(document.querySelectorAll(this.container))
            .forEach(c => {
                Array.from(c.querySelectorAll('select[data-id]'))
                    .forEach(s => {
                        s.addEventListener('change', (e) => {
                            const selectValue = e.currentTarget.value
                            const currentIdx = e.currentTarget.dataset.id * 1

                            for (let i = currentIdx + 1; i < this.arrData.length; i++) {
                                const fragmentDefault = document.createDocumentFragment()
                                const optionDefault = document.createElement(`option`)
                                optionDefault.value = ""
                                optionDefault.text = "請選擇"
                                optionDefault.selected = true
                                fragmentDefault.appendChild(optionDefault)
                                c.querySelector(`select[data-id="${i}"]`).replaceChildren(fragmentDefault)
                            }

                            const dataIdx = currentIdx + 1
                            if (this.arrData[dataIdx]) {
                                const nextData = this.arrData[dataIdx].map(a => a.split('_')).filter(s => s[0] == selectValue).map(s => s[1])

                                const fragment = document.createDocumentFragment()
                                for (let i = 0; i < nextData.length; i++) {
                                    const option = document.createElement(`option`)
                                    option.value = nextData[i]
                                    option.text = nextData[i]
                                    fragment.appendChild(option)
                                }

                                c.querySelector(`select[data-id="${dataIdx}"]`).appendChild(fragment)
                            }
                        })
                    })
            })
    }
}

export default ListItemPlugin
