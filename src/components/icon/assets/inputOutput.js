/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconInputOutput = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 13.999v-2.99h1V15H0V1h11v3.999h-1V2.001H1v11.998z" />
    <path d="M4.5 10V9H11v1zM13 9.5l3-3-3-3z" />
    <path d="M5.5 6.5v6l-3-3zM7 7V6h6.5v1z" />
  </svg>
);
export const icon = OuiIconInputOutput;
