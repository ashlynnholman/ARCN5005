///

  // Van Popups on hover

  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });


map.on('mousemove', 'vans', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const van = e.features[0];

    if (van.id !== hoveredVanId) {
      hoveredVanId = van.id;

      const imageUrl = van.properties.Image || 'https://example.com/default-image.jpg';

      new maplibregl.Popup({
        closeButton: false // Hide the close button
      })
        .setLngLat(coordinates)
        .setHTML(`
        <h3>${van.properties.PlaceName}</h3>
        <img src="${van.properties.Image}" alt="${van.properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>Location: ${van.properties.Location}</p>
        <p>Date Visited: ${van.properties["Date Visited"]}</p>
        <p>Description: ${van.properties.Description}</p>
      `)
      .addTo(map);
    }
  });
});





////


      ///

      // Add a symbol layer for van
      map.addLayer({
        'id': 'vans',
        'type': 'symbol',
        'source': 'CanadaTour',
        'layout': {
          'icon-image': 'van-icon',
          'icon-size': 0.3
        }
      });
    }
  );

  // Van Popups on hover

  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();

      new maplibregl.Popup({
        closeButton: false // Hide the close button
      })
        .setLngLat(coordinates)
        .setHTML(`
        <h3>${van.properties.PlaceName}</h3>
        <img src="${van.properties.Image}" alt="${van.properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>Location: ${van.properties.Location}</p>
        <p>Date Visited: ${van.properties["Date Visited"]}</p>
        <p>Description: ${van.properties.Description}</p>
      `)
      .addTo(map);
    }
  });
});




   // Van Popups on hover
 // Van Popups on hover
 map.on("mouseenter", "vans", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";
  
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.Description;
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
  
    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });
  
  map.on('mousemove', 'vans', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const van = e.features[0];
  
    if (van.id !== hoveredVanId) {
      hoveredVanId = van.id;
  
      const imageUrl = van.properties.Image || 'https://example.com/default-image.jpg';
  
      new maplibregl.Popup({
        closeButton: false // Hide the close button
      })
        .setLngLat(coordinates)
        .setHTML(`
        <h3>${van.properties.PlaceName}</h3>
        <img src="${van.properties.Image}" alt="${van.properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>Location: ${van.properties.Location}</p>
        <p>Date Visited: ${van.properties["Date Visited"]}</p>
        <p>Description: ${van.properties.Description}</p>
      `)
      .addTo(map);
    }
  });
  
  map.on('mouseout', 'vans', () => {
    if (hoveredVanId) {
      map.getCanvas().style.cursor = '';
      hoveredVanId = null;
    }
  });
  });