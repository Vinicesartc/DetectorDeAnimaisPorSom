

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1yzmvjGPL/model.json', modelReady)
}

function gotResults(error,results)
{
    console.log("Resultado recebido")
}

function modelReady()
{
    classifier.classify(gotResults);
}

