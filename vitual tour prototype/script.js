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
        "sceneId": "scene1", // Scene ID of the next image
        "cssClass": "custom-icon-up" // Custom icon class
    }
]

        },
        
        "scene1": {
            "type": "equirectangular",
            "panorama": "RoadToAdmin.jpg", // Second image
            "hotSpots": [
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 0,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Go adminblock", // Text for the hotspot
                    "sceneId": "scene1a", // Scene ID of the next image4
                    "cssClass":"custom-icon-up"
                },
                {
                    "pitch": 3, // Vertical position of the hotspot
                    "yaw": -177,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Exit", // Text for the hotspot
                    "sceneId": "scene0", // Scene ID of the next image
                     "cssClass":"custom-icon-exit"
                }
            ]
        },
        // Admin-To-Wifi-Park
        "scene1a": {
            "type": "equirectangular",
            "panorama": "ChowkAdmin1.jpg", // First image
           "hotSpots": [
    {
        "pitch": 5, // Vertical position of the hotspot
        "yaw": -73,  // Horizontal position of the hotspot
        "type": "scene", // Scene type to navigate
        "text": "back to near gate", // Text for the hotspot
        "sceneId": "scene1", // Scene ID of the next image
        "cssClass": "custom-icon-point" // Custom icon class
    },
    {
        "pitch": 0, // Vertical position of the hotspot
        "yaw": 100,  // Horizontal position of the hotspot
        "type": "scene", // Scene type to navigate
        "text": "Admin Block", // Text for the hotspot
        "sceneId": "scene2", // Scene ID of the next image
        "cssClass": "custom-icon-point" // Custom icon class
    },
    {
        "pitch": -5, // Vertical position of the hotspot
        "yaw": -10,  // Horizontal position of the hotspot
        "type": "scene", // Scene type to navigate
        "text": "ROAD TO VC HOUSE", // Text for the hotspot
        "sceneId": "scene1b", // Scene ID of the next image
         "cssClass":"custom-icon-up"
    }
]
 
},  
        "scene1b": {
            "type": "equirectangular",
            "panorama": "Toward VC.jpg", // First image
           "hotSpots": [
    {
        "pitch": -6, // Vertical position of the hotspot
        "yaw": 0,  // Horizontal position of the hotspot
        "type": "scene", // Scene type to navigate
        "text": "JUMP To VC-House", // Text for the hotspot
        "sceneId": "scene1c", // Scene ID of the next image
        "cssClass": "custom-icon-point" // Custom icon class
    },
    {
        "pitch": -6, // Vertical position of the hotspot
        "yaw": 180,  // Horizontal position of the hotspot
        "type": "scene", // Scene type to navigate
        "text": " BACK TO CHOWK", // Text for the hotspot
        "sceneId": "scene1a", // Scene ID of the next image
        "cssClass": "custom-icon-point" // Custom icon class
    }
]
  },
  "scene1c": {
    "type": "equirectangular",
    "panorama": "VC House.jpg", // First image
   "hotSpots": [
{
"pitch": -10, // Vertical position of the hotspot
"yaw": 180,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "Toward WiFi Park", // Text for the hotspot
"sceneId": "scene1d", // Scene ID of the next image
"cssClass": "custom-icon-right" // Custom icon class
},
{
    "pitch": -10, // Vertical position of the hotspot
    "yaw": 170,  // Horizontal position of the hotspot
    "type": "scene", // Scene type to navigate
    "text": "Toword Admin Block", // Text for the hotspot
    "sceneId": "scene1b", // Scene ID of the next image
    "cssClass": "custom-icon-left" // Custom icon class
    }
]

},

// wifi park
"scene1d": {
    "type": "equirectangular",
    "panorama": "Wifi-pArk.jpg", // First image
   "hotSpots": [
{
"pitch": -3, // Vertical position of the hotspot
"yaw": 70,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "Front view of Wifi", // Text for the hotspot
"sceneId": "scene1e", // Scene ID of the next image
"cssClass": "custom-icon-point" // Custom icon class
},
{
    "pitch": -7, // Vertical position of the hotspot
    "yaw": 180,  // Horizontal position of the hotspot
    "type": "scene", // Scene type to navigate
    "text": "back to vc house", // Text for the hotspot
    "sceneId": "scene1c", // Scene ID of the next image
    "cssClass": "custom-icon-up-big" // Custom icon class
    }
]

},

"scene1e": {
    "type": "equirectangular",
    "panorama": "WifiPark2.jpg", // First image
   "hotSpots": [
{
"pitch": -3, // Vertical position of the hotspot
"yaw": 0,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "Center-view of wifi-park", // Text for the hotspot
"sceneId": "scene1f", // Scene ID of the next image
"cssClass": "custom-icon-up-big" // Custom icon class
},
{
    "pitch": -3, // Vertical position of the hotspot
    "yaw": 180,  // Horizontal position of the hotspot
    "type": "scene", // Scene type to navigate
    "text": "Wide-View Of Department", // Text for the hotspot
    "sceneId": "BLOCKS", // Scene ID of the next image
    "cssClass": "custom-icon-point" // Custom icon class
}
]

},

"scene1f": {
    "type": "equirectangular",
    "panorama": "Wifi-Park3.jpg", // First image
   "hotSpots": [
{
"pitch": -3, // Vertical position of the hotspot
"yaw": 180,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "Wifi-Park-Front", // Text for the hotspot
"sceneId": "scene1e", // Scene ID of the next image
"cssClass": "custom-icon-point" // Custom icon class
}
]

},

