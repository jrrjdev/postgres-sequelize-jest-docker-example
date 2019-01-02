'use strict';

describe('models/index', function () {
  it('returns the scheduled email model', function () {
    var models = require('../../models');
    expect(models.scheduledEmail).toBeTruthy();
  });
});
