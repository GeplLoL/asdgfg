let currentSyna = "";
function randomSyna(){
    const synad=[
        'teostus',
        'algoritm',
        'kavand',
        'kasutajaliides',
        'mudel',
        'andmebaasi skeem',
        'standart',
        'tsükkel',
        'andmetõõtlus',
        'andmestruktuur',
        'arendusKeskkond',
        'projektihaldus tõõriist',
        'kavandamine',
        'iteratsioon',
        'parandus',
        'parandamine'
    ];
    //random sona
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    currentSyna = synad[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = currentSyna;
}
function kontroll () {
    const inputValue = document.getElementById("kontroll").value;
    const synad=[
        'teostus',
        'algoritm',
        'kavand',
        'kasutajaliides',
        'mudel',
        'andmebaasi skeem',
        'standart',
        'tsükkel',
        'andmetõõtlus',
        'andmestruktuur',
        'arendusKeskkond',
        'projektihaldus tõõriist',
        'kavandamine',
        'iteratsioon',
        'parandus',
        'parandamine'
    ];
    const ruSynad = [
        'выполнение',
        'алгоритм',
        'дизайн',
        'пользовательский интерфейс',
        'модель',
        'схема базы данных',
        'стандартный',
        'цикл',
        'сбор данных',
        'структура данных',
        'среда разработки',
        'инструмент управления проектами',
        'планирование',
        'итерация',
        'коррекция',
        'фиксация'
    ];
    const index = synad.indexOf(currentSyna);

    if (ruSynad[index] === ) {
        document.getElementById("vastus").innerText = "õigus";
    } else {
        document.getElementById("vastus").innerText = "vale";
    }
}