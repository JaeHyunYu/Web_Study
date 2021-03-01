let img = document.querySelector('.introimg');
for (i = 1; i < 11; i++) {
    eval("var durationbox_box" + i + "=document.querySelector('.durationbox_box" + i + "')");
    eval("var pb" + i + "=document.querySelector('.pbox" + i + "')");
    console.log("durationbox_box" + i + ".addEventListener('mousemove', function () {pb" + i + ".style.visibility = 'visible'; durationbox_box" + i + ".style.backgroundcolor='black'; durationbox_box" + i + ".style.zIndex=6;})");
    eval("durationbox_box" + i + ".addEventListener('mousemove', function () {pb" + i + ".style.visibility = 'visible'; durationbox_box" + i + ".style.backgroundColor='#1995ad'; durationbox_box" + i + ".style.zIndex=6;})");
    eval("durationbox_box" + i + ".addEventListener('mouseleave', function () {pb" + i + ".style.visibility = 'hidden'; durationbox_box" + i + ".style.backgroundColor='#a1d6e2';durationbox_box" + i + ".style.zIndex=5;})");

}