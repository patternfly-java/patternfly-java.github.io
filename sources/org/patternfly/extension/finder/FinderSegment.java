/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.extension.finder;

/**
 * A lightweight segment of a {@link FinderPath} containing only string identifiers. Use this type for encoding, parsing, and
 * routing. For live references to {@link FinderColumn} and {@link FinderItem}, use {@link ResolvedFinderSegment}.
 */
public class FinderSegment {

    public final String columnId;
    public final String itemId;

    FinderSegment(String columnId, String itemId) {
        this.columnId = columnId;
        this.itemId = itemId;
    }

    @Override
    public String toString() {
        return itemId != null ? columnId + "=" + itemId : columnId;
    }
}
