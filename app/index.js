import component from './component'

let comp = component()
document.body.appendChild(comp)

if (module.hot) {
    module.hot.accept('./component', () => {

        const next = require('./component').default()
        document.body.replaceChild(next, comp)
        comp = next
    })
}