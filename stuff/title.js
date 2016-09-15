function scroll()
{
    var cur = Math.random()*100;
    var next = parseInt(cur % 4, 10);
    
    //Keep in code - Written by Computerhope.com
    //Place this script in your HTML heading section
    //18-19 night
    
    if (next == 1)
    {
	document.getElementById("hello").innerHTML = "Hello, World.";
    }
                    else if (next == 2)
    {
	document.getElementById('hello').innerHTML = "Salut, Monde.";
    }
    else if (next == 3)
    {
	document.getElementById('hello').innerHTML = "Nǐ Hǎo, Shìjiè.";
    }
    else if (next == 0)
    {
	document.getElementById('hello').innerHTML = "Hola, Mundo.";
    }
}
setInterval(function(){scroll()}, 1000);
