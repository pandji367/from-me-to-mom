// ===========================
// MUSIC
// ===========================

const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    music.play().catch(()=>{});

    music.volume = 0.25;

    document.getElementById("bayi").scrollIntoView({
        behavior:"smooth"
    });

};

// ===========================
// ANIMASI SCROLL
// ===========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="1s";

observer.observe(section);

});

// ===========================
// TYPING SURAT
// ===========================

const surat = `

Mah...

Selamat Ulang Tahun ❤️

Makasih ya mah.....

Karena dari aku lahir,

Mamah selalu ada.

Makasih banyak ya mah...

buat semua doa,

kasih sayang,

kesabaran,

sama kerja keras mamah

selama ini.

Maaf ya mah...

Kalau aku belum bisa

ngasih hadiah yang besar,

belum bisa jadi 

yang mamah mau,

aku cuman bisa buat

hal kecil ini.

Semoga suatu hari nanti...

Aku bisa bales

semua perjuangan Mamah ya mah.

panjang umur ya mah,

sehat selalu,

biar mamah bisa liat

anak"mu sukses nanti.

Aku Sayang Mamah.

❤️

`;

const typing=document.getElementById("typing");

let i=0;

function ketik(){

if(i<surat.length){

typing.innerHTML+=surat.charAt(i);

i++;

setTimeout(ketik,45);

}

}

// mulai mengetik saat surat terlihat

const suratObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

ketik();

suratObserver.disconnect();

}

});

});

suratObserver.observe(document.getElementById("surat"));

// ===========================
// LOVE PHOTO
// ===========================

const love = document.getElementById("loveContainer");

const heartPattern = [
"001111111100",
"011111111110",
"111111111111",
"111111111111",
"111111111111",
"011111111110",
"001111111100",
"000111111000",
"000011110000",
"000001100000"
];

heartPattern.forEach(row=>{

const rowDiv=document.createElement("div");

rowDiv.style.display="flex";
rowDiv.style.justifyContent="center";

for(let i=0;i<row.length;i++){

if(row[i]=="1"){

const img=document.createElement("img");

img.src=Math.random()>0.5
?"bayi.jpeg"
:"sekarang.jpeg";

rowDiv.appendChild(img);

}else{

const kosong=document.createElement("div");

kosong.style.width="55px";
kosong.style.height="55px";

rowDiv.appendChild(kosong);

}

}

love.appendChild(rowDiv);

});

// ===========================
// HATI BERTERBANGAN
// ===========================

function heart(){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";
h.style.left=Math.random()*window.innerWidth+"px";
h.style.top=window.innerHeight+"px";
h.style.fontSize=(18+Math.random()*25)+"px";
h.style.pointerEvents="none";
h.style.zIndex="99999";
h.style.transition="all 5s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.top="-150px";
h.style.opacity="0";

},30);

setTimeout(()=>{

h.remove();

},5000);

}

setInterval(heart,700);

// ===========================
// FLOWERS
// ===========================

function bunga(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(6+Math.random()*5)+"s";

flower.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},11000);

}

setInterval(bunga,500);

// ===========================
// FOTO BERGANTI
// ===========================

const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");

let status=false;

setInterval(()=>{

if(status){

img1.style.opacity="1";
img2.style.opacity="0";

}else{

img1.style.opacity="0";
img2.style.opacity="1";

}

status=!status;

},5000);

//=========================
// ENDING TYPEWRITER
//=========================

const ending = `

Mah...

Terima kasih...

Sudah menjadi rumah pertama bagiku.

Terima kasih...

Sudah mengajarkanku arti kasih sayang.

Maaf...

Kalau sampai hari ini

aku belum bisa

memberikan hadiah yang besar.

Semoga...

Website kecil ini

bisa menjadi pengingat...

Bahwa aku sangat menyayangi Mamah.

Selamat Ulang Tahun ❤️

Aku Sayang Mamah.

Selamanya.

`;

const endingText=document.getElementById("endingText");

let x=0;

const endingObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeEnding();

endingObserver.disconnect();

}

});

});

endingObserver.observe(document.getElementById("finalScene"));

function typeEnding(){

if(x<ending.length){

endingText.innerHTML+=ending.charAt(x);

x++;

setTimeout(typeEnding,55);

}

}

//=========================
// LOADER
//=========================

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},2500);

});

//=========================
// CONFETTI
//=========================

const warna=[
"#FFD369",
"#FF8FB1",
"#6EC6FF",
"#7CFFB2",
"#FFFFFF"
];

function confetti(){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=warna[Math.floor(Math.random()*warna.length)];

c.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

const finalObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

for(let i=0;i<180;i++){

setTimeout(confetti,i*25);

}

finalObserver.disconnect();

}

});

});

finalObserver.observe(document.getElementById("finalScene"));

//=========================
// TWINKLE STAR
//=========================

setInterval(()=>{

const stars=document.querySelector(".stars");

stars.style.opacity=Math.random()*0.4+0.2;

},1000);

// Tombol kembali ke atas
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#ff8fb1";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

