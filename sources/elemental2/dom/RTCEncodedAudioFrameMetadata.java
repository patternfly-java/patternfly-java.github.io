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
public interface RTCEncodedAudioFrameMetadata {
  @JsProperty
  @Nullable JsArray<Double> getContributingSources();

  @JsProperty
  double getPayloadType();

  @JsProperty
  double getSequenceNumber();

  @JsProperty
  double getSynchronizationSource();

  @JsProperty
  void setContributingSources(@Nullable JsArray<Double> contributingSources);

  @JsOverlay
  default void setContributingSources(double @Nullable [] contributingSources) {
    setContributingSources(Js.<@Nullable JsArray<Double>>uncheckedCast(contributingSources));
  }

  @JsProperty
  void setPayloadType(double payloadType);

  @JsProperty
  void setSequenceNumber(double sequenceNumber);

  @JsProperty
  void setSynchronizationSource(double synchronizationSource);
}
