import { StoreLocatorResult } from '@hypa-apps/store-locator';

export const getHypaStoreLocations = async (
  storeHash: string,
  channelId: string,
  groupId?: string,
): Promise<StoreLocatorResult> => {
  const path = `https://storelocator.hypaapps.com/store-locator/${storeHash}/${channelId}${groupId ? `/${groupId}` : ''}`;

  // eslint-disable-next-line no-console
  console.log(`Store locator API path: ${path}`);

  try {
    const response = await fetch(path);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const data = (await response.json()) as { data: StoreLocatorResult };

    return data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Store locator error', error);

    return {
      locations: [],
      allTags: [],
      active: false,
    };
  }
};