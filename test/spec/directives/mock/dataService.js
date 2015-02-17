'use strict';

angular.module('mocks', [])
.value('suspectDataMock', {
  name: 'john doe',
  age: 32
})
.factory('dataServiceMock', function dataServiceMockFactory () {
  return {
    suspectData: {
      name: 'joe burglar',
      age: 17
    }
  };
});
