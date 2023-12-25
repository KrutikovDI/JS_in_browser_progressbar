const formElement = document.getElementById("form");
formElement.addEventListener("submit", (e) => {
  const formData = new FormData(formElement);
  const file = formData.get("file");
  if (file) {
    upload(file)
  }
})

function upload(file) {
  let xhr = new XMLHttpRequest();
  // обработчик для отправки
  xhr.upload.onprogress = function(event) {
    const progress = document.getElementById("progress");
    progress.value += event.total / e.loaded;
  }
  // обработчики успеха и ошибки
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
  xhr.send(file)
}