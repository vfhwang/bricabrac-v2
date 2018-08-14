// genre marquee

Marquee3k.init();


var something = document.getElementById('closegenre');

something.style.cursor = 'pointer';
something.onclick = function hideGenre() {
  var x = document.getElementById("genreall").style.top= '-120px';
  var x = document.getElementById("closegenre").style.top= '-120px';

};

// wiggle


const svg = document.getElementById('logotype')
const warp = new Warp(svg)

warp.interpolate(3)
warp.transform(([ x, y ]) => [ x, y, y ])

let offset = 0
function animate()
{
	warp.transform(([ x, y, oy ]) => [ x, oy + 8 * Math.sin(x / 20 + offset), oy ])
	offset += 0.1
	requestAnimationFrame(animate)
}

animate()
