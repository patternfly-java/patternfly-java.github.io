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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface PointerEventInit extends MouseEventInit {
  @JsOverlay
  static PointerEventInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getAltitudeAngle();

  @JsProperty
  double getAzimuthAngle();

  @JsProperty
  JsArray<PointerEvent> getCoalescedEvents();

  @JsProperty
  double getHeight();

  @JsProperty
  int getPointerId();

  @JsProperty
  String getPointerType();

  @JsProperty
  JsArray<PointerEvent> getPredictedEvents();

  @JsProperty
  double getPressure();

  @JsProperty
  double getTangentialPressure();

  @JsProperty
  int getTiltX();

  @JsProperty
  int getTiltY();

  @JsProperty
  double getTwist();

  @JsProperty
  double getWidth();

  @JsProperty
  boolean isIsPrimary();

  @JsProperty
  void setAltitudeAngle(double altitudeAngle);

  @JsProperty
  void setAzimuthAngle(double azimuthAngle);

  @JsProperty
  void setCoalescedEvents(JsArray<PointerEvent> coalescedEvents);

  @JsOverlay
  default void setCoalescedEvents(PointerEvent[] coalescedEvents) {
    setCoalescedEvents(Js.<JsArray<PointerEvent>>uncheckedCast(coalescedEvents));
  }

  @JsProperty
  void setHeight(double height);

  @JsProperty
  void setIsPrimary(boolean isPrimary);

  @JsProperty
  void setPointerId(int pointerId);

  @JsProperty
  void setPointerType(String pointerType);

  @JsProperty
  void setPredictedEvents(JsArray<PointerEvent> predictedEvents);

  @JsOverlay
  default void setPredictedEvents(PointerEvent[] predictedEvents) {
    setPredictedEvents(Js.<JsArray<PointerEvent>>uncheckedCast(predictedEvents));
  }

  @JsProperty
  void setPressure(double pressure);

  @JsProperty
  void setTangentialPressure(double tangentialPressure);

  @JsProperty
  void setTiltX(int tiltX);

  @JsProperty
  void setTiltY(int tiltY);

  @JsProperty
  void setTwist(double twist);

  @JsProperty
  void setWidth(double width);
}
