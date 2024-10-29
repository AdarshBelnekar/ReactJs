const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    //if the input is empty the the if block is run 
    if(inputBox.value===''){
        alert("Your must write something here!");
    }
    else{
        let li =document.createElement("li");//li is created
        li.innerHTML=inputBox.value;  //text-field is added into the li
        listContainer.appendChild(li);  // the li is append into the listconatiner.
        let span =document.createElement("span");//the span is creatd
        span.innerHTML ="\u00d7";//here is the cross icon is created.
        li.appendChild(span);
    }
    inputBox.value="";//after the adding into the ,this line make input box will become empty.
    saveData();//calling


}
//inputBox.value is empty then the if block is run


//Click function
//if the li is clicked is then checked and if checked then it will be unchecked

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        
        e.target.classList.toggle('checked');
        saveData();
        //the task is add and checked
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        //the task will be deleted here.
        saveData();

    }
    
    
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}

showTask();
