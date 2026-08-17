/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Performance {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface MeasureStartOrMeasureOptionsUnionType {
    @JsOverlay
    static Performance.@Nullable MeasureStartOrMeasureOptionsUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable PerformanceMeasureOptions asPerformanceMeasureOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface OnresourcetimingbufferfullFn {
    @Nullable Object onInvoke(@Nullable Event p0);
  }

  public EventCounts eventCounts;
  public @Nullable PerformanceNavigation navigation;
  public Performance.@Nullable OnresourcetimingbufferfullFn onresourcetimingbufferfull;
  public double timeOrigin;
  public @Nullable PerformanceTiming timing;

  public native void clearMarks();

  public native void clearMarks(String markName);

  public native void clearMeasures();

  public native void clearMeasures(String measureName);

  public native void clearResourceTimings();

  public native JsArray<PerformanceEntry> getEntries();

  public native JsArray<PerformanceEntry> getEntriesByName(String name, String entryType);

  public native JsArray<PerformanceEntry> getEntriesByName(String name);

  public native JsArray<PerformanceEntry> getEntriesByType(String entryType);

  public native @Nullable PerformanceMark mark(
      String markName, @Nullable PerformanceMarkOptions markOptions);

  public native @Nullable PerformanceMark mark(String markName);

  public native @Nullable PerformanceMeasure measure(
      String measureName,
      Performance.@Nullable MeasureStartOrMeasureOptionsUnionType startOrMeasureOptions,
      String endMark);

  public native @Nullable PerformanceMeasure measure(
      String measureName,
      Performance.@Nullable MeasureStartOrMeasureOptionsUnionType startOrMeasureOptions);

  @JsOverlay
  public final @Nullable PerformanceMeasure measure(
      String measureName, PerformanceMeasureOptions startOrMeasureOptions, String endMark) {
    return measure(
        measureName,
        Js.<Performance.@Nullable MeasureStartOrMeasureOptionsUnionType>uncheckedCast(
            startOrMeasureOptions),
        endMark);
  }

  @JsOverlay
  public final @Nullable PerformanceMeasure measure(
      String measureName, PerformanceMeasureOptions startOrMeasureOptions) {
    return measure(
        measureName,
        Js.<Performance.@Nullable MeasureStartOrMeasureOptionsUnionType>uncheckedCast(
            startOrMeasureOptions));
  }

  @JsOverlay
  public final @Nullable PerformanceMeasure measure(
      String measureName, String startOrMeasureOptions, String endMark) {
    return measure(
        measureName,
        Js.<Performance.@Nullable MeasureStartOrMeasureOptionsUnionType>uncheckedCast(
            startOrMeasureOptions),
        endMark);
  }

  @JsOverlay
  public final @Nullable PerformanceMeasure measure(
      String measureName, String startOrMeasureOptions) {
    return measure(
        measureName,
        Js.<Performance.@Nullable MeasureStartOrMeasureOptionsUnionType>uncheckedCast(
            startOrMeasureOptions));
  }

  public native @Nullable PerformanceMeasure measure(String measureName);

  public native double now();

  public native void setResourceTimingBufferSize(int maxSize);
}
