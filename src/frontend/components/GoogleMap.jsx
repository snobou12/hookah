import React from 'react';
import '../css/GoogleMap.css';
import { Button } from '@material-ui/core';
function GoogleMap() {
  //   React.useEffect(() => {
  //     let mapCanvas = document.getElementById('map');
  //     let mapOptions = {
  //       center: new google.maps.LatLng(51.5, -0.2),
  //       zoom: 10,
  //     };
  //     let map = new google.maps.Map(mapCanvas, mapOptions);
  //   }, []);

  return (
    <div id="map">
      <div id="textMap">My map will go here</div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default GoogleMap;
