let reviews=[
    {
        id:1,
        name:"Robanzel",
        jop:"front-end",
        img :"images/pic10.png",
        txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem facere saepe voluptas quos maxime perspiciatis ducimus quae"
    }
    ,
    {
        id:2,
        name:"nada",
        jop:"back-end",
        img :"images/pic11.png",
        txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem facere fugiat, repellat dolores, at rem esse nostrum placeat error a ex mollitia, saepe voluptas quos maxime perspiciatis ducimus quae"
    }
    ,
    {
        id:3,
        name:"sama",
        jop:"full-stack",
        img :"images/pic9.png",
        txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem facere fugiat, repellat dolores, at rem esse nostrum placeat error a quae"
    }
    , {
        id:1,
        name:"Basant",
        jop:"front-end",
        img :"images/pic7.png",
        txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem facere fugiat, repellat dolores, at rem esse nostrum placeat error a ex mollitia, saepe voluptas quos maxime perspiciatis ducimus quae"
    }
]
// data
const image=document.getElementById("pic1");
const auther=document.getElementById("auther");
const jop=document.getElementById("jop");
const info=document.getElementById("info");
//button
const prev=document.querySelector(".prev-btn");
const next=document.querySelector(".next-btn");
const random=document.querySelector(".random-btn");
// functon show person
let currentitem=0;
function showperson(){
    const items=reviews[currentitem];
    pic1.src= items.img;
    auther.innerHTML=items.name;
    jop.innerHTML=items.jop;
    info.innerHTML=items.txt;
}
prev.addEventListener("click",()=>{
    currentitem--;
    if(currentitem<0){
        currentitem=reviews.length-1;
    }
    showperson();
});
next.addEventListener("click",()=>{
    currentitem++;
    if(currentitem>reviews.length-1){
        currentitem=0;
    }
    showperson();
});
random.addEventListener('click',function(){
    currentitem=Math.floor(Math.random()*reviews.length);
    showperson();
})