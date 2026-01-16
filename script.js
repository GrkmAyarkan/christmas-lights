const lights = document.querySelectorAll(".light");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const intervalInput = document.getElementById("intervalInput");

const intensityInput = document.getElementById("intensityInput");

const sizeInput = document.getElementById("sizeInput");

function applyLightSize(size) {
    lights.forEach(light => {
        light.style.width = `${size}px`;
        light.style.height = `${size}px`;
    });
}

applyLightSize(Number(sizeInput.value));

sizeInput.addEventListener("input", () => {
    applyLightSize(Number(sizeInput.value));
});

let currentIndex = 0;
let intervalId = null;

function startAnimation( intervalTime) {
    // Eğer animasyon zaten çalışıyorsa tekrar başlatma
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        // Tüm ışıkları söndür
        lights.forEach(light => {
            light.classList.remove("active");
            light.style.backgroundColor = "transparent";
            light.style.opacity = "0.4";
            light.style.boxShadow = "none";
        });

        // Aktif ışığı yak
        const activeLight = lights[currentIndex];
        const color = activeLight.dataset.color;
        const intensity = Number(intensityInput.value);

        activeLight.style.backgroundColor = color;
        activeLight.style.opacity = intensity;
        activeLight.style.boxShadow = `0 0 ${20 * intensity}px ${6 * intensity}px ${color}`;
        activeLight.classList.add("active");

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

// Yoğunluk değiştiğinde aktif ışık varsa hemen güncellensin
intensityInput.addEventListener("input", () => {
    const activeLight = document.querySelector(".light.active");
    if (!activeLight) return;

    const intensity = Number(intensityInput.value);
    const color = activeLight.dataset.color;

    activeLight.style.opacity = intensity;
    activeLight.style.boxShadow = `0 0 ${20 * intensity}px ${6 * intensity}px ${color}`;
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