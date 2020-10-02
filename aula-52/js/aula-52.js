$(function() {

    $('#zipCode').jZipCode({
      streetTarget: '#street',
      districtTarget: '#district',
      cityTarget: '#city',
      stateTarget: '#state',
      multipleReturns: '#returns',
      keyUpDelay: 1500,
      showMap: 'map',
      key: "AIzaSyD_rGbxDUMqX69FM0dXUxaWetog7JaNr2c"
    });

});

