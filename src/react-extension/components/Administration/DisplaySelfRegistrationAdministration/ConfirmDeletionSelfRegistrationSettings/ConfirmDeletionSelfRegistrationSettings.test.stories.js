/**
 *import { PropTypes } from 'prop-types';
 *import defaultProps from '../DisplaySelfRegistrationAdministration.test.data';
 * Passcend ~ Open source password manager for teams
 * Based on Passbolt CE (https://www.passbolt.com)
 * Copyright (c) Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         3.8.3
 */

import {defaultProps} from "../ConfirmSaveSelfRegistrationSettings/ConfirmSaveSelfRegistrationSettings.test.data";
import ConfirmDeletionSelfRegistrationSettings from "./ConfirmDeletionSelfRegistrationSettings";


export default {
  title: 'Components/Administration/ConfirmDeletionSelfRegistrationSettings',
  component: ConfirmDeletionSelfRegistrationSettings,
  parameters: {
    css: "api_main"
  }
};

export const Default = {
  args: defaultProps()
};
