img=""
status1=""
obj=[];
function preload(){
img=loadImage("dog_cat.jpg")
}
function setup(){
canvas = createCanvas(600,500);
canvas.center()
objectDetector = ml5.objectDetector('cocossd',modelloaded)
 
}
function modelloaded(){
    status1=true;
    console.log("modelloaded")
    objectDetector.detect(img,gotresult)
}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
    
        console.log(result)
        obj=result;
        
    }
}
function draw(){
image(img,0,0,600,500);
if(status1 != ""){
    for(i=0;i<obj.length;i++){
        fill('#FF0000');
        text(obj[i].label+" "+floor(obj[i].confidence * 100)+"%",obj[i].x,obj[i].y)
        noFill()
        rect(obj[i].x,obj[i].y,obj[i].width,obj[i].height);
        stroke('#FF0000')
    }
    
}

}