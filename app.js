//util
const bytesToSize = (bytes) =>{
    const size = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if(!bytes) {
        return '0 byte'
    }

    const i = parseInt(Math.floor(Math.log(bytes)/Math.log(1024)))
    return Math.round(bytes/Math.pow(1024, i)) + ' ' + size[i]
}

// create new DOM-element
const element = (tag, classes = [], content) => {
    const node = document.createElement(tag)
    if (classes.length) {
        node.classList.add(...classes)
    }

    if (content) {
        node.textContent = content
    }

    return node
}

//main upload function
function upload(selector, options = {}) {
    let files = [];

    const input = document.querySelector(selector);

    const preview = element('div', ['preview']);
    const openBtn = element('button', ['btn'], 'Open')

    if (options.multi) {
        input.setAttribute('multiple', true)
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', preview)
    input.insertAdjacentElement('afterend', openBtn)

    const triggerInput = () => input.click()

    const changeHandler = (e) => {

        if(!e.target.files.length) {
            console.log(!e.target.files.length)
            return
        }
        
        files = Array.from(e.target.files);
        
        preview.innerHTML = '';
        files.forEach(file => {
            if(!file.type.match('image')){
                return
            }

            const reader = new FileReader()

            reader.onload = ev => {
                const src = ev.target.result
                preview.insertAdjacentHTML('afterbegin', `<div class="preview-image">
                    <div class="preview-remove" data-name=${file.name}>&times;</div>
                    <img src=${src} alt="${file.name}"/>
                    <div class="preview-info">
                        <span>${file.name}</span>
                        ${bytesToSize(file.size)}
                    </div>
                </div>`)
            }

            reader.readAsDataURL(file)
        })
    }

    const removeHandler = e => {
        if(!e.target.dataset){
            return
        }

        const { name } = e.target.dataset;
        files = files.filter(file => file.name !== name)
        const block = preview
        .querySelector(`[data-name="${name}"]`)
        .closest('.preview-image')

        block.classList.add('removing')
        setTimeout(() => {
            block.classList.remove('removing')
            block.remove()
            console.log(block)
        }, 305)
        upload('#file', {
            accept: ['.png', '.jpg', '.gif']
        }
        )
        console.log(block)
    }

    openBtn.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)
    preview.addEventListener('click', removeHandler)
}

upload('#file', {
    accept: ['.png', '.jpg', '.gif']
}
)


class InputImg {

}
console.log("app.js")