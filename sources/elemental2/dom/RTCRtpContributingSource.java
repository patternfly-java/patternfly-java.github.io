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

import elemental2.core.JsDate;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpContributingSource {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetTimestampUnionType {
    @JsOverlay
    static RTCRtpContributingSource.@Nullable GetTimestampUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default @Nullable JsDate asJsDate() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsDate() {
      return (Object) this instanceof JsDate;
    }
  }

  @JsProperty
  double getAudioLevel();

  @JsProperty
  double getCaptureTimestamp();

  @JsProperty
  @Nullable Double getRtpTimestamp();

  @JsProperty
  double getSenderCaptureTimeOffset();

  @JsProperty
  @Nullable Double getSource();

  @JsProperty
  RTCRtpContributingSource.@Nullable GetTimestampUnionType getTimestamp();

  @JsProperty
  void setAudioLevel(double audioLevel);

  @JsProperty
  void setCaptureTimestamp(double captureTimestamp);

  @JsProperty
  void setRtpTimestamp(@Nullable Double rtpTimestamp);

  @JsProperty
  void setSenderCaptureTimeOffset(double senderCaptureTimeOffset);

  @JsProperty
  void setSource(@Nullable Double source);

  @JsProperty
  void setTimestamp(RTCRtpContributingSource.@Nullable GetTimestampUnionType timestamp);

  @JsOverlay
  default void setTimestamp(JsDate timestamp) {
    setTimestamp(
        Js.<RTCRtpContributingSource.@Nullable GetTimestampUnionType>uncheckedCast(timestamp));
  }

  @JsOverlay
  default void setTimestamp(double timestamp) {
    setTimestamp(
        Js.<RTCRtpContributingSource.@Nullable GetTimestampUnionType>uncheckedCast(timestamp));
  }
}
