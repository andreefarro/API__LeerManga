const $ = (selector : keyof HTMLElementTagNameMap, node = document.body) => {
    return node.querySelector(selector)
}

const $$ = (selector : keyof HTMLElementTagNameMap, node = document.body) => {
    return [...node.querySelectorAll(selector)]
}

export {$,$$}