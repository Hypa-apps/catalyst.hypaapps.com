'use client';

import { StoreLocator, useStoreLocator } from '@hypa-apps/store-locator';
import '@hypa-apps/store-locator/dist/css/store-locator.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function OurStores() {
  const { locations, allTags, active, isLoading } = useStoreLocator(
    process.env.NEXT_PUBLIC_BIGCOMMERCE_STORE_HASH ?? '',
    1,
  );

  return (
    <div className="my-10">
      <StoreLocator
        active={active}
        allTags={allTags}
        isLoading={isLoading}
        locations={locations}
        mapboxApiKey={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      />
    </div>
  );
}
