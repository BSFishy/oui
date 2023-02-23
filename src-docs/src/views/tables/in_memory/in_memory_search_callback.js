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

import React, { useState } from 'react';
import { formatDate } from '../../../../../src/services/format';
import { createDataStore } from '../data_store';
import {
  OuiInMemoryTable,
  OuiLink,
  OuiHealth,
} from '../../../../../src/components';

/*
Example user object:

{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}

Example country object:

{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}
*/

let debounceTimeoutId;
let requestTimeoutId;
const store = createDataStore();

export const Table = () => {
  const [items, setItems] = useState(store.users);
  const [isLoading, setIsLoading] = useState(false);

  const onQueryChange = ({ query }) => {
    clearTimeout(debounceTimeoutId);
    clearTimeout(requestTimeoutId);

    debounceTimeoutId = setTimeout(() => {
      setIsLoading(true);

      requestTimeoutId = setTimeout(() => {
        const items = store.users.filter((user) => {
          const normalizedName = `${user.firstName} ${user.lastName}`.toLowerCase();
          const normalizedQuery = query.text.toLowerCase();
          return normalizedName.indexOf(normalizedQuery) !== -1;
        });

        setIsLoading(false);
        setItems(items);
      }, 1000);
    }, 300);
  };

  const search = {
    onChange: onQueryChange,
    box: {
      incremental: true,
    },
  };

  return (
    <OuiInMemoryTable
      items={items}
      loading={isLoading}
      columns={[
        {
          field: 'firstName',
          name: 'First Name',
          sortable: true,
          truncateText: true,
        },
        {
          field: 'lastName',
          name: 'Last Name',
          truncateText: true,
        },
        {
          field: 'github',
          name: 'Github',
          render: (username) => (
            <OuiLink href="https://oui.opensearch.org/latest/" target="_blank">
              {username}
            </OuiLink>
          ),
        },
        {
          field: 'dateOfBirth',
          name: 'Date of Birth',
          dataType: 'date',
          render: (date) => formatDate(date, 'dobLong'),
          sortable: true,
        },
        {
          field: 'nationality',
          name: 'Nationality',
          render: (countryCode) => {
            const country = store.getCountry(countryCode);
            return `${country.flag} ${country.name}`;
          },
        },
        {
          field: 'online',
          name: 'Online',
          dataType: 'boolean',
          render: (online) => {
            const color = online ? 'success' : 'danger';
            const label = online ? 'Online' : 'Offline';
            return <OuiHealth color={color}>{label}</OuiHealth>;
          },
          sortable: true,
        },
      ]}
      search={search}
      pagination={true}
      sorting={true}
    />
  );
};
