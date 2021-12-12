import getData from './getData.js'



getData(1)
.then( (data) => console.log(data))
.catch((e) => console.log(e));