// Department-Blocks
"BLOCKS": {
    "type": "equirectangular",
    "panorama": "Blocks-Wide.jpg", // First image
   "hotSpots": [
{
"pitch": -5, // Vertical position of the hotspot
"yaw": 0,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "JUMP-TO-BLOCK-3", // Text for the hotspot
"sceneId": "BLOCK-3", // Scene ID of the next image
"cssClass": "custom-icon-up" // Custom icon class
},
{
    "pitch": 4, // Vertical position of the hotspot
    "yaw": -120,  // Horizontal position of the hotspot
    "type": "scene", // Scene type to navigate
    "text": "JUMP-TO-BLOCK-1", // Text for the hotspot
    "sceneId": "BLOCK-1", // Scene ID of the next image
    "cssClass": "custom-icon-point" // Custom icon class
},
{
    "pitch": 4, // Vertical position of the hotspot
    "yaw": 70,  // Horizontal position of the hotspot
    "type": "scene", // Scene type to navigate
    "text": "JUMP-TO-BLOCK-4", // Text for the hotspot
    "sceneId": "BLOCK-4", // Scene ID of the next image
    "cssClass": "custom-icon-point" // Custom icon class
}
]

},
"BLOCK-3": {
    "type": "equirectangular",
    "panorama": "BLOCK-3.jpg", // First image
   "hotSpots": [
{
"pitch": -3, // Vertical position of the hotspot
"yaw": -175,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "BACK-TO-WIDE-VIEW", // Text for the hotspot
"sceneId": "BLOCKS", // Scene ID of the next image
"cssClass": "custom-icon-up-big" // Custom icon class
}
]

},
"BLOCK-1": {
    "type": "equirectangular",
    "panorama": "BLOCK-1.jpg", // First image
   "hotSpots": [
{
"pitch": -5, // Vertical position of the hotspot
"yaw": -177,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "BACK-TO-WIDE-VIEW", // Text for the hotspot
"sceneId": "BLOCKS", // Scene ID of the next image
"cssClass": "custom-icon-up-big" // Custom icon class
}
]

},
"BLOCK-4": {
    "type": "equirectangular",
    "panorama": "BLOCK-4.jpg", // First image
   "hotSpots": [
{
"pitch": -5, // Vertical position of the hotspot
"yaw": 180,  // Horizontal position of the hotspot
"type": "scene", // Scene type to navigate
"text": "BACK-TO-WIDE-VIEW", // Text for the hotspot
"sceneId": "BLOCKS", // Scene ID of the next image
"cssClass": "custom-icon-up-big" // Custom icon class
}
]

},


// inside admin block
        "scene2": {
            "type": "equirectangular",
            "panorama": "adminBlockFront.jpg", // third image
            "hotSpots": [
                {
                    "pitch": 2, // Vertical position of the hotspot
                    "yaw": -106,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Go to Scene 2", // Text for the hotspot
                    "sceneId": "scene3", // Scene ID of the next image
                     "cssClass":"custom-icon-point"
                },  
            
                {
                    "pitch": -2, // Vertical position of the hotspot
                    "yaw": 0,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Enter", // Text for the hotspot
                    "sceneId": "scene2a", // Scene ID of the next image
                    "cssClass":"custom-icon-up"
                },
                {
                    "pitch": 1, // Vertical position of the hotspot
                    "yaw": 177,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "Chowk", // Text for the hotspot
                    "sceneId": "scene1a" ,// Scene ID of the next image
                    "cssClass":"custom-icon-point"
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
                    "sceneId": "scene2", // Scene ID of the next image
                    "cssClass":"custom-icon-exit"
                },
                {
                    "pitch": 0, // Vertical position of the hotspot
                    "yaw": 40,  // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "stairs", // Text for the hotspot
                    "sceneId": "scene2b", // Scene ID of the next image
                    "cssClass":"custom-icon-point"
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
                    "sceneId": "scene2c", // Scene ID of the next image
                    "cssClass":"custom-icon-point"
                },
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": 0, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "back to main hall", // Text for the hotspot
                    "sceneId": "scene2a", // Scene ID of the next image
                    "cssClass":"custom-icon-point"
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
                    "sceneId": "scene2d", // Scene ID of the next image
                    "cssClass":"custom-icon-exit"
                },
                {
                    "pitch": -3, // Vertical position of the hotspot
                    "yaw": -90, // Horizontal position of the hotspot
                    "type": "scene", // Scene type to navigate
                    "text": "go back to stairs", // Text for the hotspot
                    "sceneId": "scene2b", // Scene ID of the next image
                    "cssClass":"custom-icon-point"
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
                    "sceneId": "scene2c", // Scene ID of the next image
                    "cssClass":"custom-icon-exit"
                }
            ]
        },
        "scene3": {
            "type": "equirectangular",
            "panorama": "adminLeft.jpg", // fourth image
            "hotSpots": [
                {
                    "pitch": 4, // Vertical position of the hotspot
                    "yaw": -5,  // Horizontal position of the hotspot
                    "type": "scene",
                    "text": "",
                    "sceneId": "scene2" ,// Navigate back to the first image
                    "cssClass":"custom-icon-point"
                },
                {
                    "pitch": 2,   // Adjust as needed
                    "yaw": -115,  // Adjust as needed
                    "type": "scene",
                    "text": "Go to Scene 3", // Navigate to Scene 3
                    "sceneId": "scene4",
                     "cssClass":"custom-icon-point"
                   
                }
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "backAdmin.jpg", // fifth image
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Back to Scene 2",
                    "sceneId": "scene2" ,// Navigate back to scene 2
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
