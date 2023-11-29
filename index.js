document.addEventListener("DOMContentLoaded", function () {
  let number = 1;
  let outputGrid1 = "";
  let outputGrid2 = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      outputGrid1 += number + "\t";
      number++;
    }
    outputGrid1 += "\n";
  }

  number = 1;

  for (let j = 1; j <= 5; j++) {
    for (let i = 1; i <= 5; i++) {
      outputGrid2 += (i - 1) * 5 + j + "\t";
    }
    outputGrid2 += "\n";
  }

  const container1 = document.getElementById("numberContainer1");
  container1.textContent = outputGrid1;

  const container2 = document.getElementById("numberContainer2");
  container2.textContent = outputGrid2;
});

// // let a = [1, 2, 3, 4, 5];
// // for (const b in a) {
// //   console.log(b);
// // }
// let array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// for(var i=4;i<6;i++){
//     for(var j=4;j<5;j++){
//        console.log(i,j);
//     }
// }
// for(let i=0;i<3;i++){
//     for(let j=0;j<2;j++){
//        console.log(i,j);
//     }
// }
// for(var i=0;i<5;i++){
//     for(var j=1;j<6;j++){
//        console.log(i,j);
//     }
// }
// document.addEventListener("DOMContentLoaded", function () {
//     let number = 1;
//     let output = '';

//     for (let i = 1; i <= 5; i++) {
//       for (let j = 1; j <= 5; j++) {
//         output += number + '\t';
//         number++;
//       }
//       output += '\n';
//     }

//     const container = document.getElementById("numberContainer");
//     container.textContent = output;
//   });
// document.addEventListener("DOMContentLoaded", function () {
//     let number = 1;
//     let output = '';

//     for (let j = 1; j <= 5; j++) {
//       for (let i = 1; i <= 5; i++) {
//         output += (i - 1) * 5 + j + '\t';
//       }
//       output += '\n'; // Add a newline after each row
//     }

//     const container = document.getElementById("numberContainer");
//     container.textContent = output;
//   });
