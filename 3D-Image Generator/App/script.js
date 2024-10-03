function generateDownloadLink() {
  const userInput = document.getElementById('imageUrl').value;
  const regex = /(.*\/image-photo\/(.*)-(\d+))/;
  const match = userInput.match(regex);

  if (match) {
      const baseUrl = match[1];
      const description = match[2];
      const id = match[3];
      const newUrl = `${baseUrl}-600nw-${id}.jpg`;

      const xhr = new XMLHttpRequest();
      xhr.open('GET', newUrl, true);
      xhr.responseType = 'blob';

      xhr.onload = function() {
          if (xhr.status === 200) {
              const urlCreator = window.URL || window.webkitURL;
              const imageUrl = urlCreator.createObjectURL(this.response);

              const downloadLink = document.getElementById('downloadLink');
              downloadLink.href = imageUrl;
              downloadLink.download = `${description}.jpg`;
              downloadLink.textContent = `Download ${description}.jpg`;
              downloadLink.style.display = 'inline';
          } else {
              alert('Image not found or the URL is incorrect.');
          }
      };

      xhr.send();
  } else {
      alert('Invalid URL format. Please enter a valid Shutterstock image URL.');
  }
}
