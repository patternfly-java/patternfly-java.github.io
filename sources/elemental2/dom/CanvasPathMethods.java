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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface CanvasPathMethods {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RoundRectRadiiArrayUnionType {
    @JsOverlay
    static CanvasPathMethods.RoundRectRadiiArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DOMPointInit asDOMPointInit() {
      return Js.cast(this);
    }

    @JsOverlay
    default Double asDouble() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RoundRectRadiiUnionType {
    @JsOverlay
    static CanvasPathMethods.RoundRectRadiiUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DOMPointInit asDOMPointInit() {
      return Js.cast(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default JsArray<CanvasPathMethods.RoundRectRadiiArrayUnionType> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  void arc(
      double x, double y, double radius, double startAngle, double endAngle, boolean anticlockwise);

  void arc(double x, double y, double radius, double startAngle, double endAngle);

  void arcTo(double x1, double y1, double x2, double y2, double radius);

  void bezierCurveTo(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);

  void closePath();

  void lineTo(double x, double y);

  void moveTo(double x, double y);

  void quadraticCurveTo(double cpx, double cpy, double x, double y);

  void rect(double x, double y, double w, double h);

  @JsOverlay
  default void roundRect(double x, double y, double w, double h, DOMPointInit radii) {
    roundRect(x, y, w, h, Js.<CanvasPathMethods.RoundRectRadiiUnionType>uncheckedCast(radii));
  }

  @JsOverlay
  default void roundRect(
      double x,
      double y,
      double w,
      double h,
      JsArray<CanvasPathMethods.RoundRectRadiiArrayUnionType> radii) {
    roundRect(x, y, w, h, Js.<CanvasPathMethods.RoundRectRadiiUnionType>uncheckedCast(radii));
  }

  @JsOverlay
  default void roundRect(
      double x,
      double y,
      double w,
      double h,
      CanvasPathMethods.RoundRectRadiiArrayUnionType[] radii) {
    roundRect(
        x,
        y,
        w,
        h,
        Js.<JsArray<CanvasPathMethods.RoundRectRadiiArrayUnionType>>uncheckedCast(radii));
  }

  void roundRect(
      double x, double y, double w, double h, CanvasPathMethods.RoundRectRadiiUnionType radii);

  @JsOverlay
  default void roundRect(double x, double y, double w, double h, double radii) {
    roundRect(x, y, w, h, Js.<CanvasPathMethods.RoundRectRadiiUnionType>uncheckedCast(radii));
  }

  void roundRect(double x, double y, double w, double h);
}
