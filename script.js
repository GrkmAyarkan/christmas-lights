const lights = document.querySelectorAll(".light");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const intervalInput = document.getElementById("intervalInput");

let currentIndex = 0;
let intervalId = null;

function startAnimation( intervalTime) {
    // Eğer animasyon zaten çalışıyorsa tekrar başlatma
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        // Tüm ışıkları söndür
        lights.forEach(light => light.classList.remove("active"));

        // Aktif ışığı yak
        lights[currentIndex].classList.add("active");

        // Bir sonraki index
        currentIndex++;

        // Sona gelince başa dön
        if (currentIndex >= lights.length) {
            currentIndex = 0;
        }
    }, intervalTime);
}

function stopAnimation() {
    clearInterval(intervalId);
    intervalId = null;

    //Tüm ışıkları söndür
    lights.forEach(light => light.classList.remove("active"));
}

startBtn.addEventListener("click", () => {
    const intervalTime = Number(intervalInput.value) || 500;
    startAnimation(intervalTime);
} );

stopBtn.addEventListener("click" , () => {
    stopAnimation();
} );

// Interval değiştiğinde animasyonu güncelle
intervalInput.addEventListener("change", ()=> {
    if (intervalId !== null) {
        stopAnimation();
        const intervalTime = Number(intervalInput.value) || 500; // Boş veya hatalı bir değer kullanılırsa 500 ms kullanılır.
        startAnimation(intervalTime);
    }
});


/* 

let currentIndex = 0;

setInterval(() => {
    //Tüm ışıkları söndür
    lights.forEach(light => light.classList.remove("active"));

    // Aktif ışığı yak
    lights[currentIndex].classList.add("active");

    // Bir sonraki index'e geç
    currentIndex++;

    // Sona gelince başa dön
    if (currentIndex >= lights.length) {
        currentIndex = 0;
    }
}, 500);

 */