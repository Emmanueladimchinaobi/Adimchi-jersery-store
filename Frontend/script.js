const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("-translate-x-0");

    mobileMenu.classList.remove("opacity-0");

    mobileMenu.classList.remove("pointer-events-none");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-0");
    mobileMenu.classList.add("-translate-x-full");

    mobileMenu.classList.add("opacity-0");

    mobileMenu.classList.add("pointer-events-none");
});
 const Clubbtn = document.getElementById("Club-btn");
 const Clubmenu = document.getElementById("Club-menu");
 Clubbtn.addEventListener("click", () => {
 Clubmenu.classList.toggle("hidden")

 });
 // Close the dropdown when clicking anywhere else
document.addEventListener("click", (e) => {
    if (
        !Clubbtn.contains(e.target) &&
        !Clubmenu.contains(e.target)
    ) {
        Clubmenu.classList.add("hidden");
    }
});
 const Brandsbtn = document.getElementById("Brands-btn");
 const Brandsmenu = document.getElementById("Brands-menu");
 Brandsbtn.addEventListener("click" , () => {
    Brandsmenu.classList.toggle("hidden");
 });

 // Close the dropdown when clicking anywhere else
document.addEventListener("click", (e) => {
    if (
        !Brandsbtn.contains(e.target) &&
        !Brandsmenu.contains(e.target)
    ) {
        Brandsmenu.classList.add("hidden");
    }
});



 
const clubsbtn2 = document.getElementById("clubsbtn2");
const backbtn = document.getElementById("backbtn");
const submenu = document.getElementById("submenu");

// Open submenu
clubsbtn2.addEventListener("click", () => {
 
  

  submenu.classList.remove("-translate-x-full");
  submenu.classList.add("-translate-x-0");
  submenu.classList.remove("opacity-0");
  submenu.classList.remove("pointer-events-none");
  
});

// Go back
backbtn.addEventListener("click", () => {
  submenu.classList.remove("-translate-x-0");
  submenu.classList.add("-translate-x-full");
  submenu.classList.add("opacity-0");
  submenu.classList.add("pointer-events-none");
  

  
  
});


const Brandbtn2 = document.getElementById("Brandbtn2");
const brandbackbtn = document.getElementById("brandbackbtn");
const brandsubmenu = document.getElementById("brandsubmenu");

Brandbtn2.addEventListener("click", () => {
    brandsubmenu.classList.remove("-translate-x-full");
  brandsubmenu.classList.add("-translate-x-0");
  brandsubmenu.classList.remove("opacity-0");
  brandsubmenu.classList.remove("pointer-events-none");
  
   
});

brandbackbtn.addEventListener("click", () => {
   brandsubmenu.classList.remove("-translate-x-full");
  brandsubmenu.classList.add("-translate-x-0");
  brandsubmenu.classList.add("opacity-0");
  brandsubmenu.classList.add("pointer-events-none");
  
});







 const images = [
      "img/download (24).jfif",
      "img/Football kit wallpaper for smartphone.jfif",
      "img/Juventus.jfif",
      "img/download (24).jfif"
  ];

    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("photo").src = images[currentIndex];
    }, 3000);

    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("photo").src = images[currentIndex];
    };
//*******products */

const products = document.querySelectorAll(".product");
const pagination = document.getElementById("pagination");


const productsPerPage = 3;

let currentPage = 1;

const totalPages = Math.ceil(products.length / productsPerPage);


function showProducts(page) {

    currentPage = page;

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {

        if (index >= start && index < end) {

            product.classList.remove("hidden");

        } else {

            product.classList.add("hidden");

        }

    });

    createPagination();

}


function createPagination() {

    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.textContent = i;

        button.className =
            "px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-pink-600 hover:text-white";

        button.addEventListener("click", () => {

            showProducts(i);

        });

        pagination.appendChild(button);

    }

}


showProducts(1);




  


