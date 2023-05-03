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
const OuiIconLogoCloud = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        d="M12.37 18.352c.032-.01.066-.014.1-.023A6 6 0 0 1 18 10V0C9.163 0 2 7.164 2 16c0 2.793.72 5.417 1.976 7.702a18.947 18.947 0 0 1 8.393-5.349"
        className="ouiIcon__fillNegative"
      />
      <path
        fill="#0080D5"
        d="M18 0A15.959 15.959 0 0 0 5.717 5.75a16.006 16.006 0 0 0 7.541 5.032c.71.22 1.477.135 2.146-.188A5.94 5.94 0 0 1 18 10a5.94 5.94 0 0 1 2.596.594c.669.323 1.436.408 2.146.188a16.01 16.01 0 0 0 7.541-5.032A15.959 15.959 0 0 0 18 0"
      />
      <path
        fill="#00BFB3"
        d="M22.742 21.218c-.71-.22-1.478-.135-2.146.188A5.947 5.947 0 0 1 18 22a5.94 5.94 0 0 1-2.596-.594c-.669-.323-1.436-.408-2.146-.188a16.006 16.006 0 0 0-7.54 5.032A15.959 15.959 0 0 0 18 32c4.936 0 9.348-2.236 12.283-5.75a16.016 16.016 0 0 0-7.54-5.032"
      />
    </g>
  </svg>
);
export const icon = OuiIconLogoCloud;
