document.addEventListener('DOMContentLoaded', () => {
    const pasteArea = document.getElementById('pasteArea');
    const preview = document.getElementById('preview');

    pasteArea.addEventListener('paste', (event) => {
        const items = event.clipboardData.items;

        for (const item of items) {
            if (item.kind === 'file') {
                const file = item.getAsFile();
                const reader = new FileReader();

                reader.onloadend = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    preview.appendChild(img);
                };

                reader.readAsDataURL(file);
            }
        }
    });
});
