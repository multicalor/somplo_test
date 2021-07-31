function upload(selector, options = {}) {
    const input = document.querySelector(selector)
    console.log("This is input DOM elem", input)

    const openBtn = document.createElement('button')
    openBtn.classList.add('btn')
    openBtn.textContent = 'Open'

    if (options.multi) {
        input.setAttribute('multiple', true)
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }


    console.log("This is input openBtn ", openBtn)
    input.insertAdjacentElement('afterend', openBtn)

    const triggerInput = () => input.click()

    const changeHandler = (e) => {

        

        if(!e.target.files.length) {
            return
        }
        
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if(file.type.math('image')){
                return
            }

            const reader = new FileReader()

            reader.onload = ev => {
                console.log
            }

            reader.readAsDataURL(file)
        })
        console.log(files)
    }

    openBtn.addEventListener('click', triggerInput)

    input.addEventListener('change', changeHandler)
}

upload('#file', {
    multi: true,
    accept: ['.png', '.jpg', '.gif']
}
)


class InputImg {

}
console.log("app.js")