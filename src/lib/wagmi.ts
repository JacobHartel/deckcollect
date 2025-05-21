import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { chains } from '../lib/chains';

export const config = getDefaultConfig({
  appName: 'DeckCollect',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
  chains,
  ssr: true,
});