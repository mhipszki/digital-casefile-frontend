'use strict';

describe('Directive: suspect', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $compile = $injector.get('$compile');

    var parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    parentScope.data = {
      name: 'david'
    };

    var template = '<suspect data="data"></suspect>';
    element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();
  }));

  it('should have a form', inject(function () {
    expect(element.find('form').length).toBe(1);
  }));

});
