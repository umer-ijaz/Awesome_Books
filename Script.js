    document.getElementById("List").style.display="none";
    document.getElementById("Contact").style.display="none";
    document.getElementById("AddBook").style.display="none";

    document.getElementById("addbooks").addEventListener("click",function(){
        document.getElementById("List").style.display="none";
        document.getElementById("Contact").style.display="none";
        document.getElementById("AddBook").style.display="contents";
    })

    document.getElementById("list").addEventListener("click",function(){
        document.getElementById("Contact").style.display="none";
        document.getElementById("AddBook").style.display="none";
        document.getElementById("List").style.display="contents";
    })

    document.getElementById("contact").addEventListener("click",function(){
        document.getElementById("List").style.display="none";
        document.getElementById("AddBook").style.display="none";
        document.getElementById("Contact").style.display="contents";
    })

    

function Addbook(){
        var book = document.getElementById("book").value;
        var author = document.getElementById("author").value;
        var cont = document.getElementById("container2");
        var div = document.createElement("div");
        div.setAttribute("class","container3");
        var btn =  document.createElement("button");
        btn.setAttribute("class","btn");
        btn.innerHTML = "Remove Book";
        btn.setAttribute("onclick","remove(event)");
        var li = document.createElement("li");
        li.innerHTML = book + " by " + author;
        div.append(li);
        div.append(btn);
        cont.append(div);
        document.getElementById("book").value = "";
        document.getElementById("author").value = "";
        document.getElementById("container2").style.border = "2px solid black";
} 

function remove(event){
    var target = event.target.parentElement;
    target.remove();
    if(document.querySelectorAll(".container3").length === 0){
        document.getElementById("container2").style.border = "none";
    }
}


