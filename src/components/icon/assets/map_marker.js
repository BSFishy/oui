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
const OuiIconMapMarker = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.55 14.224a.502.502 0 0 0 .897 0l4-8a.5.5 0 0 0 .053-.235 4.672 4.672 0 0 0-.084-.705 5.538 5.538 0 0 0-.505-1.512C11.189 2.362 9.906 1.5 8 1.5c-1.906 0-3.19.862-3.91 2.272-.248.485-.41.998-.506 1.512-.058.31-.08.554-.084.705a.5.5 0 0 0 .053.235l3.997 8ZM8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3.493.895c.009-.106.027-.253.06-.429.079-.424.213-.848.413-1.238C5.537 3.138 6.487 2.5 8 2.5c1.513 0 2.463.638 3.02 1.728.2.39.334.814.413 1.238.033.176.051.323.06.43L8 12.881 4.507 5.895Z" />
  </svg>
);
export const icon = OuiIconMapMarker;
