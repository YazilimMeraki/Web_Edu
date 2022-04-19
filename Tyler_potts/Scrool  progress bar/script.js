document.addEventListener("DOMContentLoaded", function() {
    const progressbarinner = document.querySelector('.progress-bar-inner');

    window.addEventListener('scroll', function() {
        let h = this.document.documentElement;

        let st = h.scrollTop || this.document.body.scrollTop;

        let sh = h.scrollHeight || this.document.body.scrollHeight;

        let percent = st / (sh - h.clientHeight) * 100;
        roundedPercent = Math.round(percent)
        console.log(percent)

        progressbarinner.style.width = percent + "%"
        progressbarinner.innerText = roundedPercent + "%"
    })

})