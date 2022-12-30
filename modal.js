$all("[open-modal]").forEach(btn => {
    btn.onclick=function(){
        if (btn.getAttribute("open-modal")){
            openModal(btn.getAttribute("open-modal"))
        }
    }
})

function openModal(modalName){
    var modal = $("[modal-register=" + modalName + "]")
    var contentModal = modal.querySelector(".modalContent")
    modal.classList.remove("hidden")
    setTimeout(() => {
        modal.classList.add("backdrop-blur-md")
        setTimeout(() => {
            document.title = "Simplebase | Modal"
            contentModal.classList.remove("hidden")
            modal.classList.remove("pointer-events-none")
            modal.classList.add("pointer-events-auto")
            // $i("refInp").value = ""
            // $i("refInp").focus()
        }, 100);
    }, 5);
        modal.addEventListener("click",function(e){
       if(e.target==modal){
        modal.classList.remove("backdrop-blur-md")
           setTimeout(() => {
               document.title = "Simplebase | Database"
               contentModal.classList.add("hidden")
               modal.classList.add("pointer-events-none")
               modal.classList.remove("pointer-events-auto")
           }, 100);
       }
    })
}
function closeModal(modalName){
    var m = $("[modal-register=" + modalName + "]")
    var mc = m.querySelector(".modalContent")
    m.classList.remove("backdrop-blur-md")
    setTimeout(() => {
        document.title = "Simplebase | Database"
        mc.classList.add("hidden")
        m.classList.add("pointer-events-none")
        m.classList.remove("pointer-events-auto")
    }, 100);
}