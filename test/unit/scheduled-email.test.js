'use strict';

describe('models/scheduled-email', function () {
    const scheduledEmailModel = require('../../models').scheduledEmail;

    describe('create', function () {
        it('creates a scheduled email', function () {
            let sample = {
                sent: false, 
                scheduledDateTime: new Date(), 
                toEmailAddress: 'foo@bar.com', 
                subject: '', 
                text: ''
            };

            return scheduledEmailModel.create(sample).then(scheduledEmail => {
                expect(scheduledEmail.get({plain: true}).sent).toEqual(sample.sent);
                expect(scheduledEmail.get({plain: true}).scheduledDateTime).toEqual(sample.scheduledDateTime);
                expect(scheduledEmail.get({plain: true}).toEmailAddress).toEqual(sample.toEmailAddress);
                expect(scheduledEmail.get({plain: true}).subject).toEqual(sample.subject);
                expect(scheduledEmail.get({plain: true}).text).toEqual(sample.text);
            });
        });
    });
});
