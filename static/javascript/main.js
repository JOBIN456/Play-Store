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

document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".gallery-big-slide");
    let leftbtn = document.getElementById("big-left-button");
    let rightbtn = document.getElementById("big-right-button");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 1600;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 1600;
    });
});
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


document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery-2");
    let leftbtn = document.getElementById("left-button-1");
    let rightbtn = document.getElementById("right-button-1");

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


document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery-3");
    let leftbtn = document.getElementById("left-button-2");
    let rightbtn = document.getElementById("right-button-2");

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
document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery-4");
    let leftbtn = document.getElementById("left-button-4");
    let rightbtn = document.getElementById("right-button-4");

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
document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery-5");
    let leftbtn = document.getElementById("left-button-5");
    let rightbtn = document.getElementById("right-button-5");

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



document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".home-gallery-6");
    let leftbtn = document.getElementById("left-button-6");
    let rightbtn = document.getElementById("right-button-6");

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


document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet");
    let leftbtn = document.getElementById("left-button-8");
    let rightbtn = document.getElementById("right-button-8");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});




document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet-2");
    let leftbtn = document.getElementById("left-button-9");
    let rightbtn = document.getElementById("right-button-9");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});



document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet-3");
    let leftbtn = document.getElementById("left-button-10");
    let rightbtn = document.getElementById("right-button-10");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});



document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet-4");
    let leftbtn = document.getElementById("left-button-11");
    let rightbtn = document.getElementById("right-button-11");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet-5");
    
    let leftbtn = document.getElementById("left-button-12");
    let rightbtn = document.getElementById("right-button-12");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".tablet-6");
    let leftbtn = document.getElementById("left-button-13");
    let rightbtn = document.getElementById("right-button-13");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 800;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 800;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".scrollable-model");
    let leftbtn = document.getElementById("app-left-button");
    let rightbtn = document.getElementById("app-right-button");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 1300;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 1300;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".scrollable-model-1");
    let leftbtn = document.getElementById("app-1-left-button");
    let rightbtn = document.getElementById("app-1-right-button");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 1300;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 1300;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let scrollcontainer = document.querySelector(".scrollable-model-2");
    let leftbtn = document.getElementById("app-2-left-button");
    let rightbtn = document.getElementById("app-2-right-button");

    rightbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft += 1300;
    });

    leftbtn.addEventListener("click", () => {
        scrollcontainer.scrollLeft -= 1300;
    });
});



function change() {
    var elements = document.getElementsByClassName('changing-heading');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Top Free";
    }
}

function change_1() {
    var elements = document.getElementsByClassName('changing-heading');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Top grossing";
    }
}
function change_2() {
    var elements = document.getElementsByClassName('changing-heading');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Top paid";
    }
}
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