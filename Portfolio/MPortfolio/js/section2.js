let img = document.querySelector('.introimg');
for (i = 1; i < 11; i++) {
    eval("var id" + i + "=document.querySelector('.id" + i + "')");
    eval("var pb" + i + "=document.querySelector('.pbox" + i + "')");
    console.log("id" + i + ".addEventListener('mousemove', function () {pb" + i + ".style.visibility = 'visible'; id" + i + ".style.backgroundcolor='black'; id" + i + ".style.zIndex=6;})");
    eval("id" + i + ".addEventListener('mousemove', function () {pb" + i + ".style.visibility = 'visible'; id" + i + ".style.backgroundColor='#1995ad'; id" + i + ".style.zIndex=6;})");
    eval("id" + i + ".addEventListener('mouseleave', function () {pb" + i + ".style.visibility = 'hidden'; id" + i + ".style.backgroundColor='#a1d6e2';id" + i + ".style.zIndex=5;})");

}