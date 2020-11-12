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

function rotateAngle(rawInAngle)
{
    var inAngle = parseInt(rawInAngle);

    if(isNaN(inAngle))
    {
        return;
    }

    // disable button(s)
    document.getElementById("submitButton").disabled = true;
    // get canvas
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 600, 600);  // clear drawings

    var elem = document.getElementById("angleArrow");
    var id;
    if(inAngle <= 0)
    {
        id = setInterval(rotateAngleClock, 1);
    }
    else 
    {
        id = setInterval(rotateAngleCounterClock, 1);
    }

    angleArrow.src = "Images/arrow.png";
    document.getElementById("submitButton").disabled = false;
    resetStatus();


    function rotateAngleCounterClock() 
    {
        if(degrees == inAngle * -1) 
        {
            clearInterval(id);
            angleArrow.src = "Images/arrowCC.png";
            drawAngle(inAngle);
        } 
        else 
        {
            degrees--;
            elem.style.transform = "rotate(" + degrees + "deg)";
            updateStatus(degrees);
        }
    }
    function rotateAngleClock() 
    {
        if(degrees == inAngle * -1) 
        {
            clearInterval(id);
            angleArrow.src = "Images/arrowC.png";
            drawAngle(inAngle);
        } 
        else 
        {
            degrees++;
            elem.style.transform = "rotate(" + degrees + "deg)";
            updateStatus(degrees);
        }
    }

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

function drawAngle(inA) 
{
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.beginPath();

    var revolutions =  Math.abs(Math.trunc(inA / 360));
    if(revolutions > 0)
    {
        statusRev.innerHTML = "Revolutions: " + revolutions;
    }
    else 
    {
        statusRev.innerHTML = "";
    }

    if(inA <= 0)
    {
        ctx.arc(300, 300, 150, 0, (-1 * (inA * Math.PI) / 180) - 0.01, false);
    }
    else
    {
        ctx.arc(300, 300, 150, 0, (-1 * (inA * Math.PI) / 180) + 0.01, true);
    }
    ctx.stroke();
}
