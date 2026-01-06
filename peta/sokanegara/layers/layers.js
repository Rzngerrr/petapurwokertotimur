var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_wilayahsokanegara_1 = new ol.format.GeoJSON();
var features_wilayahsokanegara_1 = format_wilayahsokanegara_1.readFeatures(json_wilayahsokanegara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayahsokanegara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahsokanegara_1.addFeatures(features_wilayahsokanegara_1);
var lyr_wilayahsokanegara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayahsokanegara_1, 
                style: style_wilayahsokanegara_1,
                popuplayertitle: 'wilayah sokanegara',
                interactive: true,
                title: '<img src="styles/legend/wilayahsokanegara_1.png" /> wilayah sokanegara'
            });
var format_Makam_2 = new ol.format.GeoJSON();
var features_Makam_2 = format_Makam_2.readFeatures(json_Makam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_2.addFeatures(features_Makam_2);
var lyr_Makam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_2,
maxResolution:2.240357292180957,
 
                style: style_Makam_2,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_2.png" /> Makam'
            });
var format_Sawah_3 = new ol.format.GeoJSON();
var features_Sawah_3 = format_Sawah_3.readFeatures(json_Sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_3.addFeatures(features_Sawah_3);
var lyr_Sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_3,
maxResolution:2.240357292180957,
 
                style: style_Sawah_3,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_3.png" /> Sawah'
            });
var format_Lapangan_4 = new ol.format.GeoJSON();
var features_Lapangan_4 = format_Lapangan_4.readFeatures(json_Lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_4.addFeatures(features_Lapangan_4);
var lyr_Lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_4,
maxResolution:2.240357292180957,
 
                style: style_Lapangan_4,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_4.png" /> Lapangan'
            });
var format_Kebun_5 = new ol.format.GeoJSON();
var features_Kebun_5 = format_Kebun_5.readFeatures(json_Kebun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_5.addFeatures(features_Kebun_5);
var lyr_Kebun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_5,
maxResolution:2.240357292180957,
 
                style: style_Kebun_5,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_5.png" /> Kebun'
            });
var format_Bangunan_6 = new ol.format.GeoJSON();
var features_Bangunan_6 = format_Bangunan_6.readFeatures(json_Bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_6.addFeatures(features_Bangunan_6);
var lyr_Bangunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_6,
maxResolution:2.240357292180957,
 
                style: style_Bangunan_6,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_6.png" /> Bangunan'
            });
var format_JalanKabupaten_7 = new ol.format.GeoJSON();
var features_JalanKabupaten_7 = format_JalanKabupaten_7.readFeatures(json_JalanKabupaten_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_7.addFeatures(features_JalanKabupaten_7);
var lyr_JalanKabupaten_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_7,
maxResolution:4.200669922839294,
 
                style: style_JalanKabupaten_7,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_7.png" /> Jalan Kabupaten'
            });
var format_JalanGang_8 = new ol.format.GeoJSON();
var features_JalanGang_8 = format_JalanGang_8.readFeatures(json_JalanGang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_8.addFeatures(features_JalanGang_8);
var lyr_JalanGang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_8,
maxResolution:2.240357292180957,
 
                style: style_JalanGang_8,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_8.png" /> Jalan Gang'
            });
var format_JalanDesa_9 = new ol.format.GeoJSON();
var features_JalanDesa_9 = format_JalanDesa_9.readFeatures(json_JalanDesa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_9.addFeatures(features_JalanDesa_9);
var lyr_JalanDesa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_9,
maxResolution:2.240357292180957,
 
                style: style_JalanDesa_9,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_9.png" /> Jalan Desa'
            });
var format_Sungai_10 = new ol.format.GeoJSON();
var features_Sungai_10 = format_Sungai_10.readFeatures(json_Sungai_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_10.addFeatures(features_Sungai_10);
var lyr_Sungai_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_10,
maxResolution:4.200669922839294,
 
                style: style_Sungai_10,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_10.png" /> Sungai'
            });
var format_Tempatibadah_11 = new ol.format.GeoJSON();
var features_Tempatibadah_11 = format_Tempatibadah_11.readFeatures(json_Tempatibadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempatibadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempatibadah_11.addFeatures(features_Tempatibadah_11);
var lyr_Tempatibadah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempatibadah_11,
maxResolution:2.240357292180957,
 
                style: style_Tempatibadah_11,
                popuplayertitle: 'Tempat ibadah',
                interactive: true,
                title: '<img src="styles/legend/Tempatibadah_11.png" /> Tempat ibadah'
            });
