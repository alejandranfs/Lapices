import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let balon = {
    x:0,
    y:0,
    vX: 50,
    vY: 30,
    x2: 100,
    x3: 150,
    y3: 15,
    y4: 30, 

    dibujarse:function(){
        ctx.fillStyle = "orange";
        ctx.fillRect (this.x, this.y, 100, 30);

        ctx.beginPath();
     ctx.moveTo(this.x +100, this.y);
     ctx.lineTo(this.x+150, this.y+15 );
     ctx.lineTo(this.x+100, this.y+30);
     ctx.stroke();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        this.x2 = this.x2 + this.vX * dT/1000;
        this.x3 = this.x3 + this.vX * dT/1000;
        this.y3 = this.y3 + this.vY * dT/1000;
        this.y4 = this.y4 + this.vY * dT/1000;


    }
    
}
let balon2 = Object.create(balon)
balon2.x = 0;
balon2.y = 400;
balon2.vX = 30;
balon2.vY = -40;
balon2.x2 = 100;
balon2.x3 = 150;
balon2.y3 = 415;
balon2.y4 = 430;
balon2.vX = 30;
balon2.vY = -40;


let balon3 = Object.create(balon)
balon3.x = 145;
balon3.y = 178;
balon3.vX = 0;
balon3.vY = 0;



drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    balon.dibujarse();
    balon2.dibujarse();
    balon3.dibujarse();
    balon.moverse();
    balon2.moverse();
}
run()