var statusDeg;
var statusRad;
var degrees = 0.0;
var radians = "";
var quad = 1;
var deg = true;

function onLoad()
{
    statusDeg = document.getElementById("statusDeg");
    statusRad = document.getElementById("statusRad");
}

function rotateAngle(inAngle)
{
    // disable everything
    disableAll();

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
        reenableAll();
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
            reenableAll();
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

function switchToRad()
{
    deg = false;
    document.getElementById("submitButtonDeg").disabled = true;
    document.getElementById("rawInAngleDeg").disabled = true;
    document.getElementById("submitButtonRad").disabled = false;
    document.getElementById("rawInAngleRad").disabled = false;
}

function switchToDeg()
{
    deg = true;
    document.getElementById("submitButtonRad").disabled = true;
    document.getElementById("rawInAngleRad").disabled = true;
    document.getElementById("submitButtonDeg").disabled = false;
    document.getElementById("rawInAngleDeg").disabled = false;
}

function disableAll()
{
    document.getElementById("submitButtonDeg").disabled = true;
    document.getElementById("submitButtonRad").disabled = true;
    document.getElementById("rawInAngleDeg").disabled = true;
    document.getElementById("rawInAngleRad").disabled = true;
    var rad = document.radDeg.radDegChoice;
    rad[0].disabled = true;
    rad[1].disabled = true;
}

function reenableAll()
{
    if (deg)
    {
        document.getElementById("submitButtonDeg").disabled = false;
        document.getElementById("rawInAngleDeg").disabled = false;
    }
    else 
    {
        document.getElementById("submitButtonRad").disabled = false;
        document.getElementById("rawInAngleRad").disabled = false;
    }

    var rad = document.radDeg.radDegChoice;
    rad[0].disabled = false;
    rad[1].disabled = false;
}
