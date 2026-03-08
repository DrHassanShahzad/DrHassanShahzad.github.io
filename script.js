const images = ["fluid1.jpg","fluid2.png","fluid3.png"];
let i = 0;

function changeBackground(){
  const hero = document.getElementById("hero");
  if(hero) {
    hero.style.backgroundImage = "url('" + images[i] + "')";
    i++;
    if(i >= images.length){ i=0; }
  }
}

setInterval(changeBackground, 3000);

changeBackground();


