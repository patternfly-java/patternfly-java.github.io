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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLLinkElement extends HTMLElement implements LinkStyle {
  public String as;
  public String charset;
  public String crossOrigin;
  public boolean disabled;
  public String fetchPriority;
  public String href;
  public String hreflang;

  @JsProperty(name = "import")
  public @Nullable Document import_;

  public String media;
  public String rel;
  public DOMTokenList resources;
  public String rev;
  public @Nullable StyleSheet sheet;
  public String target;
  public String type;

  @JsProperty
  public native @Nullable StyleSheet getSheet();

  @JsProperty
  public native void setSheet(@Nullable StyleSheet sheet);
}
