/* generating html elements */
// const staticDog = document.querySelector(".static.doggy");

  // generation function
  function generateDogElement() {
    // step one: generate the HTML
    const headColor= "#666666";
    const earColor= "#333333";
  const earColorInside= "#4D4D4D";
  const cheekColor= "#B3B3B3";
  const legColor="#808080";
  const tailColor="#B3B3B3";

    // make the general container first
    const dogContainer = document.createElement("div");
    dogContainer.classList.add("dog-container");
  
    //create & fill speech bubble
    // const dogSpeechBubble = document.createElement("div");
    // dogSpeechBubble.classList.add("dog-speech-bubble");
    // dogSpeechBubble.innerText = dogData.message;
    // dogContainer.appendChild(dogSpeechBubble); //add to DOM
  
    //now for the hard part: create the cat
    const dog = document.createElement("div");
    dog.classList.add("doggy");
    dogContainer.appendChild(dog); //add to DOM
  

    const dogHead = `
    <div class="doggy-container">
      <div class="doggy-ear-left"></div>
      <div class="doggy-head"></div>
        <div class="doggy-ear-left"></div>
          <div class="doggy-ear-right-inside"></div>
          <div class="doggy-ear-right"></div>        
          <div class="doggy-eye-left"></div>
        <div class="doggy-eye-right"></div>
        <div class="doggy-nose"></div>  
      <div class="doggy-cheek-left"></div>
      <div class="doggy-cheek-right"></div>   
      <div class="doggy-body"></div>
        <div class="doggy-leg-left"></div>
      <div class="doggy-leg-right"></div>  
    <div class="doggy-hand-right"></div>
    <div class="doggy-tail"></div>  
  </div>
    `;
    dog.innerHTML += dogHead; //add to DOM
    //it's a bit of a bother to add more complex css
    //into generated HTML when written like this
  
        //   <div class="dog-head" style="background-color: ${headColor}">
      //   <div class="doggy-ear-left" style="background-color: ${earColor}"></div>
      //   <div class="doggy-ear-right" style="background-color: ${earColor}"></div>
      //   <div class="doggy-ear-right-inside" style="background-color: ${earColorInside}"></div>
      //   <div class="doggy-nose"></div>
      //   <div class="doggy-cheek-left" style="background-color: ${cheekColor}"></div>
      //   <div class="doggy-cheek-right" style="background-color: ${cheekColor}"></div>
      // </div>
    //make its body & add it in
    // const dogBody = document.createElement("div");
    // dogBody.classList.add("dog-body");
    // dogBody.style.backgroundColor = headColor;
    // dog.appendChild(dogBody); // add to DOM
  
    //   //make its legs
    // const dogLegL = document.createElement("div");
    // dogLegL.classList.add("dog-leg-left");
    // dogLegL.style.backgroundColor = legColor;
    // dog.appendChild(dogLegL); // add to DOM
    //     //make its legs
    // const dogLegR = document.createElement("div");
    // dogLegR.classList.add("dog-leg-right");
    // dogLegR.style.backgroundColor = legColor;
    // dog.appendChild(dogLegR); // add to DOM
    //     //make its legs
    // const dogHand = document.createElement("div");
    // dogHand.classList.add("dog-hand-right");
    // dogHand.style.backgroundColor = legColor;
    // dog.appendChild(dogHand); // add to DOM
    
    // //make its tail
    // const dogTail = document.createElement("div");
    // dogTail.classList.add("dog-tail");
    // dogTail.style.backgroundColor = tailColor;
    // dog.appendChild(dogTail); // add to DOM
  
    //finally, put the assembled cat-container into the actual HTML page
    // document.querySelector(".kitty-maker").appendChild(catContainer);
  document.querySelector(".doggy").append(dogContainer);
    //or actually, let's just return it
   // return dogContainer;
  }
//   staticDog.addEventListener("click", function () {
//     const dogBuffer = 200;
//     let randomX = rng(-1*(window.innerWidth - dogBuffer), window.innerWidth - dogBuffer);
//     let randomY = rng(20, window.innerHeight - dogBuffer);
//     this.style.marginLeft = `${randomX}px`;
//     this.style.marginTop = `${randomY}px`;
//     console.log(randomX, this.style.marginLeft, randomY, this.style.marginTop);
// });

// function rng(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }