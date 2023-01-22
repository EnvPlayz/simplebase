var __authSt = "not sent yet"
document.addEventListener("DOMContentLoaded",()=>{
    if (window.sessionStorage.getItem("served") != JSON.stringify(true)) {
        if (window.location.pathname.includes("/servercheck")) {
        } else {
            window.location.assign("/servercheck.html?proceed=" + window.location.pathname.replace("/", ""))
        }
    }
})
async function isAuthenticated(){
   if(__authSt!="not sent yet"){
    return true
   }else if(__authSt==401){
    return false;
   }
    return fetch("https://api.simplebase.ga/auth/user", {
        method: 'GET',
        credentials: "include",
    }).then((res) => {
        if (res.status == 200) {
            res.json().then(function (THEENC) {
                __authSt = THEENC
            })
            return true
        } else {
            if (res.status != 401) {
                window.location.assign("/servercheck.html")
            }else{
                __authSt=401
            }
            return false
        }
    }).catch(function () { return false })
}
async function authData(){
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (__authSt == "not sent yet") {
                fetch("https://api.simplebase.ga/auth/user", {
                    method: 'GET',
                    credentials: "include",
                }).then((res) => {
                    if (res.status == 200) {
                        res.json().then(function (THEENC) {
                            resolve(THEENC)
                        })
                    } else {
                        reject(false)
                    }
                }).catch(reject)
            } else {
                resolve(__authSt)
            }
        }, 1000);
    });
   return pro
}
function logout(){
    fetch("https://api.simplebase.ga/auth/logout", {
        method: 'GET',
        credentials: "include",
    }).then((res) => {
        if (res.status == 200) {
            window.location.reload()
        } else {
            console.error("Something went wrong.");
        }
    }).catch(console.error)
}