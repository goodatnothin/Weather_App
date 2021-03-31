const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == "")
    {
        city_name.innerText = `Please Write the name before search`;
        datahide.classList.add('data_hide');
    }
    else
    {
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2a4cca9dff5afb390d10b5b6a4fab970`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;
        //console.log(response);
        if (tempStatus == "Sunny") {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #FFB533'></i>";
        }
        else if (tempStatus == "Clouds") {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #F1F2F6'></i>";
        }
        else if (tempStatus == "Rain") {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #A4B0B3'></i>";
        }
        else {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #f9d71c'></i>";
        }
        datahide.classList.remove('data_hide');

        }

        catch{
            city_name.innerText = `Please Write a proper City name`;
            datahide.classList.add('data_hide');
        }
    }
} 
submitBtn.addEventListener('click', getInfo);