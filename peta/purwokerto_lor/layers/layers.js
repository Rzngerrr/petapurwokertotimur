var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DesaPurwokertoLor_1 = new ol.format.GeoJSON();
var features_DesaPurwokertoLor_1 = format_DesaPurwokertoLor_1.readFeatures(json_DesaPurwokertoLor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPurwokertoLor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPurwokertoLor_1.addFeatures(features_DesaPurwokertoLor_1);
var lyr_DesaPurwokertoLor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPurwokertoLor_1,
maxResolution:28004.466152261964,
 minResolution:0.14002233076130982,

                style: style_DesaPurwokertoLor_1,
                popuplayertitle: 'Desa Purwokerto Lor',
                interactive: true,
                title: '<img src="styles/legend/DesaPurwokertoLor_1.png" /> Desa Purwokerto Lor'
            });
var format_Bangunan_2 = new ol.format.GeoJSON();
var features_Bangunan_2 = format_Bangunan_2.readFeatures(json_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_2.addFeatures(features_Bangunan_2);
var lyr_Bangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_2,
maxResolution:2.240357292180957,
 
                style: style_Bangunan_2,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_2.png" /> Bangunan'
            });
var format_Lapangan_3 = new ol.format.GeoJSON();
var features_Lapangan_3 = format_Lapangan_3.readFeatures(json_Lapangan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_3.addFeatures(features_Lapangan_3);
var lyr_Lapangan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_3,
maxResolution:2.240357292180957,
 
                style: style_Lapangan_3,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_3.png" /> Lapangan'
            });
var format_Lahan_4 = new ol.format.GeoJSON();
var features_Lahan_4 = format_Lahan_4.readFeatures(json_Lahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_4.addFeatures(features_Lahan_4);
var lyr_Lahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_4,
maxResolution:2.240357292180957,
 
                style: style_Lahan_4,
                popuplayertitle: 'Lahan',
                interactive: true,
                title: '<img src="styles/legend/Lahan_4.png" /> Lahan'
            });
var format_Makam_5 = new ol.format.GeoJSON();
var features_Makam_5 = format_Makam_5.readFeatures(json_Makam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_5.addFeatures(features_Makam_5);
var lyr_Makam_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_5,
maxResolution:2.240357292180957,
 
                style: style_Makam_5,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_5.png" /> Makam'
            });
var format_JalanDesa_6 = new ol.format.GeoJSON();
var features_JalanDesa_6 = format_JalanDesa_6.readFeatures(json_JalanDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_6.addFeatures(features_JalanDesa_6);
var lyr_JalanDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_6,
maxResolution:2.240357292180957,
 
                style: style_JalanDesa_6,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_6.png" /> Jalan Desa'
            });
var format_JalanGang_7 = new ol.format.GeoJSON();
var features_JalanGang_7 = format_JalanGang_7.readFeatures(json_JalanGang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_7.addFeatures(features_JalanGang_7);
var lyr_JalanGang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_7,
maxResolution:2.240357292180957,
 
                style: style_JalanGang_7,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_7.png" /> Jalan Gang'
            });
var format_JalanKabupaten_8 = new ol.format.GeoJSON();
var features_JalanKabupaten_8 = format_JalanKabupaten_8.readFeatures(json_JalanKabupaten_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_8.addFeatures(features_JalanKabupaten_8);
var lyr_JalanKabupaten_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_8,
maxResolution:2.8004466152261966,
 
                style: style_JalanKabupaten_8,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_8.png" /> Jalan Kabupaten'
            });
var format_Shop_9 = new ol.format.GeoJSON();
var features_Shop_9 = format_Shop_9.readFeatures(json_Shop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_9.addFeatures(features_Shop_9);
var lyr_Shop_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shop_9,
maxResolution:2.240357292180957,
 
                style: style_Shop_9,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_9.png" /> Shop'
            });
