'use strict';

module.exports.sendReminderDaily = (event, context, callback) => {
    
    var AWS = require('aws-sdk');
	var proxy = require('proxy-agent');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');


    var emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

    var toAndFromAdress = 'sample.orders@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: emailHtml
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "Sample text comes after image!"
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Subject line coming from sendReminderDaily function"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress, 
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack); 
        // successful response
        else callback(null, data);
    }); 
};

module.exports.sendReminderWeekend = (event, context, callback) => {
    
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    var toAndFromAdress = 'sample.orders@gmail.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: emailHtml
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "Sample text after image!!"
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Subject line coming from weekendReminder function"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress, 
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack); 
        // successful response
        else callback(null, data);
    }); 
};