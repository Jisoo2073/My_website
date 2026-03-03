/* 🔹 시간 표시 */
function updateClocks() {
    const indy = new Date().toLocaleTimeString("en-US", {timeZone: "America/Indiana/Indianapolis"});
    const ist = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Istanbul"});
    document.getElementById("indyClock").textContent = indy;
    document.getElementById("istanbulClock").textContent = ist;
}
setInterval(updateClocks, 1000);
updateClocks();

/* 🔹 드래그 기능 */
document.querySelectorAll(".draggable").forEach(el => {
    const handle = el.querySelector(".drag-handle") || el;
    let offsetX = 0, offsetY = 0, isDown = false;

    handle.addEventListener("mousedown", e => {
        isDown = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        el.style.zIndex = Date.now();
    });

    document.addEventListener("mousemove", e => {
        if (!isDown) return;
        el.style.left = (e.clientX - offsetX) + "px";
        el.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => isDown = false);
});

/* 🔹 투명도 조절 */
document.getElementById("opacityControl").addEventListener("input", function(){
    document.querySelectorAll(".window, .floating-widget")
        .forEach(el => el.style.opacity = this.value);
});
