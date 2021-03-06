"use strict"
var expect = require('chai').expect
var downloadCsv = require('../../src/DownloadCsv')

describe('DownloadCsv', function() {


    function expectResponseToBeCsvString(res) {
        expect(res).to.include('session')
        expect(res).to.include('rétrospective')
    }

    it('gets data as a csv string', function() {
        this.timeout(4000)

        var sourceUrl = 'https://docs.google.com/spreadsheets/d/1eNbJzyZOHES02YQaBHb5Ikxs6gPi5s8unVCkyIMJVUw/export?format=csv'
        return downloadCsv(sourceUrl).then(expectResponseToBeCsvString)


    })
})