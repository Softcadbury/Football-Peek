'use strict';

var config = require('../config');
var helper = require('../helper');
var items = require('../data/items');
var express = require('express');
var router = express.Router();

router.route('/:item/:year?')
    .get((req, res) => {
        var requestedItem = items.find(item => item.code === req.params.item) || items[0];
        var requestedYear = config.years.availables.find(year => req.params.year === year) || config.years.current;

        var data = {
            title: 'Dashboard Football - ' + requestedItem.name + ' results - Season ' + requestedYear,
            description: 'Quick access to ' + requestedItem.name + ' results, tables, top scorers and top assists for season ' + requestedYear,
            items: items,
            years: config.years.availables,
            requestedItem: requestedItem,
            requestedYear: requestedYear,
            scorersData: getData(config.paths.scorersData, requestedItem, requestedYear),
            assistsData: getData(config.paths.assistsData, requestedItem, requestedYear)
        };

        if (requestedItem.isCompetition) {
            renderCompetition(res, data, requestedItem, requestedYear);
        } else {
            renderLeague(res, data, requestedItem, requestedYear);
        }
    });

// Render a competition item
function renderCompetition(res, data, requestedItem, requestedYear) {
    var tournamentData = getData(config.paths.tournamentData, requestedItem, requestedYear);
    var groupsData = getData(config.paths.groupsData, requestedItem, requestedYear);

    res.render('competition', Object.assign(data, {
        tournamentData,
        groupsData
    }));
}

// Render a league item
function renderLeague(res, data, requestedItem, requestedYear) {
    var resultsData = getData(config.paths.resultsData, requestedItem, requestedYear);
    var tableData = getData(config.paths.tableData, requestedItem, requestedYear);

    res.render('league', Object.assign(data, {
        resultsData,
        tableData,
        currentRound: helper.getLeagueCurrentRound(resultsData)
    }));
}

function getData(dataPath, requestedItem, requestedYear) {
    return helper.readJsonFile(helper.stringFormat(dataPath, requestedItem.code, requestedYear));
}

module.exports = router;