var format_Shop_12 = new ol.format.GeoJSON();
var features_Shop_12 = format_Shop_12.readFeatures(json_Shop_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_12.addFeatures(features_Shop_12);
var lyr_Shop_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shop_12,
maxResolution:2.240357292180957,
 
                style: style_Shop_12,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_12.png" /> Shop'
            });
var format_Penginapan_13 = new ol.format.GeoJSON();
var features_Penginapan_13 = format_Penginapan_13.readFeatures(json_Penginapan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_13.addFeatures(features_Penginapan_13);
var lyr_Penginapan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penginapan_13,
maxResolution:2.240357292180957,
 
                style: style_Penginapan_13,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_13.png" /> Penginapan'
            });
var format_Pendidikan_14 = new ol.format.GeoJSON();
var features_Pendidikan_14 = format_Pendidikan_14.readFeatures(json_Pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_14.addFeatures(features_Pendidikan_14);
var lyr_Pendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_14,
maxResolution:2.240357292180957,
 
                style: style_Pendidikan_14,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_14.png" /> Pendidikan'
            });
var format_Pemerintahan_15 = new ol.format.GeoJSON();
var features_Pemerintahan_15 = format_Pemerintahan_15.readFeatures(json_Pemerintahan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_15.addFeatures(features_Pemerintahan_15);
var lyr_Pemerintahan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_15,
maxResolution:7.00111653806549,
 
                style: style_Pemerintahan_15,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_15.png" /> Pemerintahan'
            });
var format_FoodDrink_16 = new ol.format.GeoJSON();
var features_FoodDrink_16 = format_FoodDrink_16.readFeatures(json_FoodDrink_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_16.addFeatures(features_FoodDrink_16);
var lyr_FoodDrink_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodDrink_16,
maxResolution:2.240357292180957,
 
                style: style_FoodDrink_16,
                popuplayertitle: 'Food & Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_16.png" /> Food & Drink'
            });
var format_FasilitasKesehatan_17 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_17 = format_FasilitasKesehatan_17.readFeatures(json_FasilitasKesehatan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_17.addFeatures(features_FasilitasKesehatan_17);
var lyr_FasilitasKesehatan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_17,
maxResolution:2.240357292180957,
 
                style: style_FasilitasKesehatan_17,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_17.png" /> Fasilitas Kesehatan'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_wilayahsokanegara_1.setVisible(true);lyr_Makam_2.setVisible(true);lyr_Sawah_3.setVisible(true);lyr_Lapangan_4.setVisible(true);lyr_Kebun_5.setVisible(true);lyr_Bangunan_6.setVisible(true);lyr_JalanKabupaten_7.setVisible(true);lyr_JalanGang_8.setVisible(true);lyr_JalanDesa_9.setVisible(true);lyr_Sungai_10.setVisible(true);lyr_Tempatibadah_11.setVisible(true);lyr_Shop_12.setVisible(true);lyr_Penginapan_13.setVisible(true);lyr_Pendidikan_14.setVisible(true);lyr_Pemerintahan_15.setVisible(true);lyr_FoodDrink_16.setVisible(true);lyr_FasilitasKesehatan_17.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_wilayahsokanegara_1,lyr_Makam_2,lyr_Sawah_3,lyr_Lapangan_4,lyr_Kebun_5,lyr_Bangunan_6,lyr_JalanKabupaten_7,lyr_JalanGang_8,lyr_JalanDesa_9,lyr_Sungai_10,lyr_Tempatibadah_11,lyr_Shop_12,lyr_Penginapan_13,lyr_Pendidikan_14,lyr_Pemerintahan_15,lyr_FoodDrink_16,lyr_FasilitasKesehatan_17];
lyr_wilayahsokanegara_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Makam_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_3.set('fieldAliases', {'id': 'id', });
lyr_Lapangan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kebun_5.set('fieldAliases', {'id': 'id', });
lyr_Bangunan_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_JalanKabupaten_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanGang_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanDesa_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Sungai_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Tempatibadah_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Shop_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Penginapan_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FoodDrink_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FasilitasKesehatan_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_wilayahsokanegara_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Makam_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Lapangan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kebun_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Bangunan_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanKabupaten_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanGang_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanDesa_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Sungai_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Tempatibadah_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Shop_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Penginapan_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pemerintahan_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FoodDrink_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FasilitasKesehatan_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_wilayahsokanegara_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Makam_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sawah_3.set('fieldLabels', {'id': 'no label', });
lyr_Lapangan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kebun_5.set('fieldLabels', {'id': 'no label', });
lyr_Bangunan_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanKabupaten_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JalanGang_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanDesa_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_Sungai_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_Tempatibadah_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Shop_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Penginapan_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pemerintahan_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_FoodDrink_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_FasilitasKesehatan_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_FasilitasKesehatan_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});