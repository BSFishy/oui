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
const OuiIconPartial = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.664 14.871a7 7 0 0 1-2.42-12.778.5.5 0 0 1 .612.06c.456.431 8.216 8.212 8.98 9.002a.5.5 0 0 1 .063.618 7.002 7.002 0 0 1-7.235 3.098Zm6.168-3.312a1961.733 1961.733 0 0 0-8.377-8.4 6 6 0 1 0 8.378 8.4Zm2.095-2.548a.5.5 0 1 1-.99-.144c.01-.066.01-.066.018-.133a6.007 6.007 0 0 0-.034-1.714.5.5 0 1 1 .987-.163c.108.655.122 1.326.04 1.999l-.021.155Zm-1.273-5.138a.5.5 0 1 1-.808.59 6.026 6.026 0 0 0-1.304-1.308.5.5 0 0 1 .59-.806 7.026 7.026 0 0 1 1.522 1.524ZM9.169 1.098a.5.5 0 1 1-.166.986 6.105 6.105 0 0 0-1.849-.026.5.5 0 0 1-.14-.99 7.02 7.02 0 0 1 2.155.03Z" />
  </svg>
);
export const icon = OuiIconPartial;
