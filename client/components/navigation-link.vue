<script>
// Copyright (c) 2017-2021 Uber Technologies Inc.
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

export default {
  name: 'navigation-link',
  props: ['exact', 'icon', 'id', 'label', 'to'],
};
</script>

<template>
  <router-link
    class="navigation-link"
    :class="icon"
    :exact="exact"
    :id="id"
    :to="to"
  >
    {{ label }}
  </router-link>
</template>

<style lang="stylus">
a.navigation-link {
  display: inline-block;
  padding: 11px 18px;
  transition: all 400ms ease;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 4px solid transparent;

  &:before {
    font-family: 'uber-icons';
    margin-right: 5px;
  }

  &.router-link-active {
    border-bottom-color: #11939a;
  }
}
</style>