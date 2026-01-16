const lights = document.querySelectorAll(".light");

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