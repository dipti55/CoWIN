const pincode = document.getElementById('pin')
const searchpin = document.getElementById('searchbypin')
const bystate = document.getElementById('state')
const bydistrict = document.getElementById('district')
const searchsd = document.getElementById('searchbysd')

// console.log(searchpin);
// searchpin.addEventListener('click', () => {
//     const pincode = pincode.value
    const xhr = new XMLHttpRequest();
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=31-03-2021`

    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);

            const Data = JSON.parse(xhr.responseText)
            const pin = document.createElement('')
            const id = document.createElement('')
            id.innerHTML = Data.id;


            const container = document.getElementById('')
            container.appendChild()
            container.appendChild()


            // const data = JSON.parse(xhr.responseText)
            // function (data, status) {
            //     if (status) {
            //         var sessions = data.sessions ? data.sessions : [];
            //         if (sessions) {
            //             for (var i = 0; i <= sessions.length; i++) {
            //                 var classname = "info";
            //                 if (i % 2 == 0) {
            //                     classname = "success"
            //                 }
            //                 $('#session tbody').append("<tr class=" + classname + "><td>" + sessions[i]
            //                     .name + "</td><td>" + sessions[i].pincode + "</td><td>" + sessions[i].date + "</td><td>" + sessions[i].available_capacity + "</td><td>" +
            //                     sessions[i].available_capacity_dose1 + "</td></tr>")
            //             }
            //         }
            //     } else {
            //         alert('error');
            //     }


                xhr.send()
            }}

