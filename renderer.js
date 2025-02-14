const dropZone = document.getElementById('dropZone');
const audioPlayer = document.getElementById('audioPlayer');
const songName = document.getElementById('songName');

// Manejar eventos de arrastre
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado
  dropZone.style.borderColor = '#007bff'; // Cambiar el color del borde
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.borderColor = '#ccc'; // Restaurar el color del borde
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.style.borderColor = '#ccc'; // Restaurar el color del borde

  // Obtener el archivo arrastrado
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0]; // Tomamos el primer archivo
    if (file.type.startsWith('audio/')) {
      const filePath = URL.createObjectURL(file); // Crear una URL para el archivo
      this.songName.textContent = file.name;
      audioPlayer.src = filePath; // Asignar la ruta al reproductor
      audioPlayer.play(); // Reproducir automáticamente
    } else {
      alert('Por favor, arrastra un archivo de audio válido.');
    }
  }
});