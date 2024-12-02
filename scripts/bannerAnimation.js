// modified from a Frank's Laboratory YouTube video https://www.youtube.com/watch?v=f5ZswIE_SgY
window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas1');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    var ctx = canvas.getContext('2d');
    class Digit{
        constructor(x,y,fontSize,canvasHeight){
            this.x = x;
            this.y = y;
            this.canvasHeight = canvasHeight;
            this.fontSize = fontSize;
            this.digits = '0123456789ABCDEF';
            this.text = '';
        }
        draw(context){
            this.text = `${this.digits.charAt(Math.floor(Math.random()*this.digits.length))}`

            context.fillStyle = 'gray';
            context.fillText(this.text, this.x*this.fontSize, this.y*this.fontSize);

            if(this.y * this.fontSize > this.canvasHeight && Math.random()> 0.99){
                this.y = 0;
            } else {
                this.y += 1;
            }
        }
    }

    class Effect{
        constructor(canvasWidth,canvasHeight){
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontSize = 25;
            this.columns = this.canvasWidth/this.fontSize;
            this.digits = [];
            this.initialize();
        }
        initialize(){
            for(let i = 0; i< this.columns; i++){
                this.digits[i] = new Digit(i,0,this.fontSize,this.canvasHeight);
            }
        }
        resize(canvasWidth, canvasHeight){
            this.canvasWidth =  canvasWidth;
            this.canvasHeight = canvasHeight;
            this.columns = this.canvasWidth/this.fontSize;
            this.digits = [];
            this.initialize();
        }
    }

    const effect = new Effect(canvas.width, canvas.height);

    let lastTime = 0;
    const fps = 30;
    const nextFrame = 1000/fps;
    let timer = 0;

    //only for the first time
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if(timer > nextFrame){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.font = effect.fontSize + 'px monospace';
            effect.digits.forEach(element => {
                if( Math.floor(Math.random()*3) == 1){
                    element.draw(ctx);
                }
            });
            timer = 0;
        } else {
            timer += deltaTime;
        }
        
        
        requestAnimationFrame(animate);
    }
    animate(0);

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width, canvas.height);

    })
})