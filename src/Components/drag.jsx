// import React from 'react'
// import './drag.css';

// const Drag = () => {
    
// const showBottomSheet = () => {
//     bottomSheet.classList.add("show");
//     document.body.style.overflowY = "hidden";
//     updateSheetHeight(50);
// }


//   return (
//     <div>  <button onClick={showBottomSheet}  class="show-modal">Show Bottom Sheet</button>
//     <div class="bottom-sheet">
//       <div  class="sheet-overlay"></div>
//       <div class="content">
//         <div class="header">
//           <div class="drag-icon"><span></span></div>
//         </div>
//         <div class="body">
//           <h2>Bottom Sheet Modal</h2>
//           <p>Create a bottom sheet modal that functions similarly to Facebook modal using HTML CSS and JavaScript. This modal allows user to view its contents, drag it up or down, and close it. It also works on touch-enabled devices. Lorem Ipsum are simply dummy text of there printing and typesetting industry. Lorem new Ipsum has been the industryss standard dummy text ever since the 1500s, when an off unknown printer tooks a galley of type and scrambled it to makes type spemen book It has survived not only five centuries.</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quae facere, quaerat deleniti, voluptates optio ipsam ipsum beatae, maxime quis ea quasi minima numquam. Minima accusamus reiciendis, impedit blanditiis nulla quia? Odio deleniti commodi id nesciunt voluptas cumque odit, vel molestias ratione sit consectetur inventore error ullam magni labore voluptate doloribus sed similique. Delectus non pariatur eligendi eos voluptatum provident eveniet consequuntur. Laboriosam, nesciunt reiciendis libero sunt adipisci numquam voluptas ullam, iure voluptates soluta mollitia quam voluptatem? Nemo, ipsum magnam.</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi commodi tenetur est beatae cupiditate incidunt aspernatur asperiores repudiandae? Odit, nulla modi ducimus assumenda ad voluptatem explicabo laudantium est unde ea similique excepturi fugiat nisi facere ab pariatur libero eius aperiam, non accusantium, asperiores optio. Accusantium, inventore in. Quaerat exercitationem aut, alias dolorem facere atque sint quo quasi vitae sed corrupti perferendis laborum eligendi repudiandae esse autem doloribus sapiente deleniti.</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates, animi ipsa explicabo assumenda molestiae adipisci. Amet, dignissimos reiciendis, voluptatibus placeat quo ab quibusdam illum repellat, ad molestias quaerat saepe modi aperiam distinctio dolore id sapiente molestiae quas! Animi optio nobis nesciunt pariatur? Non necessitatibus mollitia veniam nihil eos natus libero quaerat vitae maiores. Praesentium nesciunt natus tempora. Doloremque, fuga?</p>
//           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt deleniti a non dolorem delectus possimus distinctio! Nemo officiis tempore quos culpa fugit iste suscipit minus voluptatem, officia dicta ad deleniti harum voluptatibus dignissimos in, commodi placeat accusamus sint tenetur non natus? Error fugit quasi repudiandae mollitia doloribus officia eius magnam ratione soluta aut in iusto vel ut minima, at facere, minus sequi earum dolores animi ipsa nihil labore. Odio eius vitae iste repellendus molestias, amet sapiente laudantium optio, provident dignissimos voluptatum nesciunt nemo magni obcaecati commodi officiis delectus esse sed.</p>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat atque labore eligendi iusto sint! Fuga vel eius dolor eligendi ab cumque, maxime commodi, ducimus inventore temporibus illo delectus iste, quisquam ipsum labore eaque ipsa soluta praesentium voluptatem accusamus amet recusandae. Veniam necessitatibus laboriosam deleniti maxime, saepe vitae officia tempora voluptates voluptas ratione fugiat ad? Nostrum explicabo, earum dolor magnam commodi maiores iusto delectus porro ducimus architecto non enim eum, perspiciatis facere mollitia. Minus, mollitia animi! Nostrum deleniti, error quia hic eum modi? Corrupti illo provident dolores qui enim, expedita adipisci.</p>
//         </div>
//       </div>
//     </div>
// </div>
//   )
// }

// export default Drag


// // // Select DOM elements
// const showModalBtn = document.querySelector(".show-modal");
// const bottomSheet = document.querySelector(".bottom-sheet");
// const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
// const sheetContent = bottomSheet.querySelector(".content");
// const dragIcon = bottomSheet.querySelector(".drag-icon");

// // Global variables for tracking drag events
// let isDragging = false, startY, startHeight;

// // Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
// const showBottomSheet = () => {
//     bottomSheet.classList.add("show");
//     document.body.style.overflowY = "hidden";
//     updateSheetHeight(50);
// }

// const updateSheetHeight = (height) => {
//     sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
//     // Toggles the fullscreen class to bottomSheet if the height is equal to 100
//     bottomSheet.classList.toggle("fullscreen", height === 100);
// }

// // Hide the bottom sheet and show body vertical scrollbar
// const hideBottomSheet = () => {
//     bottomSheet.classList.remove("show");
//     document.body.style.overflowY = "auto";
// }

// // Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
// const dragStart = (e) => {
//     isDragging = true;
//     startY = e.pageY || e.touches?.[0].pageY;
//     startHeight = parseInt(sheetContent.style.height);
//     bottomSheet.classList.add("dragging");
// }

// // Calculates the new height for the sheet content and call the updateSheetHeight function
// const dragging = (e) => {
//     if(!isDragging) return;
//     const delta = startY - (e.pageY || e.touches?.[0].pageY);
//     const newHeight = startHeight + delta / window.innerHeight * 100;
//     updateSheetHeight(newHeight);
// }

// // Determines whether to hide, set to fullscreen, or set to default 
// // height based on the current height of the sheet content
// const dragStop = () => {
//     isDragging = false;
//     bottomSheet.classList.remove("dragging");
//     const sheetHeight = parseInt(sheetContent.style.height);
//     sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
// }

// dragIcon.addEventListener("mousedown", dragStart);
// document.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// dragIcon.addEventListener("touchstart", dragStart);
// document.addEventListener("touchmove", dragging);
// document.addEventListener("touchend", dragStop);

// sheetOverlay.addEventListener("click", hideBottomSheet);
// showModalBtn.addEventListener("click", showBottomSheet);