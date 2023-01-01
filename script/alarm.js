let alarm = document.querySelector('#clock');
let alarmTime = null;
let alarmTimeout = null;



function formatTime(time) {

    if (time < 10) {
        return "0" + time;

    } else {
        return time
    }


}

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours() % 12 || 12);
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    alarm.innerText = `${hour} : ${minutes} : ${seconds}`;
    alarm.classList.add('timercolor');

}




function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);

}

function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeToAlarm = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => ringtone.play(), timeout);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Good',
                showConfirmButton: true,
                timer: 2000,
            })
        }

    };

}
setInterval(updateTime, 1000)
$(Document).ready(() => {

    $('#setAlarmBtn').html('set alarm');
    $('#setAlarmBtn').click(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your alarm has been set',
            showConfirmButton: true,
            timer: 2000,
        })
        let ringtone = new Audio('../ringtone/a_undertaker_theme.mp3');
        ringtone.play();
    });



    $('#stopAlarmBtn').html('Cancel');
    $('#stopAlarmBtn').click(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Your alarm has been cancelled',
            showConfirmButton: true,
            timer: 2000,
        })
        let ringtone = new Audio('../ringtone/a_undertaker_theme.mp3');
        ringtone.pause

    })
    $('h1.h1').html('ALARM:');
    $('h1').css({ background: 'transparent', color: '#fff' });


    // $(Document).mousemove((e) => {
    //     $('h2').html('Coords: Y:' + e.clientY + ' X:' + e.clientX)




    // });

    // $('button').click((e) => {
    //     e.preventDefault();
    //     $.ajax({
    //         url: "",
    //         method: "GET",
    //         data: $(this).data(),
    //         success: () => {

    //         },
    //         error: () => { },
    //         beforeSend: () => { }

    //     }).done(() => {

    //     })
    // }

    // )


})



