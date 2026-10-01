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
public interface RTCEncodedVideoFrameMetadata {
  @JsProperty
  @Nullable JsArray<Double> getContributingSources();

  @JsProperty
  @Nullable JsArray<Double> getDependencies();

  @JsProperty
  int getFrameId();

  @JsProperty
  int getHeight();

  @JsProperty
  int getPayloadType();

  @JsProperty
  int getSpatialIndex();

  @JsProperty
  double getSynchronizationSource();

  @JsProperty
  int getTemporalIndex();

  @JsProperty
  double getTimestamp();

  @JsProperty
  int getWidth();

  @JsProperty
  void setContributingSources(@Nullable JsArray<Double> contributingSources);

  @JsOverlay
  default void setContributingSources(double @Nullable [] contributingSources) {
    setContributingSources(Js.<@Nullable JsArray<Double>>uncheckedCast(contributingSources));
  }

  @JsProperty
  void setDependencies(@Nullable JsArray<Double> dependencies);

  @JsOverlay
  default void setDependencies(double @Nullable [] dependencies) {
    setDependencies(Js.<@Nullable JsArray<Double>>uncheckedCast(dependencies));
  }

  @JsProperty
  void setFrameId(int frameId);

  @JsProperty
  void setHeight(int height);

  @JsProperty
  void setPayloadType(int payloadType);

  @JsProperty
  void setSpatialIndex(int spatialIndex);

  @JsProperty
  void setSynchronizationSource(double synchronizationSource);

  @JsProperty
  void setTemporalIndex(int temporalIndex);

  @JsProperty
  void setTimestamp(double timestamp);

  @JsProperty
  void setWidth(int width);
}
