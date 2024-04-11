import { StoreLocator } from '@hypa-apps/store-locator';
import '@hypa-apps/store-locator/dist/css/store-locator.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { getHypaStoreLocations } from '~/client/queries/get-hypa-store-locations';



export default async function OurStores() {
  const { locations, allTags, active } = await getHypaStoreLocations(
    process.env.NEXT_PUBLIC_BIGCOMMERCE_STORE_HASH ?? '',
    process.env.NEXT_PUBLIC_BIGCOMMERCE_CHANNEL_ID ?? '1',
  );

  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="my-6 my-8 text-4xl font-black lg:my-8 lg:text-5xl">Our stores</h1>

      <div className="my-10">
        <StoreLocator
          active={active}
          allTags={allTags}
          locations={locations}
          mapboxApiKey={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        />
      </div>
    </div>
  );
}
