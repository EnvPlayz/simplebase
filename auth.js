// var __authSt = "not sent yet"
document.addEventListener("DOMContentLoaded",()=>{
    if (window.sessionStorage.getItem("served") != JSON.stringify(true)) {
        if (window.location.pathname.includes("/servercheck")) {
        } else {
            window.location.assign("/servercheck.html?proceed=" + window.location.pathname.replace("/", ""))
        }
    }
})
async function isAuthenticated(){
    return fetch("https://api.simplebase.ga/auth/user", {
        method: 'GET',
        credentials: "include",
    }).then((res) => {
        if (res.status == 200) {
            res.json().then(function (THEENC) {

            })
            return true
        } else if(res.status==429){
            window.location.assign("/servercheck.html?proceed=" + window.location.pathname.replace("/", "")+"&reason=429")
        }else{
            if (res.status != 401) {
                window.location.assign("/servercheck.html")
            }else{

            }
            return false
        }
    }).catch(function () { return false })
}
async function authData(){
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://api.simplebase.ga/auth/user", {
                method: 'GET',
                credentials: "include",
            }).then((res) => {
                if (res.status == 200) {
                    res.json().then(function (THEENC) {
                        resolve(THEENC)
                    })
                } else if (res.status == 429) {
                    window.location.assign("/servercheck.html?proceed=" + window.location.pathname.replace("/", "") + "&reason=429")
                } else {
                    reject(false)
                }
            }).catch(reject)
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