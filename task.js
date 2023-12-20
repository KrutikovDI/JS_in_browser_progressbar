formElement.addEventListener("submit", (e) => {
  const formElement = document.getElementById("form");
  const formData = new FormData(formElement);
  const file = formData.get("file");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
  xhr.send(file)
  xhr.upload.onprogress = function(e) {
    const progress = document.getElementById("progress");
    progress.value += e.loaded
  }
})
