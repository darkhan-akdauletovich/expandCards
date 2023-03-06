const panels = document.querySelectorAll('.panel')
//Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

/*Static NodeLists
In other cases, the NodeList is static, where any changes in the DOM do not affect the content of the collection. The ubiquitous document.querySelectorAll() method returns a static NodeList. */

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}