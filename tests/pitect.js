var pitect = require('../');
var expect = require("chai").expect;
var fs = require('fs');

if (fs.existsSync('/proc/cpuinfo')) {
    describe("Raspberry Pi Detection", function () {
        it("Is Raspberry Pi", function () {
            var isPi = pitect.isPi();
            expect(isPi).to.equal(true);
        });
        it("Model Detection", function () {
            var model = pitect.piModel();
            expect(model).to.not.equal(pitect.MODELS.Unknown);
        });
    });
} else {
    describe("Raspberry Pi Detection", function () {
        it("Is Raspberry Pi", function () {
            var isPi = pitect.isPi();
            expect(isPi).to.equal(false);
        });
        it("Model Detection", function () {
            var model = pitect.piModel();
            expect(model).to.equal(pitect.MODELS.Unknown);
        });
    });
}
