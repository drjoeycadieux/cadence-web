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

import { ROUTE_UPDATE_QUERY } from '../route/action-types';
import {
  WORKFLOW_LIST_ON_FILTER_CHANGE,
  WORKFLOW_LIST_ON_FILTER_MODE_CLICK,
} from './action-types';
import { WORKFLOW_LIST_FILTER_MODE } from './getter-types';

const actions = {
  [WORKFLOW_LIST_ON_FILTER_CHANGE]: ({ dispatch }, payload) =>
    dispatch(ROUTE_UPDATE_QUERY, payload),
  [WORKFLOW_LIST_ON_FILTER_MODE_CLICK]: ({ dispatch, getters }) => {
    const filterMode =
      getters[WORKFLOW_LIST_FILTER_MODE] === 'advanced' ? 'basic' : 'advanced';

    dispatch(ROUTE_UPDATE_QUERY, { filterMode });
  },
};

export default actions;
