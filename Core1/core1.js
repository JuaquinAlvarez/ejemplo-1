console.log("pageloaded...");
function me(al) {
    if (al.innerText == "22 me gusta.") {
        al.innerText = "23 me gusta";
        alert("le diste me gusta")
    } else {
        al.innerText = "22 me gusta.";
    };
}
function ma(lo) {
    if (lo.innerText == "45 me gusta.") {
        lo.innerText = "46 me gusta";
        alert("le diste me gusta")
    } else {
        lo.innerText = "45 me gusta.";
    };
}

function ent(ini) {
    if (ini.innerText == "iniciar sesion") {
        ini.innerText = "cerrar sesion";
    } else {
        ini.innerText = "iniciar sesion";
    }
}
function hide(el) {
    el.remove();
}



