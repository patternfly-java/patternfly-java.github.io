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
public interface MediaKeySystemConfiguration {
  @JsOverlay
  static MediaKeySystemConfiguration create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<MediaKeySystemMediaCapability> getAudioCapabilities();

  @JsProperty
  String getDistinctiveIdentifier();

  @JsProperty
  JsArray<String> getInitDataTypes();

  @JsProperty
  String getLabel();

  @JsProperty
  String getPersistentState();

  @JsProperty
  JsArray<String> getSessionTypes();

  @JsProperty
  JsArray<MediaKeySystemMediaCapability> getVideoCapabilities();

  @JsProperty
  void setAudioCapabilities(JsArray<MediaKeySystemMediaCapability> audioCapabilities);

  @JsOverlay
  default void setAudioCapabilities(MediaKeySystemMediaCapability[] audioCapabilities) {
    setAudioCapabilities(
        Js.<JsArray<MediaKeySystemMediaCapability>>uncheckedCast(audioCapabilities));
  }

  @JsProperty
  void setDistinctiveIdentifier(String distinctiveIdentifier);

  @JsProperty
  void setInitDataTypes(JsArray<String> initDataTypes);

  @JsOverlay
  default void setInitDataTypes(String[] initDataTypes) {
    setInitDataTypes(Js.<JsArray<String>>uncheckedCast(initDataTypes));
  }

  @JsProperty
  void setLabel(String label);

  @JsProperty
  void setPersistentState(String persistentState);

  @JsProperty
  void setSessionTypes(JsArray<String> sessionTypes);

  @JsOverlay
  default void setSessionTypes(String[] sessionTypes) {
    setSessionTypes(Js.<JsArray<String>>uncheckedCast(sessionTypes));
  }

  @JsProperty
  void setVideoCapabilities(JsArray<MediaKeySystemMediaCapability> videoCapabilities);

  @JsOverlay
  default void setVideoCapabilities(MediaKeySystemMediaCapability[] videoCapabilities) {
    setVideoCapabilities(
        Js.<JsArray<MediaKeySystemMediaCapability>>uncheckedCast(videoCapabilities));
  }
}
