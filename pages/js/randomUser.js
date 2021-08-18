const user_details_ = document.querySelector(".user_details");
const info_icons = document.querySelector(".info_icons");
const user_img = document.querySelector(".user_img");

//fetching api data
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(function (data) {
        let userData = data.results[0];
        let imgSrc = `<img src="${userData.picture.large}">`;
        let user_name = `${userData.name.first} ${userData.name.last}`;
        var date = new Date(userData.dob.date);
        var birthDate = date.getMonth() + 1 + '/' + (date.getDay() + 1) + '/' +  date.getFullYear();
        let location = `${userData.location.street.number} ${userData.location.street.name}`;

        let userContent = `
        <div class="icon user_ active" data-title="Hi, My name is" data-value="${user_name}"></div>
        <div class="icon email_" data-title="My email address is" data-value="${userData.email}"></div>
        <div class="icon birthday_" data-title="My birthday is" data-value="${birthDate}"></div>
        <div class="icon location_" data-title="My addres is" data-value="${location}"></div>
        <div class="icon phone_" data-title="My phone number is " data-value="${userData.cell}"></div>
        <div class="icon password_" data-title="My password is" data-value="${userData.login.password}"></div>        
        `
        info_icons.innerHTML = userContent;
        user_img.innerHTML = imgSrc;
        user_details_.innerHTML = user_name;


        //for hover and change details
        const icon = document.querySelectorAll(".icon");
        const user_info = document.querySelector(".user_info");
        const user_details = document.querySelector(".user_details");

        icon.forEach(function (item) {
            item.addEventListener("mouseover", function () {
                let dataTitle = item.getAttribute("data-title");
                let dataValue = item.getAttribute("data-value");

                user_info.innerHTML = dataTitle;
                user_details.innerHTML = dataValue;

                let activeClass = document.querySelectorAll(".active");

                activeClass.forEach(function (active_) {
                    active_.className = active_.className.replace(" active", "");
                })
                item.className += " active";

            });
        })


    })