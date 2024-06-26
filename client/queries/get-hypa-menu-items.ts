import { MenuItem } from '@hypa-apps/mega-menu-builder/dist/types';

export const getHypaMenuItems = async (storeHash: string, menuCode: string): Promise<MenuItem[]> => {
  const path = `https://megamenu.hypaapps.com/megamenubuilder/${storeHash}/${menuCode}`;

  try {
    const response = await fetch(path);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const data = (await response.json()) as { data: MenuItem[] };

    return data.data;
  } catch (error) {
    return [];
  }
};