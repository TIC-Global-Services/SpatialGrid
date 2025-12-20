import { useEffect, useRef } from 'react';

const DarkMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 17.4544798, lng: 78.3815655 },
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [{ color: '#212121' }],
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#212121' }],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#757575' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#181818' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#2c2c2c' }],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }],
          },
        ],
      });

      new window.google.maps.Marker({
        position: { lat: 17.4544798, lng: 78.3815655 },
        map,
        title: 'Spatial Grid',
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDUMMYKEY1234567890&callback=initMap`;

      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className="flex-1 w-full h-[300px] md:h-[450px] lg:h-auto  rounded-lg shadow-lg"
    />
  );
};

export default DarkMap;
