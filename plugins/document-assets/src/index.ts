//
// Copyright © 2022, 2023 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import document from '@hcengineering/document'
import { loadMetadata } from '@hcengineering/platform'

const icons = require('../assets/icons.svg') as string // eslint-disable-line
loadMetadata(document.icon, {
  DocumentApplication: `${icons}#documentapplication`,
  NewDocument: `${icons}#newdocument`,
  Document: `${icons}#document`,
  Add: `${icons}#add`,
  Blank: `${icons}#blank`,
  Videofile: `${icons}#videofile`,
  Library: `${icons}#library`,
  Teamspace: `${icons}#teamspace`,
  Backlinks: `${icons}#backlinks`,
  History: `${icons}#history`,
  Star: `${icons}#star`,
  Starred: `${icons}#starred`
})