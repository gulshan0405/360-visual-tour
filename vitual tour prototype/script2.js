var viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene-0", // Start with the first scene
        "autoLoad": true,
        "showControls": false
    },
    "scenes":{
        "scene-0":{
            "type": "equirectangular",
            "panorama": "gate no 2.jpg", // First image
        "hotSpots": [
    {
        "pitch": -5, // Vertical position
        "yaw": 0,  // Horizontal position
        "type": "scene", // Action type
        "text": "Enter the Front Gate", // Tooltip text
        "sceneId": "scene-1", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    }
]

        },
        "scene-1":{
            "type": "equirectangular",
            "panorama": "bus stop.jpg", // First image
        "hotSpots": [
    {
        "pitch": -5, // Vertical position
        "yaw": 0,  // Horizontal position
        "type": "scene", // Action type
        "text": "Exit", // Tooltip text
        "sceneId": "scene-0", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    },
    {
        "pitch": -5, // Vertical position
        "yaw": 180,  // Horizontal position
        "type": "scene", // Action type
        "text": "Near momento", // Tooltip text
        "sceneId": "scene-2", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    }
],
        },
        "scene-2":{
            "type": "equirectangular",
            "panorama": "statue.jpg", // First image
        "hotSpots": [
    {
        "pitch": -3, // Vertical position
        "yaw": -40,  // Horizontal position
        "type": "scene", // Action type
        "text": "Engineering and Tech.", // Tooltip text
        "sceneId": "scene-3", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    },
    {
        "pitch": -3, // Vertical position
        "yaw": 110,  // Horizontal position
        "type": "scene", // Action type
        "text": "Go back", // Tooltip text
        "sceneId": "scene-1", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    },
    {
        "pitch": 3, // Vertical position
        "yaw": -98,  // Horizontal position
        "type": "scene", // Action type
        "text": "Bus stop", // Tooltip text
        "sceneId": "scene-4", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    }
]
        },
        "scene-3":{
            "type": "equirectangular",
            "panorama": "SOET.jpg", // First image
        "hotSpots": [
    {
        "pitch": 0, // Vertical position
        "yaw": 100,  // Horizontal position
        "type": "scene", // Action type
        "text": "Go back", // Tooltip text
        "sceneId": "scene-2", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    }
   
]
        },
        "scene-4":{
            "type": "equirectangular",
            "panorama": "busStand.jpg", // First image
        "hotSpots": [
    {
        "pitch": -3, // Vertical position
        "yaw": 6,  // Horizontal position
        "type": "scene", // Action type
        "text": "Cafeteria", // Tooltip text
        "sceneId": "scene-5", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    }
]
        },
        "scene-5":{
            "type": "equirectangular",
            "panorama": "cafeteria.jpg", // First image
        "hotSpots": [
    {
        "pitch": -3, // Vertical position
        "yaw": 0,  // Horizontal position
        "type": "scene", // Action type
        "text": "Go back", // Tooltip text
        "sceneId": "scene-4", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    },
    {
        "pitch": -3, // Vertical position
        "yaw": 175,  // Horizontal position
        "type": "scene", // Action type
        "text": "Boys Hostels", // Tooltip text
        "sceneId": "scene-6", // Target scene
        "cssClass": "custom-icon-up-big" // Custom CSS class
    }
]
        },
        "scene-6":{
            "type": "equirectangular",
            "panorama": "ramanujan.jpg", // First image
        "hotSpots": [
    {
        "pitch": 3, // Vertical position
        "yaw": -85,  // Horizontal position
        "type": "scene", // Action type
        "text": "Go back", // Tooltip text
        "sceneId": "scene-5", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    },
    {
        "pitch": 3, // Vertical position
        "yaw": 85,  // Horizontal position
        "type": "scene", // Action type
        "text": "Homi J", // Tooltip text
        "sceneId": "scene-7", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    }
]
        },
        "scene-7":{
            "type": "equirectangular",
            "panorama": "homiJ.jpg", // First image
        "hotSpots": [
    {
        "pitch": 3, // Vertical position
        "yaw": -87,  // Horizontal position
        "type": "scene", // Action type
        "text": "Ramanujan", // Tooltip text
        "sceneId": "scene-6", // Target scene
        "cssClass": "custom-icon-point" // Custom CSS class
    },

]
        },
    }
});

// Zoom In
document.getElementById('zoom-in').addEventListener('click', function () {
    viewer.setHfov(viewer.getHfov() - 20);
});

// Zoom Out
document.getElementById('zoom-out').addEventListener('click', function () {
    viewer.setHfov(viewer.getHfov() + 20);
});

// Move Up
document.getElementById('move-up').addEventListener('click', function () {
    viewer.setPitch(viewer.getPitch() + 20);
});

// Move Down
document.getElementById('move-down').addEventListener('click', function () {
    viewer.setPitch(viewer.getPitch() - 20);
});

// Move Left
document.getElementById('move-left').addEventListener('click', function () {
    viewer.setYaw(viewer.getYaw() - 20);
});

// Move Right
document.getElementById('move-right').addEventListener('click', function () {
    viewer.setYaw(viewer.getYaw() + 20);
});

// Pan Mode (Reset view)
document.getElementById('pan-mode').addEventListener('click', function () {
    viewer.setHfov(100);
    viewer.setPitch(0);
    viewer.setYaw(0);
});

// Reset View
document.getElementById('reset-view').addEventListener('click', function () {
    viewer.lookAt(0, 0, 100);
});

// Play / Stop Rotation
document.getElementById('play').addEventListener('click', function () {
    if (rotating) {
        clearInterval(rotationInterval);
        rotating = false;
    } else {
        rotationInterval = setInterval(function () {
            viewer.setYaw(viewer.getYaw() + 0.1);
        }, 30);
        rotating = true;
    }
});

// Fullscreen
document.getElementById('fullscreen').addEventListener('click', function () {
    viewer.toggleFullscreen();
    document.getElementById('navi-container').style.display = 'flex';
});

// Hide Controls
document.getElementById('hide-controls').addEventListener('click', function () {
    document.getElementById('navi-container').style.display = 'none';
});

// Help
document.getElementById('help').addEventListener('click', function () {
    alert('Use the controls to navigate the panorama.');
});
