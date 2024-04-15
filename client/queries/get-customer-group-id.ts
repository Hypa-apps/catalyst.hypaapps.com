import { cache } from 'react';

import { getSessionCustomerId } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/generated';

import { revalidate } from '../revalidate-target';

const GET_CUSTOMER_GROUP_ID_QUERY = graphql(`
  query getCustomerGroupId {
    customer {
      customerGroupId
    }
  }
`);

export const getCustomerGroupId = cache(async () => {
  const customerId = await getSessionCustomerId();

  const response = await client.fetch({
    document: GET_CUSTOMER_GROUP_ID_QUERY,
    variables: {},
    customerId,
    fetchOptions: { next: { revalidate } },
  });

  const customerGroupId = response.data.customer?.customerGroupId;

  if (!customerGroupId) {
    return null;
  }

  return customerGroupId;
});
