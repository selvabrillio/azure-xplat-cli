/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';
var adUtils = require('./adUtils._js');
var profile = require('../../../util/profile');
var policyClientWorkaround = require('../role/policyClientWorkaround');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;

  var ad = cli.category('ad')
    .description($('Commands to display active directory objects'));
  var adUser = ad.category('servicePrincipal')
    .description($('Commands to display active directory service principals'));

  adUser.command('list')
    .description($('Get all active directory service principals in current subscription\'s tenant'))
    .option('| more', $('Provides paging support. Press \'Enter\' for more information.'))
    .execute(function (options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = policyClientWorkaround.getADGraphClient(subscription);
      var progress = cli.interaction.progress($('Listing active directory users'));
      try {
        adUtils.listGraphObjects(client, 'servicePrincipal', log, _);
      } finally {
        progress.end();
      }
    });

  adUser.command('show [name]')
    .description($('Get an active directory user'))
    .usage('[options] <name>')
    .option('--spn <servicePrincipalName>', $('the service principal name'))
    .option('--objectId', $('Object id of service principal to return.'))
    .option('--search <searchName>', $('display name to search'))
    .execute(function (name, options, _) {
    if (!name) {
      return cli.missingArgument('name');
    }
    var subscription = profile.current.getSubscription(options.subscription);
    var client = policyClientWorkaround.getADGraphClient(subscription);
    var progress = cli.interaction.progress($('Getting active directory service principal'));
    var user; 
    try {
      user = client.user.get(name, _).user;
    } finally {
      progress.end();
    }

    if (user) {
      adUtils.displayAUser(user, log);
    } else {
      log.data($('No matching user was found'));
    }
  });
};