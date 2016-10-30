'use strict';

/* jasmine specs for services go here */

describe('service', function() {

  beforeEach(module('myApp.services'));


  describe('rtmFactory', function() {
var scope,httpBackend, rtmFactory,result;
  	beforeEach(inject(function(_rtmFactory_,$httpBackend){
  		httpBackend=$httpBackend;
  		rtmFactory=_rtmFactory_

var url="http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country=us&callback=JSON_CALLBACK&apikey=t5vzuyfb49c2sd56sjz4bc2p"

var mockedResponse=[
  {"id":"12312312","title":"Transformers"},
  {"id":"445433","title":"Mackenna's Gold"},
  {"id":"3335","title":"Star Wars"}
  ]

      httpBackend.when("JSONP",url).respond(mockedResponse)
  	}))

    it('should contain three items',function() {
  
  
    var wsRequest= rtmFactory.getMovies('us')

wsRequest.then(function(data){
result=data.data.length
    })

httpBackend.flush()
    expect(result).toEqual(3)
    });
  });
});





