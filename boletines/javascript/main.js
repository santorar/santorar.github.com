

let closes = document.querySelectorAll(".close");
closes.forEach(function(close){
        close.addEventListener("click", function(ev){
            ev.preventDefault();
            let content = document.querySelector(".content");
            content.classList.remove("fadeInDown");
            content.classList.remove("animated");
            content.classList.add("fadeOutUp");
            content.classList.add("animated");
            setTimeout(() => {
                location.href="/";
            }, 600);
            return false;

        });
    });


