Meteor.methods({
  data : function(){
    var seData = HTTP.get('http://streeteasy.com/nyc/api/sales/data',{
      params : {
        criteria : 'area:hunters-point|beds:1',
        key : 'c66773e871f31a54b00f997be50f136adc726fba',
        format : 'json'
      }
    }, function(error,response){
      if (error){
        console.log(error);
      }else{
         console.log(response.content);
          var rec = JSON.parse(response.content);
         Records.insert(rec);
      }
    });


  }

});
