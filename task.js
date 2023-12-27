const formElement = document.getElementById("form");
formElement.addEventListener("submit", () => {
  const formData = new FormData(formElement);
  console.log(formData);
  let xhr = new XMLHttpRequest();
  // обработчик для отправки
  xhr.upload.onprogress = function(event) {
    const progress = document.getElementById("progress");
    progress.value += event.total / event.loaded;
  };
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(file);
});