var format_Bank_10 = new ol.format.GeoJSON();
var features_Bank_10 = format_Bank_10.readFeatures(json_Bank_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_10.addFeatures(features_Bank_10);
var lyr_Bank_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bank_10,
maxResolution:2.240357292180957,
 
                style: style_Bank_10,
                popuplayertitle: 'Bank',
                interactive: true,
                title: '<img src="styles/legend/Bank_10.png" /> Bank'
            });
var format_FoodDrink_11 = new ol.format.GeoJSON();
var features_FoodDrink_11 = format_FoodDrink_11.readFeatures(json_FoodDrink_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_11.addFeatures(features_FoodDrink_11);
var lyr_FoodDrink_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodDrink_11,
maxResolution:2.240357292180957,
 
                style: style_FoodDrink_11,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_11.png" /> Food&Drink'
            });
var format_Penginapan_12 = new ol.format.GeoJSON();
var features_Penginapan_12 = format_Penginapan_12.readFeatures(json_Penginapan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_12.addFeatures(features_Penginapan_12);
var lyr_Penginapan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penginapan_12,
maxResolution:2.240357292180957,
 
                style: style_Penginapan_12,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_12.png" /> Penginapan'
            });
var format_Pemerintahan_13 = new ol.format.GeoJSON();
var features_Pemerintahan_13 = format_Pemerintahan_13.readFeatures(json_Pemerintahan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_13.addFeatures(features_Pemerintahan_13);
var lyr_Pemerintahan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_13,
maxResolution:7.00111653806549,
 
                style: style_Pemerintahan_13,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_13.png" /> Pemerintahan'
            });
var group_Point = new ol.layer.Group({
                                layers: [lyr_Shop_9,lyr_Bank_10,lyr_FoodDrink_11,lyr_Penginapan_12,lyr_Pemerintahan_13,],
                                fold: 'open',
                                title: 'Point'});
var group_Line = new ol.layer.Group({
                                layers: [lyr_JalanDesa_6,lyr_JalanGang_7,lyr_JalanKabupaten_8,],
                                fold: 'open',
                                title: 'Line'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_DesaPurwokertoLor_1,lyr_Bangunan_2,lyr_Lapangan_3,lyr_Lahan_4,lyr_Makam_5,],
                                fold: 'open',
                                title: 'Polygon'});

lyr_GoogleMaps_0.setVisible(true);lyr_DesaPurwokertoLor_1.setVisible(true);lyr_Bangunan_2.setVisible(true);lyr_Lapangan_3.setVisible(true);lyr_Lahan_4.setVisible(true);lyr_Makam_5.setVisible(true);lyr_JalanDesa_6.setVisible(true);lyr_JalanGang_7.setVisible(true);lyr_JalanKabupaten_8.setVisible(true);lyr_Shop_9.setVisible(true);lyr_Bank_10.setVisible(true);lyr_FoodDrink_11.setVisible(true);lyr_Penginapan_12.setVisible(true);lyr_Pemerintahan_13.setVisible(true);
var layersList = [lyr_GoogleMaps_0,group_Polygon,group_Line,group_Point];
lyr_DesaPurwokertoLor_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Bangunan_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_Lapangan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Lahan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Makam_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanDesa_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanGang_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanKabupaten_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'path': 'path', });
lyr_Shop_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Bank_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FoodDrink_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Penginapan_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pemerintahan_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_DesaPurwokertoLor_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bangunan_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lapangan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lahan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Makam_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanDesa_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanGang_7.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', 'Lebar': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanKabupaten_8.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'path': 'TextEdit', });
lyr_Shop_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bank_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FoodDrink_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Penginapan_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pemerintahan_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DesaPurwokertoLor_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'no label', });
lyr_Bangunan_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lapangan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lahan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Makam_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanDesa_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanGang_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanKabupaten_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'path': 'no label', });
lyr_Shop_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bank_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_FoodDrink_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Penginapan_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pemerintahan_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pemerintahan_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});