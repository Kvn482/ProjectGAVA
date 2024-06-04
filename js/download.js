document.querySelector(".download-button").addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './docs/PROYECTO GAVA.pdf';
    link.download = 'ProjectGAVA - FichaTecnica';
    link.click();
})