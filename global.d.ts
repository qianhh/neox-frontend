import type { EssentialDappsChainConfig } from 'src/features/marketplace/types/client';
import type { MultichainConfig } from 'src/features/multichain/types/client';
import type { WalletProvider } from 'src/features/web3-wallet/types/wallet-provider';
import 'vitest-fetch-mock';

declare global {
  export interface Window {
    ethereum?: WalletProvider | undefined;
    ga?: {
      getAll: () => Array<{ get: (prop: string) => string }>;
    };
    abkw: string;
    __envs: Record<string, string>;
    __multichainConfig?: MultichainConfig;
    __essentialDappsChains?: { chains: Array<EssentialDappsChainConfig> };
    __ucCmp?: {
      showSecondLayer: () => void;
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
