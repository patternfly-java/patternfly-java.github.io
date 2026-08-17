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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCIceCandidate {
  public @Nullable String address;
  public String candidate;
  public @Nullable String component;
  public @Nullable String foundation;
  public @Nullable Double port;
  public @Nullable Double priority;
  public @Nullable String protocol;
  public @Nullable String relatedAddress;
  public @Nullable Double relatedPort;
  public int sdpMLineIndex;
  public @Nullable String sdpMid;
  public @Nullable String tcpType;
  public @Nullable String type;
  public @Nullable String usernameFragment;

  public RTCIceCandidate() {}

  public RTCIceCandidate(RTCIceCandidateInit candidateInitDict) {}
}
