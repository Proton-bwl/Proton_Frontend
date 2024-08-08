interface FeeToken {
  denom: string;
  low_gas_price: number;
  average_gas_price: number;
  high_gas_price: number;
}

interface StakingToken {
  denom: string;
}

interface Version {
  name: string;
  recommended_version: string;
  compatible_versions: string[];
  cosmos_sdk_version: string;
  consensus: {
    type: string;
    version: string;
  };
  cosmwasm_version: string;
  cosmwasm_enabled: boolean;
  ibc_go_version: string;
  next_version_name: string;
  proposal?: number;
  height?: number;
  binaries?: {
    'linux/amd64': string;
  };
}

interface ChainInfo {
  $schema: string;
  chain_name: string;
  status: string;
  network_type: string;
  pretty_name: string;
  chain_type: string;
  chain_id: string;
  bech32_prefix: string;
  website: string;
  daemon_name: string;
  node_home: string;
  key_algos: string[];
  slip44: number;
  fees: {
    fee_tokens: FeeToken[];
  };
  staking: {
    staking_tokens: StakingToken[];
  };
  codebase: {
    git_repo: string;
    recommended_version: string;
    compatible_versions: string[];
    binaries: {
      'linux/amd64': string;
    };
    cosmos_sdk_version: string;
    consensus: {
      type: string;
      version: string;
    };
    cosmwasm_version: string;
    cosmwasm_enabled: boolean;
    ibc_go_version: string;
    genesis: {
      genesis_url: string;
    };
    versions: Version[];
  };
  logo_URIs: {
    png: string;
    svg: string;
  };
  description: string;
  peers: {
    seeds: Array<{
      id: string;
      address: string;
      provider: string;
    }>;
    persistent_peers: Array<{
      id: string;
      address: string;
      provider: string;
    }>;
  };
  apis: {
    rpc: Array<{
      address: string;
      provider: string;
    }>;
    rest: Array<{
      address: string;
      provider: string;
    }>;
    grpc: Array<{
      address: string;
      provider: string;
    }>;
  };
  explorers: Array<{
    kind: string;
    url: string;
    tx_page: string;
    account_page: string;
  }>;
  images: Array<{
    png: string;
    svg: string;
    theme: {
      primary_color_hex: string;
      background_color_hex: string;
      circle: boolean;
    };
  }>;
}

declare global {
  export const neutron_chainInfo: ChainInfo;
}
