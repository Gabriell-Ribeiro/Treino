function calc() {
    var larg = document.querySelector("input#larg");
    var alt = document.querySelector("input#alt");

    var res = document.querySelector("div#res");
    res.innerHTML = ''

    function area(m1, m2) {
        tot = m1 * m2;
        res.innerHTML += `São ${tot} metros quadrados`;
    };

    area(larg.value, alt.value);
};