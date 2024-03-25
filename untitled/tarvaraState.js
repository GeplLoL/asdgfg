let currentSyna = "";
        const synad = [
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

        function randomSyna() {
            const juhuslikSyna = Math.floor(Math.random() * synad.length);
            currentSyna = synad[juhuslikSyna];
            document.getElementById("random-syna").innerHTML = currentSyna;
        }

        function kontroll() {
            const inputValue = document.getElementById("kontroll").value;
            const index = synad.indexOf(currentSyna);

            if (ruSynad[index] === inputValue) {
                document.getElementById("vastus").innerText = "õigus";
            } else {
                document.getElementById("vastus").innerText = "vale";
            }
        }
