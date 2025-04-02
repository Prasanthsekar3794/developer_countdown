document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    let count = 11;

    let timer = setInterval(() => {
        
        
        if (count > 1) {
            count--;
            countdownElement.textContent = count;
            countdownElement.innerHTML = count < 10 ? "0" + count : count ;
        } else {
            clearInterval(timer);
            countdownElement.classList.add("fade"); 
            setTimeout(() => {
                countdownElement.textContent = "Happy Developers Day!";
                countdownElement.style.textTransform = "uppercase";
                countdownElement.style.transform = "scale(1)";
                countdownElement.style.fontSize = "100px";
                countdownElement.style.opacity = "10";
                countdownElement.style.color ="white"
                countdownElement.style.marginLeft = "-50px"
                countdownElement.style.marginTop = "-180px"
                countdownElement.style.fontSize = "4rem";
                countdownElement.style.transition = "0.4s";
                document.body.style.backgroundImage = 'url(bg1.jpg)';
                document.body.style.backgroundSize = "50%"
                document.body.style.backgroundPosition = "center";
                document.body.style.backgroundRepeat = "non-repeat";
                document.body.style.backgroundSize = "cover";
                document.body.style.opacity = "10"
                document.body.style.height = "100hv";

                countdownElement.classList.remove("fade"); 
            }, 500);
        }
    }, 1000);
});
