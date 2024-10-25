// Initialize the Pannellum viewer with multiple scenes
var viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene0", // Start with the first scene
        "autoLoad": true,
        "showControls": false
    },
    "scenes": {
        "scene0": {
            "type": "equirectangular",
            "panorama": "front gate.jpg", // First image
            "hotSpots": [
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": -30,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Enter the Front Gate", // Text for the hotspot
                    "sceneId": "scene1" // Scene ID of the next image
                }
            ]
        },
        
        "scene1": {
            "type": "equirectangular",
            "panorama": "PXL_20241013_165159466.PHOTOSPHERE~2.jpg", // Second image
            "hotSpots": [
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 0,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Go adminblock", // Text for the hotspot
                    "sceneId": "scene2" // Scene ID of the next image
                },
                {
                    "pitch": 2, // Vertical position of the hotspot
                    "yaw": -175,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Exit", // Text for the hotspot
                    "sceneId": "scene0" // Scene ID of the next image
                }
            ]
        },
// inside admin block
        "scene2": {
            "type": "equirectangular",
            "panorama": "PXL_20241013_170059050.PHOTOSPHERE.jpg", // third image
            "hotSpots": [
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": -105,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Go to Scene 2", // Text for the hotspot
                    "sceneId": "scene3" // Scene ID of the next image
                },  
            
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 0,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Enter", // Text for the hotspot
                    "sceneId": "scene2a" // Scene ID of the next image
                },
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 180,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "back to near gate", // Text for the hotspot
                    "sceneId": "scene1" // Scene ID of the next image
                }
            ]
        },
        "scene2a": {
            "type": "equirectangular",
            "panorama": "enter.jpg", // First image
            "hotSpots": [
                {
                    "pitch": -10, // Vertical position of the hotspot
                    "yaw": 170,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Exit", // Text for the hotspot
                    "sceneId": "scene2" // Scene ID of the next image
                },
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 40,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "stairs", // Text for the hotspot
                    "sceneId": "scene2b" // Scene ID of the next image
                }
            ]
        },
        "scene2b": {
            "type": "equirectangular",
            "panorama": "stairs.jpg", // First image
            "hotSpots": [
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": -120, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "upto second floor", // Text for the hotspot
                    "sceneId": "scene2c" // Scene ID of the next image
                },
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": 0, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "back to main hall", // Text for the hotspot
                    "sceneId": "scene2a" // Scene ID of the next image
                }
            ]
        },
        "scene2c": {
            "type": "equirectangular",
            "panorama": "officeout.jpg", // First image
            "hotSpots": [
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": 5, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Singhara Sir Office", // Text for the hotspot
                    "sceneId": "scene2d" // Scene ID of the next image
                },
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": -90, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "go back to stairs", // Text for the hotspot
                    "sceneId": "scene2b" // Scene ID of the next image
                }
            ]
        },
        "scene2d": {
            "type": "equirectangular",
            "panorama": "office.jpg", // First image
            "hotSpots": [
                {
                    "pitch": -8, // Vertical position of the hotspot
                    "yaw": -130, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Exit", // Text for the hotspot
                    "sceneId": "scene2c" // Scene ID of the next image
                }
            ]
        },
        "scene3": {
            "type": "equirectangular",
            "panorama": "PXL_20241013_170433309.PHOTOSPHERE.jpg", // fourth image
            "hotSpots": [
                {
                    "pitch": 2, // Vertical position of the hotspot
                    "yaw": -5,  // Horizontal position of the hotspot
                    "type": "scene",
                    "text": "Back to Scene 1",
                    "sceneId": "scene2" // Navigate back to the first image
                },
                {
                    "pitch": 2,   // Adjust as needed
                    "yaw": -115,  // Adjust as needed
                    "type": "scene",
                    "text": "Go to Scene 3", // Navigate to Scene 3
                    "sceneId": "scene4"
                }
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "PXL_20241013_170654893.PHOTOSPHERE.jpg", // fifth image
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Back to Scene 2",
                    "sceneId": "scene2" // Navigate back to scene 2
                }
            ]
        }
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
