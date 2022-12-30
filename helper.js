function $(elemSelector){
    return document.querySelector(elemSelector)
}
function $all(es){
    return document.querySelectorAll(es)
}
function $i(es){
    return document.getElementById(es)
}
function $c(es){
    return document.querySelector("."+es)
}
function $cl(es){
    return document.querySelector(es).classList
}