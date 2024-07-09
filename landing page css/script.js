const ctx = document.getElementById('miGraficaCircular').getContext('2d');
var ctx2 = document.getElementById('miGrafico').getContext('2d');

const item = document.querySelector("#items");


function agregarItem(){
    if (item.childElementCount<10) {
        const div = document.createElement("div");
        const inputNum = document.createElement("input");
        inputNum.type = "number";
        const inputTex = document.createElement("input");
        inputTex.type = "text";
        inputNum.className = `input${item.childElementCount+1}`;
        inputTex.className = `inputText${item.childElementCount+1}`;
        item.appendChild(div);
        div.appendChild(inputNum);
        div.appendChild(inputTex);
    }
    else{
        console.log("no se pueden agragar más items");
    }
    
};

function recargar(){

    let itemsV = [];
    let itemsT = [];
    console.log(itemsV);
    console.log(itemsT);

    for (let i = 1; i < item.childElementCount+1; i++) {
        let itemValor = document.querySelector(`.input${i}`);
        let itemText =  document.querySelector(`.inputText${i}`)
        itemsV.push(itemValor.value);
        itemsT.push(itemText.value);
    };

    const data = {
        labels: itemsT,
        datasets: [{
            label: 'Colores Favoritos',
            data: itemsV,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Gráfica Circular de Colores Favoritos'
                }
            }
        },
    };
    const miGraficaCircular = new Chart(ctx, config);

    var miGrafico = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: itemsT,
            datasets: [{
                label: `Inventario`,
                data: itemsV, 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function reload(){
    location.reload();
}

