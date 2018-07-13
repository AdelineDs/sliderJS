class slider{
    constructor(container, images){
        this.container = container;
        this.images = images;
        this.init();
    }//-- end constructor --
    
    init(){
        this.currentSlide = 0;
        this.createSliderElements();
        this.slides = document.querySelectorAll(".slideElement");
        this.slides[this.currentSlide].classList.add("visible");
        this.slideInterval;
        this.sliderKeyControl();
        this.sliderAnimation();
        this.restartAnimation();
    }//-- end init --
    
    createSliderElements(){
        const sliderContainer = document.getElementById(this.container);
        this.images.forEach(element => {
        const figure = document.createElement("figure");
        figure.className = "slideElement";
        const img = document.createElement("img");
        img.src = element.nom;
        figure.appendChild(img);
        
        const figcaption = document.createElement("figcaption");
        figcaption.appendChild(document.createTextNode(element.desc));
        
        figure.appendChild(figcaption);
        
        sliderContainer.appendChild(figure);
    });
    
    }//-- end createSliderElements --
    
    sliderAnimation(){
        this.slideInterval = setInterval(() => this.nextImage(), 5000);
    }//-- end sliderAnimation -- 
    
    sliderKeyControl(){
        document.addEventListener('keydown', e =>{
            if(e.keyCode === 37 || e.keyCode === 100){
                clearInterval(this.slideInterval);
                this.previousImage();
            }
            if(e.keyCode === 39 || e.keyCode === 102){
                clearInterval(this.slideInterval);
                this.nextImage();
            }
        });
    }//-- end sliderKeyControl --
    
    restartAnimation(){
        document.addEventListener('keypress', e =>{
            if(e.keyCode === 37 || e.keyCode===39 || e.keyCode === 100 || e.keyCode === 102){
            this.sliderAnimation();}
        });
    }//-- end restartAnimation --
    
    nextImage(){
        this.slides[this.currentSlide].classList.remove("visible");
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add("visible");
    }
    
    previousImage(){
        this.slides[this.currentSlide].classList.remove("visible");
        this.currentSlide = (this.currentSlide - 1) % this.slides.length;
        if(this.currentSlide === -1){
            this.currentSlide = this.slides.length - 1;
            this.slides[this.currentSlide].classList.add("visible");
        }else{
            this.slides[this.currentSlide].classList.add("visible");
        }
    }//-- end previousImage --
    
}//-- end class slider --

window.onload = () => {
    const images = [
        {
            nom: 'img/01.jpg',
            desc: 'Bienvenue sur votre service de réservation de vélo Vélo\'v'
        }, 
        {
            nom: 'img/02.jpg',
            desc: 'Choisissez votre station'
        },
        {
            nom: 'img/03.jpg',
            desc: 'Vérifiez la disponibilité en temps réel'
        },
        {
            nom: 'img/04.jpg',
            desc: 'Signez pour réserver votre vélo'
        },
        {
            nom: 'img/05.jpg',
            desc: 'On vous confirme la réservation'
        },
        {
            nom: 'img/07.jpg',
            desc: 'Vous avez 20 minutes pour le retirer à la station choisie'
        },
        {
            nom: 'img/06.jpg',
            desc: 'Profitez !'
        }
    ];

    const mySlider = new slider("sliderContainer", images);
}