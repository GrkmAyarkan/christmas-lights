const lights = document.querySelectorAll(".light");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let currentIndex = 0;
let intervalId = null;
const DEFAULT_INTERVAL = 500;

function startAnimation( intervalTime = DEFAULT_INTERVAL) {
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
    startAnimation();
} );

stopBtn.addEventListener("click" , () => {
    stopAnimation();
} );



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