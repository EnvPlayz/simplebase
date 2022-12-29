async function isAuthenticated(){
   return fetch("https://api.simplebase.ga/auth/user", {
        method: 'GET',
        credentials: "include",
    }).then((res) => {
        if(res.status==200){
            return true
        }else{
            return false
        }
    }).catch(function () { return false })
}
async function authData(){
    const pro = new Promise((resolve, reject) => {
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