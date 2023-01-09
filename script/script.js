document.getElementById("topo").onclick = function() {scrollTop()};

function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function filtrar(val){
    var web = document.getElementsByClassName("web");
    var app = document.getElementsByClassName("app");
    var design = document.getElementsByClassName("design");
    if(val==1){
        for(var i=0;i<web.length;i++){
            web[i].style.display = "flex";
        }
        for(var i=0;i<app.length;i++){
            app[i].style.display = "flex";
        }
        for(var i=0;i<design.length;i++){
            design[i].style.display = "flex";
        }
    }

    if(val==2){
        
        for(var i=0;i<web.length;i++){
            web[i].style.display = "flex";
        }
        for(var i=0;i<app.length;i++){
            app[i].style.display = "none";
        }
        for(var i=0;i<design.length;i++){
            design[i].style.display = "none";
        }
    }

    if(val==3){
        
        for(var i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(var i=0;i<app.length;i++){
            app[i].style.display = "flex";
        }
        for(var i=0;i<design.length;i++){
            design[i].style.display = "none";
        }
    }

    if(val==4){
        
        for(var i=0;i<web.length;i++){
            web[i].style.display = "none";
        }
        for(var i=0;i<app.length;i++){
            app[i].style.display = "none";
        }
        for(var i=0;i<design.length;i++){
            design[i].style.display = "flex";
        }
    }
}