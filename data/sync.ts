import {synchronize} from '@nozbe/watermelondb/sync';
import {database} from './database';

const SYNC_API_URL = 'http://192.168.0.113:3333/sync';
export async function sync() {
  await synchronize({
    database,
    pullChanges: async ({lastPulledAt}) => {
      const response = await fetch(
        `${SYNC_API_URL}?lastPulledAt=${lastPulledAt}`,
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }

      const {changes, timestamp} = await response.json();
      return {changes, timestamp};
    },
    pushChanges: async ({changes, lastPulledAt}) => {
      const response = await fetch(SYNC_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({changes, lastPulledAt}),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
  });
}
