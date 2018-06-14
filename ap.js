
    let slideIndex = 1;
    showImg(slideIndex);
   
    function nextSlide(n) {
        showImg(slideIndex += n);
    }

    function showImg(n){
        let i;
        const x = document.getElementsByClassName("slides");
        if (n > x.length){slideIndex = 1};
        if( n < 1 ){slideIndex = x.length};
        for ( i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

  
    

    function validateEmail(email){

        const REG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(REG.test(email)){
            return true;
        }
        else{
            
        }
    }