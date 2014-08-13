!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.audioBufferUtils=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.clone   = clone;
exports.reverse = reverse;
exports.invert  = invert;
exports.zero    = zero;
exports.noise   = noise;

function clone(inBuffer) {
    
    var outBuffer = inBuffer.context.createBuffer(
        inBuffer.numberOfChannels,
        inBuffer.length,
        inBuffer.sampleRate
    );

    for (var i = 0, c = inBuffer.numberOfChannels; i < c; ++i) {
        var od = outBuffer.getChannelData(i),
            id = inBuffer.getChannelData(i);
        od.set(id, 0);
    }
    
    return outBuffer;

}

function reverse(buffer) {
    for (var i = 0, c = buffer.numberOfChannels; i < c; ++i) {
        var d = buffer.getChannelData(i);
        Array.prototype.reverse.call(d);
    }
}

function invert(buffer) {
    for (var i = 0, c = buffer.numberOfChannels; i < c; ++i) {
        var d = buffer.getChannelData(i),
            l = buffer.length;
        while (l--) d[l] = -d[l];
    }
}

function zero(buffer) {
    for (var i = 0, c = buffer.numberOfChannels; i < c; ++i) {
        var d = buffer.getChannelData(i),
            l = buffer.length;
        while (l--) d[l] = 0;
    }
}

function noise(buffer) {
    for (var i = 0, c = buffer.numberOfChannels; i < c; ++i) {
        var d = buffer.getChannelData(i),
            l = buffer.length;
        while (l--) d[l] = (Math.random() * 2) - 1;
    }
}
},{}]},{},[1])(1)
});