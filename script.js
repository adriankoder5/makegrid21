console.log('Hello :3');
//make gridd
let x =     100;//starting x
let xm =    100;//x modifier
let y =     100;//starting y
let ym =    100;//y modifier
const ix =  10;//iteration x 
const iy =  10;//iteration x

for (let i=0;i < ix;i++){
    for (let i2=0;i2 < iy;i2++){
        //xm*i+x
        //ym*i2+y
        if (i==3 && i2 == 5){continue}
        const box = document.createElement("p");
        box.style.left = xm*i+x+'px';
        box.style.top = ym*i2+y+'px';
        document.body.appendChild(box);
    }
}
