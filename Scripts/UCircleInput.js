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
    const radiansRgx = /^-?[0-9]*(pi)((\/)-?[0-9]+)?$/;
    if (!radiansRgx.test(rawInAngle))
    {
        return;
    }

    parseRad(rawInAngle);
}

function parseRad(rawInAngle)
{
    var numerator = "";
    var denominator = "";

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

    var num = parseInt(numerator.replace('pi', ''));
    var den = parseInt(denominator);
    if(isNaN(num))
    {
        if(numerator.search('-') >= 0)
        {
            num = -1;
        }
        else 
        {
            num = 1;
        }
    }

    inAngle = (num * 180) / den;
    
    if(inAngle > 1800 || inAngle < -1800)
    {
        return;
    }
    rotateAngle(inAngle);
}
