var statusDeg;
var statusRad;
var statusSin;
var statusCos;
var statusTan;
var degrees = 0.0;
var radians = "";
var quad = 1;

function onLoad()
{
    statusDeg = document.getElementById("statusDeg");
    statusRad = document.getElementById("statusRad");
    statusSin = document.getElementById("statusSin");
    statusCos = document.getElementById("statusCos");
    statusTan = document.getElementById("statusTan");
    statusRev = document.getElementById("statusRev");
    statusQdt = document.getElementById("statusQdt");
}

function resetStatus()
{
    statusSin.innerHTML = "";
    statusCos.innerHTML = "";
    statusTan.innerHTML = "";
    statusRev.innerHTML = "";
    statusQdt.innerHTML = "";
    degrees = 0.0;
}

function updateStatus(degrees)
{
    statusDeg.innerHTML = "Degrees: " + degrees * -1 + "°";
    statusRad.innerHTML = "Radians: " + (-1 * (degrees * Math.PI / 180).toFixed(3));
}

function printRevolutions(inA)
{   
    var revolutions =  Math.abs(Math.trunc(inA / 360));
    if(revolutions > 0)
    {
        statusRev.innerHTML = "Revolutions: " + revolutions;
    }
    else 
    {
        statusRev.innerHTML = "";
    }
}

function printFinalStatus(inA)
{
    printRevolutions(inA);
    printQuadrant(inA);
    printTrigs(inA);
}

function printTrigs(inA)
{
    statusSin.innerHTML = "Sin: " + parseFloat(Math.sin(inA * Math.PI / 180).toFixed(3));
    statusCos.innerHTML = "Cos: " + parseFloat(Math.cos(inA * Math.PI / 180).toFixed(3));
    printTan(inA);
}

function printTan(inA)
{
    if(Math.tan(-1 * (inA * Math.PI / 180)) > 1000 || Math.tan(-1 * (inA * Math.PI / 180)) < -1000)
    {
        statusTan.innerHTML = "Tan: Undefined";
    }
    else
    {
        statusTan.innerHTML = "Tan: " + parseFloat(Math.tan(inA * Math.PI / 180).toFixed(3));
    }
}

function printQuadrant(inA)
{
    var sin = Math.sin(inA * Math.PI / 180);
    var cos = Math.cos(inA * Math.PI / 180);

    if(sin >= 0)
    {
        if(cos >= 0)
        {   // positive sin, positive cos
            statusQdt.innerHTML = "Quadrant: I";
            quad = 1;
        }
        else 
        {   // positive sin, negative cos
            statusQdt.innerHTML = "Quadrant: II";
            quad = 2;
        }
    }
    else 
    {
        if(cos >= 0)
        {   // negative sin, positive cos
            statusQdt.innerHTML = "Quadrant: IV";
            quad = 4;
        }
        else 
        {   // negative sin, negative cos
            statusQdt.innerHTML = "Quadrant: III";
            quad = 3;
        }
    }
}
