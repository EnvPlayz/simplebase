    var tempHtml = document.body.innerHTML
    var nav = `<nav class="py-3 px-5 sticky top-0 w-full bg-neutral-900 z-50 bg-opacity-80 bg-clip-padding backdrop-blur-[3px] text-white border-neutral-800 border-b">
    <div class="relative max-w-7xl flex items-center justify-between mx-auto">
        <div class="logo">
            <a href="index.html" class="flex items-center">
                <img src="assets/logo.png" class="w-[50px] h-[50px]">
                    <p class="font-bold">simplebase</p>
                    </a>
                    </div>
                    <div class="navlinks hidden md:flex items-center space-x-5">
                    <a href="#" class="hover:text-[#2FAC77] transition duration-200">Documentation</a>
                    <a href="databases.html" class="hover:text-[#2FAC77] transition duration-200">Databases</a>
                    </div>
                    <div class="buttons hidden md:flex items-center justify-center space-x-2">
                    <button class="loginButton border p-2 text-xs rounded-lg border-neutral-800 text-gray-100 hover:bg-neutral-800 transition duration-200">Sign in</button>
                    <button class="signupButton p-2 text-xs rounded-lg bg-[#2FAC77] hover:bg-[#019678] transition duration-200">Start creating</button>
                    </div>
                    <div class="md:hidden flex items-center mobile-menu-icon">
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button>

                    </div>
                    </div>
    <div class="md:hidden mobile-menu">
    <a href="login.html" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Sign in</a>
        <a href="#" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Documentation</a>
        <a href="databases.html" class="block py-2 px-4 text-sm text-center hover:text-[#2FAC77] transition duration-200">Databases</a>
        </div>
        </nav>`
        document.body.innerHTML=nav
        document.body.innerHTML+=tempHtml