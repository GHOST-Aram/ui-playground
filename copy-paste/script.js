document.addEventListener('DOMContentLoaded', () => {
    const pasteArea = document.getElementById('pasteArea');
    
    pasteArea.addEventListener('paste', (event) => {
        const items = event.clipboardData.items
        for (const item of items) {
            if (item.kind === 'file') {
                const file = item.getAsFile()
                
                
                const reader = new FileReader();
                
                reader.onloadend = (e) => {
                    const preview = document.querySelector('#preview')
                    
                    const url = e.target.result

                    const img = document.createElement('img')
                    img.src = url
                    preview.appendChild(img)
                };
                reader.readAsDataURL(file)
            }
        }
    });
});

