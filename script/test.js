let dateItem = document.querySelector('h1.date');
const inputName = document.querySelector('input.inputName');
let btn = document.querySelector('button');
const warning = document.querySelector('p.warning');
const container = document.querySelector('section.container');
const video = document.querySelector('section.video');

function formatDay(day) {
    switch (day) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;

        default:
            return "Sunday";

    }

}

const monthUpdate = (month) => {
    switch (month) {
        case 1:
            return "February"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 7:
            return "August"
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December"
            break;

        default:
            return "January"
            break;
    }

}

const formatdate = (date) => {
    if (date < 10) {
        return "0" + date;
    } else {
        return date
    }
}

function updateTime() {
    const date = new Date();

    const today = formatDay(date.getDay());
    const toDate = formatdate(date.getDate());
    const month = monthUpdate(date.getMonth());
    const year = date.getFullYear();

    dateItem.innerText = `${today}, ${month} ${toDate}, ${year}`
    alarm.classList.add('timercolor');
}
function updateInput() {
    inputName.addEventListener('input', () => {
        // e.preventDefault
        // console.log(inputName.value.length);
        // inputName.innerHTML='quickr'
        let nameLength = inputName.value.length;
        if (nameLength >= 4) {
            // console.log('nameLength');
            btn.classList.remove('hidden');
            warning.classList.add('hidden');

        }
        else {
            // console.log('valid');
            btn.classList.add('hidden');
            warning.classList.remove('hidden');
        }
    });
}

// inputName.addEventListener('change', () => {
//     let nameLength = inputName.value.length;
//     if (nameLength >= 4) {

//         let elem = document.querySelector("h1.username");
//         elem.style.color='white';
//         let elemContent = inputName.value;
//         elem.innerHTML=elemContent;
//     }
// });
btn.addEventListener('click', () => {
    let nameLength = inputName.value.length;
    if (nameLength >= 4) {
        let elem = document.querySelector("h1.username");
        elem.style.color = 'white';
        let elemContent = `Dear ${inputName.value},<br> Daniel wishes u a wonderful year ahead. <br>🥂 Cheers to life💖,<br>To Happiness 😊, <br>To Success... <br>Cheers to 2023 ✔💯💯 <br> Stay fulfilled🤗🤗`;
        // elem.append(elemContent);
        elem.innerHTML = elemContent;
        // document.body.append(elem)
        inputName.classList.add('hidden');
        btn.classList.add('hidden');
        container.classList.add('background');
        dateItem.classList.add('white');
        
        setTimeout(() => {
            container.style.display = 'none';
            video.classList.remove('hidden');
            console.log('Happy new year');
        }, 15000);

    }
    inputName.value = '';
});


inputName.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        // e.preventDefault();
        inputName.addEventListener('change', () => {
            let nameLength = inputName.value.length;
            if (nameLength >= 4) {
                let elem = document.querySelector("h1.username");
                elem.style.color = 'white';
                let elemContent = `Dear ${inputName.value},<br> Daniel wishes u a wonderful year ahead. <br>🥂 Cheers to life💖,<br>To Happiness 😊, <br>To Success... <br>Cheers to 2023 ✔💯💯 <br> Stay fulfilled🤗🤗`;
                // elem.append(elemContent);
                elem.innerHTML = elemContent;
                // document.body.append(elem)
                inputName.classList.add('hidden');
                btn.classList.add('hidden');
                container.classList.add('background');
                dateItem.classList.add('white');
                setTimeout(() => {
                    container.style.display = 'none';
                    video.classList.remove('hidden');
                    console.log('Happy new year');
                }, 15000);
            }
            inputName.value = '';
        });
    }
});

inputName.addEventListener('click',()=>{
    warning.style.display='none'
})


setInterval(updateInput, 100);
setInterval(updateTime, 1000);
