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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpEncodingParameters {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetRidUnionType {
    @JsOverlay
    static RTCRtpEncodingParameters.@Nullable GetRidUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay
  static RTCRtpEncodingParameters create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  @Nullable Boolean getActive();

  @JsProperty
  @Nullable Boolean getAdaptivePtime();

  @JsProperty
  @Nullable Double getCodecPayloadType();

  @JsProperty
  @Nullable String getDtx();

  @JsProperty
  @Nullable Double getMaxBitrate();

  @JsProperty
  @Nullable Double getMaxFramerate();

  @JsProperty
  @Nullable String getNetworkPriority();

  @JsProperty
  @Nullable String getPriority();

  @JsProperty
  @Nullable Double getPtime();

  @JsProperty
  RTCRtpEncodingParameters.@Nullable GetRidUnionType getRid();

  @JsProperty
  @Nullable Double getScaleResolutionDownBy();

  @JsProperty
  void setActive(@Nullable Boolean active);

  @JsProperty
  void setAdaptivePtime(@Nullable Boolean adaptivePtime);

  @JsProperty
  void setCodecPayloadType(@Nullable Double codecPayloadType);

  @JsProperty
  void setDtx(@Nullable String dtx);

  @JsProperty
  void setMaxBitrate(@Nullable Double maxBitrate);

  @JsProperty
  void setMaxFramerate(@Nullable Double maxFramerate);

  @JsProperty
  void setNetworkPriority(@Nullable String networkPriority);

  @JsProperty
  void setPriority(@Nullable String priority);

  @JsProperty
  void setPtime(@Nullable Double ptime);

  @JsProperty
  void setRid(RTCRtpEncodingParameters.@Nullable GetRidUnionType rid);

  @JsOverlay
  default void setRid(String rid) {
    setRid(Js.<RTCRtpEncodingParameters.@Nullable GetRidUnionType>uncheckedCast(rid));
  }

  @JsOverlay
  default void setRid(double rid) {
    setRid(Js.<RTCRtpEncodingParameters.@Nullable GetRidUnionType>uncheckedCast(rid));
  }

  @JsProperty
  void setScaleResolutionDownBy(@Nullable Double scaleResolutionDownBy);
}
