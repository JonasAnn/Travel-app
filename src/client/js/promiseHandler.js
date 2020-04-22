/* Function to GET Geonames API Data */

export const getLat = async (geoURL,username,location)=>{

    let url = `${geoURL}${location}${username}`;
    const res = await fetch(url);
    
       try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error',error);
    }
}

// function getWeather to get weather information from Weatherbit 

export const getWeather = async (weatherURL,weatherkey,cordinates,startDate,endDate) => {
    const req = await fetch(`${weatherURL}key=${weatherkey}${cordinates}&start_date=${startDate}&end_date=${endDate}`);
    try {
      const weatherData = await req.json();
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.log("error", error);
    }
  }

// function getWeather to get date format
export const format = function (time, format) {
    let t = new Date(time);
    let tf = function (i) { return (i < 10 ? '0' : '') + i };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}

//Get images from Pixabay
export const pixaBay = async (pixaURL,username,location)=>{

    let url = `${pixaURL}key=${username}&q=${location}&image_type=photo`;
    const res = await fetch(url);
    
       try {
        const newImage = await res.json();
        console.log(newImage);
        return newImage;
    } catch(error) {
        console.log('error',error);
    }
}

/* Function to POST data */

export const postData = async ( url , data )=>{
    // console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

   /* Function to GET Project Data */
   export const updateUX = async (url)=>{
    const request = await fetch(url);
    
    try {
       const allData = await request.json();
        console.log(allData)
       //create elements
        const li = document.createElement('li');
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        const ul = document.querySelector('.log-list');
        const textDiv = document.createElement('div');
        const textDestination = document.createElement('h6');
        const dataDiv = document.createElement('div');
        const tempPara = document.createElement('p');
        const weatherPara = document.createElement('p');
        const speedPara = document.createElement('p');
        const clearTrip = document.createElement('button');
        const deleteDiv = document.createElement('div');

        

        //set attribtes
       
        imageDiv.className = 'log-list-image';
        li.className = 'log-lists';
        textDiv.className = 'log-list-text';
        textDestination.id = 'destination-name';
        dataDiv.className = 'destination-weather';
        tempPara.id = 'temp';
        weatherPara.id = 'weather';
        speedPara.id = 'windspeed';
        clearTrip.classList='btn btn-delete';
        clearTrip.type = 'submit';
        clearTrip.value = 'Submit';
        clearTrip.innerHTML = 'Delete';
       

        //set attribtes for image
        image.className = 'log-image';
        image.alt = 'destination image';
        image.src = allData[allData.length - 1].imageURL;


      //set-value
      textDestination.innerHTML = destination.value.toUpperCase();
      tempPara.innerHTML = allData[0].temperature;
      weatherPara.innerHTML = allData[0].weather;
      speedPara.innerHTML = allData[0].windspeed;
    

        //append elements
        ul.appendChild(li);
        imageDiv.appendChild(image);
        textDiv.appendChild(textDestination);
        textDiv.appendChild(tempPara);
        textDiv.appendChild(weatherPara);
        textDiv.appendChild(speedPara);

       textDiv.appendChild(dataDiv);
       deleteDiv.appendChild(clearTrip);
        li.appendChild(imageDiv);
        li.appendChild(textDiv);
        li.appendChild(deleteDiv);
        console.log(ul);


   } catch(error){
        console.log('error', error);
    }
}