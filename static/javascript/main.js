// function showOrHideDiv() {
//     var v = document.getElementById("dispearing");
//     if (parseFloat(v.style.opacity) === 0) {
//         v.style.opacity = "1";
//     } 
//     else {
//              v.style.opacity = "0";
//          }

// }

function setOpacityToZero() {
    var v = document.getElementById("dispearing");
    if (parseFloat(v.style.opacity) === 1) {
        v.style.opacity = "0";
        
    }
}



// function showOrHideDiv() {
//     var v = document.getElementById("dispearing");
//     if (v.style.display === "block" || v.style.display === "") {
//         v.style.display = 'none';
//     } else {
//         v.style.display = 'block';
//     }
// }


// function showDiv() {
//     var v = document.getElementById("dispearing");
//     if (parseFloat(v.style.opacity) === 1) {
//         v.style.opacity = "0";
//     } else {
//         v.style.opacity = "1";
//     }
// }

 
// function showOrHideDiv() {
//         var v = document.getElementById("searchid");
//         if(v.style.opacity === 1)
//         {
//             v.style.opacity=0;
//         } 
//         else{
//             v.style.opacity= 1;
//         }
//     }
// $(document).ready(function()
// {
//     $('#btnclick').on('click',function(){
//         $("#searchid").show();
//     });
    
// });
// $(document).ready(function()
// {
//     $('#btnclick').on('click',function(){
//         $("#dispearing").toggle();
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     let scrollcontainer = document.querySelector(".home-gallery");
//     let leftbtn = document.getElementById("left-button");
//     let rightbtn = document.getElementById("right-button");

//     rightbtn.addEventListener("click", () => {
//         scrollcontainer.scrollLeft += 400;
//     });

//     leftbtn.addEventListener("click", () => {
//         scrollcontainer.scrollLeft -= 400;
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery");
    let leftbtn = document.getElementById("left-button");
    let rightbtn = document.getElementById("right-button");

    const imageWidth = 416;
    const numberOfImagesToScroll = 3.2;
    const scrollAmount = numberOfImagesToScroll * imageWidth;

    rightbtn.addEventListener("click", () => {
        document.documentElement.style.scrollBehavior = "smooth";
        scrollcontainer.scrollLeft += scrollAmount;
    });

    leftbtn.addEventListener("click", () => {
        document.documentElement.style.scrollBehavior = "smooth";
        scrollcontainer.scrollLeft -= scrollAmount;
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const playButton = document.getElementById("play-button");
//     const videoContainer = document.getElementById("video-container");

//     playButton.addEventListener("click", () => {
//       videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-ndg1eEhEpg?autoplay=1" frameborder="0" allowfullscreen></iframe>';
//     });
//   });
  
// document.addEventListener("DOMContentLoaded", () => {
//     const playButton = document.getElementById("play-button");
//     const videoContainer = document.getElementById("video-container");

//     playButton.addEventListener("click", () => {
//       videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-ndg1eEhEpg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     });

//     document.addEventListener("mouseup", (event) => {
//       const isClickInside = videoContainer.contains(event.target);
//       if (!isClickInside) {
        
//         videoContainer.innerHTML = '';
//       }
//     });
//   });