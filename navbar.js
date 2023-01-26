    var tempHtml = document.body.innerHTML
    var nav = `<nav class="py-3 px-5 sticky top-0 w-full bg-neutral-900 z-50 bg-opacity-80 bg-clip-padding backdrop-blur-[3px] text-white border-neutral-800 border-b">
    <div class="relative max-w-7xl flex items-center justify-between mx-auto">
        <div class="logo flex items-center">
            <a href="index.html" id="__grplogo" class="flex items-center group transition duration-200">
                <img id="__navLOGO" src="assets/logo.png" class="w-[50px] h-[50px] group-hover:scale-[0.9] transition duration-200">
                    <p class="font-bold group-hover:scale-[1.1] transition duration-200 group-hover:text-[#2FAC77]">simplebase</p>
                    </a>
                    </div>
                    <div class="navlinks hidden md:flex items-center space-x-5">
                    <a href="#" class="hover:text-[#2FAC77] transition duration-200">Documentation</a>
                    <a href="databases.html" class="hover:text-[#2FAC77] transition duration-200">Databases</a>
                    </div>
                    <div class="buttons hidden md:flex items-center justify-center space-x-2">
                    <button class="loginButton border p-2 text-xs rounded-lg border-neutral-800 text-gray-100 hover:bg-neutral-800 transition duration-200">Sign in</button>
                    <button id="navStartcreating" class="p-2 text-xs rounded-lg bg-[#2FAC77] hover:bg-[#019678] transition duration-200">Start creating</button>
                    </div>
                    <div class="md:hidden flex items-center mobile-menu-icon">
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button>

                    </div>
                    </div>
    <div class="hidden mobile-menu">
    <a href="login.html" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Sign in</a>
        <a href="#" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Documentation</a>
        <a href="databases.html" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Databases</a>
        </div>
        </nav>`
        document.body.innerHTML=nav
        document.body.innerHTML+=tempHtml
        const simplebase_icons = {
            allowed: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /</svg>`,
            loading: `<svg class="w-10 h-10 spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
        }
        isAuthenticated().then(loggedin=>{
            if(loggedin==true){
                document.getElementById("navStartcreating").onclick = function () {
                    window.location.assign("databases.html")
                }
            }else{
                document.getElementById("navStartcreating").onclick = function () {
                    window.location.assign("signup.html")
                }
            }
        })
document.querySelectorAll(".loginButton").forEach(button => {
    button.addEventListener("click", () => {
        window.location.assign("login.html")
    })
})
document.getElementById("__grplogo").onmouseenter=function(){
    document.getElementById("__navLOGO").src="assets/logo-dark.png"
}
document.getElementById("__grplogo").onmouseleave=function(){
    document.getElementById("__navLOGO").src="assets/logo.png"
}
// const script = document.createElement("script")
// script.src = "./spl.js"
// script.onload = function () {
//     _splash.createSplash(5)
// }
// document.head.appendChild(script)