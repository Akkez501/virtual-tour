(function(){
    var script = {
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3DD972AE_3348_F1F9_41C4_40FEBB5C394B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3DD972AE_3348_F1F9_41C4_40FEBB5C394B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987VideoPlayer)",
   "media": "this.video_3C70786C_2F1B_559B_41A8_7801892AD24D",
   "player": "this.viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987VideoPlayer"
  }
 ],
 "id": "playList_3DD972AE_3348_F1F9_41C4_40FEBB5C394B"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "media": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 82.3,
   "backwardYaw": -97.43,
   "distance": 1,
   "panorama": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.83,
   "backwardYaw": -9.88,
   "distance": 1,
   "panorama": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A",
 "thumbnailUrl": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_t.jpg",
 "label": "Playing area",
 "pitch": 0,
 "hfovMax": 95,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FA12BE5_2F67_AA95_41B2_DD3A71368541",
  "this.overlay_3B60275A_2F78_DBBF_41BC_FDC48FF25408",
  "this.overlay_3B661B88_2F78_EA9B_41BD_A0867CDBBFB6",
  "this.overlay_3B72D4DE_2F78_FEB7_41B0_16421F85A2F4",
  "this.overlay_3B09C840_2F78_F58B_41C1_C13944167FFC",
  "this.overlay_3B0C9C0F_2F78_ED95_41C6_9C63D1490875",
  "this.overlay_3B0652AF_2F78_DA95_41BF_116A9D5A90B2",
  "this.overlay_3B1F26C7_2F78_DA95_4194_6ABE69149C1F",
  "this.overlay_3B14FA9E_2F78_AAB4_41C4_E72CC1080B48",
  "this.overlay_3B2B1DE7_2F78_AE95_41A5_61E6C9EB815E",
  "this.overlay_3B3B47F7_2F78_BA75_41C4_A9B07DF68F30",
  "this.overlay_3B3E0B07_2F78_AB95_4142_A90E131FA6DE",
  "this.overlay_3B341E1F_2F78_ADB5_41C4_294051B0C49F",
  "this.overlay_3DF36345_2F7B_5B94_41A5_F5B1E7995F9C",
  "this.overlay_3DAD13F6_2F1B_BA77_41C4_3A6DA4A437AA"
 ]
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_214707B3_34C8_3FEE_41C9_82014BFDB4B3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_214707B3_34C8_3FEE_41C9_82014BFDB4B3, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_214707B3_34C8_3FEE_41C9_82014BFDB4B3"
},
{
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "id": "window_3B574C81_2F28_AE8C_41B1_99900B5CAFA7",
 "paddingBottom": 0,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundOpacity": 0,
 "modal": true,
 "closeButtonIconLineWidth": 2,
 "veilOpacity": 0.4,
 "layout": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "shadow": true,
 "bodyPaddingBottom": 0,
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titleFontWeight": "normal",
 "titlePaddingTop": 5,
 "class": "Window",
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconHeight": 20,
 "headerBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "bodyPaddingTop": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#B2B2B2",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBackgroundColor": [],
 "scrollBarWidth": 10,
 "minHeight": 20,
 "backgroundColorRatios": [],
 "data": {
  "name": "Window20597"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
   "media": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "Video",
 "label": "monarch cricket",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 99.76,
   "backwardYaw": -6.48,
   "distance": 1,
   "panorama": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.43,
   "backwardYaw": 82.3,
   "distance": 1,
   "panorama": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49",
 "thumbnailUrl": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_t.jpg",
 "label": "scene2 exp",
 "pitch": 0,
 "hfovMax": 114,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3F28DD97_2F69_AEB5_412A_0B8743E63184",
  "this.overlay_3FBD40D6_2F6F_B6B7_41BC_3955B3E7C0D2",
  "this.overlay_3DB7D894_2F67_768B_41C5_361E6F66EB8F",
  "this.overlay_3CD376EE_2F38_FA97_4193_3F1B475ABAB6",
  "this.overlay_3CA98CBD_2F38_EEF5_41C4_3AAF12E6C5E2",
  "this.overlay_3CAEF2DD_2F38_DAB4_41A8_8DC49623C1CF",
  "this.overlay_3CA1B6AD_2F38_DA94_41B2_C64FCE7E9395",
  "this.overlay_3CA53BED_2F38_AA95_41B7_524C98C5B894",
  "this.overlay_3CB99055_2F38_B5B5_41BC_39B143B8BC22",
  "this.overlay_3CBD95D6_2F38_BEB7_41B4_E1CE612E0E02",
  "this.overlay_3CB0797D_2F38_B675_41B9_FF1A2E6C464B",
  "this.overlay_3CB4F185_2F39_5695_419C_504AF2F4B98E",
  "this.overlay_3C80C116_2F39_77B7_4153_C7BE6656E992",
  "this.overlay_22B09037_2FF4_7159_41B8_2DAC26E61028"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "yaw": 1.42,
  "pitch": 2.03
 },
 "id": "panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "yaw": -97.7,
  "pitch": 0
 },
 "id": "camera_2189A899_34C8_31DA_41B6_6A767AE1904E",
 "manualRotationSpeed": 1465,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "yaw": 82.57,
  "pitch": 0
 },
 "id": "camera_2168C80C_34C8_30B9_41C2_165B9477F9D9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 73,
  "class": "PanoramaCameraPosition",
  "yaw": 6.45,
  "pitch": 0
 },
 "id": "camera_21A8492B_34C8_30FF_4189_10359CEF521D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Video",
 "label": "NEW YEAR , NEW PLACE",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_3C70786C_2F1B_559B_41A8_7801892AD24D_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_3C70786C_2F1B_559B_41A8_7801892AD24D",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_3C70786C_2F1B_559B_41A8_7801892AD24D.mp4"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_214777B9_34C8_3FDB_41BC_1BC7302BC53E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_214777B9_34C8_3FDB_41BC_1BC7302BC53E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_30C6ED33_2F1B_AF8D_41B9_A5A6FF8A6A18",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_214777B9_34C8_3FDB_41BC_1BC7302BC53E"
},
{
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "bodyPaddingRight": 0,
 "id": "window_3B546ED8_2F29_EABB_41C0_F931515750C0",
 "paddingBottom": 0,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 20,
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundOpacity": 0,
 "modal": true,
 "closeButtonIconLineWidth": 2,
 "veilOpacity": 0.4,
 "layout": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "height": 600,
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "",
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "shadow": true,
 "bodyPaddingBottom": 0,
 "backgroundOpacity": 1,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titleFontWeight": "normal",
 "titlePaddingTop": 5,
 "class": "Window",
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 0,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconHeight": 20,
 "headerBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "bodyPaddingTop": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#B2B2B2",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "borderRadius": 5,
 "gap": 10,
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverBackgroundColor": [],
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPressedBackgroundColor": [],
 "scrollBarWidth": 10,
 "minHeight": 20,
 "backgroundColorRatios": [],
 "data": {
  "name": "Window19881"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.48,
   "backwardYaw": 99.76,
   "distance": 1,
   "panorama": "this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.55,
   "backwardYaw": 33.32,
   "distance": 1,
   "panorama": "this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA",
 "thumbnailUrl": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_t.jpg",
 "label": "scene3 exp",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FB91ED8_2F69_6ABB_41C2_6AF8B1BC0C31",
  "this.overlay_3E61B1B2_2F68_F68F_41C3_EDB3FF0832F8",
  "this.overlay_3CA8C390_2F38_FA8B_41A4_574EB9295E2F",
  "this.overlay_3CAC484D_2F38_F595_4185_3B8DE39C7B1A",
  "this.overlay_3CA04D35_2F38_EFF5_41BA_138FD4CD3E24",
  "this.overlay_3CA6A3FD_2F38_DA70_41B3_FEF310CA6C09",
  "this.overlay_3CBAA974_2F38_D674_41B0_A1A422CC6A42",
  "this.overlay_3CBE6E55_2F38_ADB5_4183_01FCCFAD98FC",
  "this.overlay_3CB2F24A_2F38_B59F_41C6_B1D9C0A94887",
  "this.overlay_3CB7965D_2F38_BDB5_41AB_8A1AD1D14DDA",
  "this.overlay_3C8B5BD4_2F38_AA8B_41B4_1DBAAB8296AA",
  "this.overlay_3C82C384_2F3B_5A8B_41A7_ED31FC81FCF3",
  "this.overlay_3C86E86D_2F3B_5595_41A3_DD37C6C30E61",
  "this.overlay_3C99D18C_2F3B_769B_41A6_D5FFC551567C",
  "this.overlay_3C9277CC_2F3B_7A9B_41C0_45475DDA64B8",
  "this.overlay_237AA7D6_3358_1FA9_4196_C64F536E2C60"
 ]
},
{
 "class": "Video",
 "label": "monarch cricket",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_30C6ED33_2F1B_AF8D_41B9_A5A6FF8A6A18_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_30C6ED33_2F1B_AF8D_41B9_A5A6FF8A6A18",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_30C6ED33_2F1B_AF8D_41B9_A5A6FF8A6A18.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "yaw": -10.17,
  "pitch": 0
 },
 "id": "camera_21BBA95A_34C8_3359_419B_2BEAE8411255",
 "manualRotationSpeed": 1465,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3DDDE2B0_3348_F1E9_41B2_A481FDF15D24, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3DDDE2B0_3348_F1E9_41B2_A481FDF15D24, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8VideoPlayer)",
   "media": "this.video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4",
   "player": "this.viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8VideoPlayer"
  }
 ],
 "id": "playList_3DDDE2B0_3348_F1E9_41B2_A481FDF15D24"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "yaw": -80.24,
  "pitch": 0
 },
 "id": "camera_218758CA_34C8_31BE_41C1_A705CEC788F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 84,
  "class": "PanoramaCameraPosition",
  "yaw": 19.62,
  "pitch": 1.56
 },
 "id": "panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 73,
  "class": "PanoramaCameraPosition",
  "yaw": 3.61,
  "pitch": -5.91
 },
 "id": "panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_214727B9_34C8_3FDB_414E_C42CFAC21908, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_214727B9_34C8_3FDB_414E_C42CFAC21908, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_3C70786C_2F1B_559B_41A8_7801892AD24D",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_214727B9_34C8_3FDB_414E_C42CFAC21908"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 86,
  "class": "PanoramaCameraPosition",
  "yaw": 3.12,
  "pitch": 4.11
 },
 "id": "panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_camera",
 "manualRotationSpeed": 1465,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 33.32,
   "backwardYaw": -173.55,
   "distance": 1,
   "panorama": "this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.88,
   "backwardYaw": 169.83,
   "distance": 1,
   "panorama": "this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4",
 "thumbnailUrl": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_t.jpg",
 "label": "scene4 exp",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3E57D5AE_2F68_BE94_41B2_C81CF092444F",
  "this.overlay_3E9808AF_2F68_B695_41BF_128FDB38B50A",
  "this.overlay_3CD7A18D_2F39_F695_41BA_D88457974634",
  "this.overlay_3CABB595_2F39_FEB5_41B9_BA11D6A483C7",
  "this.overlay_3CACC8ED_2F39_F695_41B6_9C8EBAE8A257",
  "this.overlay_3CA0CDE3_2F39_EE8D_41A7_337C6BA3AF5D",
  "this.overlay_3CA591AD_2F39_D695_41A5_A9F74617395D",
  "this.overlay_3CB876B5_2F39_DAF5_41C6_797846B4C308",
  "this.overlay_3CBDFAC5_2F39_AA95_41A4_E86A7CF61545",
  "this.overlay_3CB321FE_2F39_B677_419E_4189164872F3",
  "this.overlay_3CB6B92E_2F39_B797_41B5_D8D4BCBE53EB",
  "this.overlay_3C8F726F_2F39_5595_41B3_0BD70C48B66F",
  "this.overlay_3C82377D_2F39_5A75_41B3_6CFAEBA167A1",
  "this.overlay_3C9B0005_2F39_7595_41AC_B1975EAC8646",
  "this.overlay_3C93084D_2F39_7595_41B6_03D0607CB7AA",
  "this.overlay_3B68CF9E_2F39_6AB7_41BA_A3779FC8FE08",
  "this.overlay_3C2CE485_2F39_5E95_41B1_15764FF74A6B",
  "this.overlay_3C2E178D_2F39_5A95_41B8_26E00988190E",
  "this.overlay_3C231B0D_2F38_AB95_41C5_19879914B2BF",
  "this.overlay_3C39C2F5_2F38_BA75_41C5_61F358B2D8AB",
  "this.overlay_3C3D489D_2F38_B6B5_41C5_681C3A26B5ED",
  "this.overlay_3C33A08D_2F38_D695_41BC_8EF2569B0E17"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 84,
  "class": "PanoramaCameraPosition",
  "yaw": 170.12,
  "pitch": 0
 },
 "id": "camera_2160383B_34C8_30DF_41B3_30FADF91B5BF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 73,
  "class": "PanoramaCameraPosition",
  "yaw": 173.52,
  "pitch": 0
 },
 "id": "camera_217DE86A_34C8_3179_418C_43559C891DF7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 84,
  "class": "PanoramaCameraPosition",
  "yaw": -146.68,
  "pitch": 0
 },
 "id": "camera_219298FA_34C8_315E_41AC_53510911F3E2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "left": 0,
 "paddingLeft": 0,
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "minWidth": 100,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 641,
 "horizontalAlign": "left",
 "top": "0%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": 34,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Container3104"
 },
 "children": [
  "this.Container_3F41A611_2FFC_F159_41A9_31CC4F38B4A6"
 ],
 "id": "Container_3F7DEE1B_2FFC_F149_41C7_6CB60C092006",
 "scrollBarOpacity": 0.5,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.49,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "height": "100%",
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  0.17,
  0.8,
  1
 ],
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987",
 "id": "viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987VideoPlayer",
 "displayPlaybackBar": true
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49, this.camera_2168C80C_34C8_30B9_41C2_165B9477F9D9); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.05,
   "image": "this.AnimatedImageResource_39F30F49_2F27_AB9D_419B_83996CBD05BB",
   "pitch": -21.17,
   "yaw": 82.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FA12BE5_2F67_AA95_41B2_DD3A71368541",
 "maps": [
  {
   "hfov": 15.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 57.34,
 "id": "overlay_3B60275A_2F78_DBBF_41BC_FDC48FF25408",
 "yaw": -0.88,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 34.48,
 "id": "overlay_3B661B88_2F78_EA9B_41BD_A0867CDBBFB6",
 "yaw": -0.63,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 43.27,
 "id": "overlay_3B72D4DE_2F78_FEB7_41B0_16421F85A2F4",
 "yaw": -53.13,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 49.55,
 "id": "overlay_3B09C840_2F78_F58B_41C1_C13944167FFC",
 "yaw": -102.12,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 37.49,
 "id": "overlay_3B0C9C0F_2F78_ED95_41C6_9C63D1490875",
 "yaw": -139.3,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 26.19,
 "id": "overlay_3B0652AF_2F78_DA95_41BF_116A9D5A90B2",
 "yaw": 45.09,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 33.98,
 "id": "overlay_3B1F26C7_2F78_DA95_4194_6ABE69149C1F",
 "yaw": 97.1,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 51.31,
 "id": "overlay_3B14FA9E_2F78_AAB4_41C4_E72CC1080B48",
 "yaw": 104.13,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 44.53,
 "id": "overlay_3B2B1DE7_2F78_AE95_41A5_61E6C9EB815E",
 "yaw": 50.37,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 29.2,
 "id": "overlay_3B3B47F7_2F78_BA75_41C4_A9B07DF68F30",
 "yaw": -179.5,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 45.28,
 "id": "overlay_3B3E0B07_2F78_AB95_4142_A90E131FA6DE",
 "yaw": -178.74,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 80.7,
 "id": "overlay_3B341E1F_2F78_ADB5_41C4_294051B0C49F",
 "yaw": -170.96,
 "bleachingDistance": 0.21
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4, this.camera_2160383B_34C8_30DF_41B3_30FADF91B5BF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.98,
   "image": "this.AnimatedImageResource_39F4FF4A_2F27_AB9F_41C6_6F7DA4386052",
   "pitch": -27.87,
   "yaw": 169.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DF36345_2F7B_5B94_41A5_F5B1E7995F9C",
 "maps": [
  {
   "hfov": 29.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -27.87
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_3B546ED8_2F29_EABB_41C0_F931515750C0, this.video_3C70786C_2F1B_559B_41A8_7801892AD24D, this.playList_3DD972AE_3348_F1F9_41C4_40FEBB5C394B, '90%', '90%', false, true)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 152,
      "height": 168
     }
    ]
   },
   "pitch": 8.34,
   "yaw": -1.8
  }
 ],
 "id": "overlay_3DAD13F6_2F1B_BA77_41C4_3A6DA4A437AA",
 "maps": [
  {
   "hfov": 3.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 8.34
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "minWidth": 100,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea6908"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A, this.camera_2189A899_34C8_31DA_41B6_6A767AE1904E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03b Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.82,
   "image": "this.AnimatedImageResource_3E9E5791_2F7B_BA8D_41B7_F6946045F208",
   "pitch": -15.51,
   "yaw": -97.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F28DD97_2F69_AEB5_412A_0B8743E63184",
 "maps": [
  {
   "hfov": 15.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA, this.camera_217DE86A_34C8_3179_418C_43559C891DF7); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.21,
   "image": "this.AnimatedImageResource_3E9FC793_2F7B_BA8D_41BB_348DB62858A4",
   "pitch": -21.29,
   "yaw": 99.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FBD40D6_2F6F_B6B7_41BC_3955B3E7C0D2",
 "maps": [
  {
   "hfov": 16.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.29
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_3B574C81_2F28_AE8C_41B1_99900B5CAFA7, this.video_3C18A9BC_2F6B_56FB_41C2_29627E27E4C4, this.playList_3DDDE2B0_3348_F1E9_41B2_A481FDF15D24, '90%', '90%', false, true)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 343,
      "height": 343
     }
    ]
   },
   "pitch": 29.46,
   "yaw": -1.38
  }
 ],
 "id": "overlay_3DB7D894_2F67_768B_41C5_361E6F66EB8F",
 "maps": [
  {
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 29.46
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 73.67,
 "id": "overlay_3CD376EE_2F38_FA97_4193_3F1B475ABAB6",
 "yaw": 95.34,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 39,
 "id": "overlay_3CA98CBD_2F38_EEF5_41C4_3AAF12E6C5E2",
 "yaw": -90.82,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 36.24,
 "id": "overlay_3CAEF2DD_2F38_DAB4_41A8_8DC49623C1CF",
 "yaw": -116.69,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 51.06,
 "id": "overlay_3CA1B6AD_2F38_DA94_41B2_C64FCE7E9395",
 "yaw": -142.82,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 56.84,
 "id": "overlay_3CA53BED_2F38_AA95_41B7_524C98C5B894",
 "yaw": 154.63,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 40.01,
 "id": "overlay_3CB99055_2F38_B5B5_41BC_39B143B8BC22",
 "yaw": 120.46,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 27.95,
 "id": "overlay_3CBD95D6_2F38_BEB7_41B4_E1CE612E0E02",
 "yaw": 109.16,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 30.96,
 "id": "overlay_3CB0797D_2F38_B675_41B9_FF1A2E6C464B",
 "yaw": 91.32,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 20.16,
 "id": "overlay_3CB4F185_2F39_5695_419C_504AF2F4B98E",
 "yaw": 90.82,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 35.48,
 "id": "overlay_3C80C116_2F39_77B7_4153_C7BE6656E992",
 "yaw": 168.44,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_3F7DEE1B_2FFC_F149_41C7_6CB60C092006, true, 0, null, null, false)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 6.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 315,
      "height": 674
     }
    ]
   },
   "pitch": -25.99,
   "yaw": -11.86
  }
 ],
 "id": "overlay_22B09037_2FF4_7159_41B8_2DAC26E61028",
 "maps": [
  {
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 199
     }
    ]
   },
   "pitch": -25.99
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uid214EE7A2_34C8_3FE9_41A2_C80C9A872987",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "paddingLeft": 0,
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "minWidth": 100,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea6907"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49, this.camera_218758CA_34C8_31BE_41C1_A705CEC788F8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Arrow 04a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_3E9F8794_2F7B_BA8B_41C2_6D83EC07210B",
   "pitch": -15.51,
   "yaw": -6.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FB91ED8_2F69_6ABB_41C2_6AF8B1BC0C31",
 "maps": [
  {
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4, this.camera_219298FA_34C8_315E_41AC_53510911F3E2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03b Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.75,
   "image": "this.AnimatedImageResource_3E9C5794_2F7B_BA8B_41C0_CCF1992BE626",
   "pitch": -26.06,
   "yaw": -173.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3E61B1B2_2F68_F68F_41C3_EDB3FF0832F8",
 "maps": [
  {
   "hfov": 14.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 52.82,
 "id": "overlay_3CA8C390_2F38_FA8B_41A4_574EB9295E2F",
 "yaw": -2.39,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 70.66,
 "id": "overlay_3CAC484D_2F38_F595_4185_3B8DE39C7B1A",
 "yaw": 172.71,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 30.21,
 "id": "overlay_3CA04D35_2F38_EFF5_41BA_138FD4CD3E24",
 "yaw": 176.99,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 24.93,
 "id": "overlay_3CA6A3FD_2F38_DA70_41B3_FEF310CA6C09",
 "yaw": -2.89,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 15.39,
 "id": "overlay_3CBAA974_2F38_D674_41B0_A1A422CC6A42",
 "yaw": -2.89,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 51.31,
 "id": "overlay_3CBE6E55_2F38_ADB5_4183_01FCCFAD98FC",
 "yaw": -47.36,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 58.35,
 "id": "overlay_3CB2F24A_2F38_B59F_41C6_B1D9C0A94887",
 "yaw": -110.66,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 42.02,
 "id": "overlay_3CB7965D_2F38_BDB5_41AB_8A1AD1D14DDA",
 "yaw": -150.86,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 28.95,
 "id": "overlay_3C8B5BD4_2F38_AA8B_41B4_1DBAAB8296AA",
 "yaw": -164.68,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 35.99,
 "id": "overlay_3C82C384_2F3B_5A8B_41A7_ED31FC81FCF3",
 "yaw": -100.61,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 33.73,
 "id": "overlay_3C86E86D_2F3B_5595_41A3_DD37C6C30E61",
 "yaw": -69.46,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 34.48,
 "id": "overlay_3C99D18C_2F3B_769B_41A6_D5FFC551567C",
 "yaw": -25.5,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 24.43,
 "id": "overlay_3C9277CC_2F3B_7A9B_41C0_45475DDA64B8",
 "yaw": -18.21,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 680,
      "height": 537
     }
    ]
   },
   "pitch": -9.61,
   "yaw": 57.85
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_237AA7D6_3358_1FA9_4196_C64F536E2C60",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 14.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -9.61
  }
 ]
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8",
 "id": "viewer_uid214D17A9_34C8_3FFB_41C3_6246CD311EE8VideoPlayer",
 "displayPlaybackBar": true
},
{
 "paddingBottom": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A, this.camera_21BBA95A_34C8_3359_419B_2BEAE8411255); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.65,
   "image": "this.AnimatedImageResource_3E9C3794_2F7B_BA8B_41AF_9A0ABEF2C829",
   "pitch": -15.76,
   "yaw": -9.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E57D5AE_2F68_BE94_41B2_C81CF092444F",
 "maps": [
  {
   "hfov": 27.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA, this.camera_21A8492B_34C8_30FF_4189_10359CEF521D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.66,
   "image": "this.AnimatedImageResource_3E9C1795_2F7B_BAB5_41B5_D53F6D2A315C",
   "pitch": -15.51,
   "yaw": 33.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3E9808AF_2F68_B695_41BF_128FDB38B50A",
 "maps": [
  {
   "hfov": 12.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 51.56,
 "id": "overlay_3CD7A18D_2F39_F695_41BA_D88457974634",
 "yaw": -6.15,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 79.7,
 "id": "overlay_3CABB595_2F39_FEB5_41B9_BA11D6A483C7",
 "yaw": 91.82,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 38.25,
 "id": "overlay_3CACC8ED_2F39_F695_41B6_9C8EBAE8A257",
 "yaw": 36.05,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 31.47,
 "id": "overlay_3CA0CDE3_2F39_EE8D_41A7_337C6BA3AF5D",
 "yaw": -11.18,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 44.28,
 "id": "overlay_3CA591AD_2F39_D695_41A5_A9F74617395D",
 "yaw": -56.65,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 57.09,
 "id": "overlay_3CB876B5_2F39_DAF5_41C6_797846B4C308",
 "yaw": -112.17,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 41.77,
 "id": "overlay_3CBDFAC5_2F39_AA95_41A4_E86A7CF61545",
 "yaw": -160.15,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 30.21,
 "id": "overlay_3CB321FE_2F39_B677_419E_4189164872F3",
 "yaw": -39.82,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 21.17,
 "id": "overlay_3CB6B92E_2F39_B797_41B5_D8D4BCBE53EB",
 "yaw": -32.53,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 21.92,
 "id": "overlay_3C8F726F_2F39_5595_41B3_0BD70C48B66F",
 "yaw": -13.19,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 27.7,
 "id": "overlay_3C82377D_2F39_5A75_41B3_6CFAEBA167A1",
 "yaw": 15.95,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 20.91,
 "id": "overlay_3C9B0005_2F39_7595_41AC_B1975EAC8646",
 "yaw": 5.65,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 45.28,
 "id": "overlay_3C93084D_2F39_7595_41B6_03D0607CB7AA",
 "yaw": 75.74,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 36.24,
 "id": "overlay_3B68CF9E_2F39_6AB7_41BA_A3779FC8FE08",
 "yaw": 114.93,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 33.98,
 "id": "overlay_3C2CE485_2F39_5E95_41B1_15764FF74A6B",
 "yaw": 139.8,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 47.54,
 "id": "overlay_3C2E178D_2F39_5A95_41B8_26E00988190E",
 "yaw": 151.86,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 35.23,
 "id": "overlay_3C231B0D_2F38_AB95_41C5_19879914B2BF",
 "yaw": 173.72,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 28.45,
 "id": "overlay_3C39C2F5_2F38_BA75_41C5_61F358B2D8AB",
 "yaw": 101.62,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 29.96,
 "id": "overlay_3C3D489D_2F38_B6B5_41C5_681C3A26B5ED",
 "yaw": 53.89,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 22.67,
 "id": "overlay_3C33A08D_2F38_D695_41BC_8EF2569B0E17",
 "yaw": 26.25,
 "bleachingDistance": 0.4
},
{
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingBottom": 40,
 "propagateClick": true,
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_3352F769_2F7B_5B9D_41B9_EC0C32FB7D68"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 40,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 40,
 "height": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 110,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
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
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "91.304%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingRight": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 447,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 78,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 8,
 "top": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 0.62,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 442,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": 45,
 "contentOpaque": false,
 "height": 9,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadowSpread": 1,
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 0.62,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 430,
 "paddingLeft": 0,
 "borderSize": 0,
 "minWidth": 1,
 "text": "Monarch Cricket",
 "fontColor": "#000000",
 "height": 86,
 "horizontalAlign": "left",
 "top": 0,
 "fontSize": 61,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingRight": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "right": "15%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "right": "15%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "vertical",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "right": "15%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 20,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "Container3675"
 },
 "children": [
  "this.WebFrame_3EA1A6BE_2FFC_714B_41B5_F625B6522F98",
  "this.IconButton_21B5F155_300C_53D9_41C5_1EB2968ECC33"
 ],
 "id": "Container_3F41A611_2FFC_F159_41A9_31CC4F38B4A6",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "58.806%",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "right": "11.28%",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "15.99%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "height": "67.26%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_39F30F49_2F27_AB9D_419B_83996CBD05BB",
 "levels": [
  {
   "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 780
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_39F4FF4A_2F27_AB9F_41C6_6F7DA4386052",
 "levels": [
  {
   "url": "media/panorama_3EFD4B2B_2EDB_EE4B_41BE_35E0F287C32A_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 840
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9E5791_2F7B_BA8D_41B7_F6946045F208",
 "levels": [
  {
   "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 840
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9FC793_2F7B_BA8D_41BB_348DB62858A4",
 "levels": [
  {
   "url": "media/panorama_3ED2A0A2_2EDA_DA74_419A_8D7200049D49_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 780
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9F8794_2F7B_BA8B_41C2_6D83EC07210B",
 "levels": [
  {
   "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1050
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9C5794_2F7B_BA8B_41C0_CCF1992BE626",
 "levels": [
  {
   "url": "media/panorama_3EF14470_2EDB_5AD5_41B8_DEA4A139DBDA_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 840
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9C3794_2F7B_BA8B_41AF_9A0ABEF2C829",
 "levels": [
  {
   "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3E9C1795_2F7B_BAB5_41B5_D53F6D2A315C",
 "levels": [
  {
   "url": "media/panorama_3EE716F6_2EDB_A7DC_41AB_81095DB453F4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1050
  }
 ]
},
{
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Container black"
 },
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "left": 10,
 "width": 50,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 80,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 80,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "25%",
 "contentOpaque": false,
 "top": "25%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "layout": "vertical",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "26.316%",
 "verticalAlign": "bottom",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "left": "0%",
 "id": "Image_3352F769_2F7B_5B9D_41B9_EC0C32FB7D68",
 "paddingLeft": 0,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "url": "skin/Image_3352F769_2F7B_5B9D_41B9_EC0C32FB7D68.png",
 "top": "0%",
 "horizontalAlign": "center",
 "height": "31.802%",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 500,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 500,
 "paddingRight": 0,
 "scaleMode": "fit_outside",
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Image38574"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 60,
 "mode": "toggle",
 "horizontalAlign": "center",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.shareTwitter(window.location.href)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.shareFacebook(window.location.href)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_33127538_2F69_FFFB_41BB_60109BA65A32"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "85%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "height": "100%",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll"
},
{
 "paddingBottom": 20,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 50,
 "width": "50%",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarOpacity": 0.5,
 "left": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "minWidth": 1,
 "width": "100%",
 "itemLabelHorizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "itemLabelFontStyle": "italic",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "height": "92%",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemOpacity": 1,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "class": "ThumbnailGrid",
 "verticalAlign": "middle",
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "paddingRight": 70,
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "minHeight": 1,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "left": 0,
 "paddingLeft": 0,
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "minWidth": 1,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "99.975%",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "55%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "height": "100%",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll"
},
{
 "paddingBottom": 20,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 60,
 "width": "45%",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingRight": 60,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "25%",
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "id": "WebFrame_3EA1A6BE_2FFC_714B_41B5_F625B6522F98",
 "width": "100%",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "scrollEnabled": true,
 "url": "http://sketchfab.com/models/9ec4057656674907b3cccbfc9f625360/embed",
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame4190"
 }
},
{
 "paddingBottom": 0,
 "width": 81.05,
 "id": "IconButton_21B5F155_300C_53D9_41C5_1EB2968ECC33",
 "transparencyActive": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_21B5F155_300C_53D9_41C5_1EB2968ECC33.png",
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "height": 47.05,
 "mode": "push",
 "horizontalAlign": "center",
 "top": "1.63%",
 "click": "this.setComponentVisibility(this.Container_3F7DEE1B_2FFC_F149_41C7_6CB60C092006, false, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 800,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 800,
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "IconButton4972"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "data": {
  "name": "Button Tour Info"
 },
 "fontSize": 18,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "mode": "push",
 "horizontalAlign": "left",
 "label": "Tour Information",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "paddingRight": 0,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "data": {
  "name": "Button Panorama List"
 },
 "fontSize": 18,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "mode": "push",
 "horizontalAlign": "left",
 "label": "Panorama List",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "textDecoration": "none",
 "paddingRight": 0,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "data": {
  "name": "Button Floorplan"
 },
 "fontSize": 18,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "mode": "push",
 "horizontalAlign": "left",
 "label": "Floorplan",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "paddingRight": 0,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "paddingBottom": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontSize": 18,
 "paddingLeft": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "height": 50,
 "mode": "push",
 "horizontalAlign": "left",
 "label": "Photoalbum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "verticalAlign": "middle",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "paddingRight": 0,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "data": {
  "name": "line"
 },
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "data": {
  "name": "blue line"
 },
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "visible"
},
{
 "paddingBottom": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 78,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Akshay XYZ</I></SPAN></SPAN></DIV></div>",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "transparencyActive": true,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "borderSize": 0,
 "minWidth": 1,
 "height": 42,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 80,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 80,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingRight": 0,
 "cursor": "hand",
 "minHeight": 1,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "paddingBottom": 0,
 "width": "99.855%",
 "id": "Image_33127538_2F69_FFFB_41BB_60109BA65A32",
 "left": "0%",
 "paddingLeft": 0,
 "borderSize": 0,
 "minWidth": 1,
 "url": "skin/Image_33127538_2F69_FFFB_41BB_60109BA65A32.jpg",
 "top": "0.14%",
 "horizontalAlign": "center",
 "height": "99.228%",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 1280,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 720,
 "paddingRight": 0,
 "scaleMode": "fit_outside",
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "Image39154"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": 50,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "paddingBottom": 10,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 300,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 30,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "100%",
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "verticalAlign": "top",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "100%",
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "verticalAlign": "top",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "left": "0%",
 "paddingLeft": 0,
 "width": "100%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "minWidth": 1,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "14.22%",
 "borderSize": 0,
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "14.22%",
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "transparencyActive": false,
 "paddingLeft": 0,
 "width": "10%",
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "top": 20,
 "mode": "push",
 "horizontalAlign": "right",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "10%",
 "verticalAlign": "top",
 "shadow": false,
 "maxWidth": 60,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "minHeight": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "height": "5%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll"
},
{
 "paddingBottom": 30,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "88.449%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.74vh;font-family:'Oswald';\"><B><I>ABOUT US..</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Monarch Cricket is Ottawa\u2019s first full fledged cricket store &amp; Indoor Cricket Facility. We are supplying top quality cricket gear to local and North American Cricket Players and Fans. With one store located in Ottawa and an online store for North America, we have your cricketing needs covered.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Cricket is one of the fastest growing sports in North America and Monarch Cricket is here to collaboratively fulfill the needs of all cricket players and clubs. Both in-store and online we have our experts on hand to help with any cricketing query you may have. We stock a full range of cricket equipment for cricketers of all levels including bats, pads, gloves, bags, team-wear, shoes and much more.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#00a6e3;font-size:2.54vh;font-family:'Oswald';\"><B><I>3 REASONS TO SHOP WITH US</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;\"><B>1) We know what we are talking about</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;\"><B>2) We have a decent product range </B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;\"><B>3) One stop cricket shopping</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;\"><B>We\u2019re located in the heart of Nepean ( Nepean Cross Road Centre), easily accessible from Kanata, Stittsville, Barhaven, Nepean and South East Ottawa.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Our address is Unit 4 , 565 W Hunt Club Road, Ottawa, ON K2G 5W5</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "- content"
 },
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "height": "75%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll"
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_3F7DEE1B_2FFC_F149_41C7_6CB60C092006"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
