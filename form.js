let file;


// Get input elem
const fileInputElem = document.getElementById('file-selector');

// Add event change to input file element
fileInputElem.addEventListener('change', (event) =>  {
    console.log(target)
})



// fileSelector.addEventListener('change', (event) => {
//   const fileList = event.target.files;
//   file = fileList[0];
//   console.log(fileList[0]);
// });

// function showFile(input) {
//   let file = input.files[0];

//   console.log(`File name: ${file.name}`); // например, my.png
//   console.log(`Last modified: ${file.lastModified}`); // например, 1552830408824
// }


// function readImage(file) {
//     // Check if the file is an image.
//     if (file.type && !file.type.startsWith('image/')) {
//       console.log('File is not an image.', file.type, file);
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.addEventListener('load', (event) => {
//       img.src = event.target.result;
//     });
//     reader.readAsDataURL(file);
//   }



