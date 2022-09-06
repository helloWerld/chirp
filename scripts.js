window.onload = function() {
    function newChirp(){
        var addNewChirp = document.querySelector('input').value;
        document.querySelector('h1').textContent = addNewChirp;
    
    }

    let mybtn = document.getElementById("my-btn");
    mybtn.addEventListener("click", newChirp);
}