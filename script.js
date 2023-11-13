var player="B";
var numJog= 0;


function checkjogo(id) {

    var pc = document.getElementById("cpu").checked;

        var opt = verificaSrc(id);

        if(opt == "transp.png"){
        document.getElementById(id).src="img/" + player + ".png";

        if(winchek()){
            alert("FIM DE JOGO " + player + " VENCEU! ");
            return false;
            // location.reload();
        
        }

        if(player == "B"){

            
            player = "M";

        }else{
            player = "B";

        }
        numJog++;

       }

       if(numJog >= 9){
        alert("FIM DE JOGO ! DEU VELHA " + player + " !!!");
        return false;
          // location.reload();
       }

       if(pc && player == "M") {
        checkjogo(jogoDopc());
    
         }       
    }

   function verificaSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}
   


function jogoDopc() {
    if(verificaSrc('c5') == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random() * 9) + 1);
}



function winchek() {

    if((verificaSrc("c1") == verificaSrc("c2")) && (verificaSrc("c1") == verificaSrc("c3")) && verificaSrc("c1")!= "transp.png"){
        return true;
    }
    if((verificaSrc("c4") == verificaSrc("c5")) && (verificaSrc("c4") == verificaSrc("c6")) && verificaSrc("c4")!= "transp.png"){
        return true;
    }
    if((verificaSrc("c7") == verificaSrc("c8")) && (verificaSrc("c7") == verificaSrc("c9")) && verificaSrc("c7")!= "transp.png"){
        return true;
    }
    if((verificaSrc("c1") == verificaSrc("c4")) && (verificaSrc("c1") == verificaSrc("c7")) && verificaSrc("c1")!= "transp.png"){
        return true;
    }
    if((verificaSrc("c2") == verificaSrc("c5")) && (verificaSrc("c2") == verificaSrc("c8")) && verificaSrc("c2")!= "transp.png"){
        return true;
    }
    return false;
    }
