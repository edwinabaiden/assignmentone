'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {
beforeEach(module('phonecatApp'));
  it('should create "phones" model with 3 phones',
function() {
var scope = {},
ctrl = new PhoneListCtrl(scope);
expect(scope.phones.length).toBe(3);
  });

});
