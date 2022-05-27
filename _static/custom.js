
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
        const newButtonContainer = document.createElement('div')
        const newButton = document.createElement('button')
        newButtonContainer.appendChild(newButton)
        const p = element.parentElement
        element.parentElement.removeChild(element)
        newButton.appendChild(element)
        p.appendChild(newButtonContainer)
        newButton.onclick = () => openModal(element.getAttribute('src'), newButton)
        newButton.classList.add('wh-fig-a')
        newButton.classList.add('wh-venti-button')
        newButton.setAttribute('tabIndex', '0')
        newButtonContainer.classList.add('wh-flex-center')
    }
}

function addImgAnchors() {
    let figs = document.querySelectorAll('.figure img')
    figs.forEach(insertAnchors)
    let cellOutputs = document.querySelectorAll('.cell_output img')
    cellOutputs.forEach(insertAnchors)
}

function addGithubLink() {
    const github_button = document.querySelector('.fa-github').closest('button')
    // add a target href to the github button
    github_button.onclick = () => {
        window.open('https://github.com/whitead/dmol-book', '_blank').focus();
    }
}

window.addEventListener('load', addImgAnchors)
window.addEventListener('load', addGithubLink)
