/*
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import PermalinkConstructor from "./PermalinkConstructor";

export const host = "matrix.to";
export const baseUrl = `https://${host}`;

/**
 * Generates matrix.to permalinks
 */
export default class SpecPermalinkConstructor extends PermalinkConstructor {
    constructor() {
        super();
    }

    forEvent(roomId: string, eventId: string, serverCandidates: string[]): string {
        return `${baseUrl}/#/${roomId}/${eventId}${this.encodeServerCandidates(serverCandidates)}`;
    }

    forRoom(roomIdOrAlias: string, serverCandidates: string[]): string {
        return `${baseUrl}/#/${roomIdOrAlias}${this.encodeServerCandidates(serverCandidates)}`;
    }

    forUser(userId: string): string {
        return `${baseUrl}/#/${userId}`;
    }

    forGroup(groupId: string): string {
        return `${baseUrl}/#/${groupId}`;
    }

    encodeServerCandidates(candidates: string[]) {
        if (!candidates || candidates.length === 0) return '';
        return `?via=${candidates.map(c => encodeURIComponent(c)).join("&via=")}`;
    }
}
