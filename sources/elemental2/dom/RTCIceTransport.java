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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCIceTransport extends EventTarget {
  @JsFunction
  public interface OngatheringstatechangeFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnselectedcandidatepairchangeFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnstatechangeFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsProperty
  String getComponent();

  @JsProperty
  String getGatheringState();

  JsArray<RTCIceCandidate> getLocalCandidates();

  @Nullable RTCIceParameters getLocalParameters();

  @JsProperty
  RTCIceTransport.@Nullable OngatheringstatechangeFn getOngatheringstatechange();

  @JsProperty
  RTCIceTransport.@Nullable OnselectedcandidatepairchangeFn getOnselectedcandidatepairchange();

  @JsProperty
  RTCIceTransport.@Nullable OnstatechangeFn getOnstatechange();

  JsArray<RTCIceCandidate> getRemoteCandidates();

  @Nullable RTCIceParameters getRemoteParameters();

  @JsProperty
  String getRole();

  @Nullable RTCIceCandidatePair getSelectedCandidatePair();

  @JsProperty
  String getState();

  @JsProperty
  void setOngatheringstatechange(
      RTCIceTransport.@Nullable OngatheringstatechangeFn ongatheringstatechange);

  @JsProperty
  void setOnselectedcandidatepairchange(
      RTCIceTransport.@Nullable OnselectedcandidatepairchangeFn onselectedcandidatepairchange);

  @JsProperty
  void setOnstatechange(RTCIceTransport.@Nullable OnstatechangeFn onstatechange);
}
