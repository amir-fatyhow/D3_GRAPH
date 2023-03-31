class HyperboloidSettings extends Settings {
    constructor(figure, graph_3D) {
        let settings = document.querySelector('.settings');
        settings.innerHTML = '';

       /* let inputA = document.createElement("input");
        inputA.placeholder = "a";
        inputA.classList.add("form");
        settings.appendChild(inputA);*/

        /*let inputB = document.createElement("input");
        inputB.placeholder = "b";
        inputB.classList.add("form");
        settings.appendChild(inputB);*/

        /*let inputC = document.createElement("input");
        inputC.placeholder = "c";
        inputC.classList.add("form");
        settings.appendChild(inputC);*/

        super(figure, graph_3D);
    }
}
