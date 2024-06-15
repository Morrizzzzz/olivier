var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_LuchtfotoActueelOrtho25cmRGB_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_LuchtfotoActueelOrtho25cmRGB_1 = projection_LuchtfotoActueelOrtho25cmRGB_1.getExtent();
    var size_LuchtfotoActueelOrtho25cmRGB_1 = ol.extent.getWidth(projectionExtent_LuchtfotoActueelOrtho25cmRGB_1) / 256;
    var resolutions_LuchtfotoActueelOrtho25cmRGB_1 = new Array(14);
    var matrixIds_LuchtfotoActueelOrtho25cmRGB_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_LuchtfotoActueelOrtho25cmRGB_1[z] = size_LuchtfotoActueelOrtho25cmRGB_1 / Math.pow(2, z);
        matrixIds_LuchtfotoActueelOrtho25cmRGB_1[z] = z;
    }
    var lyr_LuchtfotoActueelOrtho25cmRGB_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://service.pdok.nl//hwh/luchtfotorgb/wmts/v1_0?request=GetCapabilities&service=WMTS",
    attributions: ' ',
                                "layer": "Actueel_ortho25",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_LuchtfotoActueelOrtho25cmRGB_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_LuchtfotoActueelOrtho25cmRGB_1),
                resolutions: resolutions_LuchtfotoActueelOrtho25cmRGB_1,
                matrixIds: matrixIds_LuchtfotoActueelOrtho25cmRGB_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Luchtfoto Actueel Ortho 25cm RGB",
                            opacity: 1.0,
                            
                            
                          });
var format_test_laag_2 = new ol.format.GeoJSON();
var features_test_laag_2 = format_test_laag_2.readFeatures(json_test_laag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_laag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_laag_2.addFeatures(features_test_laag_2);
var lyr_test_laag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_laag_2, 
                style: style_test_laag_2,
                popuplayertitle: "test_laag",
                interactive: true,
                    title: '<img src="styles/legend/test_laag_2.png" /> test_laag'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_LuchtfotoActueelOrtho25cmRGB_1.setVisible(true);lyr_test_laag_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LuchtfotoActueelOrtho25cmRGB_1,lyr_test_laag_2];
lyr_test_laag_2.set('fieldAliases', {'id': 'id', 'field1': 'field1', });
lyr_test_laag_2.set('fieldImages', {'id': '', 'field1': '', });
lyr_test_laag_2.set('fieldLabels', {'id': 'no label', 'field1': 'no label', });
lyr_test_laag_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});