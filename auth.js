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