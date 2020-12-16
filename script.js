(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingBottom": 0,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_419ED2EF_684E_BE9E_419B_AA0DA37A9007",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -106.53,
  "pitch": 2.76,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40D5739B_684E_BE86_4197_0A6500EDD38C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE36B34_6732_B20E_413A_C29E3F679DA0",
 "duration": 1900,
 "class": "FadeOutEffect"
},
{
 "overlays": [
  "this.overlay_05C894DA_67F2_963A_41D3_76F81AD5DFEE",
  "this.overlay_059B2A94_67F2_920D_41CB_71721AF8192A"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_t.jpg",
 "id": "panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC",
 "label": "C3.4",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_414781E1_684E_BA83_41CF_823C3BCA3DC8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_7805CDB1_6777_9606_41A5_EB8293F5C912",
  "this.overlay_80B7056A_671E_F605_41C0_C76E1FE4703E"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.86,
   "yaw": 177.77,
   "distance": 1,
   "panorama": "this.panorama_7221E618_6247_862F_41D4_25723917470E"
  }
 ],
 "thumbnailUrl": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_t.jpg",
 "id": "panorama_72212235_6243_BE66_41BE_7E6C692FC13B",
 "label": "C1.0",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4178D21A_684E_B986_41B6_815B7CB93C39",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_49753951_6717_9E07_41D4_7E56135954A1",
  "this.overlay_4926705C_6717_8E3D_41D7_B33C493AAD99"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_t.jpg",
 "id": "panorama_7226A434_6247_9A67_41D4_916B97527B88",
 "label": "C1.5",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_405CA32E_684E_BF9E_41D6_B1133CE5BE46",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_71CB1045_61C3_BA21_41D8_68935688A236",
  "this.overlay_74A4B24A_6712_9205_41BD_563927B06027"
 ],
 "label": "002",
 "thumbnailUrl": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_t.jpg",
 "id": "panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.92,
  "pitch": -5.51,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_401C736A_684E_BF86_41CC_1FF510E1FC56",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.43,
  "pitch": -8.27,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40C7D3A7_684E_BE8E_41D9_E883E7D9CFCA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "pitch": -8.27,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_43527408_684E_B982_41CD_0D272AB607A4",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_70EBAAAD_61C1_8E61_41CC_7A0C962F5CEF",
  "this.overlay_7169B45D_61C0_FA21_41CB_4DF891CF90D1",
  "this.overlay_713B48EA_61C0_8BE2_41B8_FF078F517B49",
  "this.overlay_4801F172_61C0_7AE2_41C0_105CF16EFECF",
  "this.overlay_56D2936D_61C1_BEE1_41D7_D0C2F0583F85",
  "this.overlay_70DED418_671F_B606_41D2_14DDF6F69D94"
 ],
 "label": "C3.0",
 "thumbnailUrl": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_t.jpg",
 "id": "panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72204052_6240_7A23_41D7_294B341491D7",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE30B34_6732_B20E_41C8_3D70E67A9774",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "overlays": [
  "this.overlay_EA482128_6712_8E05_41D7_FD0B1AF2B21D",
  "this.overlay_E999C763_6712_920B_41B7_5C8CC7196DFE",
  "this.overlay_E9D8FDCC_6712_961E_41D9_A87388EF309A"
 ],
 "label": "C4.1",
 "thumbnailUrl": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_t.jpg",
 "id": "panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_E5405E5B_6732_B23A_41BA_7F19E78BA3A6",
  "this.overlay_E4B094B9_6732_9607_41C7_581E6CC83618"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_t.jpg",
 "id": "panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B",
 "label": "C4.6",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_414D51F7_684E_BA8E_41D0_D971628F8F5C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_39AF9F32_67F5_F20A_41D2_FEEBF6A2B1A8",
  "this.overlay_398C64F2_67F5_9605_41CA_DB6D90C84314",
  "this.overlay_074E353B_67F5_767B_41C4_5C111A0E2378",
  "this.overlay_06ACE0E3_67F2_8E0B_41D5_AEA358AF2FE6"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_t.jpg",
 "id": "panorama_72205072_6241_9AE2_41CA_B292A0676052",
 "label": "C3.3",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "items": [
  {
   "media": "this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A",
   "end": "this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_BDE37B33_6732_B20A_41B7_B8B9FB3A7CCB, 'showEffect', false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_BDE30B34_6732_B20E_41C8_3D70E67A9774, 'hideEffect', false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_BDE3DB34_6732_B20E_41D1_F228AA50BD55, 'showEffect', false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_BDE3BB34_6732_B20E_41B9_2BF74AEEEB9A, 'showEffect', false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_BDE26B34_6732_B20E_41D8_00089B172014, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false); this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_BDE0BB33_6732_B20A_41D4_5F8C0E04D1C9, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_BDE36B34_6732_B20E_413A_C29E3F679DA0, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_BDE32B34_6732_B20E_41CF_6E179E7A7320, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_BDE3EB34_6732_B20E_419E_CC97534514C2, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_BDE24B34_6732_B20E_41A8_9D5DB272C950, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_camera"
  },
  {
   "media": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_camera"
  },
  {
   "media": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B_camera"
  },
  {
   "media": "this.panorama_7221E618_6247_862F_41D4_25723917470E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7221E618_6247_862F_41D4_25723917470E_camera"
  },
  {
   "media": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_camera"
  },
  {
   "media": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_camera"
  },
  {
   "media": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_camera"
  },
  {
   "media": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88_camera"
  },
  {
   "media": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_camera"
  },
  {
   "media": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074_camera"
  },
  {
   "media": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_camera"
  },
  {
   "media": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_camera"
  },
  {
   "media": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_camera"
  },
  {
   "media": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_camera"
  },
  {
   "media": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_camera"
  },
  {
   "media": "this.panorama_72204052_6240_7A23_41D7_294B341491D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72204052_6240_7A23_41D7_294B341491D7_camera"
  },
  {
   "media": "this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_camera"
  },
  {
   "media": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052_camera"
  },
  {
   "media": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_camera"
  },
  {
   "media": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_camera"
  },
  {
   "media": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_camera"
  },
  {
   "media": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_camera"
  },
  {
   "media": "this.panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_camera"
  },
  {
   "media": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC_camera"
  },
  {
   "media": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE_camera"
  },
  {
   "media": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_camera"
  },
  {
   "media": "this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_camera"
  },
  {
   "media": "this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_camera"
  },
  {
   "media": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.49,
  "pitch": -3.96,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72212235_6243_BE66_41BE_7E6C692FC13B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -122.14,
  "pitch": -18.37,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_43420413_684E_B986_41D9_71C843340060",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41636226_684E_B98E_41D5_78904E777436",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE37B33_6732_B20A_41B7_B8B9FB3A7CCB",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -109.29,
  "pitch": -18.37,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_408FD3E4_684E_BE82_41B3_5DB63116936E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 101.02,
  "pitch": -11.94,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4068335E_684E_BF81_41CB_A6E9CF9F5DE9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE26B34_6732_B20E_41D8_00089B172014",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "overlays": [
  "this.overlay_5B458D0D_6733_B61F_41D7_2FB879731171",
  "this.overlay_5B6E127E_6733_92FA_41BD_5C3D22E6AC13"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_t.jpg",
 "id": "panorama_72204052_6240_7A23_41D7_294B341491D7",
 "label": "C3,1",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -10.1,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4126B287_684E_BE8E_41D2_16694CD789FF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72204052_6240_7A23_41D7_294B341491D7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_419A1709_676F_B207_41D8_E5A75CBD7A27",
  "this.overlay_41F01C38_676F_B606_417F_71EAF73C6053"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_t.jpg",
 "id": "panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118",
 "label": "C1.3",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.32,
  "pitch": -1.38,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 153.37,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4141B1EC_684E_BA81_41BC_5B8B2D53F1A6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.73,
  "pitch": -11.94,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40F9C3BE_684E_BEFE_41D1_40F2CA7E1AA0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "id": "window_4F96FC42_61C0_8A23_41CF_AD8084A85F94",
 "paddingBottom": 0,
 "width": 600,
 "verticalAlign": "middle",
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "borderSize": 0,
 "closeButtonPaddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingLeft": 5,
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "bodyPaddingTop": 5,
 "height": 800,
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "BONECAS",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "bodyPaddingLeft": 5,
 "titlePaddingTop": 5,
 "backgroundColor": [],
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_4F903C42_61C0_8A23_4163_B392CB122BB6",
  {
   "paddingBottom": 0,
   "backgroundOpacity": 1,
   "width": "100%",
   "borderRadius": 0,
   "borderSize": 0,
   "class": "WebFrame",
   "url": "https://papelariadeltars.com.br/search/?q=BONECAS",
   "minHeight": 0,
   "propagateClick": false,
   "backgroundColorRatios": [],
   "paddingRight": 0,
   "minWidth": 0,
   "shadow": false,
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "scrollEnabled": true,
   "backgroundColor": [],
   "paddingTop": 0,
   "data": {
    "name": "WebFrame89880"
   },
   "insetBorder": true,
   "height": "89%"
  }
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "shadowVerticalLength": 0,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "footerBackgroundOpacity": 1,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "bodyBorderColor": "#000000",
 "shadow": true,
 "paddingLeft": 0,
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window40632"
 },
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 0,
  "hfov": 117
 },
 "class": "PanoramaCamera",
 "id": "camera_41070254_684E_B982_41D9_CD4B320857C0"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.63,
  "pitch": -13.78,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40721346_684E_BF8E_41C4_5BA9904687EC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "overlays": [
  "this.overlay_28F12C0B_6716_B61A_41C1_D92F20DECBB7",
  "this.overlay_28D89289_6716_9207_41D7_0EA65C07A022"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_t.jpg",
 "id": "panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784",
 "label": "C2,3",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.8,
  "pitch": -11.02,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41774203_684E_B986_41D6_AB67C9256737",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.63,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41CC02C0_684E_BE82_41D8_B40B7DC4154D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 104.44,
  "pitch": -5.34,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -80.82,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41B99316_684E_BF8E_4160_12E0DF87A6E6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "id": "window_56FCC321_61C1_BE61_41C2_713BAA273B06",
 "paddingBottom": 0,
 "width": 400,
 "verticalAlign": "middle",
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "borderSize": 0,
 "closeButtonPaddingLeft": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonRollOverBackgroundOpacity": 1,
 "titlePaddingLeft": 5,
 "closeButtonPressedIconLineWidth": 1,
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "modal": true,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "bodyPaddingTop": 5,
 "height": 600,
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "CANECAS PERSONALISADAS ",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#000000",
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "bodyPaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "backgroundColor": [],
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_56F86321_61C1_BE61_41D0_213D722C0499",
  {
   "paddingBottom": 0,
   "backgroundOpacity": 1,
   "width": "100%",
   "borderRadius": 0,
   "borderSize": 0,
   "class": "WebFrame",
   "url": "https://papelariadeltars.com.br/search/?q=CANECA",
   "minHeight": 0,
   "propagateClick": false,
   "backgroundColorRatios": [],
   "paddingRight": 0,
   "minWidth": 0,
   "shadow": false,
   "paddingLeft": 0,
   "backgroundColorDirection": "vertical",
   "scrollEnabled": true,
   "backgroundColor": [],
   "paddingTop": 0,
   "data": {
    "name": "WebFrame89264"
   },
   "insetBorder": true,
   "height": "89%"
  }
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "shadowVerticalLength": 0,
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "footerBackgroundOpacity": 1,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonRollOverIconLineWidth": 1,
 "shadowHorizontalLength": 3,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "bodyBorderColor": "#000000",
 "shadow": true,
 "paddingLeft": 0,
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [
  0.96,
  1,
  1
 ],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window40632"
 },
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "overlays": [
  "this.overlay_791A439E_6240_9E22_41C9_4452E0C85D94",
  "this.overlay_7F16718A_6240_FA22_4191_9E4B1A711F8A",
  "this.overlay_7F9526BA_6241_8662_41D5_9472C525AFEC"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_t.jpg",
 "id": "panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
 "label": "C2.0",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "overlays": [
  "this.overlay_E5ADF2CC_6737_921D_41C8_AE1A751D541A",
  "this.overlay_E5E7A8A4_6737_9E0D_41B0_2308ED7D755E"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_t.jpg",
 "id": "panorama_722140F0_6240_9BFF_41AA_C210C51003FE",
 "label": "C4.5",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_313848D7_671D_9E0B_41C8_AF98EE870FCE",
  "this.overlay_31F4EE74_671D_920D_41C4_18FD4D58432F"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72204052_6240_7A23_41D7_294B341491D7",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_t.jpg",
 "id": "panorama_72189849_6241_8A2E_41D3_AC341CE2BA83",
 "label": "C3.2",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE24B34_6732_B20E_41A8_9D5DB272C950",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "overlays": [
  "this.overlay_6E751ED9_61C1_862E_41A1_244D2612FD5C",
  "this.overlay_D331E5AD_6773_961F_41C6_6C07D94D9437"
 ],
 "label": "001",
 "thumbnailUrl": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_t.jpg",
 "id": "panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 146,
 "hfov": 360,
 "hfovMin": "220%"
},
{
 "overlays": [
  "this.overlay_34E0DE87_6715_920B_41D3_2A504FD12BCE",
  "this.overlay_34A4846A_6715_7605_41A8_85718F31B7D6",
  "this.overlay_33582F88_6715_7205_41CF_6B7B43740FAF"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_t.jpg",
 "id": "panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8",
 "label": "C2.5",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.52,
  "pitch": -14.78,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7221E618_6247_862F_41D4_25723917470E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_54534324_671D_920E_41C6_8140E69141A7",
  "this.overlay_546A99C6_671D_9E0A_41A4_6153A1FE0DB3"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_t.jpg",
 "id": "panorama_7219795C_6240_8A27_41AD_730FE7E73074",
 "label": "C2,1",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.97,
  "pitch": -1.38,
  "hfov": 119
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7219795C_6240_8A27_41AD_730FE7E73074_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_15D34535_6733_B60F_41B8_B6CC3C380A7F",
  "this.overlay_15E50A97_6733_B20B_41C9_383C120783FB"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_t.jpg",
 "id": "panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7",
 "label": "C4.0",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 77.14,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4170520E_684E_B99E_41AE_A944E6553A15",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 88.16,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4151E1C9_684E_BA82_41D1_142461320D89",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "label": "C4.3",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF",
 "thumbnailUrl": "media/panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41AA3323_684E_BF86_41CE_34F0DD0DC212",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.35,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4031C384_684E_BE82_41D3_22B7658C0E91",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40225390_684E_BE82_41CE_3564E2B45187",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.78,
  "pitch": -2.36,
  "hfov": 117
 },
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetHfov": 117,
   "targetPitch": -2.36,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "duration": 3000
  }
 ],
 "id": "panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_camera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": -8.78,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE32B34_6732_B20E_41CF_6E179E7A7320",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.08,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_415A11D5_684E_BA82_41BD_2E03A1294CBC",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_E26AF10A_672E_8E05_41B5_F05EAC14415B"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_t.jpg",
 "id": "panorama_72181920_6240_8A1E_41D3_A33B07BCCF62",
 "label": "ARTS",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_722140F0_6240_9BFF_41AA_C210C51003FE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_EF754DB4_672E_960D_41D6_AFC2FED9305D"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_t.jpg",
 "id": "panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493",
 "label": "DEPOIS ESCADA",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "tags": "ondemand",
      "colCount": 10,
      "height": 5120,
      "rowCount": 10
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.35,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4040133A_684E_BF86_41D1_A36131F211E2",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.51,
  "pitch": -8.27,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41D192AA_684E_BE86_41D2_377889121ABF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40F6A3B3_684E_BE86_41AF_8E7C533D562D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_0928ADDB_6713_963A_41D6_C568FD9011BA",
  "this.overlay_0961344A_6713_B605_41D3_4A42BD5D4BB3"
 ],
 "label": "ESCADA",
 "thumbnailUrl": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_t.jpg",
 "id": "panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7226A434_6247_9A67_41D4_916B97527B88_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_4C401D32_6712_B605_41CD_5EF835D53CC0",
  "this.overlay_4C6964FA_6712_97FA_41CC_42CC19690761"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_t.jpg",
 "id": "panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
 "label": "C1.4",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 2.76,
  "hfov": 119
 },
 "class": "PanoramaCamera",
 "id": "camera_400E0378_684E_BF82_41DA_2A78A934DBE0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.1,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_410F1262_684E_B986_41D3_D63F501FA37E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 65.2,
  "pitch": -9.18,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40A363FC_684E_BE82_41D3_001DCC2733A5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_6DF73239_61C0_9E61_41D7_E171510582EC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.23,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41EA02E4_684E_BE82_41C7_E5A9CADFB726",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A",
   "end": "this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_BDE37B33_6732_B20A_41B7_B8B9FB3A7CCB, 'showEffect', false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_BDE30B34_6732_B20E_41C8_3D70E67A9774, 'hideEffect', false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_BDE3DB34_6732_B20E_41D1_F228AA50BD55, 'showEffect', false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_BDE3BB34_6732_B20E_41B9_2BF74AEEEB9A, 'showEffect', false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_BDE26B34_6732_B20E_41D8_00089B172014, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, true); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1); this.keepComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, false); this.setComponentVisibility(this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329, true, -1, this.effect_BDE0BB33_6732_B20A_41D4_5F8C0E04D1C9, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false); this.setComponentVisibility(this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB, false, -1, this.effect_BDE36B34_6732_B20E_413A_C29E3F679DA0, 'hideEffect', false); this.keepComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, false); this.setComponentVisibility(this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A, true, -1, this.effect_BDE32B34_6732_B20E_41CF_6E179E7A7320, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, false); this.setComponentVisibility(this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D, true, -1, this.effect_BDE3EB34_6732_B20E_419E_CC97534514C2, 'showEffect', false); this.keepComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false); this.setComponentVisibility(this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0, false, -1, this.effect_BDE24B34_6732_B20E_41A8_9D5DB272C950, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_camera"
  },
  {
   "media": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_camera"
  },
  {
   "media": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B_camera"
  },
  {
   "media": "this.panorama_7221E618_6247_862F_41D4_25723917470E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7221E618_6247_862F_41D4_25723917470E_camera"
  },
  {
   "media": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_camera"
  },
  {
   "media": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_camera"
  },
  {
   "media": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_camera"
  },
  {
   "media": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7226A434_6247_9A67_41D4_916B97527B88_camera"
  },
  {
   "media": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_camera"
  },
  {
   "media": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074_camera"
  },
  {
   "media": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_camera"
  },
  {
   "media": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_camera"
  },
  {
   "media": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_camera"
  },
  {
   "media": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_camera"
  },
  {
   "media": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_camera"
  },
  {
   "media": "this.panorama_72204052_6240_7A23_41D7_294B341491D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72204052_6240_7A23_41D7_294B341491D7_camera"
  },
  {
   "media": "this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_camera"
  },
  {
   "media": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052_camera"
  },
  {
   "media": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_camera"
  },
  {
   "media": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_camera"
  },
  {
   "media": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_camera"
  },
  {
   "media": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_camera"
  },
  {
   "media": "this.panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_camera"
  },
  {
   "media": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC_camera"
  },
  {
   "media": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE_camera"
  },
  {
   "media": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_camera"
  },
  {
   "media": "this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_camera"
  },
  {
   "media": "this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_camera"
  },
  {
   "media": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 88.16,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_416AD231_684E_B982_41C4_960EA8641A63",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.88,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41F012CC_684E_BE82_41CB_B7DBF7367F49",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_785E0A6E_6775_921D_41B4_87B5B3751601",
  "this.overlay_45665D33_6772_B60B_41D6_2AE77AE1769A"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 177.77,
   "yaw": -179.86,
   "distance": 1,
   "panorama": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B"
  },
  {
   "panorama": "this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7221E618_6247_862F_41D4_25723917470E_t.jpg",
 "id": "panorama_7221E618_6247_862F_41D4_25723917470E",
 "label": "C1.1",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7221E618_6247_862F_41D4_25723917470E_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.76,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_409D63D8_684E_BE82_41CB_543EAF6ACC5C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -86.64,
  "pitch": -3.56,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -10.1,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4131627B_684E_B986_41D4_4F5EC2A3E1C3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "pitch": -5.51,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_411CF249_684E_B982_4180_8D897A668E85",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.51,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4109726F_684E_B99E_41D8_A82329285779",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.2,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72209273_6240_9EE2_41B4_D67FDFB8DEFF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_284C2960_6717_7E05_41D5_BBACB8B93E4C",
  "this.overlay_2804C03E_6716_8E7A_41D7_4EAC81928DD5"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_t.jpg",
 "id": "panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5",
 "label": "C2.4",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.67,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_418232FC_684E_BE82_41CE_C6618115E637",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.08,
  "pitch": -10.1,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41E4D2D8_684E_BE82_41D4_917CEC903B66",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.16,
  "pitch": -6.43,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4129E29D_684E_BE82_41D3_2C221E7119F3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 172.65,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41C6C2B4_684E_BE82_41D4_1043DFAA08AA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.86,
  "pitch": -21.12,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40665352_684E_BF86_41C2_61B358F439D1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.84,
  "pitch": -4.59,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_4112823D_684E_B982_41D7_480A9C476CF1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.9,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41207292_684E_BE86_41C1_690FD8D65A98",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.41,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40BEE3F0_684E_BE82_41D7_579E3668CA75",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_0188C8E4_67F7_9E0D_41C1_752CD19F081B",
  "this.overlay_0059BE9A_67F7_9205_41CF_EF5248C19EC3",
  "this.overlay_C47BD2C7_6712_920B_41D2_39590C4820BB"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_t.jpg",
 "id": "panorama_7227A022_6241_BA62_41D3_0969C4F3F37D",
 "label": "C3.5",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_415471BE_684E_BAFE_41B7_754BAFDEB012",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_45A6F36D_6772_921F_41C2_32BA11D3E805",
  "this.overlay_4583071D_6772_923E_41D9_C78A5BD8587F",
  "this.overlay_BEDC428F_6712_9219_41D1_865FF5EA515A"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_t.jpg",
 "id": "panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F",
 "label": "C1.2",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.51,
  "pitch": -10.1,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_41B40307_684E_BF8E_41B2_2533C13D9590",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72205072_6241_9AE2_41CA_B292A0676052_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE0BB33_6732_B20A_41D4_5F8C0E04D1C9",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE3EB34_6732_B20E_419E_CC97534514C2",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "pitch": -3.67,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "camera_40EA73CB_684E_BE86_41C8_844B727E5292",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "overlays": [
  "this.overlay_1172669D_6732_923E_41C2_90C521EF9E06",
  "this.overlay_10BE5A5C_6732_923D_41C7_19E07CF8BF27",
  "this.overlay_1F5FB8B4_6732_FE0E_41D3_FAD10E77E71F",
  "this.overlay_AD52A940_6737_9E05_41C1_13995DEEBF84"
 ],
 "label": "C4.4",
 "thumbnailUrl": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_t.jpg",
 "id": "panorama_6DF73239_61C0_9E61_41D7_E171510582EC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "height": 2560,
      "rowCount": 5
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "120%"
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE3BB34_6732_B20E_41B9_2BF74AEEEB9A",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "overlays": [
  "this.overlay_510F51A2_671D_8E0A_41BF_BAC4473D57B6",
  "this.overlay_513596B1_671D_F206_41B4_E1DE29F4CC64",
  "this.overlay_504A8583_671D_B60B_41D2_FB712A8E0EC6",
  "this.overlay_50069BEE_671D_B21D_41C6_29D93D076668"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7219795C_6240_8A27_41AD_730FE7E73074",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_72205072_6241_9AE2_41CA_B292A0676052",
   "class": "AdjacentPanorama"
  }
 ],
 "thumbnailUrl": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_t.jpg",
 "id": "panorama_72205521_6240_9A1E_41CB_E1D927E4D41C",
 "label": "C2,2",
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "colCount": 13,
      "height": 6656,
      "rowCount": 13
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584,
      "rowCount": 7
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "easing": "cubic_in_out",
 "id": "effect_BDE3DB34_6732_B20E_41D1_F228AA50BD55",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "id": "panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 115.05,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 641,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 573,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "top": 15,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 133,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "paddingBottom": 0,
 "backgroundOpacity": 0.64,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "right": "0%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "bottom": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 118,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--MENU"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "maps": [
  {
   "hfov": 16.05,
   "yaw": 2.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D, this.camera_4040133A_684E_BF86_41D1_A36131F211E2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B0E2CA_671D_921A_41BE_60289E7A4CB0",
   "yaw": 2.11,
   "pitch": -4.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.05
  }
 ],
 "id": "overlay_05C894DA_67F2_963A_41D3_76F81AD5DFEE",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -179.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205072_6241_9AE2_41CA_B292A0676052, this.camera_405CA32E_684E_BF9E_41D6_B1133CE5BE46); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B062CA_671D_921A_41CE_6281A5847C57",
   "yaw": -179.67,
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_059B2A94_67F2_920D_41CB_71721AF8192A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.75,
   "yaw": 177.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7221E618_6247_862F_41D4_25723917470E, this.camera_41AA3323_684E_BF86_41CE_34F0DD0DC212); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B489105D_6712_8E3F_41AA_8D7BB5B98F24",
   "yaw": 177.77,
   "pitch": -12.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.75
  }
 ],
 "id": "overlay_7805CDB1_6777_9606_41A5_EB8293F5C912",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.83,
   "yaw": -84.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3, this.camera_41B99316_684E_BF8E_4160_12E0DF87A6E6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_85116906_6713_9E0D_41D8_980C779BE7CB",
   "yaw": -84.12,
   "pitch": -10.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.83
  }
 ],
 "id": "overlay_80B7056A_671E_F605_41C0_C76E1FE4703E",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.88,
   "yaw": 83.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72193C2E_6247_8A62_41CB_1BBEEC711723, this.camera_4126B287_684E_BE8E_41D2_16694CD789FF); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55C811A2_6712_8E05_41D0_FDE761686E28",
   "yaw": 83.02,
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.88
  }
 ],
 "id": "overlay_49753951_6717_9E07_41D4_7E56135954A1",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.93,
   "yaw": -4.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55C871A2_6712_8E05_41B0_F690F81D163C",
   "yaw": -4.61,
   "pitch": -8.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.93
  }
 ],
 "id": "overlay_4926705C_6717_8E3D_41D7_B33C493AAD99",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 20.6,
   "yaw": -6.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7277F3F5_61C0_BDE6_41C3_FAC3A613098B",
   "yaw": -6.98,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.6
  }
 ],
 "id": "overlay_71CB1045_61C3_BA21_41D8_68935688A236",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 17.68,
   "yaw": -178.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A, this.camera_41070254_684E_B982_41D9_CD4B320857C0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D872A63_671D_B20B_41D6_7E8AAF9F8A3F",
   "yaw": -178.47,
   "pitch": -1.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.68
  }
 ],
 "id": "overlay_74A4B24A_6712_9205_41BD_563927B06027",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 20.18,
   "yaw": -2.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72204052_6240_7A23_41D7_294B341491D7, this.camera_4031C384_684E_BE82_41D3_22B7658C0E91); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D86BA63_671D_B20B_41D6_FDFD62202D55",
   "yaw": -2.03,
   "pitch": -14.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.18
  }
 ],
 "id": "overlay_70EBAAAD_61C1_8E61_41CC_7A0C962F5CEF",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 19.4,
   "yaw": -86.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3, this.camera_4068335E_684E_BF81_41CB_A6E9CF9F5DE9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D867A63_671D_B20B_41A4_A57A9EA52DF9",
   "yaw": -86.89,
   "pitch": -14.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.4
  }
 ],
 "id": "overlay_7169B45D_61C0_FA21_41CB_4DF891CF90D1",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 21.3,
   "yaw": 87.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7, this.camera_401C736A_684E_BF86_41CC_1FF510E1FC56); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D863A63_671D_B20B_41C9_6B4916200A70",
   "yaw": 87.97,
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 21.3
  }
 ],
 "id": "overlay_713B48EA_61C0_8BE2_41B8_FF078F517B49",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 20.12,
   "yaw": -51.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4F96FC42_61C0_8A23_41CF_AD8084A85F94, 10000, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5F6D11D6_61CF_9A23_41C9_8000ECF5BB0E",
   "yaw": -51.6,
   "pitch": -5.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.12
  }
 ],
 "id": "overlay_4801F172_61C0_7AE2_41C0_105CF16EFECF",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 20.18,
   "yaw": 55.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_56FCC321_61C1_BE61_41C2_713BAA273B06, 10000, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5F6C41D7_61CF_9A21_41CD_4D8617AA4DD8",
   "yaw": 55.01,
   "pitch": -3.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.18
  }
 ],
 "id": "overlay_56D2936D_61C1_BEE1_41D7_D0C2F0583F85",
 "data": {
  "label": "Circle Point 01"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 18.82,
   "yaw": -179.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81, this.camera_400E0378_684E_BF82_41DA_2A78A934DBE0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D814A63_671D_B20B_41D5_BF2C621D7281",
   "yaw": -179.96,
   "pitch": -14.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 18.82
  }
 ],
 "id": "overlay_70DED418_671F_B606_41D2_14DDF6F69D94",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.39,
   "yaw": -22.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3, this.camera_41B40307_684E_BF8E_41B2_2533C13D9590); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BFF2CC_671D_921E_41C1_A3D9974C16C2",
   "yaw": -22.8,
   "pitch": -17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.39
  }
 ],
 "id": "overlay_EA482128_6712_8E05_41D7_FD0B1AF2B21D",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.82,
   "yaw": 81.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7, this.camera_418232FC_684E_BE82_41CE_C6618115E637); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BF02CC_671D_921E_41D2_F601C34A75DA",
   "yaw": 81.04,
   "pitch": -10.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.82
  }
 ],
 "id": "overlay_E999C763_6712_920B_41B7_5C8CC7196DFE",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -97.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BE82CC_671D_921E_41D8_2FBAACD3044A",
   "yaw": -97.77,
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.92
  }
 ],
 "id": "overlay_E9D8FDCC_6712_961E_41D9_A87388EF309A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 0.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BC32CD_671D_921E_41D4_66B93994B7B3",
   "yaw": 0.14,
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_E5405E5B_6732_B23A_41BA_7F19E78BA3A6",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.86,
   "yaw": 91.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7227A022_6241_BA62_41D3_0969C4F3F37D, this.camera_4178D21A_684E_B986_41B6_815B7CB93C39); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BBB2CE_671D_921A_41C4_C2B0C260FBF4",
   "yaw": 91.52,
   "pitch": -10.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.86
  }
 ],
 "id": "overlay_E4B094B9_6732_9607_41C7_581E6CC83618",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -6.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B262C4_671D_920E_41B8_F60BB7E51803",
   "yaw": -6.79,
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_39AF9F32_67F5_F20A_41D2_FEEBF6A2B1A8",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16,
   "yaw": -93.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C, this.camera_40BEE3F0_684E_BE82_41D7_579E3668CA75); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B192C5_671D_920E_41D5_DE31F7D35DD2",
   "yaw": -93.03,
   "pitch": -6.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16
  }
 ],
 "id": "overlay_398C64F2_67F5_9605_41CA_DB6D90C84314",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.01,
   "yaw": 87.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC, this.camera_40A363FC_684E_BE82_41D3_001DCC2733A5); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B132C5_671D_920E_41BE_C5224511B14F",
   "yaw": 87.76,
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.01
  }
 ],
 "id": "overlay_074E353B_67F5_767B_41C4_5C111A0E2378",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.95,
   "yaw": 177.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72189849_6241_8A2E_41D3_AC341CE2BA83, this.camera_43527408_684E_B982_41CD_0D272AB607A4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B172CA_671D_921A_41D9_25D24452B1A7",
   "yaw": 177.77,
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.95
  }
 ],
 "id": "overlay_06ACE0E3_67F2_8E0B_41D5_AEA358AF2FE6",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.97,
   "yaw": 5.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21F428CB_6732_9E1A_4190_CE2C594A5479",
   "yaw": 5.09,
   "pitch": -7.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.97
  }
 ],
 "id": "overlay_5B458D0D_6733_B61F_41D7_2FB879731171",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.9,
   "yaw": -177.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0, this.camera_4129E29D_684E_BE82_41D3_2C221E7119F3); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21F498CB_6732_9E1A_41D2_9E2AF4212CCA",
   "yaw": -177.49,
   "pitch": -9.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.9
  }
 ],
 "id": "overlay_5B6E127E_6733_92FA_41BD_5C3D22E6AC13",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.95,
   "yaw": 11.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CF81A1_6712_8E07_4177_4C8A76F19081",
   "yaw": 11.22,
   "pitch": -8.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.95
  }
 ],
 "id": "overlay_419A1709_676F_B207_41D8_E5A75CBD7A27",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.02,
   "yaw": -179.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F, this.camera_41636226_684E_B98E_41D5_78904E777436); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CFE1A1_6712_8E07_41B9_E6DE6FDED8A7",
   "yaw": -179.46,
   "pitch": -5.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.02
  }
 ],
 "id": "overlay_41F01C38_676F_B606_417F_71EAF73C6053",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_4F903C42_61C0_8A23_4163_B392CB122BB6",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText40633"
 },
 "height": "10%"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "height": 58,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "maps": [
  {
   "hfov": 15.95,
   "yaw": 179.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5, this.camera_414781E1_684E_BA83_41CF_823C3BCA3DC8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4AA62C1_671D_9206_41BD_ADFEA4CD2F2D",
   "yaw": 179.75,
   "pitch": -8.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.95
  }
 ],
 "id": "overlay_28F12C0B_6716_B61A_41C1_D92F20DECBB7",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.94,
   "yaw": -0.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4A982C1_671D_9206_41C2_E45B0142A5F2",
   "yaw": -0.45,
   "pitch": -8.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.94
  }
 ],
 "id": "overlay_28D89289_6716_9207_41D7_0EA65C07A022",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_56F86321_61C1_BE61_41D0_213D722C0499",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText40633"
 },
 "height": "10%"
},
{
 "maps": [
  {
   "hfov": 18.12,
   "yaw": 95.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B, this.camera_4151E1C9_684E_BA82_41D1_142461320D89); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F02706B_6737_8E1A_4181_DA52740AC131",
   "yaw": 95.78,
   "pitch": -14.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 18.12
  }
 ],
 "id": "overlay_791A439E_6240_9E22_41C9_4452E0C85D94",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 20.08,
   "yaw": -82.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0, this.camera_415A11D5_684E_BA82_41BD_2E03A1294CBC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F02306B_6737_8E1A_41B2_F42F14A206A8",
   "yaw": -82.74,
   "pitch": -11.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.08
  }
 ],
 "id": "overlay_7F16718A_6240_FA22_4191_9E4B1A711F8A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 19.25,
   "yaw": -175.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7219795C_6240_8A27_41AD_730FE7E73074, this.camera_415471BE_684E_BAFE_41B7_754BAFDEB012); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_21FDF8C8_6732_9E05_41C3_6F887C59E581",
   "yaw": -175.21,
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.25
  }
 ],
 "id": "overlay_7F9526BA_6241_8662_41D5_9472C525AFEC",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 0.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC, this.camera_41F012CC_684E_BE82_41CB_B7DBF7367F49); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BD72CD_671D_921E_41C8_9B6C91B7BD90",
   "yaw": 0.14,
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_E5ADF2CC_6737_921D_41C8_AE1A751D541A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.03,
   "yaw": -179.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B, this.camera_41CC02C0_684E_BE82_41D8_B40B7DC4154D); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BC82CD_671D_921E_41B8_9F64EF8824F6",
   "yaw": -179.47,
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.03
  }
 ],
 "id": "overlay_E5E7A8A4_6737_9E0D_41B0_2308ED7D755E",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.99,
   "yaw": -178.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72204052_6240_7A23_41D7_294B341491D7, this.camera_41E4D2D8_684E_BE82_41D4_917CEC903B66); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B352C4_671D_920E_41D5_BE1E4AE1F2CC",
   "yaw": -178.47,
   "pitch": -6.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.99
  }
 ],
 "id": "overlay_313848D7_671D_9E0B_41C8_AF98EE870FCE",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 0.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B2C2C4_671D_920E_41D4_00E3123CB183",
   "yaw": 0.14,
   "pitch": -4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_31F4EE74_671D_920D_41C4_18FD4D58432F",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.68,
   "yaw": -5.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_42F78C43_683F_A986_41C0_5CB471F6FB88",
   "yaw": -5.69,
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.68
  }
 ],
 "id": "overlay_6E751ED9_61C1_862E_41A1_244D2612FD5C",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.65,
 "yaw": -114.13,
 "pitch": 38.18,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D331E5AD_6773_961F_41C6_6C07D94D9437",
 "bleaching": 1
},
{
 "maps": [
  {
   "hfov": 15.91,
   "yaw": -87.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4A822C2_671D_920A_41C0_BAE5DFE2E742",
   "yaw": -87.09,
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.91
  }
 ],
 "id": "overlay_34E0DE87_6715_920B_41D3_2A504FD12BCE",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.92,
   "yaw": 83.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7226A434_6247_9A67_41D4_916B97527B88, this.camera_4141B1EC_684E_BA81_41BC_5B8B2D53F1A6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4A842C2_671D_920A_41B3_BEFADE8FD8F9",
   "yaw": 83.61,
   "pitch": -8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.92
  }
 ],
 "id": "overlay_34A4846A_6715_7605_41A8_85718F31B7D6",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.94,
   "yaw": -0.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B7E2C2_671D_920A_41D0_99677B4268CD",
   "yaw": -0.65,
   "pitch": -8.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.94
  }
 ],
 "id": "overlay_33582F88_6715_7205_41CF_6B7B43740FAF",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.97,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C, this.camera_41C6C2B4_684E_BE82_41D4_1043DFAA08AA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F03806B_6737_8E1A_41CA_5EA8C0442192",
   "yaw": -179.86,
   "pitch": -7.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.97
  }
 ],
 "id": "overlay_54534324_671D_920E_41C6_8140E69141A7",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.98,
   "yaw": 0.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_721B586F_6243_8AE1_41D4_E80F20B756C3, this.camera_41D192AA_684E_BE86_41D2_377889121ABF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F03106B_6737_8E1A_41D2_054FAFE09FEE",
   "yaw": 0.73,
   "pitch": -7.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.98
  }
 ],
 "id": "overlay_546A99C6_671D_9E0A_41A4_6153A1FE0DB3",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.73,
   "yaw": 91.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0, this.camera_40F6A3B3_684E_BE86_41AF_8E7C533D562D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B022CB_671D_921A_41A5_9ABCA0CAD884",
   "yaw": 91.71,
   "pitch": -12.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.73
  }
 ],
 "id": "overlay_15D34535_6733_B60F_41B8_B6CC3C380A7F",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.64,
   "yaw": -179.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC, this.camera_40C7D3A7_684E_BE8E_41D9_E883E7D9CFCA); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B042CB_671D_921A_41BE_7B388F7FDCB1",
   "yaw": -179.67,
   "pitch": -13.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.64
  }
 ],
 "id": "overlay_15E50A97_6733_B20B_41C9_383C120783FB",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.65,
   "yaw": 66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6DF73239_61C0_9E61_41D7_E171510582EC, this.camera_43420413_684E_B986_41D9_71C843340060); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BB22CE_671D_921A_41D3_9419B49149E4",
   "yaw": 66,
   "pitch": -13.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.65
  }
 ],
 "id": "overlay_E26AF10A_672E_8E05_41B5_F05EAC14415B",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 14.54,
   "yaw": -144.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3, this.camera_419ED2EF_684E_BE9E_419B_AA0DA37A9007); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BA82CE_671D_921A_41D6_0944040C9951",
   "yaw": -144.65,
   "pitch": -25.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.54
  }
 ],
 "id": "overlay_EF754DB4_672E_960D_41D6_AFC2FED9305D",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.05,
   "yaw": -5.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493, this.camera_40665352_684E_BF86_41C2_61B358F439D1); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BA32CE_671D_921A_41D0_20712CB10F01",
   "yaw": -5.4,
   "pitch": -4.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.05
  }
 ],
 "id": "overlay_0928ADDB_6713_963A_41D6_C568FD9011BA",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.61,
   "yaw": -103.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC, this.camera_40721346_684E_BF8E_41C4_5BA9904687EC); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4B9A2CF_671D_921A_41BD_55815CEF05B9",
   "yaw": -103.31,
   "pitch": -14.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.61
  }
 ],
 "id": "overlay_0961344A_6713_B605_41D3_4A42BD5D4BB3",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.08,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118, this.camera_40225390_684E_BE82_41CE_3564E2B45187); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CFD1A2_6712_8E05_41B9_18AF99AAEEC3",
   "yaw": -179.86,
   "pitch": -3.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.08
  }
 ],
 "id": "overlay_4C401D32_6712_B605_41CD_5EF835D53CC0",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.96,
   "yaw": 0.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7226A434_6247_9A67_41D4_916B97527B88, this.camera_40D5739B_684E_BE86_4197_0A6500EDD38C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55C831A2_6712_8E05_41B5_8D06909E6787",
   "yaw": 0.14,
   "pitch": -7.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.96
  }
 ],
 "id": "overlay_4C6964FA_6712_97FA_41CC_42CC19690761",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.8,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B, this.camera_41EA02E4_684E_BE82_41C7_E5A9CADFB726); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CF71A0_6712_8E05_41B1_E3BBBB1F5633",
   "yaw": -179.86,
   "pitch": -11.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.8
  }
 ],
 "id": "overlay_785E0A6E_6775_921D_41B4_87B5B3751601",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.98,
   "yaw": -1.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CF51A0_6712_8E05_41CB_314CD3827827",
   "yaw": -1.24,
   "pitch": -7.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.98
  }
 ],
 "id": "overlay_45665D33_6772_B60B_41D6_2AE77AE1769A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.09,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8, this.camera_41207292_684E_BE86_41C1_690FD8D65A98); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4A922C1_671D_9206_41C1_4A47DEF490C7",
   "yaw": -179.86,
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.09
  }
 ],
 "id": "overlay_284C2960_6717_7E05_41D5_BBACB8B93E4C",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -0.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4A952C1_671D_9206_41C1_D83A5FB01B52",
   "yaw": -0.85,
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_2804C03E_6716_8E7A_41D7_4EAC81928DD5",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.07,
   "yaw": -4.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B, this.camera_4112823D_684E_B982_41D7_480A9C476CF1); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BF82CB_671D_921A_41C4_B57BA0237FA1",
   "yaw": -4.02,
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.07
  }
 ],
 "id": "overlay_0188C8E4_67F7_9E0D_41C1_752CD19F081B",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.99,
   "yaw": 87.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC, this.camera_411CF249_684E_B982_4180_8D897A668E85); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BF32CB_671D_921A_41B9_B09A7B305BA6",
   "yaw": 87.56,
   "pitch": -6.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.99
  }
 ],
 "id": "overlay_0059BE9A_67F7_9205_41CF_EF5248C19EC3",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -179.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8, this.camera_416AD231_684E_B982_41C4_960EA8641A63); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D44C6CA9_6772_9607_41B1_8F54C3641E8E",
   "yaw": -179.68,
   "pitch": -4.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.06
  }
 ],
 "id": "overlay_C47BD2C7_6712_920B_41D2_39590C4820BB",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.65,
   "yaw": 88.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205521_6240_9A1E_41CB_E1D927E4D41C, this.camera_410F1262_684E_B986_41D3_D63F501FA37E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_67D6C950_673F_9E06_41D8_1C787F27FD8E",
   "yaw": 88.16,
   "pitch": -13.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.65
  }
 ],
 "id": "overlay_45A6F36D_6772_921F_41C2_32BA11D3E805",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.88,
   "yaw": -2.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_55CF51A1_6712_8E07_41B6_5341DB5E0209",
   "yaw": -2.03,
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.88
  }
 ],
 "id": "overlay_4583071D_6772_923E_41D9_C78A5BD8587F",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.88,
   "yaw": 178.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72212235_6243_BE66_41BE_7E6C692FC13B, this.camera_4109726F_684E_B99E_41D8_A82329285779); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8513C912_6713_9E0A_41D6_F085158F6388",
   "yaw": 178.15,
   "pitch": -9.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.88
  }
 ],
 "id": "overlay_BEDC428F_6712_9219_41D1_865FF5EA515A",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.51,
   "yaw": -107.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205072_6241_9AE2_41CA_B292A0676052, this.camera_409D63D8_684E_BE82_41CB_543EAF6ACC5C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BE32CC_671D_921E_41C4_3E53F71028F8",
   "yaw": -107.07,
   "pitch": -15.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.51
  }
 ],
 "id": "overlay_1172669D_6732_923E_41C2_90C521EF9E06",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.23,
   "yaw": -18.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_722140F0_6240_9BFF_41AA_C210C51003FE, this.camera_40EA73CB_684E_BE86_41C8_844B727E5292); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BE52CD_671D_921E_41D5_6A1567823AF9",
   "yaw": -18.85,
   "pitch": -18.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.23
  }
 ],
 "id": "overlay_10BE5A5C_6732_923D_41C7_19E07CF8BF27",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.76,
   "yaw": 158.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC, this.camera_40F9C3BE_684E_BEFE_41D1_40F2CA7E1AA0); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4BDD2CD_671D_921E_41C1_173AEC3FA821",
   "yaw": 158.38,
   "pitch": -11.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.76
  }
 ],
 "id": "overlay_1F5FB8B4_6732_FE0E_41D3_FAD10E77E71F",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.66,
   "yaw": 39.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72181920_6240_8A1E_41D3_A33B07BCCF62, this.camera_408FD3E4_684E_BE82_41B3_5DB63116936E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_67D6C95F_673F_9E3A_41D8_30B41063C51B",
   "yaw": 39.3,
   "pitch": -13.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.66
  }
 ],
 "id": "overlay_AD52A940_6737_9E05_41C1_13995DEEBF84",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.68,
   "yaw": 90.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F, this.camera_41774203_684E_B986_41D6_AB67C9256737); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F00B06B_6737_8E1A_41CF_4ABBC66AEC39",
   "yaw": 90.34,
   "pitch": -13.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.68
  }
 ],
 "id": "overlay_510F51A2_671D_8E0A_41BF_BAC4473D57B6",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 16.01,
   "yaw": -9.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F00206B_6737_8E1A_41D5_542B9E137FC8",
   "yaw": -9.16,
   "pitch": -6.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.01
  }
 ],
 "id": "overlay_513596B1_671D_F206_41B4_E1DE29F4CC64",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.89,
   "yaw": 172.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784, this.camera_414D51F7_684E_BA8E_41D0_D971628F8F5C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F01E06B_6737_8E1A_41AE_E2C514ABB8D3",
   "yaw": 172.43,
   "pitch": -9.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.89
  }
 ],
 "id": "overlay_504A8583_671D_B60B_41D2_FB712A8E0EC6",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 15.87,
   "yaw": -97.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_72205072_6241_9AE2_41CA_B292A0676052, this.camera_4170520E_684E_B99E_41AE_A944E6553A15); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F01606B_6737_8E1A_4192_2F16AEDF8784",
   "yaw": -97.77,
   "pitch": -9.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.87
  }
 ],
 "id": "overlay_50069BEE_671D_B21D_41C6_29D93D076668",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 110,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": 110,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "height": "85.959%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "text 1"
 },
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 511,
 "verticalAlign": "top",
 "left": 8,
 "borderRadius": 0,
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "text": "PAPELARIA DELTA",
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "propagateClick": true,
 "top": 5,
 "class": "Label",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "fontSize": 90,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowColor": "#000000",
 "height": 86,
 "textShadowOpacity": 1,
 "paddingTop": 0,
 "textShadowVerticalLength": 0,
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "fontFamily": "Bebas Neue Book",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 388,
 "verticalAlign": "top",
 "left": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "text": "PASSEIO VIRTUAL 360°",
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Label",
 "bottom": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "fontSize": 41,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowColor": "#000000",
 "height": 46,
 "textShadowOpacity": 1,
 "paddingTop": 0,
 "textShadowVerticalLength": 0,
 "textDecoration": "none",
 "fontWeight": "normal"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "Image",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": 53,
 "horizontalAlign": "center",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "height": 2,
 "paddingTop": 0,
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "children": [
  "this.Button_A6F47C19_6712_9607_41CC_39F42D577440",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 1199,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "height": 51,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "10%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "10%",
 "borderRadius": 0,
 "right": "10%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "10%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "10%",
 "borderRadius": 0,
 "right": "10%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "15%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "10%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "10%",
 "borderRadius": 0,
 "right": "10%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "15%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "15%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "15%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "paddingRight": 0,
 "bottom": "7%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "left": "10%",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "paddingRight": 0,
 "bottom": "5%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": true,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "left": "10%",
 "borderRadius": 0,
 "right": "10%",
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "paddingRight": 20,
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "levels": [
  {
   "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B0E2CA_671D_921A_41BE_60289E7A4CB0",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7218E861_6241_8A1E_41B4_32FA5712CEEC_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B062CA_671D_921A_41CE_6281A5847C57",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_B489105D_6712_8E3F_41AA_8D7BB5B98F24",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72212235_6243_BE66_41BE_7E6C692FC13B_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_85116906_6713_9E0D_41D8_980C779BE7CB",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55C811A2_6712_8E05_41D0_FDE761686E28",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7226A434_6247_9A67_41D4_916B97527B88_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55C871A2_6712_8E05_41B0_F690F81D163C",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7277F3F5_61C0_BDE6_41C3_FAC3A613098B",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D99C6A6_61C0_8662_41CB_4A45613FDB81_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7D872A63_671D_B20B_41D6_7E8AAF9F8A3F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7D86BA63_671D_B20B_41D6_FDFD62202D55",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7D867A63_671D_B20B_41A4_A57A9EA52DF9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7D863A63_671D_B20B_41C9_6B4916200A70",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_3_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 33,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5F6D11D6_61CF_9A23_41C9_8000ECF5BB0E",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_4_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5F6C41D7_61CF_9A21_41CD_4D8617AA4DD8",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8E78FF_61C0_8BE2_41D1_CAD8936690D0_0_HS_5_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_7D814A63_671D_B20B_41D5_BF2C621D7281",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BFF2CC_671D_921E_41C1_A3D9974C16C2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BF02CC_671D_921E_41D2_F601C34A75DA",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8F6797_61C3_8621_41C4_E8D02A045CCC_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BE82CC_671D_921E_41D8_2FBAACD3044A",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BC32CD_671D_921E_41D4_66B93994B7B3",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7218F84D_6241_8A26_41A4_A4BE2E6FB82B_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BBB2CE_671D_921A_41C4_C2B0C260FBF4",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B262C4_671D_920E_41B8_F60BB7E51803",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B192C5_671D_920E_41D5_DE31F7D35DD2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B132C5_671D_920E_41BE_C5224511B14F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205072_6241_9AE2_41CA_B292A0676052_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B172CA_671D_921A_41D9_25D24452B1A7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_21F428CB_6732_9E1A_4190_CE2C594A5479",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72204052_6240_7A23_41D7_294B341491D7_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_21F498CB_6732_9E1A_41D2_9E2AF4212CCA",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CF81A1_6712_8E07_4177_4C8A76F19081",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7220A3DB_6247_FE22_41CF_C116FDB7A118_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CFE1A1_6712_8E07_41B9_E6DE6FDED8A7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4AA62C1_671D_9206_41BD_ADFEA4CD2F2D",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72191CBD_6240_8A61_41C3_CEFF34ECC784_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4A982C1_671D_9206_41C2_E45B0142A5F2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F02706B_6737_8E1A_4181_DA52740AC131",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F02306B_6737_8E1A_41B2_F42F14A206A8",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_721B586F_6243_8AE1_41D4_E80F20B756C3_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_21FDF8C8_6732_9E05_41C3_6F887C59E581",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BD72CD_671D_921E_41C8_9B6C91B7BD90",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_722140F0_6240_9BFF_41AA_C210C51003FE_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BC82CD_671D_921E_41B8_9F64EF8824F6",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B352C4_671D_920E_41D5_BE1E4AE1F2CC",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72189849_6241_8A2E_41D3_AC341CE2BA83_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B2C2C4_671D_920E_41D4_00E3123CB183",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6CA1E9F4_61C0_8DE6_41D4_9EB8AAC7D96A_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_42F78C43_683F_A986_41C0_5CB471F6FB88",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4A822C2_671D_920A_41C0_BAE5DFE2E742",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4A842C2_671D_920A_41B3_BEFADE8FD8F9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72191C6A_6240_8AE3_41C1_204FCB70A8C8_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B7E2C2_671D_920A_41D0_99677B4268CD",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F03806B_6737_8E1A_41CA_5EA8C0442192",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7219795C_6240_8A27_41AD_730FE7E73074_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F03106B_6737_8E1A_41D2_054FAFE09FEE",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B022CB_671D_921A_41A5_9ABCA0CAD884",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7235E83E_6243_8A63_41D5_E39B4E5E11B7_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B042CB_671D_921A_41BE_7B388F7FDCB1",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72181920_6240_8A1E_41D3_A33B07BCCF62_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BB22CE_671D_921A_41D3_9419B49149E4",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8F2B81_61C0_8E1E_41D2_B5857FD52493_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BA82CE_671D_921A_41D6_0944040C9951",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BA32CE_671D_921A_41D0_20712CB10F01",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6D8A5E48_61C3_862E_41D5_20B98287B1C3_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4B9A2CF_671D_921A_41BD_55815CEF05B9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CFD1A2_6712_8E05_41B9_18AF99AAEEC3",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72193C2E_6247_8A62_41CB_1BBEEC711723_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55C831A2_6712_8E05_41B5_8D06909E6787",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CF71A0_6712_8E05_41B1_E3BBBB1F5633",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7221E618_6247_862F_41D4_25723917470E_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CF51A0_6712_8E05_41CB_314CD3827827",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4A922C1_671D_9206_41C1_4A47DEF490C7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7222D46D_6240_BAE6_41D7_24DA9FB51ED5_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4A952C1_671D_9206_41C1_D83A5FB01B52",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BF82CB_671D_921A_41C4_B57BA0237FA1",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BF32CB_671D_921A_41B9_B09A7B305BA6",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_7227A022_6241_BA62_41D3_0969C4F3F37D_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D44C6CA9_6772_9607_41B1_8F54C3641E8E",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_67D6C950_673F_9E06_41D8_1C787F27FD8E",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_55CF51A1_6712_8E07_41B6_5341DB5E0209",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72194BE5_6247_8DE1_41C5_3DBE9239667F_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_8513C912_6713_9E0A_41D6_F085158F6388",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BE32CC_671D_921E_41C4_3E53F71028F8",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BE52CD_671D_921E_41D5_6A1567823AF9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_D4BDD2CD_671D_921E_41C1_173AEC3FA821",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_6DF73239_61C0_9E61_41D7_E171510582EC_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_67D6C95F_673F_9E3A_41D8_30B41063C51B",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F00B06B_6737_8E1A_41CF_4ABBC66AEC39",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F00206B_6737_8E1A_41D5_542B9E137FC8",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F01E06B_6737_8E1A_41AE_E2C514ABB8D3",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_72205521_6240_9A1E_41CB_E1D927E4D41C_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_2F01606B_6737_8E1A_4192_2F16AEDF8784",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_A6F47C19_6712_9607_41CC_39F42D577440",
 "paddingBottom": 0,
 "iconWidth": 0,
 "backgroundOpacity": 0,
 "width": 110,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 0,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#0000FF"
 ],
 "shadow": false,
 "fontSize": 12,
 "gap": 5,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "label": "NOSSO SITE",
 "fontColor": "#FFFFFF",
 "height": 40,
 "click": "this.openLink('https://papelariadeltars.com.br/', '_blank')",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "width": 130,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0,
  0.01
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1",
  "#0033FF"
 ],
 "shadow": false,
 "fontSize": 12,
 "gap": 5,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "label": "FOTOS 360",
 "fontColor": "#FFFFFF",
 "height": 40,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "width": 90,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#0000FF"
 ],
 "shadow": false,
 "fontSize": 12,
 "gap": 5,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "label": "GOOGLE MAPS",
 "fontColor": "#FFFFFF",
 "height": 40,
 "click": "this.openLink('https://g.page/papelariadeltapel?share', '_blank')",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button location"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "50%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "50%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "header"
 }
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "paddingBottom": 70,
 "width": "100%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "borderSize": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "paddingRight": 70,
 "backgroundColorRatios": [
  0
 ],
 "itemPaddingBottom": 3,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "itemLabelFontStyle": "normal",
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "gap": 26,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "height": "100%",
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": false,
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "class": "ThumbnailGrid",
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "shadow": false,
 "paddingLeft": 70,
 "itemThumbnailOpacity": 1,
 "itemThumbnailHeight": 125,
 "backgroundColorDirection": "vertical",
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 156,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 220
},
{
 "layout": "absolute",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "15%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "minWidth": 400,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "header"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "header"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "55%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "45%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": 370,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": 0,
 "right": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minWidth": 1,
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container arrows"
 },
 "height": "100%"
},
{
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": 370,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "right": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "left": "0%",
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "WebFrame",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "insetBorder": false
},
{
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": 370,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "right": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "77.115%",
 "scrollBarWidth": 10,
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 80,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "right": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "left": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "right": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "left": "0%",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipOpacity": 1,
 "toolTipFontSize": "12px",
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "left": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "right": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "10%",
 "verticalAlign": "top",
 "right": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "class": "IconButton",
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "bottom",
 "left": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "layout": "vertical",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": 370,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "horizontalAlign": "left",
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.61vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "borderRadius": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "fontSize": "3vh",
 "gap": 5,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "class": "IconButton",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "minWidth": 70,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "height": "8%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "layout": "absolute",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "80%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container separator"
 },
 "height": "30%"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "class": "IconButton",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "minWidth": 70,
 "mode": "push",
 "shadow": false,
 "paddingLeft": 0,
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "height": "8%",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "borderRadius": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "fontSize": "3vh",
 "gap": 5,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "label": "lorem ipsum",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "width": 207,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "class": "Button",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "horizontalAlign": "center",
 "height": 59,
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "fontSize": 34,
 "gap": 5,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "visible": false,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.79vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "height": "45%"
},
{
 "layout": "horizontal",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "class": "Image",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.97vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "height": "100%"
}],
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.76,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
