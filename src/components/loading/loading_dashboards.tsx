/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, FunctionComponent } from 'react';
import classNames from 'classnames';
import { CommonProps, keysOf } from '../common';

const sizeToClassNameMap = {
  m: 'ouiLoadingDashboards--medium',
  l: 'ouiLoadingDashboards--large',
  xl: 'ouiLoadingDashboards--xLarge',
  xxl: 'ouiLoadingDashboards--xxLarge',
};

export const SIZES = keysOf(sizeToClassNameMap);

export interface OuiLoadingDashboardsProps {
  size?: keyof typeof sizeToClassNameMap;
}

export const OuiLoadingDashboards: FunctionComponent<
  CommonProps & HTMLAttributes<HTMLDivElement> & OuiLoadingDashboardsProps
> = ({ size = 'm', className, ...rest }) => {
  const classes = classNames(
    'ouiLoadingDashboards',
    sizeToClassNameMap[size],
    className
  );

  return (
    <span className={classes} {...rest}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M75.7374 37.5C74.4878 37.5 73.4748 38.513 73.4748 39.7626C73.4748 58.3813 58.3813 73.4748 39.7626 73.4748C38.513 73.4748 37.5 74.4878 37.5 75.7374C37.5 76.987 38.513 78 39.7626 78C60.8805 78 78 60.8805 78 39.7626C78 38.513 76.987 37.5 75.7374 37.5Z"
            fill="#005EB8"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 40 40"
            to="359.9 40 40"
            dur="1.5s"
            repeatCount="indefinite"
            values="0 40 40; 15 40 40; 340 40 40; 359.9 40 40"
            keyTimes="0; .3; .7; 1"
          />
        </g>
        <path
          d="M62.0814 52C64.2572 48.4505 66.3615 43.7178 65.9475 37.0921C65.0899 23.3673 52.6589 12.9554 40.9206 14.0837C36.3253 14.5255 31.6068 18.2712 32.026 24.9805C32.2082 27.8961 33.6352 29.6169 35.9544 30.9399C38.1618 32.1992 40.9978 32.9969 44.2128 33.9011C48.0962 34.9934 52.6009 36.2203 56.0631 38.7717C60.2125 41.8296 63.0491 45.3743 62.0814 52Z"
          fill="#003B5C"
        />
        <path
          d="M17.9186 28C15.7428 31.5495 13.6385 36.2822 14.0525 42.9079C14.9101 56.6327 27.3411 67.0446 39.0794 65.9163C43.6747 65.4745 48.3932 61.7288 47.974 55.0195C47.7918 52.1039 46.3647 50.3831 44.0456 49.0601C41.8382 47.8008 39.0022 47.0031 35.7872 46.0989C31.9038 45.0066 27.3991 43.7797 23.9369 41.2283C19.7875 38.1704 16.9509 34.6257 17.9186 28Z"
          fill="#005EB8"
        />
      </svg>
    </span>
  );
};
