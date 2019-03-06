function forecastCall(place='portland') {
  return fetch(`http://api.apixu.com/v1/current.json?key=0ad69ecb045c4297a0e52409190603&q=${place}`).then(
    response => response.json(),
    error => console.log('An error occured. ', error);
  ).then((json)=> {
    return json
  });
}

export default forecastCall;
