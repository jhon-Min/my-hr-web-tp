$("#single-select-clear-field").select2({
  theme: "bootstrap-5",
  placeholder: $(this).data("placeholder"),
  dropdownCssClass: "select2--small",
  //   allowClear: true,
});

let myDropzone = new Dropzone("#my-awesome-dropzone");
myDropzone.on("addedfile", (file) => {
  console.log(`File added: ${file.name}`);
});

let dropText = document.querySelector(".dropzone .dz-message .dz-button");

dropText.innerHTML = `
  <div>
  <i class="fa-solid fa-file-image file-upload-icon mb-3"></i>
  <h5 class="mb-0">Drop files here or click to upload.</h5>
  </div>
`;
