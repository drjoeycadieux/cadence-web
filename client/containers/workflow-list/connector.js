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
import {
  ROUTE_QUERY_FILTER_MODE,
  ROUTE_QUERY_QUERY_STRING,
  ROUTE_QUERY_WORKFLOW_ID,
  ROUTE_QUERY_WORKFLOW_NAME,
} from '../route/getter-types';
import { WORKFLOW_LIST_STATUS, WORKFLOW_LIST_STATUS_NAME } from './getter-types';

const gettersToProps = {
  filterMode: ROUTE_QUERY_FILTER_MODE,
  queryString: ROUTE_QUERY_QUERY_STRING,
  status: WORKFLOW_LIST_STATUS,
  statusName: WORKFLOW_LIST_STATUS_NAME,
  workflowId: ROUTE_QUERY_WORKFLOW_ID,
  workflowName: ROUTE_QUERY_WORKFLOW_NAME,
};

export default connect({
  gettersToProps,
});