// const watchLink = document.getElementById("watch-link");
// const container = document.getElementById("container");

// watchLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (container.style.display === "none") {
//     container.style.display = "block";
//     watchLink.textContent = "Hide Video";
//   } else {
//     container.style.display = "none";
//     watchLink.textContent = "Episode 1";
//   }
// });

//  <script> 
// const watchLink = document.getElementById("watch-link");
// const container = document.getElementById("container");

// watchLink.addEventListener("click", function (event) {
//   // Prevents the link from jumping the page to the top (#)
//   event.preventDefault();

//   // 3. Toggle the video container's visibility
//   if (container.style.display === "none") {
//     container.style.display = "block"; // Make it visible
//     watchLink.textContent = "Hide Video"; // Optional: Change the link text
//   } else {
//     container.style.display = "none"; // Hide it again
//     watchLink.textContent = "Watch the Movie Now!";
//   }
// });
// //  </script>

// document.getElementById("watch-link").addEventListener("click", function (event) {
//     event.preventDefault();                   // Stop the link from reloading the page
//     document.getElementById("container").style.display = "block";  
// });

// 

const links = document.querySelectorAll(".watch-link");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = link.getAttribute("data-target");
        const videoDiv = document.getElementById(targetId);

        if (videoDiv.style.display === "none") {
            videoDiv.style.display = "block";
            link.textContent = "Hide " + link.textContent.replace("Show ", "");
        } else {
            videoDiv.style.display = "none";
            link.textContent = "Show " + link.textContent.replace("Hide ", "");
        }
    });
});
