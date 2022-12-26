Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id= 'selfie' src='" +data_uri+"'>";
    })
}

console.log("ml5.version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DESYG5SCH/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}

function check(){
    img = document.getElementById("selfie");
    classifier.classify(img, result);
}

function result (error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results[0]);
        document.getElementById("resultobj").innerHTML = results[0].label; 
        document.getElementById("objaccuracy").innerHTML = (results[0].confidence*100).toFixed(2) + "%"; 
    }
}
