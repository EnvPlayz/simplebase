var _blxrcomponent = { skeleton: { applyMode: "default" }, _splash: {} }
var skeleton = _blxrcomponent.skeleton
var _splash = _blxrcomponent._splash
document.head.innerHTML += `<style>.skeleton{
    border-radius: 1rem;
    background: linear-gradient(90deg, hsl(200,20%,80%) 0%, hsl(200, 20%, 95%) 100%);
    background-size: 200% 200%;
    animation: animate .5s ease infinite alternate;
    opacity: .8;
    outline: none;
    border: none;
}
.skeleton-text{
    width: 50%;
    height: .8rem;
    border-radius: 2rem;
}
@keyframes animate {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}
._splash{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    transition: .3s;
    opacity: 1;
    pointer-events: all;
    z-index: 9999999
}
._splash.fade{
    opacity: 0;
    pointer-events: none;
}
._splash .boom{
    animation: _splash_boom 1s ease;
}
@keyframes _splash_boom{
    0%{
        scale: 1;
        translate: 0px -10px;
    }
    100%{
        scale: 0.8;
        translate: 0px -300px;
    }
}</style>`
_splash.createSplash = function (timeout) {
    document.body.innerHTML += `<div id="__component_splash" class="_splash" style="background: #171717">
        <img style="height: 10%;" src="${document.querySelector('[rel="shortcut icon"]') ? document.querySelector(`[rel="shortcut icon"]`).href : "https://cdn.discordapp.com/attachments/776202188509806592/1055235210251354132/splash.png"}" alt="Loading">
    </div>`
    setTimeout(() => {
        document.querySelector("#__component_splash img").classList.add("boom")
        document.querySelector("#__component_splash").classList.add("fade")
        setTimeout(() => {
            document.querySelector("#__component_splash").remove()
        }, timeout ? timeout * 1000 : 800);
    }, timeout ? timeout * 1000 : 800);
}
skeleton.load = function (elem) {
    elem.classList.add("skeleton")
    if (elem.tagName != "IMG") {
        elem.classList.add("skeleton-text")
    }
    var iid = setInterval(() => {
        if (elem.tagName != "IMG") {
            if (elem.textContent) {
                elem.classList.remove("skeleton")
                elem.classList.remove("skeleton-text")
                clearInterval(iid)
            }
        } else {
            if (elem.src.length > 0) {
                elem.classList.remove("skeleton")
                clearInterval(iid)
            }
        }
    }, 100);
}
skeleton.apply = function (mode, elems) {
    if (!elems) {
        elems = ["IMG", "H1", "H2", "H3", "H4", "H5", "P"]
    }
    this.applyMode = mode
    if (mode && mode == "all") {
        elems.forEach(tag => {
            document.querySelectorAll(tag).forEach(function (elem) {
                skeleton.load(elem)
            })
        });
    }
}