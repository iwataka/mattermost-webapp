// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {AnnouncementBarMessages} from 'utils/constants.jsx';
import {dismissNotice} from 'actions/views/notice';
import {getBasePath} from 'selectors/general';

import ConfigurationBar from './configuration_bar.jsx';

function mapStateToProps(state) {
    return {
        basePath: getBasePath(state),
        dismissedExpiringLicense: Boolean(state.views.notice.hasBeenDismissed[AnnouncementBarMessages.LICENSE_EXPIRING]),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            dismissNotice,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationBar);
