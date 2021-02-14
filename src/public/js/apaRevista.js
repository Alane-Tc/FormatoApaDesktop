window.addEventListener("load", function () {
    var va1 = document.querySelector("#value1");
    var va2 = document.querySelector("#value2");
    var va3 = document.querySelector("#value3");
    var va4 = document.querySelector("#value4");
    var va5 = document.querySelector("#value5");
    var va6 = document.querySelector("#value6");
    var format = document.querySelector("#parrafo");
    var button = document.querySelector("#button_Generator");
    var div = document.querySelector("#Menj_random");
    let btnCopiar = document.querySelector("#copiar");

    function show() {
        div.style.display = "block";
        div.style.background = "#00b4d8";
    }

    let copy = () => {
        var Range = document.createRange();
        Range.selectNode(format);
        window.getSelection().addRange(Range);
        if (Range == "" || format == "") {
            alert("Selecciona el parrafo")
        } else {
            try {
                var resultado = document.execCommand('copy');
                console.log(resultado ? 'Email copiado' : 'No se pudo copiar el email');
                alert("Elemento copiado")
            } catch (err) {
                console.log('ERROR al intentar copiar el email');
                alert("Error al copiar")
            }
            window.getSelection().removeAllRanges();
        }
    }

    function Apa() {
        if (va1.value != "" && va2.value != "" && va3.value != "" && va4.value != "" && va5.value != "" && va6.value != "") {
            show();
            format.innerHTML = ("<b>Selecciona el parrafo y cópialo.</b> <br />   " + va1.value + ". (" + va2.value + "). " + va3.value + '. ' + va4.value + ", " + va5.value + ", " + va6.value + ". ");
        } else {
            alert("Te falto llenar algun dato, verifique de nuevo");
        }
    }
    button.addEventListener("click", function () {Apa();});
    btnCopiar.addEventListener("click", function () { copy(); })
});