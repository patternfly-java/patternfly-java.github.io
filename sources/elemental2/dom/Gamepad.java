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
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Gamepad {
  @JsProperty
  JsArray<Double> getAxes();

  @JsProperty
  JsArray<@Nullable Object> getButtons();

  @JsProperty
  String getId();

  @JsProperty
  double getIndex();

  @JsProperty
  String getMapping();

  @JsProperty
  double getTimestamp();

  @JsProperty
  boolean isConnected();

  @JsProperty
  void setAxes(JsArray<Double> axes);

  @JsOverlay
  default void setAxes(double[] axes) {
    setAxes(Js.<JsArray<Double>>uncheckedCast(axes));
  }

  @JsProperty
  void setButtons(JsArray<@Nullable Object> buttons);

  @JsOverlay
  default void setButtons(@Nullable Object[] buttons) {
    setButtons(Js.<JsArray<@Nullable Object>>uncheckedCast(buttons));
  }

  @JsProperty
  void setConnected(boolean connected);

  @JsProperty
  void setId(String id);

  @JsProperty
  void setIndex(double index);

  @JsProperty
  void setMapping(String mapping);

  @JsProperty
  void setTimestamp(double timestamp);
}
