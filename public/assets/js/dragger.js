var elem = "";
var c = 0;

var elements;
function dragstart_handler(ev) {
    ev.dataTransfer.dropEffect = "copy";
    // Add the target element's id to the data transfer object



    elem = ev.target;
    
    console.log(elem.parentElement.id);


    


    console.log(ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    updateElements();
    
  });

  function updateElements(){
    elements = document.querySelectorAll(".build-tool");
    elements.forEach(element => {
      element.addEventListener("dragstart", dragstart_handler);
  });
  }


  function giveEditButton(el){
    let edit = document.createElement("div");

    // console.log(el, "el")
    // console.log(edit, " editor");

    edit.classList.add("editor");
    edit.innerHTML = `<i class="far fa-edit"></i>`
    el.appendChild(edit);
    edit.addEventListener("click",function(){
      let top = this.parentNode.offsetTop;
      let left = this.parentNode.offsetLeft;

      let editor = document.createElement("div");
      let close = document.createElement("span");
      
      editor.classList.add("modal");
      close.classList.add("close");
      close.innerHTML = `<i class="fas fa-times"></i>`;
      
      close.addEventListener("click",function(){
        this.parentElement.remove();
      })
      
      editor.appendChild(close);

      // console.log(editor);
      
      

      console.log(left,top)

      editor.style.left = `${5}px`;
      editor.style.top = `${5}px`;

      this.parentNode.appendChild(editor);

    })
  }

  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    // console.log(data);
    let el = document.getElementById(data);

    let childCount = ev.target.childElementCount;

    if(childCount <= 5 && ev.target.classList.contains("horizontal")){
      if(elem.parentElement.id === "builder-tools"){
        var clone = elem.cloneNode(true);
        clone.id = 'elem'+c;
        c++;
        elem.after(clone);
        giveEditButton(el);
      }
      el.classList.toggle("horizontal");
      ev.target.appendChild(el);
      reArraneAttributes(el);
      updateElements();
    }else if(ev.target.classList.contains("vertical")){
      if(elem.parentElement.id === "builder-tools"){
        var clone = elem.cloneNode(true);
        clone.id = 'elem'+c;
        c++;
        elem.after(clone);
        giveEditButton(el);
      }  
      el.classList.toggle("horizontal");
      ev.target.appendChild(el);
      reArraneAttributes(el);
      updateElements();
    }



  }


  function reArraneAttributes(data){
    

    // console.log(data.previousElementSibling);
    // data.parentNode.removeEventListener("dragstarts",dragstart_handler);
    // data.parentNode.addEventListener("dragstart", dragstart_handler);
    // data.parentNode.addEventListener("drop", drop_handler);
    // data.parentNode.removeEventListener("drop", drop_handler);
    // data.parentNode.removeEventListener("dragover", dragover_handler);
    // data.parentNode.addEventListener("dragover", dragover_handler);

    // ondrop="drop_handler(event)"
    //     ondragover="dragover_handler(event)"



  }