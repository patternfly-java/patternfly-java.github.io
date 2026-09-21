goog.module('org.patternfly.component.timestamp.CustomFormat.$Overlay');

goog.require('java.lang.Boolean');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Day');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.DayPeriod');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Era');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.FractionalSecondDigits');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Hour');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Minute');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Month');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Second');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.TimeZoneName');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday');
goog.require('org.patternfly.component.timestamp.DateTimeFormatOptions.Year');

const $Overlay = goog.require('org.patternfly.component.timestamp.CustomFormat.$Overlay$impl');
/** @nodts */
exports = $Overlay;
