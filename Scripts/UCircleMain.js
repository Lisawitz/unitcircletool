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
}

function rotateAngle(rawInAngle)
{
    var inAngle = parseInt(rawInAngle);

    if(isNaN(inAngle))
    {
        return;
    }
    if(inAngle > 1800 || inAngle < -1800)
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
    if(inAngle < 0)
    {
        id = setInterval(rotateAngleClock, 1);
    }
    else if(inAngle == 0)
    {
        angleArrow.src = "Images/arrow.png";
        elem.style.transform = "rotate(" + 0 + "deg)";
        updateStatus(0);
        printFinalStatus(0);
        document.getElementById("submitButton").disabled = false;
        return;
    }
    else 
    {
        id = setInterval(rotateAngleCounterClock, 1);
    }

    angleArrow.src = "Images/arrow.png";
    resetStatus();

    function rotateAngleCounterClock() 
    {
        if(degrees == inAngle * -1) 
        {
            clearInterval(id);
            angleArrow.src = "Images/arrowCC.png";
            drawAngle(inAngle);
            printFinalStatus(inAngle);
            document.getElementById("submitButton").disabled = false;
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
            printFinalStatus(inAngle);
            document.getElementById("submitButton").disabled = false;
        } 
        else 
        {
            degrees++;
            elem.style.transform = "rotate(" + degrees + "deg)";
            updateStatus(degrees);
        }
    }

}

function drawAngle(inA) 
{
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.beginPath();

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
