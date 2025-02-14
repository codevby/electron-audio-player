const dropZone = document.getElementById('dropZone');
const audioPlayer = document.getElementById('audioPlayer');
const songName = document.getElementById('songName');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.style.borderColor = '#007bff';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.borderColor = '#ccc';
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.style.borderColor = '#ccc';

  const files = event.dataTransfer.files;

  if (files.length > 0) {

    const file = files[0];

    if (file.type.startsWith('audio/')) {

      const filePath = URL.createObjectURL(file);
      this.songName.textContent = file.name;
      audioPlayer.src = filePath;
      audioPlayer.play();

    } else {
      alert('Por favor, arrastra un archivo de audio válido.');
    }
  }
});