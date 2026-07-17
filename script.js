console.log("Script berhasil dimuat");
document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector(".love-container");

const btn = document.getElementById("playMusic");

const music = document.getElementById("bgMusic");

const popup = document.getElementById("musicPopup");
if(container){

    setInterval(createLove,700);

}

    
function createLove(){

    const love = document.createElement("div");

    love.className="love";

    love.innerHTML="❤️";

    love.style.left=Math.random()*100+"vw";

    love.style.fontSize=(20+Math.random()*25)+"px";

    love.style.animationDuration=(4+Math.random()*4)+"s";

    container.appendChild(love);

    setTimeout(()=>{
        love.remove();
    },8000);

}

if(btn){

    btn.onclick = () => {

        music.play();

        popup.style.opacity = "0";

        setTimeout(() => {

            popup.style.display = "none";

        },500);

    };

}


/* ==================================
   HITUNG LAMA HUBUNGAN
================================== */

// Format:
// Tahun, Bulan(0-11), Tanggal, Jam, Menit, Detik
const startDate = new Date(2023, 7, 26, 0, 0, 0);
// Contoh di atas = 1 Januari 2024

function updateLoveTimer(){
    console.log("Timer berjalan");

    const now = new Date();

    console.log(startDate);
    console.log(now);

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if(days < 0){

        months--;

        const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += lastMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    const diff = now - startDate;
    const totalDays=Math.floor(diff/86400000);
    const totalDaysEl = document.getElementById("totalDays");

if(totalDaysEl){

    totalDaysEl.textContent = totalDays;

}
    const hours = Math.floor(diff / (1000*60*60)) % 24;
    const minutes = Math.floor(diff / (1000*60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    const yearsEl = document.getElementById("years");
if(yearsEl){
    yearsEl.textContent = years;
}
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

/*=====================================
        LIGHTBOX GALLERY
======================================*/

const gallery = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeLightbox");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let current = 0;

// Membuka gambar
gallery.forEach((img, index) => {

    img.addEventListener("click", () => {

        current = index;

        showImage();

        lightbox.classList.add("active");

    });

});

// Menampilkan gambar
function showImage(){

    lightboxImg.src = gallery[current].src;

}

// Tombol Next
nextBtn.addEventListener("click", () => {

    current++;

    if(current >= gallery.length){

        current = 0;

    }

    showImage();

});

// Tombol Previous
prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = gallery.length - 1;

    }

    showImage();

});

// Tombol Close
closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Klik area hitam untuk menutup
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

// Keyboard
document.addEventListener("keydown", (e) => {

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

});
})