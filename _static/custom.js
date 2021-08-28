
function openModal(src, lastFocus) {
    let modal = document.querySelector('#wh-modal')
    modal.style.display = 'block'
    let modalContent = document.querySelector('#wh-modal-img')
    modalContent.src = src;
    let span = document.querySelector('#wh-modal-close')
    span.focus()
    modal.onclick = () => {
        modal.style.display = 'none'
        lastFocus.focus()
    }
    span.onclick = () => {
        modal.style.display = 'none'
        lastFocus.focus()
    }
}

function insertAnchors(element) {
    if (element.parentElement.tagName !== 'A') {
        let newButton = document.createElement('button')
        //newButton.href = element.getAttribute('src')
        //newButton.href = ''
        let p = element.parentElement
        element.parentElement.removeChild(element)
        newButton.appendChild(element)
        p.appendChild(newButton)
        newButton.onclick = () => openModal(element.getAttribute('src'), newButton)
        newButton.classList.add('wh-fig-a')
        newButton.classList.add('wh-venti-button')
        newButton.setAttribute('tabIndex', '0')
    }
}

function addImgAnchors() {
    let figs = document.querySelectorAll('.figure img')
    figs.forEach(insertAnchors)
    let cellOutputs = document.querySelectorAll('.cell_output img')
    cellOutputs.forEach(insertAnchors)
}

window.addEventListener('load', addImgAnchors)