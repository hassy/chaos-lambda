// See LICENSE-APL2 for terms

var AWS = require('aws-sdk');
AWS.config.region = 'eu-west-1';

exports.handler = function(event, context) {
  var ec2 = new AWS.EC2();
  ec2.describeInstances(function(err, data) {
    if (err) {
      context.done(err, null);
    }

    var numInstances = data.Reservations.length;

    var random = Math.floor(Math.random() * numInstances);
    var target = data.Reservations[random].Instances[0];
    console.log('Going to terminate instance with id = %s', target.InstanceId);

    ec2.terminateInstances({InstanceIds:[target.InstanceId]}, function(err, data) {
      if (err) {
        context.done(err, null);
      }

      console.log('Instance %s terminated', target.InstanceId);
      context.done(null, data);
    });
  });
};