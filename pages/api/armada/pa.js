export const punkArmada = {
    address: '0xe50765deb1429475b28f871571b9417e9fd0e542',
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'baseURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'string', name: '_hash', type: 'string' }],
        name: 'hashToMetadata',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'string', name: '_hash', type: 'string' }],
        name: 'hashToSVG',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'isRevealed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'maxSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'punk4762',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
          { internalType: 'uint256', name: '_salePrice', type: 'uint256' }
        ],
        name: 'royaltyInfo',
        outputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'uint256', name: '', type: 'uint256' }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'settings',
        outputs: [
          { internalType: 'bool', name: 'isContractSealed', type: 'bool' },
          { internalType: 'string', name: 'description', type: 'string' }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenIdToHash',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenIdToSVG',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'layerIndex', type: 'uint256' },
          { internalType: 'uint256', name: 'traitIndex', type: 'uint256' }
        ],
        name: 'traitData',
        outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'layerIndex', type: 'uint256' },
          { internalType: 'uint256', name: 'traitIndex', type: 'uint256' }
        ],
        name: 'traitDetails',
        outputs: [
          {
            components: [
              { internalType: 'string', name: 'name', type: 'string' },
              { internalType: 'string', name: 'mimetype', type: 'string' },
              { internalType: 'uint256', name: 'occurrence', type: 'uint256' },
              { internalType: 'address', name: 'dataPointer', type: 'address' },
              { internalType: 'bool', name: 'hide', type: 'bool' }
            ],
            internalType: 'struct Trait',
            name: '',
            type: 'tuple'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    ]
  }
  