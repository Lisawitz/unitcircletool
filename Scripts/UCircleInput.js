function getDeg(rawInAngle)
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

    rotateAngle(inAngle);
}

function getRad(rawInAngle)
{
    const radiansRgx = /^-?[0-9]*(pi)?((\/)-?[0-9]+)?$/;
    console.log('input was ', rawInAngle);
    if (!radiansRgx.test(rawInAngle))
    {
        console.log('fail');
        return;
    }

    parseRad(rawInAngle);
}

function parseRad(rawInAngle)
{
    var numerator = "";
    var denominator = "";
    var negative = false;

    if(rawInAngle.search('/') >= 0)
    {
        const fraction = rawInAngle.split('/');
        numerator = fraction[0];
        denominator = fraction[1];
    }
    else 
    {
        numerator = rawInAngle;
        denominator = 1;
    }
    console.log('got a numerator of ', numerator);
    console.log('got a denominator of ', denominator);

    var num = parseInt(numerator.replace('pi', ''));
    var den = parseInt(denominator);

    console.log('num = ', num);
    console.log('den = ', den);

    inAngle = (num * 180) / den;
    console.log('got ', inAngle);
    
    if(inAngle > 1800 || inAngle < -1800)
    {
        return;
    }
    rotateAngle(inAngle);
}
