/**
 * 
 * Package: logstrail
 * Author: Ganesh B
 * Description: 
 * Install: npm i logstrail --save
 * Github: https://github.com/ganeshkbhat/logstrail
 * npmjs Link: https://www.npmjs.com/package/logstrail
 * File: .js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const hashers = require("hasher-apis");
const path = require("path");


function comparekeys(objectOne, ObjectTwo) {
    const keys1 = Object.keys(objectOne);
    const keys2 = Object.keys(ObjectTwo);

    if (keys1.length !== keys2.length) return false;
    keys1.sort();
    keys2.sort();

    for (let i = 0; i < keys1.length; i++) {
        const key1 = keys1[i];
        const key2 = keys2[i];
        if (key1 !== key2) return false;

        const value1 = objectOne[key1];
        const value2 = ObjectTwo[key2];

        if (typeof value1 === 'object' && typeof value2 === 'object') {
            const keysMatch = this.comparekeys(value1, value2);
            if (!keysMatch) return false;
        }
    }
    return true;
}

function generateKeys(storePath) {
    const { publicKey, privateKey } = hashers._genKeyPair();
    let pbk = hashers._dumpKeyFile(path.join(storePath, "public"), publicKey);
    let pvk = hashers._dumpKeyFile(path.join(storePath, "private"), privateKey);
    if (!!pbk && !!pvk) return true;
    return false;
}

function InterfaceReader(config) {

    // var socket, filePath, sendLines = 30, lastLine = 0, clients = [], watcher = {}, readers = {}, logFilters = [], type = "", delimiters = [];

    var socket, staticFilePath, linesToSend = 30, lastLineSent = 0, allClients = [], watcher = {}, readers = {}, logFilters = [], type = '', delimiters = [];

    this.init = function (config) {
        return new Error("InterfaceLogFileReader: init: Not Implemented");
    }

    this.initStream = function () {
        return new Error("InterfaceLogFileReader: initStream: Not Implemented");
    }

    this.prepareLogFile = function (filePath, callback) {
        return new Error("InterfaceLogFileReader: prepareLogFile: Not Implemented");
    }

    this.getLine = function (filePath, line, numberOfLines, callback) {
        return new Error("InterfaceLogFileReader: getLine: Not Implemented");
    }

    this.countLines = function (filePath) {
        return new Error("InterfaceLogFileReader: countLines: Not Implemented");
    }

    this.filterLogs = function (filePath, logObject, type, delimiters) {
        return new Error("InterfaceLogFileReader: filterLogs: Not Implemented");
    }

    this.startListeningForEvents = function (sockets) {
        return new Error("InterfaceReader: startListeningForEvents: Not Implemented");
    }

    this.stopListeningForEvents = function (sockets) {
        return new Error("InterfaceReader: stopListeningForEvents: Not Implemented");
    }

    this.watch = function (filePath) {
        return new Error("InterfaceReader: watchFile: Not Implemented");
    }

    this.stopWatching = function (filePath) {
        return new Error("InterfaceReader: stopWatchingFile: Not Implemented");
    }

}

function InterfaceLogger(config) {

    var logger, schema, config;

    this.init = function (config) {
        return new Error("InterfaceLogger: init: Not Implemented");
    }

    this.setLogger = function () {
        return new Error("InterfaceLogger: setLogger: Not Implemented");
    }

    this.getLogger = function () {
        return new Error("InterfaceLogger: getLogger: Not Implemented");
    }

    this.log = function (level, data) {
        return new Error("InterfaceLogger: log: Not Implemented");
    }

    this.comparekeys = comparekeys;

    this.setDefaultLevel = function (level) {
        return new Error("InterfaceLogger: setDefaultLevel: Not Implemented");
    }

    this.destroy = function () {
        return new Error("InterfaceLogger: destroy: Not Implemented");
    }

    this.validate = function () {
        return new Error("InterfaceLogger: validate: Not Implemented");
    }
}

module.exports.InterfaceReader = InterfaceReader
module.exports.InterfaceLogger = InterfaceLogger;
module.exports.generateKeys = generateKeys;
module.exports.comparekeys = comparekeys

