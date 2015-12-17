/**
 * Pattern for Redactor Video Plugin
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "underscore",
            "pat-registry",
            "pat-utils",
            "pat-parser",
            "pat-redactor",
            "redactor-video",
            ], function ($, _, registry, utils, Parser, patRedactor, redactorVideo) {
                return factory.apply(this, arguments);
        });
    } else {
        factory(root.jQuery, _, root.patterns, utils, root.patterns.Parser, patRedactor, redactorVideo);
    }
}(this, function($, _, registry, utils, Parser, patRedactor) {
    patRedactor.registerPlugin('video', $.Redactor.prototype.video);
    return $.Redactor.prototype.video
}));
