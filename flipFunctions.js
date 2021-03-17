let next = document.querySelector(".next");
next.style.display = "none";
next.style.opacity = "0"



//Colors
/***************************************************************************/
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

/***************************************************************************/
String.prototype.convertToRGB = function(){
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}



//Utility Functions
/***************************************************************************/
function index(){
    setWordB(); setBkgB();
}

/***************************************************************************/
function initI(){
    let repeat = JSON.parse(localStorage.getItem("repeat"));

    if(indexPrev == -2){
        let i = parseInt(localStorage.getItem("i"));
        if(i === repeat.length - 1){
            indexPrev = i-1;}
        else
            indexPrev = i-2;
    }
}



//Set Words + Background for the Cards
/***************************************************************************/
function setWordF(){
    if(next.style.opacity === "0"){
        let repeat = JSON.parse(localStorage.getItem("repeat"));
        let i = parseInt(localStorage.getItem("i"));


        wordNr =  Math.floor(Math.random() * (words.length-1))
        while(repeat.includes(wordNr)){
            wordNr =  Math.floor(Math.random() * (words.length-1));
        }


        if(repeat.length < words.length / 3){
            repeat.push(wordNr);
            i++;
        }
        else {
            for(let j = 0; j < repeat.length; j++){
                repeat[j] = repeat[j+1];
            }
            repeat[Math.floor(repeat.length - 1)] = wordNr;
            i=repeat.length-1;
        }

        localStorage.setItem("i", i);
        localStorage.setItem("repeat", JSON.stringify(repeat))

        h1FRONT.innerHTML = words[wordNr][english];
        // h1FRONT.innerHTML = wordNr;
        console.log(repeat, i, repeat[i])
    }
    else{
        utilityNext();
    }
}

/***************************************************************************/
function setWordB(){
    h1BACK.innerHTML = words[wordNr][img];
    h2BACK.innerHTML = words[wordNr].chinese;
    // h1BACK.innerHTML = wordNr
    // h2BACK.innerHTML = wordNr;
}

/***************************************************************************/
function setBkgF(){
    bkgNr = Math.floor(Math.random() * backgrounds.length)
    front.style = `${backgrounds[bkgNr][background]} color: ${invertColor(backgrounds[bkgNr][color], 1)}`;
}

/***************************************************************************/
function setBkgB(){
    let rgb = backgrounds[bkgNr][color].replace("#", "").convertToRGB()
    let colorRGB = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.349)`
    back.style = `${backgrounds[bkgNr][background]} color: ${invertColor(backgrounds[bkgNr][color], 1)}`;
    body.style.backgroundColor = colorRGB;
    goBack.style.color = colorRGB;
    next.style.color = colorRGB;
}



//On click for the cards
/***************************************************************************/
function frontClick(){
    front.style.transition = "transform 0.3s ease-in-out";
    back.style.transition = "transform 0.3s 0.3s ease-in-out";
    
    front.style.transform = "rotateY(90deg)"
    back.style.transform = "rotateY(0deg)";
}

/***************************************************************************/
function backClick(){
    
    setBkgF(); 
    setWordF();
    
    front.style.transition = "transform 0.3s 0.3s ease-in-out"
    back.style.transition = "transform 0.3s ease-in-out"


    front.style.transform = "rotateY(0deg)"
    back.style.transform = "rotateY(90deg)";

    setTimeout(index, 300);
}



//Go back and forth through the cards
/***************************************************************************/
function previousCard(){

    if(front.style.transform != "rotateY(90deg)" && front.style.transform != "rotateY(450deg)"){
        let repeat = JSON.parse(localStorage.getItem("repeat"));
        let i = parseInt(localStorage.getItem("i"));
        initI();


        if(indexPrev > 0){
            console.log("index:", indexPrev,"last:", last);
            if(last === 0)
            {
                wordNr = repeat[indexPrev];
            }
            else{
                indexPrev-=2;
                wordNr = repeat[indexPrev];
            }        
            console.log("wordNr:", wordNr, "last:", last);
            last = 0;
        } 
        else {
            wordNr = repeat[indexPrev];
            goBack.style.opacity = "0";
            setTimeout(function(){
                goBack.style.display = "none";
            }, 400)
        } 
        indexPrev--;

        front.style.transform = "rotateY(360deg)";
        setTimeout(function(){h1FRONT.innerHTML = words[wordNr][english]}, 200)
        // setTimeout(function(){h1FRONT.innerHTML = wordNr}, 200)
        setWordB();
        

        next.style.display = "inline-block";
        setTimeout(() => {
            front.style.transition = "transform 0s";
            front.style.transform = "rotateY(0deg)";
        }, 400);


        front.style.transition = "transform 0.3s ease-in-out";
        back.style.transition = "transform 0.3s 0.3s ease-in-out";
        setTimeout(function(){
            next.style.opacity = "1";
        }, 200)   

    }
    else{
        alert("please flip the card before you go back")
    }

    
}

/***************************************************************************/
function utilityNext(){
    let repeat = JSON.parse(localStorage.getItem("repeat"));
    let i = parseInt(localStorage.getItem("i"));
    
    if(indexPrev < i){
        if(last===1)
            {wordNr = repeat[indexPrev];
            console.log("index:", indexPrev,"last:", last);}
        else{
            indexPrev += 2;
            wordNr = repeat[indexPrev];
            console.log("index:", indexPrev,"last:", last);
        }
        last = 1;
        console.log("wordNr:", wordNr, "last:", last);
    } 
    if(indexPrev >= i){        
        wordNr = repeat[indexPrev];
        console.log("index:", indexPrev,"last:", last);
        next.style.opacity = "0";
        setTimeout(function(){
            next.style.display = "none";
        }, 400)
        indexPrev = -3;
        last = 0;
        console.log("wordNr:", wordNr, "last:", last);
    } 
    indexPrev++;
    
    // h1FRONT.innerHTML = wordNr;
    h1FRONT.innerHTML = words[wordNr][english];
    
}

/***************************************************************************/
function nextCard(){
    goBack.style.display = "inline-block";
    setTimeout(function(){
        goBack.style.opacity = "1";
    }, 200)


    front.style.transition = "transform 0.3s ease-in-out";
    front.style.transform = "rotateY(360deg)";
    setTimeout(() => {
        front.style.transition = "transform 0s";
        front.style.transform = "rotateY(0deg)";
    }, 400);

    utilityNext(); 
    setTimeout(setWordB, 300);
} 