import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: {
        color: 'red',
        fontWeight: 'bold',
        text: '5'
      },
		  draggable: true,
      icon:'https://gist.githubusercontent.com/selvakumar-p/dcdca149d85f108ca0aa48002e25ac9a/raw/419b3a742faf333d2be030c8baf5f7c2db63b64d/marker.svg'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: {
        color: 'blue',
        fontWeight: 'bold',
        text: '1'
      },
		  draggable: false,
      icon:'https://gist.githubusercontent.com/selvakumar-p/dcdca149d85f108ca0aa48002e25ac9a/raw/419b3a742faf333d2be030c8baf5f7c2db63b64d/marker.svg'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: {
        color: 'green',
        fontWeight: 'bold',
        text: '2'
      },
		  draggable: true,
      icon:'https://gist.githubusercontent.com/selvakumar-p/cc23d282c5de644c932a5c0b3c92f132/raw/f07a4a82277626da3f250018f94455911812ad23/marker.svg'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: any;
	draggable: boolean;
  icon:string;
}
