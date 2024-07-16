document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.querySelector('#drop-zone')

    dropZone.addEventListener('click', () =>{
        
        const fileInputElement = document.querySelector('input')
        fileInputElement.click()
    })

    dropZone.addEventListener('dragover', (event) =>{
        event.preventDefault()

        dropZone.style.backgroundColor = '#e0e0e0'
    })

    dropZone.addEventListener('dragleave', () =>{
        dropZone.style.backgroundColor = '#eb6363a6'
    })
    
    dropZone.addEventListener('drop', (event) =>{
        event.preventDefault()

        dropZone.style.backgroundColor = '#f0f0f0'
        
        const files = event.dataTransfer.files
        
        console.log(files)
    })
    
})