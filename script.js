function makeParagraph(member) {
  let para = document.createElement("p");
  let node = document.createTextNode(member);
  para.appendChild(node);
  output.appendChild(para);
}

let button = document.getElementById("convert");

button.addEventListener("click", function() {

  var line0 = document.getElementById("textarea").value;
    
  
  
  // lowercase he
  line0 = line0.replace(
             /\bhe\b/g, 
             "she"
         )
  // uppercase He
  line0 = line0.replace(
             /\bHe\b/g, 
             "She"
         )
  
  // lowercase him
  line0 = line0.replace(
             /\bhim\b/g, 
             "her"
         )
  
  //uppercase him
  line0 = line0.replace(
             /\bHim\b/g, 
             "Her"
         )
  
  //lowercase his
  line0 = line0.replace(
             /\bhis\b/g, 
             "her"
         )
  
  //uppercase his
  line0 = line0.replace(
             /\bHis\b/g, 
             "Her"
         )
  // lowercase himself
  line0 = line0.replace(
             /\bhimself\b/g, 
             "herself"
         )
  
  // uppercase himself
  line0 = line0.replace(
             /\bHimself\b/g, 
             "Herself"
         )

  line0 = line0.replace(
             /\bman\b/g, 
             "woman"
         )

  line0 = line0.replace(
             /\bMan\b/g, 
             "Woman"
         )

    line0 = line0.replace(
             /\bmen\b/g, 
             "women"
         )

    line0 = line0.replace(
             /\bMen\b/g, 
             "Women"
         )

  const output = document.getElementById("output");
  output.innerHTML = "";
  const paraArray = line0.split(/\r?\n/);
  paraArray.forEach((member) => makeParagraph(member));
});

