 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
  
    dropZone.addEventListener('click', () => {
      fileInput.click();
    });
  
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });
  
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
  
      const files = e.dataTransfer.files;
      handleFiles(files);
    });
  
    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      handleFiles(files);
    });
  
    function handleFiles(files) {
      for (const file of files) {
        console.log('File name:', file.name);
        // You can upload the file here or process it further
      }
    }
  });