// Copyright (c) 2021 Uber Technologies Inc.
//
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { connect } from 'vuex-connect';
import { SETTINGS_WORKFLOW_HISTORY_IS_SUBMIT_ENABLED } from './getterTypes';
import {
  SETTINGS_WORKFLOW_HISTORY_ON_CHANGE_VALUE,
  SETTINGS_WORKFLOW_HISTORY_ON_MOUNTED,
  SETTINGS_WORKFLOW_HISTORY_ON_SUBMIT,
} from './mutationTypes';

const gettersToProps = {
  isSubmitEnabled: SETTINGS_WORKFLOW_HISTORY_IS_SUBMIT_ENABLED,
};

const lifecycle = {
  mounted: ({ commit }) => commit(SETTINGS_WORKFLOW_HISTORY_ON_MOUNTED),
};

const stateToProps = {
  graphEnabled: state => state.settingsWorkflowHistory.graphEnabled,
};

const mutationsToEvents = {
  onChange: SETTINGS_WORKFLOW_HISTORY_ON_CHANGE_VALUE,
  onSubmit: SETTINGS_WORKFLOW_HISTORY_ON_SUBMIT,
};

export default connect({
  gettersToProps,
  lifecycle,
  mutationsToEvents,
  stateToProps,
});
