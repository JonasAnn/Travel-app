// Personal API Key for Geonames API
const geoURL = 'http://api.geonames.org/searchJSON?q=';
const username = '&maxRows=1&username=ann05';

// Personal API Key for Weather API
const weatherURL = 'https://api.weatherbit.io/v2.0/forecast/hourly?';
const weatherkey = '9e69ab7c49dd4bf0983bb7dd11807fbb';

// Personal API Key for PixabayAPI
const pixaURL = 'https://pixabay.com/api/?';
const pixakey = '1990176-9b48d8bf4635bf1c581022006';

//Grab UI
const destination = document.querySelector('#destination');
const date = document.querySelector('#date');
const submit = document.querySelector('#submit-btn');
const destinationLog = document.querySelector('.log-list');

//from submit listen
submit.addEventListener('click', submitLog);

export function submitLog(e){
    e.preventDefault()
    // if(destination.value ==='')
    // {
    //     alert('Add destination');
    //     destinationLog.style.display='none';
    //  }else{
    //     destinationLog.style.display='block';
    //  }

    //Get input values
    const location = destination.value;
   
    
    //Set Date
    const startDate =    format(new Date(date.value).getTime(), 'yyyy-MM-dd:mm');
    const endDate = format(new Date(date.value).getTime(), 'yyyy-MM-dd:HH');

//Get longitude and latitude
    getLat(geoURL,username,location)

    //Get Weather Details
    .then(function(data) {
        const geoLatit = data.geonames[0].lat;
        const geoLongi = data.geonames[0].lng;
        const geoCountry = data.geonames[0].countryName;
        const cordinates = `&lat=${geoLatit}&lon=${geoLongi}`;
      
   getWeather(weatherURL,weatherkey,cordinates,startDate,endDate)
   .then(function(req){
    
    postData('/add',{weather:req.data[0].weather.description,
    temperature:req.data[0].temp,
    windspeed:req.data[0].wind_spd})
   })
   pixaBay(pixaURL,pixakey,location)
   .then(function (newImage){
       postData('/add',{imageURL:newImage.hits[0].largeImageURL})
})
    })  
 
   //update UI
   .then(function(res){updateUX('/all')});
     
}

//Delete with Delet-Button
export function removeItem(e){

    e.preventDefault();

    if(e.target.classList.contains('btn-delete')){
           e.target.parentElement.parentElement.remove();
    }
 }