buttons.innerHTML += `
    <button id="change">play with background</button>
`;

function changeFunctionality() {
    const changeBtn = document.querySelector('#change');
    let oldBackg = "#28311c";
    let oldBackg2 = "#343e23";
    let colorBackg = "#58391C";
    let colorBackg2 = "#6A492B";
    changeBtn.addEventListener('click', function() { 
            document.querySelector("header").style.backgroundColor = colorBackg;
            document.querySelector("footer").style.backgroundColor = colorBackg;
            document.querySelector(".footerContainer").style.backgroundColor = colorBackg;
            document.querySelector(".logo").style.backgroundColor = colorBackg;
            document.querySelector(".homeHeader").style.backgroundColor = colorBackg;
            document.querySelector(".marginTop").style.backgroundColor = colorBackg2;
            document.querySelector("body").style.backgroundColor = colorBackg2;
            document.querySelector('input[type="submit"]').style.backgroundColor = colorBackg;

    });
}
window.addEventListener('load', changeFunctionality);