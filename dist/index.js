"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Models based off documentation found below
// https://www.raspberrypi.org/documentation/hardware/raspberrypi/revision-codes/README.md
exports.MODELS = {
    Unknown: {
        name: 'Unknown'
    },
    ////////////////////
    // Compute Module //
    ////////////////////
    Compute_Module: {
        revisions: [
            '0011',
            '0014',
        ],
        name: 'Compute Module'
    },
    /////////////////
    // PI ORIGINAL //
    /////////////////
    // Pi Model A
    PI_A: { revisions: ['0007', '0008', '0009'], name: 'PI Model A' },
    // Pi Model A+
    PI_Aplus: {
        revisions: [
            '0012',
            '0015',
        ],
        name: 'PI Model A+'
    },
    // Pi Model B Rev 1
    PI_BRev1: {
        revisions: [
            '0002',
            '0003',
        ],
        name: 'PI Model B Rev 1'
    },
    // PI Model B Rev 2
    PI_BRev2: {
        revisions: [
            //256MB
            '0004',
            '0005',
            '0006',
            //512MB
            '000d',
            '000e',
            '000f'
        ],
        name: 'PI Model B Rev 2'
    },
    // PI Model B+
    PI_Bplus: {
        revisions: [
            '0010',
            '0013',
            '900032'
        ],
        name: 'PI Model B+'
    },
    //////////
    // PI 2 //
    //////////
    // PI 2 Model B V1.1
    PI_2_B_V11: {
        revisions: [
            'a01041',
            'a21041' // (Embest, China)
        ],
        name: 'PI 2 Model B v1.1'
    },
    // PI 2 Model B V1.2
    PI_2_B_V12: {
        revisions: [
            'a22042'
        ],
        name: 'PI 2 Model B v1.2'
    },
    /////////////
    // PI Zero //
    /////////////
    // PI Zero V1.2
    PI_Z_V12: {
        revisions: [
            '900092'
        ],
        name: 'PI Zero v1.2'
    },
    // PI Zero V1.3
    PI_Z_V13: {
        revisions: [
            '900093'
        ],
        name: 'PI Zero v1.3'
    },
    // PI Zero W
    PI_Z_W: {
        revisions: [
            "0x9000C1"
        ],
        name: 'PI Zero W'
    },
    //////////
    // PI 3 //
    //////////
    // PI 3 Model B
    PI_3_B: {
        revisions: [
            'a02082',
            'a22082' // (Embest, China)
        ],
        name: 'PI 3 Model B'
    },
    // PI 3 Model B+
    PI_3_Bplus: {
        revisions: [
            'a020d3' // (Sony, UK)
        ],
        name: 'PI 3 Model B+'
    }
};
function getCPUInfo(property) {
    try {
        var cpuInfo = fs.readFileSync('/proc/cpuinfo', { encoding: 'utf8' });
        var propertyInfo = cpuInfo
            .split('\n')
            .map(function (line) { return line.replace(/\t/g, ''); })
            .filter(function (line) { return line.length > 0; })
            .map(function (line) { return line.split(':'); })
            .map(function (pair) { return pair.map(function (entry) { return entry.trim(); }); })
            .filter(function (pair) { return pair[0] === property; });
        if (!propertyInfo || propertyInfo.length == 0) {
            return null;
        }
        return propertyInfo[0][1];
    }
    catch (e) {
        // if this fails, this is probably not a pi
        return null;
    }
}
function getModel(revision) {
    for (var modelname in exports.MODELS) {
        var model = exports.MODELS[modelname];
        if (model.revisions != null && model.revisions.filter(function (item) { return item == revision; }).length > 0)
            return model;
    }
    return exports.MODELS.Unknown;
}
exports.serialNumber = function () {
    return getCPUInfo('Serial');
};
exports.isPi = function () {
    return exports.piModel() != exports.MODELS.Unknown;
};
exports.piModel = function () {
    var revision = getCPUInfo('Revision');
    return revision == null ? exports.MODELS.Unknown : getModel(revision);
};
