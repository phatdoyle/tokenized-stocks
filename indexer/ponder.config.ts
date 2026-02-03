import { createConfig, loadBalance, rateLimit } from "ponder";
import { http, fallback } from "viem";
import { OndoGMTokenABI } from "./abis/OndoGMTokenABI";
import { RobinhoodTokenABI } from "./abis/RobinhoodTokenABI";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      // Load balance requests between Chainstack and Alchemy RPC providers
      rpc: loadBalance([
       // rateLimit(http("https://ethereum-mainnet.core.chainstack.com/63e5326cba291681b63ea2f934b29cb4"), { requestsPerSecond: 30 }), //ChainStack RPC
        rateLimit(http("https://eth-mainnet.g.alchemy.com/v2/TljSBj78y_f7Eky0LTdU2"), { requestsPerSecond: 90 }), //Alchemy RPC
      ]),
    },
    arbitrum: {
      id: 42161,
      // Use environment variable or fallback to a public RPC endpoint
      // For production, set PONDER_RPC_URL_42161 to your preferred RPC provider
      rpc: loadBalance([
        //rateLimit(http("https://arbitrum-mainnet.infura.io/v3/3f152de5c51d4490b60883598c1d8418"), { requestsPerSecond: 30 }), //Infura RPC
        rateLimit(http("https://arb-mainnet.g.alchemy.com/v2/TljSBj78y_f7Eky0LTdU2"), { requestsPerSecond: 90 }), //Alchemy RPC
      ]),
      
    },
  },
  contracts: {
    AAPLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x14c3abF95Cb9C93a8b82C1CdCB76D72Cb87b2d4c",
      startBlock: 22993942,
    },
    ABNBon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb035c3d5083bdc80074F380aeBc9Fcb68aBa0A28",
      startBlock: 22993678,
    },
    ABTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3859385363f7BB4Dfe42811cCF3F294FcD41dd1D",
      startBlock: 23036002,
    },
    ACNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xAbA9Ae731Aad63335C604E5f6E6A5db2e05f549d",
      startBlock: 23036438,
    },
    ADBEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7042a8fFc7c7049684BfBc2fcb41b72380755a43",
      startBlock: 23036121,
    },
    AGGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfF7CF16aA2fFc463b996DB2f7B7cf0130336899D",
      startBlock: 23035494,
    },
    AMDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0C1f3412A44Ff99E40bF14e06e5Ea321aE7B3938",
      startBlock: 22993947,
    },
    AMZNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xbb8774FB97436d23d74C1b882E8E9A69322cFD31",
      startBlock: 22993693,
    },
    APOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4D21aFfD27183B07335935F81A5C26b6A5A15355",
      startBlock: 23036552,
    },
    APPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xd5C5B2883735Fa9B658Dd52e2FCC8d7c0f1A42Ce",
      startBlock: 23036547,
    },
    ARMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x5Bf1b2A808598C0eF4Af1673a5457d86fE6d7B3d",
      startBlock: 22993957,
    },
    ASMLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xE51bA774ebF6392c45Bf1d9E6b334d07992460d3",
      startBlock: 23035274,
    },
    AVGOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0d54D4279B9E8c54cD8547c2C75A8Ee81A0BcaE8",
      startBlock: 23035878,
    },
    AXPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2Bc7Ff0C5dA9F1a4A51F96e77C5b0F7165DC06d2",
      startBlock: 22993967,
    },
    BABAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x41765F0FCddC276309195166C7A62AE522FA09ef",
      startBlock: 22993737,
    },
    BAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x57270D35A840BC5C094da6FBeCA033FB71eA6Ab0",
      startBlock: 23036223,
    },
    BIDUon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x9d4C6AD12B55E4645b585209F90Cc26614061E91",
      startBlock: 23036293,
    },
    BLKon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7a0F89c1606f71499950AA2590d547c3975B728E",
      startBlock: 22996654,
    },
    CMGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x25018520138bbaB60684AD7983D4432E8B8E926B",
      startBlock: 22993756,
    },
    COINon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xF042cfa86cf1D598a75Bdb55c3507a1F39f9493b",
      startBlock: 22993761,
    },
    COSTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0c8276E4FeC072cf7854Be69c70F7773D1610857",
      startBlock: 22941908,
    },
    CRCLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3632DEa96A953C11dac2f00b4A05a32CD1063fAE",
      startBlock: 22993779,
    },
    CRMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x55720eF5b023Fd043AE5F8D2e526030207978950",
      startBlock: 23036131,
    },
    CSCOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x980a1001ee94e54142b231f44C7CA7c9DF71FBe1",
      startBlock: 23035768,
    },
    CVXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8F3E41b378ae010c46d255F36bFC1D303b52dceb",
      startBlock: 23035897,
    },
    DASHon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x241958c86c7744d15d5f6314BA1Ea4c81DDA2896",
      startBlock: 22993779,
    },
    DISon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xc3D93B45249E8E06cfeB01d25A96337E8893265d",
      startBlock: 22993992,
    },
    EEMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x77A1a02e4a888ADA8620b93C30dE8a41E621126c",
      startBlock: 23036168,
    },
    EFAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4111b60bc87F2Bd1e81E783E271D7F0ec6EE088B",
      startBlock: 23035638,
    },
    EQIXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x73d2ccEE12C120E7DA265a2dE9d9f952a0101b4f",
      startBlock: 23035638,
    },
    FIGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x073E7a0669833d356fa88ca65CC6D454EFaAa3c5",
      startBlock: 23170097,
    },
    FUTUon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x5Ce215d9c37a195DF88e294a06B8396C296B4e15",
      startBlock: 23035225,
    },
    GEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xD904bCf89B7CedF5c89f9Df7e829191D695F847E",
      startBlock: 23036388,
    },
    GMEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x71d24Baeb0A033ec5F90FF65C4210545AF378D97",
      startBlock: 22994289,
    },
    GOOGLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xbA47214eDd2bb43099611b208f75E4b42FDcfEDc",
      startBlock: 22993997,
    },
    GSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xdB57d9C14e357Fc01E49035a808779Df41E9B4e2",
      startBlock: 23035323,
    },
    HIMSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xCa468554e5C0423Ee858fe3942c9568C51FcAa79",
      startBlock: 23035240,
    },
    HOODon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x998f02A9E343EF6E3E6f28700d5A20F839fD74E6",
      startBlock: 22993997,
    },
    HYGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xeD3618Bb8778F8eBBe2f241Da532227591771D04",
      startBlock: 22994002,
    },
    IAUon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4f0CA3df1c2e6b943cf82E649d576ffe7B2fABCF",
      startBlock: 23035180,
    },
    IBMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x25d3f236B2d61656eebdeA86Ac6D42168e340011",
      startBlock: 22993809,
    },
    IEFAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xFEFf7a377A86462F5a2A872009722C154707F09e",
      startBlock: 23035523,
    },
    IEMGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xcDD60D15125bf3362b6838D2506b0Fa33bc1a515",
      startBlock: 23144610,
    },
    IJHon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xFd50Fc4E3686a8DA814c5C3D6121d8aB98a537F0",
      startBlock: 23036542,
    },
    INTCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xFdA09936DbD717368De0835bA441d9E62069d36f",
      startBlock: 23035338,
    },
    INTUon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x6cc0afD51CE4Cb6920B775F3D6376Ab82b9A93Bb",
      startBlock: 23036188,
    },
    ITOTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0692481C369E2BDc728A69ae31b848343a4567Be",
      startBlock: 23035343,
    },
    IVVon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x62cA254a363dc3c748e7E955c20447aB5bF06fF7",
      startBlock: 23036413,
    },
    IWFon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8d05432C2786e3F93f1a9A62b9572DBf54f3ea06",
      startBlock: 23035264,
    },
    IWMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x070D79021dD7e841123cB0CF554993bF683c511D",
      startBlock: 23035538,
    },
    IWNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x9DCf7f739B8C0270E2FC0Cc8D0DaBe355a150dBa",
      startBlock: 23036359,
    },
    JDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xdeB6B89088cA9B7d7756087c8a0F7C6DF46f319C",
      startBlock: 23035463,
    },
    JPMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x03C1EC4CA9DBb168E6Db0DeF827c085999CBffaF",
      startBlock: 22993814,
    },
    KOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x74a03d741226f738098C35da8188E57acA50d146",
      startBlock: 23036507,
    },
    LINon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x01B19c68f8A9eE3a480dA788ba401cFAbdf19B93",
      startBlock: 23035260,
    },
    LLYon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf192957AE52dB3eb088654403CC2eDeD014ae556",
      startBlock: 23035673,
    },
    LMTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x691b126cF619707Ed5d16CaB1B27C000aa8De300",
      startBlock: 22993814,
    },
    MAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xA29dC2102dfc2a0A4A5dCb84Af984315567c9858",
      startBlock: 23035604,
    },
    MARAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4604b0b581269843ac7a6b70A5FC019E7762e511",
      startBlock: 23036318,
    },
    MCDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4C82c8cD9a218612DCe60b156B73A36705645e3b",
      startBlock: 23035323,
    },
    MELIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2816169A49953C548BfEb3948dCF05c4A0E4657D",
      startBlock: 23036965,
    },
    METAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x59644165402b611b350645555B50Afb581C71EB2",
      startBlock: 22994299,
    },
    MRVLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xF404E5f887dBd5508e16a1198fCDD5DE1A4296B8",
      startBlock: 23035688,
    },
    MSFTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xB812837b81a3a6b81d7CD74CfB19A7f2784555E5",
      startBlock: 23035240,
    },
    MSTRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xCabD955322dfbf94C084929ac5E9Eca3fEB5556F",
      startBlock: 23035229,
    },
    MUon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x050362Ab1072Cb2Ce74d74770E22A3203Ad04ee5",
      startBlock: 22994027,
    },
    NFLXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x032deC3372F25C41EA8054B4987a7c4832CDB338",
      startBlock: 23025352,
    },
    NKEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xD8e26FcC879b30cB0a0B543925a2B3500f074D81",
      startBlock: 23035829,
    },
    NOWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8bCF9012f4b0c1C3D359eDb7133C294f82f80790",
      startBlock: 23036233,
    },
    NVDAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2D1F7226Bd1F780AF6B9A49DCC0aE00E8Df4bDEE",
      startBlock: 22994329,
    },
    NVOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x28151F5888833D3d767C4d6945a0Ee50D1B193E3",
      startBlock: 22993858,
    },
    ORCLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8a23C6BaadB88512b30475C83Df6A63881e33e1E",
      startBlock: 22993858,
    },
    PANWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x34bfdFF25F0fdA6d3ad0c33F1e06c0D40bD68885",
      startBlock: 23036303,
    },
    PBRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xD08DDb436e731f32455Fe302723eE0FD2E9E8706",
      startBlock: 23035633,
    },
    PEPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3cE219D498D807317F840f4CB0f03FA27dd65046",
      startBlock: 23036398,
    },
    PFEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x06954faa913fA14c28Eb1b2e459594F22f33f3dE",
      startBlock: 22992408,
    },
    PGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x339ce23a355ed6D513DD3e1462975C4eCD86823a",
      startBlock: 22941979,
    },
    PLTRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0c666485b02F7A87d21AdD7AEb9F5e64975AA490",
      startBlock: 22994047,
    },
    PYPLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4EFD92F372898B57F292De69fCe377dd7D912bDd",
      startBlock: 23036364,
    },
    QBTSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3807562a482b824c08a564dfefcc471806d3e00a",
      startBlock: 23035478,
    },
    QCOMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xE3419710c1f77D44B4DaB02316d3f048818C4E59",
      startBlock: 22994057,
    },
    QQQon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0e397938C1Aa0680954093495B70A9F5e2249aBa",
      startBlock: 23036388,
    },
    RDDTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xA9431d354cFAD3c6B76E50f0e73b43D48Be80CD0",
      startBlock: 22994067,
    },
    RIOTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x21deafD91116FCe9fE87C8f15Bde03f99a309b72",
      startBlock: 22994067,
    },
    SBETon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfDb46864A7C476F0914c5E82CdED3364a9F56F8a",
      startBlock: 23141055,
    },
    SBUXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf15FbC1349ab99ABAd63db3f9A510BF413bE3BeF",
      startBlock: 22993917,
    },
    SHOPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x908266C1192628371Cff7AD2F5Eba4dE061a0ac5",
      startBlock: 22993917,
    },
    SLVon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xF3e4872e6a4cF365888D93b6146a2bAA7348F1A4",
      startBlock: 23035878,
    },
    SMCIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2ca12a3F9635fD69C21580def14F25C210cA9612",
      startBlock: 23036041,
    },
    SNOWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x5D1a9a9B118fF19721e0111f094f2360b6Ef7A2f",
      startBlock: 23036293,
    },
    SPGIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xbc843b147DB4C7E00721d76037b8b92e13AfE13f",
      startBlock: 23036462,
    },
    SPOTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x590F21186489cA1612f49a4B1ff5c66acD6796A9",
      startBlock: 22993922,
    },
    SPYon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xFeDC5f4a6c38211c1338aa411018DFAf26612c08",
      startBlock: 23036403,
    },
    TIPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2Df38cA485D01fC15e4FD85847ed26b7EF871c1c",
      startBlock: 22994082,
    },
    TLTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x992651BFeB9A0DCC4457610E284ba66D86489d4d",
      startBlock: 22994082,
    },
    TMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xaB02fc332e9278eBCbbC6B4a8038050c01D15F69",
      startBlock: 22994748,
    },
    TSLAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf6b1117ec07684D3958caD8BEb1b302bfD21103f",
      startBlock: 22982520,
    },
    TSMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3Cafdbfe682aec17d5acE2f97A2f3ab3dCf6a4A9",
      startBlock: 22994753,
    },
    UBERon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x5Bcd8195E3Ef58f677aeF9eBC276B5087c027050",
      startBlock: 22994454,
    },
    UNHon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x075756F3b6381a79633438fAA8964946bf40163d",
      startBlock: 23036298,
    },
    USDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xAcE8E719899F6E91831B18AE746C9A965c2119F1",
      startBlock: 22941555,
    },
    Von: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xaC37c20C1d0E5285035e056101a64e263Ff94a41",
      startBlock: 22994489,
    },
    WFCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x4AD2118Da8a65eaa81402A3d583FEF6eE76BDf3F",
      startBlock: 23036537,
    },
    WMTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x82106347dDbB23cE44Cf4cE4053Ef1adf8b9323B",
      startBlock: 23036121,
    },
    AALon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xbe8eb7b51a08f9d52bb6c8c7eca699f0f89bfc02",
      startBlock: 24182069,
    },
    ABBVon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7c7378143a9c8839e0502e2178f058f46c6ea504",
      startBlock: 24185326,
    },
    ACHRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x9cfa08002d606e638fe91941be725e1b970b84a6",
      startBlock: 24298361,
    },
    ADIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2ddc2391cc89e3e716a938f089ae755174cfdf1f",
      startBlock: 24318961,
    },
    AMATon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x6be935eadc71c49c414b1175985946ee40365c67",
      startBlock: 24197720,
    },
    AMCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x592643a667633bca51cb2387c98b6de6ce549a45",
      startBlock: 24192460,
    },
    AMGNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x1c5fa55eade69ae98571059332520f73733c2d82",
      startBlock: 24318926,
    },
    ANETon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x20e113e9235df6a2a9bfc6f244c2ccc380c8f546",
      startBlock: 24318961,
    },
    BACon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x576e9ca70e3a040c00d8139b0665a2b7b7b64844",
      startBlock: 24184013,
    },
    BBAIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x1b8d3e59b31981385c066ee0916ec964628ff1f9",
      startBlock: 24318961,
    },
    BILIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7e08ce07aca80cefe61ebbfa0cedfe5c7b07edb9",
      startBlock: 24182169,
    },
    BINCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x88703c1e71f44a2d329c99e8e112f7a4e7dd6312",
      startBlock: 24318935,
    },
    BLSHon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x334ccd8df4013bac99af8c5c61d3605b315302a0",
      startBlock: 22926532,
    },
    BMNRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x33483a58079b4225b10e57958ca28ad7b9cdbaf7",
      startBlock: 24245030,
    },
    BTGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8ac6ad49b3344024834f373f3ca491f22ceb952e",
      startBlock: 24320333,
    },
    BZon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x858e985126543b5a066c4e8a5dab0249c1d683f7",
      startBlock: 22926532,
    },
    CATon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf719b02079e0faa5450392da2d3e11a1e5b0eadb",
      startBlock: 24248540,
    },
    CEGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x060505527c83e8bfeb9b4ff08248b82e688800f1",
      startBlock: 24180396,
    },
    CIFRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x24e5bc45d5b6cef6f38989ac33df587a3fc850cf",
      startBlock: 24278297,
    },
    CLOAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8cefd49b703de9c0486d9bf6cb559f0895268ee8",
      startBlock: 22926532,
    },
    CLOIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xe8b09e8175aecb35a171fa059647434fe47f114c",
      startBlock: 22926532,
    },
    COFon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3d07c3161f355cb9e5b524bef8d113c96e0263ab",
      startBlock: 24184148,
    },
    Con: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xc46e7ef70d7cf8c17863a6b0b9be2af6a4c41abe",
      startBlock: 24318965,
    },
    COPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8e6a5338eac4b6fe8d51a7653fad3b9da755eea6",
      startBlock: 24199074,
    },
    COPXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x423a63dfe8d82cd9c6568c92210aa537d8ef6885",
      startBlock: 24178782,
    },
    CPNGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfa9f0bf8baa9a3d5e0a8e5c0aeaf186acabef63d",
      startBlock: 24318937,
    },
    CRWDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xcac9aafb2cf51645ae1ab4fb1f35f07d42437f80",
      startBlock: 24184115,
    },
    CVNAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfe4ec50e0413148021d2f50d114cc44de6ffbf23",
      startBlock: 24318964,
    },
    DBCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x20224080ad516769723c9a4a18325fc4e8c9ab5d",
      startBlock: 24292076,
    },
    DEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x32d7c413fd3477e86b8ec6b0bb8f3ac510eafaae",
      startBlock: 24318965,
    },
    DGRWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x81eb954936a7062d1758fc0e6e3b88d42d9c361c",
      startBlock: 22926532,
    },
    DNNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7aa59a63d1d0c435a08bc96e11bef2e95ab66c40",
      startBlock: 24198847,
    },
    FIGRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xc2dbfe026f17e7bbc17a9e41f9b8d69531887d47",
      startBlock: 24241136,
    },
    Fon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf72936fa8afc808c99eb76e620a98ddc6a7a53d1",
      startBlock: 24184171,
    },
    FTGCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xacf3fecaa787f268351a86409c3bd3b96ef924fb",
      startBlock: 22926532,
    },
    GEMIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb51db25c920c16f2865c37011c3eec91db946b07",
      startBlock: 24184186,
    },
    GLDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x423d42e505e64f99b6e277eb7ed324cc5606f139",
      startBlock: 24221895,
    },
    GRABon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x1c174711f3fd63c4165d6f296b3eb19d17fde94a",
      startBlock: 24327182,
    },
    GRNDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xe5b26ba77e6a4d79a7c54a5296d81254269d9700",
      startBlock: 23035852,
    },
    HDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x7dbd435aa4ecab5471cfcef4527a022fef0b7e1c",
      startBlock: 22926532,
    },
    IRENon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0b59fdb1a233a7477ea14061004b9dd776e73cb3",
      startBlock: 24177507,
    },
    ISRGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x2691b13fca1e02322685b9554b5ae0f5f3f05c55",
      startBlock: 24188078,
    },
    JAAAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x219a1b27baa08d72fac836665a3b752f3c9acbbc",
      startBlock: 24290410,
    },
    JNJon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xdd0e1e6162666a210905ffe8d368661b313c00e9",
      startBlock: 24318963,
    },
    KLACon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xa637ae510cb50e61236a89ac480b93b8c3bccc46",
      startBlock: 24318961,
    },
    LIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb6e362a39db703f0f7cf582c9fc043a51624e53d",
      startBlock: 24195598,
    },
    LOWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x84328d8b85019fdcecf4c82fbe076bf350fc0cab",
      startBlock: 22926532,
    },
    LRCXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x21be23f5bf87a749670c088f6dee26760f1ab80f",
      startBlock: 24217663,
    },
    MPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x75846a2b2eeee6575ac775f9984be54fd1d08189",
      startBlock: 24217930,
    },
    MRKon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xdc8a7db05ea704227d56f5d4a4b77a2d1bba29c0",
      startBlock: 24318935,
    },
    MRNAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xa2c1c0b4683a871187d4565eb63abf9aef5947ee",
      startBlock: 24282722,
    },
    MTZon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x5cb95099a2c7e3c8187fbca6efe5ba222b5ba820",
      startBlock: 22926532,
    },
    NEEon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf46ba88694cd7933ca28be84ee787ad5732e856b",
      startBlock: 24298398,
    },
    NIKLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xbf54eb503bb350583d11f4348086dc3608fa245c",
      startBlock: 24198909,
    },
    NIOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xee2542f442a5ed8008e2fe3590e14f90db69f70d",
      startBlock: 24183753,
    },
    NTESon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3d1cf8692a6f2fc9048a9cc1a06abf77f3465f0a",
      startBlock: 24184208,
    },
    OKLOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf0372e226553af4f343b44111a789f87a9fa427a",
      startBlock: 24197373,
    },
    ONDSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x818234860a647d480b9bbcc9a47a23889f2ec900",
      startBlock: 24276171,
    },
    ONon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xa52b2d6ca1cd9b1e8b931645428380c340caef9a",
      startBlock: 22926532,
    },
    OPENon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb22d83e228c4266075ec75c32acc3bc059b6f248",
      startBlock: 22926532,
    },
    OPRAon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb40afd1d55ea61fc1a6fbe093b817b673c8e78d7",
      startBlock: 22926532,
    },
    OSCRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x244efb92f76a57da49b5f71045dce3e546e13106",
      startBlock: 22926532,
    },
    OXYon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xeedc48205852e9d83ea5ca92fa8656597788601f",
      startBlock: 24197952,
    },
    PALLon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0ce36d199bd6851788e03392568849394cbde722",
      startBlock: 24178756,
    },
    PCGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x193fdf644451cc394b28b9cec2f5d32e2b4de515",
      startBlock: 22926532,
    },
    PDBCon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x46c0a02a877c1412cb32b57028b2f771c0364a7e",
      startBlock: 22926532,
    },
    PDDon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xcc40965d3621362c3ee1dd946ba98d6a708ea86b",
      startBlock: 24182105,
    },
    PINSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xc017c622cd05698580e2decd0f97d4a17dab70f9",
      startBlock: 24184381,
    },
    PLUGon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xe7ee911172bdd557b9ab6be7701f86bbc8fd772e",
      startBlock: 24191591,
    },
    PSQon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x9ebd34d99cc3a45b39cafc14ad7994263fa2be56",
      startBlock: 24274999,
    },
    REMXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x1140043f02d8ee34b10eae2e32ae921cda1459ee",
      startBlock: 24191500,
    },
    RGTIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfdfdf5db2f4a72cb754ffa8896ea012dc2cc0f5e",
      startBlock: 24196271,
    },
    RIVNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x04d94914cd1d7ff749efedee764335777225b962",
      startBlock: 24199916,
    },
    RTXon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x67c5902f5210f62f37157cd9c735c693164c1378",
      startBlock: 24191878,
    },
    SCHWon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xe737f948bdfe3beae9423292853ec0579173cebb",
      startBlock: 24338086,
    },
    SGOVon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x8de5d49725550f7b318b2fa0f1b1f118e98e8d0f",
      startBlock: 24234068,
    },
    SNAPon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xb2924278cc92e60db9b673d6a311d7a331dd703d",
      startBlock: 22926532,
    },
    SOFIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x9f2e3eb0160117c56b07652fe66a08a48b5bd7b5",
      startBlock: 24318962,
    },
    SOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x99aa107e55250a9fe52bb4b5541a59239eb6d974",
      startBlock: 22926532,
    },
    SOUNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x966db065199a3edea2228c6e5eb6ac49ff251acc",
      startBlock: 24244357,
    },
    SQQQon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0a00c19246fc41b2524d56c87ec44ce8b30ba0f8",
      startBlock: 24274993,
    },
    TCOMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x398f7f759380f3d309b9fc0e6cb3d36e0d67818d",
      startBlock: 24292094,
    },
    TLNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xc80c91bc6215e1333ea98314b8671d6e26c58470",
      startBlock: 24197977,
    },
    TMOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x60808f2a0d035e16f57e9043842bd1bfbda24fa2",
      startBlock: 24318935,
    },
    TMUSon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xdeb3c23f93349229823a006657cfe1a6552b6340",
      startBlock: 24184301,
    },
    Ton: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x3361a73262199873b74d6835760a59b8817fa592",
      startBlock: 24184241,
    },
    TQQQon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xa45cd7ac9865b9539166ebaf2abc362df4736580",
      startBlock: 24184806,
    },
    TXNon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x58fc9d573ea773ef9a25c3de66f990b87ee5f50e",
      startBlock: 24318963,
    },
    USFRon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xfb82561a955bf59b9263301126af490d3799e231",
      startBlock: 24318963,
    },
    USOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x1f5fc5c3c8b0f15c7e21af623936ff2b210b6415",
      startBlock: 24278185,
    },
    VRTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0752163d221d3d5d4b6e98bd616b22bd2b453964",
      startBlock: 24318965,
    },
    VSTon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf1573edddb75bf7ce165f142a17ed6b5e7f5aa13",
      startBlock: 24243607,
    },
    VTIon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x57b392146848c6321bb2a3d4358df1bdeacdc62a",
      startBlock: 24318937,
    },
    VTVon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x84e8f1b9b40dd1832925702459d12ffb14d97bf3",
      startBlock: 24241004,
    },
    VZon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x0e3d889d5b857c3e6eb361b9c9ae35bb7ddbd254",
      startBlock: 24218892,
    },
    WULFon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x110cae53912c2ed9bf279cd70b3b699e26c79e58",
      startBlock: 22926532,
    },
    XOMon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0xf05ad9840924ea6f977ebccb3b1da87e31dcd0b4",
      startBlock: 24194603,
    },
    XYZon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x6cc41275ef02b4eeccc04fc4424849a96f3272aa",
      startBlock: 24234080,
    },
    BTGOon: {
      chain: "mainnet",
      abi: OndoGMTokenABI,
      address: "0x510Dd21055188Eda378714DE3bb5591Ffa0CC468",
      startBlock: 24292012,
    },
"GMErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98602aed96587ea199fac7da5ca95527f180abb6",
      startBlock: 353162113, // TODO: Update with actual start block
    },
    "OPENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ece2ff10dfb235e199c10bf84c368e0e2e18fc3",
      startBlock: 388126880, // TODO: Update with actual start block
    },
    "CAVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1292593d0b507ced88f874448550290a404159d9",
      startBlock: 353852097, // TODO: Update with actual start block
    },
    "MAGSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x576b8b4765e43812199aa6b6042c71cd3e69d1ab",
      startBlock: 353853773, // TODO: Update with actual start block
    },
    "SGOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9838f4cb186abc7f35c12e38414b24b9bc058c1a",
      startBlock: 353161888, // TODO: Update with actual start block
    },
    "KOLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1580a4c1a1d7922bb4684f01bf5ed15b7dcaed9f",
      startBlock: 356262753, // TODO: Update with actual start block
    },
    "KWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9db559b4291cea82c5b6aa7c7c6d09a6e8fa818e",
      startBlock: 353850845, // TODO: Update with actual start block
    },
    "NVDArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd798fb9fcc5208fb935e974cd3f673b95c9ee69e",
      startBlock: 351609723, // TODO: Update with actual start block
    },
    "SPXUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xad18b8d344ca1a38b008a7a2079374b031e99cdc",
      startBlock: 355575001, // TODO: Update with actual start block
    },
    "VGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x43d5cd66aff7ddf3e734ef790e924b7dd59bc4b4",
      startBlock: 353505399, // TODO: Update with actual start block
    },
    "NFLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5af9038f6aa63de88633e158a23ea8cd93a3783",
      startBlock: 351781991, // TODO: Update with actual start block
    },
    "FSLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8617952391e5c027803d6b69c67f55c3113f12dd",
      startBlock: 353162805, // TODO: Update with actual start block
    },
    "LYFTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xedc4ab4996f44592ad23df732c1779358a8d93f2",
      startBlock: 353509190, // TODO: Update with actual start block
    },
    "VSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdddaba31f9301315ee6d122b9907e2a5a69c4d84",
      startBlock: 353508668, // TODO: Update with actual start block
    },
    "MSFTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x44f9bce486090d3f3e26768e3ece4c864616526f",
      startBlock: 351782093, // TODO: Update with actual start block
    },
    "VUGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72808083bbc9bd89affc9574bd8940505ee27eed",
      startBlock: 353507609, // TODO: Update with actual start block
    },
    "AIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6948668bd487f6ada6ae4b67f7627d8364a39ce0",
      startBlock: 353505965, // TODO: Update with actual start block
    },
    "CLSKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66b716857c99c85346613bd8620ec3559cd9b9fd",
      startBlock: 353161295, // TODO: Update with actual start block
    },
    "BACrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x24ca98cc46a9bf6f727e54b00efb26ed8f0a2065",
      startBlock: 353506028, // TODO: Update with actual start block
    },
    "KEYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56ae7846e90c0b252e1580810aaaf17eeadae27e",
      startBlock: 355573345, // TODO: Update with actual start block
    },
    "XOMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeccd8e7bf85e81379fe4336b7efe4de3a3df8d03",
      startBlock: 353507199, // TODO: Update with actual start block
    },
    "AMZNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc78d6a55457f075b429bca8f50b961019e0888a3",
      startBlock: 353162670, // TODO: Update with actual start block
    },
    "VYMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x88f5eeb15d42faab7bc165e9f8c4a98e0dc43f9c",
      startBlock: 413379156, // TODO: Update with actual start block
    },
    "LQDArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb4d38a3f8960c1a97fa50d3d2733949d11308dcd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VEUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdcd1b7cf8b99dc3dc00a734bc71efc9477b7cbfc",
      startBlock: 415837168, // TODO: Update with actual start block
    },
    "PCVXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9eb09891e34996ffdb776a9b3bc50c753fb0358",
      startBlock: 420649455, // TODO: Update with actual start block
    },
    "PIIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa211fad11753a4a8c7ed3dfd44e9d0e5e41f49be",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x639cbf8e9fedb98812d20ca58ef4c84588ab0097",
      startBlock: 411648947, // TODO: Update with actual start block
    },
    "AGGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x36b7b5132b26c3f31002b1db3bd3c4fa21896a47",
      startBlock: 422016474, // TODO: Update with actual start block
    },
    "NANCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3c357e4deb03e657fe88f83995363dbd608ddf47",
      startBlock: 420977739, // TODO: Update with actual start block
    },
    "MBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3d5f2c2e71faedf5da685dae2095fbc5fe68aff",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VDErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa73dfc7c2790999e2d377c69611e6ec091972065",
      startBlock: 420634486, // TODO: Update with actual start block
    },
    "HODLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf1141bc96ad0cca4186023d9dbd77bd53a2f020",
      startBlock: 424098365, // TODO: Update with actual start block
    },
    "METDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeaab60dded22492b13522258862029419f4b8dd5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPUUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8d49b7e3a5c04bc3ce2bd37e866b20b139ef3d9",
      startBlock: 410944468, // TODO: Update with actual start block
    },
    "SNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8d750cdb8d761e7af3b7de8fb487dec1bd708035",
      startBlock: 418568387, // TODO: Update with actual start block
    },
    "SLVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0d88eef8a5c512e146766ba290c29d1530b230ff",
      startBlock: 423048926, // TODO: Update with actual start block
    },
    "VCITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5dd2a4f047eba1a5b3ccd80590b8073fb9357fee",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ADTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1b94a62381864d2b8bd1ac0423411929361edaca",
      startBlock: 411637931, // TODO: Update with actual start block
    },
    "HIBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdfd65831b491ad1cb07f8efee917180726dd71a3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VIRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2adf3c3d9459b4a7eb31a7689796a0d892585fde",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "YBITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeeb3123a33f547eb34f5b68d3e3bb6843b8631d6",
      startBlock: 411290228, // TODO: Update with actual start block
    },
    "SDIVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfde0a48da552c194d709d0f432139d819203df91",
      startBlock: 410945374, // TODO: Update with actual start block
    },
    "FBCGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54a416c8dc9ee287ec4ff348feae6c729456e54b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XPAYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8fd660ef886b298d2bbe4aae8558a6a58f7704cd",
      startBlock: 424435509, // TODO: Update with actual start block
    },
    "RYLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x89ed48d6f20a2a637f8b103e5696c14c7b227f16",
      startBlock: 422012002, // TODO: Update with actual start block
    },
    "USHYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb17a2e83c217e3d49fbe3a26fc2360d3c9ad013e",
      startBlock: 411289999, // TODO: Update with actual start block
    },
    "UMACrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c8abb94abb67000162fc2b8f8816accd78d236d",
      startBlock: 421321974, // TODO: Update with actual start block
    },
    "VVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x14dae4a6631eba0938ea77e432119031bb73a4fc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ALLWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8d2cc061da79f6826ef06f03df64f3de222f06a4",
      startBlock: 415825523, // TODO: Update with actual start block
    },
    "ITArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb1fee1dbaab5379da238483bc0ee699f64bdef45",
      startBlock: 418559045, // TODO: Update with actual start block
    },
    "XIFRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6fe049dd3466bf03faf2146bdf1df5f02466bc24",
      startBlock: 423744912, // TODO: Update with actual start block
    },
    "BLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0f1399ea28ef289940f2784160ca4ef198ff1107",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WOOFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34507bf23d2ea05fdc8b52711bb6b9afe9f79c46",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ZSLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbc20828f667989f33f1519b488dceb18478cebc8",
      startBlock: 411984754, // TODO: Update with actual start block
    },
    "ARGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc0f94a7bc1847fd547a17a434607396c4901317f",
      startBlock: 415854876, // TODO: Update with actual start block
    },
    "VGUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5e3dee5b01db55ecdec65427986fd798eb600bd1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SAVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x71387f3c243e1943408d7e15abf4fc0cd346925d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HOODrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1141b205e7f89ef2d322476e17dd14b0286ae263",
      startBlock: 353161727, // TODO: Update with actual start block
    },
    "CTRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60dc3b4ae38e4307640155ca212c52621cf17a51",
      startBlock: 415855604, // TODO: Update with actual start block
    },
    "VRSKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1a6eca4afcdecbab2bb6404f8e2c7c084187237",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IDXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcdf7a022c718b240d2bc9f989941bea9246f5b61",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JKHYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9fd18026fbb4e36df5d264739a492f4d9a6f67e9",
      startBlock: 403680144, // TODO: Update with actual start block
    },
    "CTVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2337087975f54e63e442285cb61f3d504a1c6a34",
      startBlock: 420647968, // TODO: Update with actual start block
    },
    "GME.WSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc34077293bf730dc9576c1c8c2db618a01964998",
      startBlock: 387401284, // TODO: Update with actual start block
    },
    "SBLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51fb4dddb816a84a936eedb2256fab441f71cefd",
      startBlock: 389156706, // TODO: Update with actual start block
    },
    "GLIBArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x31ba41519026720158825c84b871ada765af2610",
      startBlock: 388164242, // TODO: Update with actual start block
    },
    "INDProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xadac1c560950087790c20ea9ece2ba4617c3afb0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LBRDArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x71d28a31b1068c73478f1a810a7275d0b2baee08",
      startBlock: 389156747, // TODO: Update with actual start block
    },
    "PRUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c33de1396f1035c42cf9c6f688f10ae634ded1b",
      startBlock: 410947610, // TODO: Update with actual start block
    },
    "EXPDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x43e81f0c4ed28d4d6301fc66c182ee3e673fbcd9",
      startBlock: 409913691, // TODO: Update with actual start block
    },
    "MSIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x624785814f3b1688aad590a37b04b27504d9f360",
      startBlock: 408870341, // TODO: Update with actual start block
    },
    "CLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65b6b494a56daf2ba89ecdf17c0c85b552dfb078",
      startBlock: 402292737, // TODO: Update with actual start block
    },
    "STErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfad8b77feab9db942cb4c7cdc108edbd53b6b2a9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AIZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe8adf1525a24407d0a9e6585170e46c3d2e71e59",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69a470c65f751ea1bc0140624d5be7517bf56efa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a796bc21cad091a613d7ca7c4a033625eae5041",
      startBlock: 420989929, // TODO: Update with actual start block
    },
    "BRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c66bef6ff26fc263f014200fc52012b9421d481",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c42f92c3ed8631593106b8499c2fc37a969d42c",
      startBlock: 423749585, // TODO: Update with actual start block
    },
    "TPRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66a08727ad147da0f352044ba1b0834eab99626e",
      startBlock: 412331229, // TODO: Update with actual start block
    },
    "AEProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c5ab82767af806d3e86c59614cce8f94cf5ecfd",
      startBlock: 401946268, // TODO: Update with actual start block
    },
    "RJFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3bd40e7d4ba742165838fb23f33eed76a3b5f566",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x32a28badc16a511bc4d9c4cb07d16e20f223f8e2",
      startBlock: 407185481, // TODO: Update with actual start block
    },
    "CMErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc253e9e40a7310cd8067730f32079fd470dae3d7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MSCIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a1b7085557a92bb0778400f122e91bb078e3819",
      startBlock: 401257111, // TODO: Update with actual start block
    },
    "SYFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa4ddaf25aad64cbade047c0fbbb9edf9f7390217",
      startBlock: 418216782, // TODO: Update with actual start block
    },
    "AMErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdcd2303fb2a6e0064c4b3075b86209d297355921",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "YUMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05f734f3fb2dbef595a81119fd674a4cb101e7db",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbbeb66255fd78aedd258f4f975b3f910a2b52767",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "USD_ETFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4197dccd7344655c3d10d4b2bf51a8e3b4bb223b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OPENLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe626925201b52f7725d7abf142834d090b0638b0",
      startBlock: 403787481, // TODO: Update with actual start block
    },
    "AMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x241d6f612ef5209c92a446e5ce05f680c4077c2b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TFCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb69870de985f5fcb0d6735440e301c38459a26b7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LKQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02a57f57ea2ff58e1ec4b7766c00067d61ada43c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "METrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c0aa0c9df64dcb3f389b5b9f18bd538c79a83fd",
      startBlock: 409568438, // TODO: Update with actual start block
    },
    "APDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x270026a4ac8e8bf0aa6d28460636638662c78cfc",
      startBlock: 419592352, // TODO: Update with actual start block
    },
    "GDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4484d610ad49c5521fb86cc5e154d9fd9a39759b",
      startBlock: 409217000, // TODO: Update with actual start block
    },
    "MLMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7fd7440b2c6ac891cd1e22d043dc3305ee998047",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x28f41e8419803d4353b6b9fde886cd897a3cfdfa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb732b8e0cbb0fb78285bd9089ba08264efe1c862",
      startBlock: 409224749, // TODO: Update with actual start block
    },
    "DHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9f71ef54bcc1bbbb88cca84b2bbb768e049cbd9e",
      startBlock: 400262058, // TODO: Update with actual start block
    },
    "GRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe97495d8eaa229e8059a0885184599d4c19da22",
      startBlock: 411636023, // TODO: Update with actual start block
    },
    "BILSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d585050aad6fc90329f40a28ae1828b8efd7115",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MAGXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8a19b12e6316dc7cc227c1f87f22123477707095",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ASPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c162b0cbdb40bf04415aa5d4705976ea5b29562",
      startBlock: 415849630, // TODO: Update with actual start block
    },
    "VBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfeb8239a20d14b7fb3c99bef1e47d9b2da0a6854",
      startBlock: 416135803, // TODO: Update with actual start block
    },
    "XYLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2b6e84153b69092c76f0e3737c09483f3dc96948",
      startBlock: 412335413, // TODO: Update with actual start block
    },
    "BOTZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1298e39135489705a5d5f26969228d6fd6fa1611",
      startBlock: 415837059, // TODO: Update with actual start block
    },
    "ALGMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3da5bc51f726c10136743a40d3bb632b5a0a684e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IXUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x245971e0d7d80bc9e58de6bfe3f0b1a53b81834a",
      startBlock: 416136144, // TODO: Update with actual start block
    },
    "NTCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf79bfea01b322063ab5de359208f666e1c8b195f",
      startBlock: 411290056, // TODO: Update with actual start block
    },
    "ALLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98da519a6d4f3337ef27adf9cb16ac4f4ded32d8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CGDVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1347f6e1dce2d821e0eb9e5026b9aa18c72f408a",
      startBlock: 421682213, // TODO: Update with actual start block
    },
    "VXFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe3888707743744899668ae526fffebe24927ff39",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MTDRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9220425f015836934a354c92bccca74cb0f09ce0",
      startBlock: 417171090, // TODO: Update with actual start block
    },
    "GCTKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9eb42b5e9e28174bda34cf7d8bbfcc9e3a3520c0",
      startBlock: 416830920, // TODO: Update with actual start block
    },
    "TWAVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7e1172cc6076964daec7c1ce203b3fdb0783bfb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TDWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5617395f1399ec165bf77baab6d4d5f8356d7032",
      startBlock: 413376660, // TODO: Update with actual start block
    },
    "WUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc43a05412638531394d1b180df5d80b84b5720bc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KSCProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbdc22352bd8b0fa9b98f020fef012a66677d06c0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d4850571fa06bc6593de135d3d8171e8c2f8f18",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BYRNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x315e6189eaa795a476f731259a0e169e41078e74",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ARKQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb34a49bf0e889eece23b995ad0e51a82b4faaa4b",
      startBlock: 412332184, // TODO: Update with actual start block
    },
    "OBDCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe15913a7f23f26e19872a9940badfe8dd82fb487",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "QRVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x042a43e53e47918e72bcc2ed5fadbafa96370c38",
      startBlock: 419254379, // TODO: Update with actual start block
    },
    "TECHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5e277b864d3ae680545306c4b593993709f92d19",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x20e4b22770c3c4bbcefcf484c94f2b4787173251",
      startBlock: 404023598, // TODO: Update with actual start block
    },
    "VTRSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x90dc4a546b75073c584e209f435e01fbfee78811",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TRVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x735642b4098a2bc53d72606ae1bb8c2d509eff39",
      startBlock: 423750970, // TODO: Update with actual start block
    },
    "BALLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe95dc3d06059e3b43df54af6255472649b739a26",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OTISrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30a3986a2af01a2d6387f3ca1638f80fcfa8cf0d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x35f33c7828fd4f863610ea0a2c36e8ae9ba98010",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OPTTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa31e0174af73b9daf64293c8f8a24dfd506cd6be",
      startBlock: 413373589, // TODO: Update with actual start block
    },
    "SPHYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa2fd5a6d812c2abe9a5101459a48873d8cc98f56",
      startBlock: 423395384, // TODO: Update with actual start block
    },
    "PRCHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x856b6ca21ec861bac7c2e55dd4a97b526a4aa3ad",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HIBSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c97349fc79ac153a158308921baeb701c99f4d1",
      startBlock: 418231339, // TODO: Update with actual start block
    },
    "GLXGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19054c3d3442b2dccb7f50b759ba082127e4cf16",
      startBlock: 423057658, // TODO: Update with actual start block
    },
    "SGMOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3e3da1e8f670f77ff665aba72eeb8781ad04c72",
      startBlock: 418219887, // TODO: Update with actual start block
    },
    "VTIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf2a702f270946061758d10309db6bc2bda64a0c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PCSArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x344bc5c3aaced75df01bea9d62f41a9e11ef16ff",
      startBlock: 413417579, // TODO: Update with actual start block
    },
    "TREErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcce473d9a9c47797b7e3c176a4704b0e81468ddb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ATAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8f5fbc7d50a780a58135eea9981b690dc18e613",
      startBlock: 415823628, // TODO: Update with actual start block
    },
    "FIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe5a5a06aa8b97b8f048e7129264b94831431bb0",
      startBlock: 410951551, // TODO: Update with actual start block
    },
    "AGHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x539ee7312a1d1133466ec85a1e11c587588b678e",
      startBlock: 415803413, // TODO: Update with actual start block
    },
    "CPSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf3685dadeb26c0e8ec4712d628cd4fabc08fb2fe",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DAVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x53024d96f61040b6926af1a36e965c8f09a35829",
      startBlock: 422012707, // TODO: Update with actual start block
    },
    "MURrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefb6557839e09f2c5d5e81ac9c0f6329c885cb2a",
      startBlock: 424092548, // TODO: Update with actual start block
    },
    "CIVIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc05f056804efd64ca09e9043e3a6d1e2a47701ad",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TOIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6e5b0a1b4c59a34d64cbef650846279a277ddfff",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GSYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf48c85f96f45ebaca67f58c560288ab46cca2ba",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CPBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xda3bea31d96a9bf6f9db61732987fc300c579ba5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe458e9e4d9133a30e1397804a34a2b3075e47d12",
      startBlock: 423047210, // TODO: Update with actual start block
    },
    "BROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf7dd58854605b1bf4aebdac81b736549b6b3414",
      startBlock: 400262172, // TODO: Update with actual start block
    },
    "APHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3b55516392042d079dc2e53adf113b9b73f72e7",
      startBlock: 402644239, // TODO: Update with actual start block
    },
    "CMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xff850ae4d335b0e9538958310df36b29d3164d56",
      startBlock: 418573746, // TODO: Update with actual start block
    },
    "NTRSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4acc7ec5a62db6b272c44304216847324c53aa25",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SNArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbff562843de12deb2ddb3a2929c7ab9c205dca81",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PEGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdfc148fa11acaac9191e0c87eed956abec74c869",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IQVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05473a078e1896d69c60b5fff571668e5e5bd8cc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SOLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb845303aa57e2158b0248a427446f52640eba25",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ROKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf6380f43684d97e9f3dc9ef123d9be0597c72e34",
      startBlock: 408526901, // TODO: Update with actual start block
    },
    "CALMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfcabbb168916665ef7046a89a7d9c8a450a11658",
      startBlock: 420636168, // TODO: Update with actual start block
    },
    "AQNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf36f0410b5824eff93ab7278ed8a9e8a02e986ee",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EWJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8faa2c67935f9eae795e50ba4dbeabce1792b847",
      startBlock: 415801891, // TODO: Update with actual start block
    },
    "LUCYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x347b6604ea2d57fe761fa3dd4bb36281c8ea5ee0",
      startBlock: 419254493, // TODO: Update with actual start block
    },
    "BTCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5410007139b1426708a82766108872e96d95ba2",
      startBlock: 426865327, // TODO: Update with actual start block
    },
    "IOTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdea2b110d62adeb33550eabeba3c5ef84658caa4",
      startBlock: 421322116, // TODO: Update with actual start block
    },
    "DGROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd09a551e954f73a34db12fc18c150c71603b78a9",
      startBlock: 410949017, // TODO: Update with actual start block
    },
    "NBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0009bac66602a2a161eb3d1356e53b39dd8973d3",
      startBlock: 415851548, // TODO: Update with actual start block
    },
    "KOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7fdd1495b89b76db997ff6fb4a64c61e391d71b",
      startBlock: 418567738, // TODO: Update with actual start block
    },
    "VPGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc7406f26bae460e83aff911fd8f62aaa34ace28",
      startBlock: 424432133, // TODO: Update with actual start block
    },
    "AAProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30e96f3c3815db44aa1af46b812320a641de9532",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TRMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefbc861c3cf8fcd14a590dfedfb9919e3f7d4765",
      startBlock: 418565596, // TODO: Update with actual start block
    },
    "SVMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x00692ae893585e77a2f84684ae62f5ddea06ace6",
      startBlock: 411985277, // TODO: Update with actual start block
    },
    "SPTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa9b9fdde53523c9bf6a3077afd7fc11cc2e886f4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LTBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41c601e6ea622e4252d2e110db3181bcf17a26d8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RLMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7b062fd63b2c9278b66281985e61f7cc654e8d5",
      startBlock: 415804048, // TODO: Update with actual start block
    },
    "SANArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd14e6aba9f202ddb961cf52242f589df26e7422",
      startBlock: 419252408, // TODO: Update with actual start block
    },
    "SMTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd40c7ac30a4ee925982016ca698d1441aa3a4db6",
      startBlock: 415801917, // TODO: Update with actual start block
    },
    "ARTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3e0834d9b70f0ec970474287fe1a2cb3069052ae",
      startBlock: 411291524, // TODO: Update with actual start block
    },
    "CRMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c1647f16222d082065f05e51235033ab20da15f",
      startBlock: 419600357, // TODO: Update with actual start block
    },
    "COEProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf2a9400691904cac43852c77dc4686a9871b99fa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BMBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x46ffb599af5320d0b54d5e1d3b2daf9b065207be",
      startBlock: 426158997, // TODO: Update with actual start block
    },
    "MMYTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x538f0f2cc9de912641d24d50b3673f26fa4a2fb4",
      startBlock: 424094730, // TODO: Update with actual start block
    },
    "BABOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x326b70802ae5fcb78bdef008c36700ae26e8d5e9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5059236332706c1969de2d5afa20da7b099582f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BTCZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x23f8b2dd88df3307f7495fcd29605f7ec6e97ca6",
      startBlock: 410944910, // TODO: Update with actual start block
    },
    "LFMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3468a1234316e4952c37847320e1dee2a4e53ad9",
      startBlock: 411644823, // TODO: Update with actual start block
    },
    "SHLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9053b78a58f0c27a61b2315799dcba632f546076",
      startBlock: 409578311, // TODO: Update with actual start block
    },
    "EPSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02c1ebf6a0db01788cca45fd232ed25afebb819e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AVTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8e5a25b0b5b5aee650d7240410258ebdcdc09de2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SOBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2390c419fa145b21ae9d0cb6d4eb137912d12e61",
      startBlock: 415836481, // TODO: Update with actual start block
    },
    "FRSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2daf5ae2e2201c8418ca7d68b5f8e8ac4b5daa38",
      startBlock: 409584882, // TODO: Update with actual start block
    },
    "MKDWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x92fecd15f9f61fb696c5ef09ce91a140fcaded24",
      startBlock: 412338202, // TODO: Update with actual start block
    },
    "SHYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9cb6eb064a47ad8746a7dd4395089f09a38e8b42",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7e5840e481d7fd07c5d527f4375d89e4e7774ae8",
      startBlock: 409581923, // TODO: Update with actual start block
    },
    "TFLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8697305fb61172127cac9d37cdb865b57d9fcd19",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SVOLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd32297e5243f734fbedca2f98d09b1a9a46e7bb4",
      startBlock: 421679089, // TODO: Update with actual start block
    },
    "SNOArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6451f7390c08d7b2a0ab8f3657e947b92e83f375",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CNHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x78a22e4a329cf60992fb6b58e5cbe04934caa20b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EVLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97c167543d74dcb1ccbf679bd6e6657da2bd630e",
      startBlock: 426167198, // TODO: Update with actual start block
    },
    "PENNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4414e2967945c63cc54e08234bebc2f6f3ab48b2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FNGUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x89f4bb6278b02ce883a5f14ce0584f5a15139164",
      startBlock: 394320522, // TODO: Update with actual start block
    },
    "HOOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8eca55d6bb7f0b31de9a1536ca20d94cb952131d",
      startBlock: 394325453, // TODO: Update with actual start block
    },
    "SDOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa77aec7346a151d4ee6b44c51f28e4669debc70c",
      startBlock: 394321674, // TODO: Update with actual start block
    },
    "DAYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x91be43bb11cf185907adcdff7ab3fafd2671e273",
      startBlock: 397806398, // TODO: Update with actual start block
    },
    "LVSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42b8b82317fe067a386d376d8e84c4988875abcf",
      startBlock: 408526237, // TODO: Update with actual start block
    },
    "PNWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x03ff3d5807d5fd92caa0e19af250c1bc787c6167",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HIGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea172287546f2d5cd78dcce2a24031e2b4618d21",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CDWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfc1dd994baf647ba9718e7d881f9c4d4b7ae457f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TROWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9f8ecab390ef3f22cf361d160208c6c307393b65",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NWSArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x03eb0d309bdc347698be133b3ff069627b6358cb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xde10a42d1ab2f431811f84658e0af80ecf6dea9c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SRErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x286766e26d6f035f6c21dc63a4f3def17d47b113",
      startBlock: 401946953, // TODO: Update with actual start block
    },
    "PSXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x287a21569ebf6a34da6169eccbfbbd31801f56b8",
      startBlock: 418562138, // TODO: Update with actual start block
    },
    "AJGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x223e7dc33cf32c85ef0407220560197ffc0d33fa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbb3d7f11dd7fd353ffc031e4fefe0552632d6d2f",
      startBlock: 423049491, // TODO: Update with actual start block
    },
    "BARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9626aef6ba8ac33a01d204020e34023171fda188",
      startBlock: 382013197, // TODO: Update with actual start block
    },
    "NEMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6431450b3de5f27151aa5027e30c8c68857e4d15",
      startBlock: 391898800, // TODO: Update with actual start block
    },
    "PSIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcfedb5e71a8d35d8f1d309c27a858388b43489f4",
      startBlock: 397798688, // TODO: Update with actual start block
    },
    "BTCIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9e2af622070acb354db756903d1c11ec080773d5",
      startBlock: 391560689, // TODO: Update with actual start block
    },
    "XRPTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x596582117058483a78ea52ea888664bcd285bda1",
      startBlock: 392250768, // TODO: Update with actual start block
    },
    "SPYMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56a022ba00e93121086f93262fc007baa6b1edd5",
      startBlock: 394325788, // TODO: Update with actual start block
    },
    "TSYYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x93385778e44eecd345798a30715bc40cd92db896",
      startBlock: 391559282, // TODO: Update with actual start block
    },
    "KVUErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6ff6cc4fe125e0de426c48100104debe1b511398",
      startBlock: 396763126, // TODO: Update with actual start block
    },
    "PLTZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a743ee9a1cef7088bca956d1f1d45e69d890d65",
      startBlock: 391899112, // TODO: Update with actual start block
    },
    "APOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e2d94316e416ba655fb58841fe1ebd8c56785a0",
      startBlock: 418920746, // TODO: Update with actual start block
    },
    "IBRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb7e5b2eb099ebf758bfa39ab7cc110da0a1442d",
      startBlock: 415847030, // TODO: Update with actual start block
    },
    "LAESrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5534a7b2bcc580fc855fdc390d76ffe602994818",
      startBlock: 409578474, // TODO: Update with actual start block
    },
    "MSPRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4423e4788421a13a3a86b87180a0e6d1855087fb",
      startBlock: 409579086, // TODO: Update with actual start block
    },
    "BILLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa126bf3b50f233ff29025d38109410069b83ddb0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FXFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7c904736ead8425b8ea6b31e3f3fd218bcbc0ba",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CGCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1dc5a9bb7a446b842e4a1024a53226e72cd0c6c",
      startBlock: 410949979, // TODO: Update with actual start block
    },
    "CRVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0bcb2f9f477e5be3faec506799701b2eb4592b41",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ADGMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d5c157ac0e4dfa7e2ccddceff77e02408415d2d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CPRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6e4acf6be126d835910bcba77a34385418961f2d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MSGMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9106c1498df9feac8e04a26fbc0897857c4abb44",
      startBlock: 411982485, // TODO: Update with actual start block
    },
    "LZMHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6a5ab5480dc906d6bc4bde0a4c01395e368c153a",
      startBlock: 411984011, // TODO: Update with actual start block
    },
    "ETHTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c89a6080bca74d3953719342c7b7e002e48f587",
      startBlock: 397110718, // TODO: Update with actual start block
    },
    "SFMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3c2d0c4da15b96cc442bd94caff5c7fa4c104c46",
      startBlock: 395358980, // TODO: Update with actual start block
    },
    "BRK.Brobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5fbebd993c1e49394b815db59c75a27410018557",
      startBlock: 398839287, // TODO: Update with actual start block
    },
    "STLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd81276e077343e0bed1d6a4a11e2726199b8b59f",
      startBlock: 397806476, // TODO: Update with actual start block
    },
    "TERrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfaa11c6350785df774e1f6e9ea746588fb2e5905",
      startBlock: 397806531, // TODO: Update with actual start block
    },
    "AMGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0224a7cdf8d6f64b46df61d13ed83353e7f97414",
      startBlock: 423060551, // TODO: Update with actual start block
    },
    "EPAMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34ec00f299fe1fc9739b81527cad568cd35a5b71",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HBANrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08133ba75696a0dbafb782769fd26a08e2eb0536",
      startBlock: 406444476, // TODO: Update with actual start block
    },
    "TXTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x804143691eb6a12ddfac4d1fbb4a300e09053134",
      startBlock: 415844313, // TODO: Update with actual start block
    },
    "HONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x07165aa6e668a0d66bba54f56313c5ea7c12ef3a",
      startBlock: 406096460, // TODO: Update with actual start block
    },
    "SWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaeeb9c44736907d9e8bd1308e39aec22c049382b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AIGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x557568629c5e1ae72fca00efd8d56357e9fbd8a2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PKGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf5b409d3314595c152947e795cbe228dff05e9d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CSXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd41d2d5b0219f485212f55d306644d91d2237048",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PPTArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2932ef90a85c8bbfc978634b4b36211279d93b77",
      startBlock: 401601533, // TODO: Update with actual start block
    },
    "BMYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe52ad52d000f2702d50f3726dddbe7926ad47b5",
      startBlock: 379440025, // TODO: Update with actual start block
    },
    "FTNTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb758f0629d8d81be64364b6bcabb7dbd0b1d2370",
      startBlock: 384432332, // TODO: Update with actual start block
    },
    "FICOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7d1b5c32fda05ea4f0cb95373c6b1253d737b1f6",
      startBlock: 379589210, // TODO: Update with actual start block
    },
    "GBTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9e01dbb091579c17d8e28e477b3f928a59c511ed",
      startBlock: 379589253, // TODO: Update with actual start block
    },
    "GMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd33dc6bbc67dbb62e695f0d52ec2edff2946fc8b",
      startBlock: 392247419, // TODO: Update with actual start block
    },
    "GTLBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x53f60e9f390f43ab01d145481bdde1112cc11367",
      startBlock: 389647506, // TODO: Update with actual start block
    },
    "JNUGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd471e695c5558beaf90b4844bb7e9ba9bffc981e",
      startBlock: 382010704, // TODO: Update with actual start block
    },
    "KMXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3bd3d2a209f1c058f77ff66ad6cec852b4f84b39",
      startBlock: 383050253, // TODO: Update with actual start block
    },
    "QIDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0788d94e9f5e9ed150f37df5f061f905b25d26cb",
      startBlock: 399875817, // TODO: Update with actual start block
    },
    "RTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf82f5770a4669c856bdae5f4972dbfb9c1f6b62",
      startBlock: 379440358, // TODO: Update with actual start block
    },
    "VFCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfc98a29b5fd864c1a421f78cb89015c46c3334f6",
      startBlock: 380972116, // TODO: Update with actual start block
    },
    "VYMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x21bcd5a3b0bfe2782241b473dfa91463aa70a8be",
      startBlock: 379440563, // TODO: Update with actual start block
    },
    "WFCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x49a288184a7c5074ebb94d5a78f227503404a5e0",
      startBlock: 380971281, // TODO: Update with actual start block
    },
    "HDVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xec4c46186b11de095eb91b669916ac6230c7460a",
      startBlock: 379244964, // TODO: Update with actual start block
    },
    "UDOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbbd26812d977fee354b6cb200ab607e0b0ff2ae3",
      startBlock: 394668093, // TODO: Update with actual start block
    },
    "UNProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a88f2c84a5727b1396da8cff3127e7cf309d567",
      startBlock: 408526392, // TODO: Update with actual start block
    },
    "CPRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfccb84e9aea3ab65c83ec98974aec0013aa78c36",
      startBlock: 397806505, // TODO: Update with actual start block
    },
    "CHDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6654918256f036481aa4d6030d73b31594f0e2ce",
      startBlock: 397806663, // TODO: Update with actual start block
    },
    "VRSNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xba535aa78eaf36d3eb353ba922db36b4c650ff75",
      startBlock: 415831143, // TODO: Update with actual start block
    },
    "Arobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x11cde6e432eb467cbbf1ef31a8788a26522d3ebb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EXCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4762e1e30b6aac337a24498e0640fe70bfa63a5e",
      startBlock: 401945777, // TODO: Update with actual start block
    },
    "ECLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5fd84f29b30440a386494b39e0a02d422a83c701",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MHKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4b3554265dfcc6a241c1f9dd36f46129b17968cc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LYVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72faae7326995bf1a17cc2e07a5186fdbd54c4b9",
      startBlock: 399184011, // TODO: Update with actual start block
    },
    "GLWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbb50c1d166e30e988e4d9014109662a4dd9c59ae",
      startBlock: 400225365, // TODO: Update with actual start block
    },
    "SPGIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0b8ba2b8b5295a7e2b74e180e67581474e2ad8b6",
      startBlock: 401257609, // TODO: Update with actual start block
    },
    "AMZDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xee1ec34a47a5465211459f7e32b922ecd64184c4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GRNYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6a6e1b725f3c52b027fa3c3803b2f3af56f52437",
      startBlock: 409579816, // TODO: Update with actual start block
    },
    "STrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc246fa5dddfa9838872cad8bf10680606a46e4a1",
      startBlock: 421681461, // TODO: Update with actual start block
    },
    "XHLFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d429498f3bfe16a24a65cbe220138b61d4e16e9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1a1a5867149bbb2dc281df2d71eb3e4e6a070594",
      startBlock: 416830019, // TODO: Update with actual start block
    },
    "QXOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19d5b40ca5c50084c4348bf746a29cdb24c996b2",
      startBlock: 421678920, // TODO: Update with actual start block
    },
    "FXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2f5538e913e84095046f29ccab2780bb56b90324",
      startBlock: 415824584, // TODO: Update with actual start block
    },
    "AGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x644c32eb825db6ac67c5954d46f3aac6e82af87b",
      startBlock: 409579759, // TODO: Update with actual start block
    },
    "SMCZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3ad9ec0576241e69bdd6f1ba32aded7720e065f1",
      startBlock: 418216834, // TODO: Update with actual start block
    },
    "LXRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5db40f1e867b75ea92be4447d19dd9454d56ddae",
      startBlock: 412338825, // TODO: Update with actual start block
    },
    "XXIIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x243ea3f7f4abc2774a647f5d910f19c0cbf9b2ec",
      startBlock: 409578728, // TODO: Update with actual start block
    },
    "NFLUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x63d87cff67b2e33dd4baa42abb2040a3a281b158",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ICSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b26a91b05a89220ad7f15e71ff10fa7657c903e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SNYRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08aba12593b0e775a526c4b068db825040462c59",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EVGOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x78f2877f36d7002ad4840d8841deb5f9a0be55f3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PLTDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3408b38e4ebcd8e5218255687576c7a71419b1b0",
      startBlock: 407481576, // TODO: Update with actual start block
    },
    "FNGDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x57689be0193508a643532b6ac12f0f1716ce5df8",
      startBlock: 394667194, // TODO: Update with actual start block
    },
    "SOFXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd077aeeb584fe6da5b629da33b922a8203b6d56",
      startBlock: 394322295, // TODO: Update with actual start block
    },
    "EQTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e954423885386aa1f894abeca7fda26db037b31",
      startBlock: 407482786, // TODO: Update with actual start block
    },
    "APPSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc969dc0197e373e873e2624200dc2fc044776746",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa7b0dacd40d1586546ccfd24b72e73da9b40de5f",
      startBlock: 415822460, // TODO: Update with actual start block
    },
    "FOURrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98d306af25dbe281f68fc53231fa26344303c7a2",
      startBlock: 411296174, // TODO: Update with actual start block
    },
    "DGNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x01f469ca535eb99b84df730f5a5b02ccbe3f370a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MCHIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf269a02492202340a3665d55d481a02d9dfcb260",
      startBlock: 410944736, // TODO: Update with actual start block
    },
    "XLUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xffe8944af3d08ec70ade43775e39b6e378b64079",
      startBlock: 416138070, // TODO: Update with actual start block
    },
    "SCHOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce6045c1f967bbc1bc579d8c7fb378630f657ad5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FETHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b402d972625ff13d92bb136c077ea9748fb769d",
      startBlock: 415801955, // TODO: Update with actual start block
    },
    "VTWOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7be2ba4a573a88937bb038c12d05f99fb30a322a",
      startBlock: 423743463, // TODO: Update with actual start block
    },
    "OMAHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe24ef76006b9b9abed80e16ff0898fb54c8aae00",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HYGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x304237da78a92d3b822c1459c92f50fd9b4720dd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ONEQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd53260427933d69cd37e5106eb842ce143c06d5a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MTBArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf2e81e273bdbb0ff4c88e0dfdb67fecf6404097a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x20c60d2a433f134e755a61b2e28db26f327a3458",
      startBlock: 426876267, // TODO: Update with actual start block
    },
    "PTENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48fa3476eda49919d1f3de219e45008c63dcd9f4",
      startBlock: 425824454, // TODO: Update with actual start block
    },
    "PPCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd68d9773893f0b66bf76d721e372e95816aaca14",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JBBBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x87a1731422402446c5c646eadcb497c49a382cda",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SBLKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3075d39ab822b1cf1e264695ed2bab1267a2ab94",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VMARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x36705062a93c58e1495e338eefafe34a9cc657a0",
      startBlock: 411645924, // TODO: Update with actual start block
    },
    "Zrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bb55d8a2d2790394297ec1c70221f0ed1b10454",
      startBlock: 426514427, // TODO: Update with actual start block
    },
    "GRPNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe106118f75a3d38dd5a1de923bbe54d65c1e5fd6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SSRMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7773ec39f4aaa34fc95dad668fc591742925ebc7",
      startBlock: 425481361, // TODO: Update with actual start block
    },
    "XLCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf5262dfd052db7f1351c4a7deacf57797284798b",
      startBlock: 416143141, // TODO: Update with actual start block
    },
    "NXErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x75aaaa44083b429f1c4cc1e12e8ecc164961391b",
      startBlock: 415845956, // TODO: Update with actual start block
    },
    "SMGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9e9168c34d6d2d55f42e88b78a0645cc905209ce",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SRADrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51e30c72e7226681e7fa639e6c4374909686b80a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce213136e6188cb289b08b9f44022af7878b27f9",
      startBlock: 411637428, // TODO: Update with actual start block
    },
    "IEMGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9800ccdd74524e53ae3f29b2c75ad06a2af08e3d",
      startBlock: 411297018, // TODO: Update with actual start block
    },
    "WEEKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6ae699845e2ab6bc930e8ec9cdbadd8150772d6e",
      startBlock: 344632468, // TODO: Update with actual start block
    },
    "TQQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc06558a7e9fd6823f37ff348c4dca8e08e652dc4",
      startBlock: 351609596, // TODO: Update with actual start block
    },
    "UPSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd13c7aeb7b13105a59c8dac6e07d3f0b60b0fbb0",
      startBlock: 353162313, // TODO: Update with actual start block
    },
    "CLFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5acce7178205867bcd49b4dd8a70a84f37e2663e",
      startBlock: 353506171, // TODO: Update with actual start block
    },
    "IAUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1e3b94a9edf78c068b4fac0a0033bb9030452260",
      startBlock: 353508408, // TODO: Update with actual start block
    },
    "NBISrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5f92c171f5075fa2a02d56607d2dffb0451026a8",
      startBlock: 353160497, // TODO: Update with actual start block
    },
    "TLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x93855c555f951c8c417b736199bd195a73c57bd7",
      startBlock: 355572640, // TODO: Update with actual start block
    },
    "TMUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe73e3074227f4bd8de2fc97afcd583783f219a60",
      startBlock: 353507719, // TODO: Update with actual start block
    },
    "LLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x55f732a31517864b707a958c7ef6024e334f5733",
      startBlock: 353507972, // TODO: Update with actual start block
    },
    "SLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdbf3ae570a4daf8825fa8a550649a1805bacd6bf",
      startBlock: 353505435, // TODO: Update with actual start block
    },
    "VRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d2c9ed4d396c841799140dc06ec07f730d64d91",
      startBlock: 354197989, // TODO: Update with actual start block
    },
    "CELHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb0b9b8bd5f84019084e6802fa778d3a601f47db1",
      startBlock: 353162875, // TODO: Update with actual start block
    },
    "OKLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7b21cc7ba273992db7396f43b59fa8105fcde939",
      startBlock: 353161063, // TODO: Update with actual start block
    },
    "UALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x67dfa1c0265603ee0ffdee16379ebe0301f2551c",
      startBlock: 356610393, // TODO: Update with actual start block
    },
    "AAAUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8dc45da9ad424bc00b0c95973c5b35dd11b781ce",
      startBlock: 353161100, // TODO: Update with actual start block
    },
    "CVNArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5349d17bb6bdabe9ffc791540c0dc2b6d6840651",
      startBlock: 358340089, // TODO: Update with actual start block
    },
    "DECKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29c1e7984973ea56b346c4bd2c24d9cc49536110",
      startBlock: 353160398, // TODO: Update with actual start block
    },
    "NVDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd89c55f374db0076dbb9b205c528bc85def40108",
      startBlock: 353505996, // TODO: Update with actual start block
    },
    "VTIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd21c4eadc19c27176b5dd7f776914ba9406275b4",
      startBlock: 353161263, // TODO: Update with actual start block
    },
    "AEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61f9f0411e5df6bc4b5dbd02c2c46f425455d6ff",
      startBlock: 385469277, // TODO: Update with actual start block
    },
    "CFLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf1f7d7537d979ef780df1bb882a6ec4d1852f4b",
      startBlock: 387552379, // TODO: Update with actual start block
    },
    "COFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe987260dd21b15ec8db35961d73624095be122c",
      startBlock: 379933411, // TODO: Update with actual start block
    },
    "DVNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xda4548808f509eb7c3df0138c84f7337952df9b1",
      startBlock: 387897009, // TODO: Update with actual start block
    },
    "ETRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x88f394f0c0bdd457bbd4349415dde48518035e15",
      startBlock: 382011751, // TODO: Update with actual start block
    },
    "Mrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x18ced735883d1e1c4f2b09f5d716889945028807",
      startBlock: 426519237, // TODO: Update with actual start block
    },
    "MCHProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa7b072ce74a6fef5c50f1c97bfb54b378566db93",
      startBlock: 392590294, // TODO: Update with actual start block
    },
    "PGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa6c5e90a86e5ee4141c7783854800c7e59394cf",
      startBlock: 380626112, // TODO: Update with actual start block
    },
    "SCHXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x76354ad06dcc68f25de448233fae692316f7cd7f",
      startBlock: 380628741, // TODO: Update with actual start block
    },
    "VEArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfb9e8ff49653420c4eb0067c6083f8c149708871",
      startBlock: 379588779, // TODO: Update with actual start block
    },
    "MURArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb697678e9a763e01336be0f88fb8da0f49cb100f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PTIRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd362ff7b971d614ae65a1635bee6a379a3c6e22c",
      startBlock: 418209763, // TODO: Update with actual start block
    },
    "HINDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e435fe6e42bd535e4ff9b17be46b948784300c3",
      startBlock: 415845284, // TODO: Update with actual start block
    },
    "CORZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4bce33610c11ee97f4c479ed6cbe2677a11d4a1",
      startBlock: 411639312, // TODO: Update with actual start block
    },
    "RKLBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bb15a51d764df4f8d21d2a1c17ebf4b3623d459",
      startBlock: 409578498, // TODO: Update with actual start block
    },
    "BULZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c10f0d69b7df148fe266cbc3b67ce39bd2e5d79",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPMOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c5419c74bd33ca41e59ef8aa4d210d615483b53",
      startBlock: 411638862, // TODO: Update with actual start block
    },
    "SXTProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbb32e378209063ddbeab46e6f7fa9a6ae7636d57",
      startBlock: 418920313, // TODO: Update with actual start block
    },
    "SMCYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfaa800fe82196ccfdd05760fc0645fec4bde055e",
      startBlock: 411291351, // TODO: Update with actual start block
    },
    "TMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3fc9c2926700466dad34bdff83c400be82b1e2c5",
      startBlock: 409578526, // TODO: Update with actual start block
    },
    "GDXDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3c95093f589ae0334a0f9cdd826a0a3ab8796872",
      startBlock: 409909126, // TODO: Update with actual start block
    },
    "JPSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x07a106ee5122baa5dae512015aab528705a16cf7",
      startBlock: 418571334, // TODO: Update with actual start block
    },
    "ACHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x16e4815a983c520278b6a5ad786b24a79da0c399",
      startBlock: 413379054, // TODO: Update with actual start block
    },
    "TGBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97a4f1912f54f92df24be30867dc376e594782b7",
      startBlock: 418207794, // TODO: Update with actual start block
    },
    "JZXNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42ba7f3291cd1375fe3f0d371e34c7fff2cf7d23",
      startBlock: 415805066, // TODO: Update with actual start block
    },
    "ARKWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x125aa12a92934d312c87315f65c3e5ae5566659c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MORTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7b8d318addac2f1c62d6b89119f803ba42cb7d06",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IJHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8aa6fe37f4f1271573fecf945cf6214c628c8774",
      startBlock: 426170809, // TODO: Update with actual start block
    },
    "SPHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xef15b570972f49bc583f2aebe3a538f59bb0c062",
      startBlock: 420641979, // TODO: Update with actual start block
    },
    "ELProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb6ae3a29a43b32f26738e35771d9f6ef96b35598",
      startBlock: 415827070, // TODO: Update with actual start block
    },
    "SNBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0320a25d342f27bc1aec25f40ab03913c1801887",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FNGGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4375886dfc06762aa3c203887ec1ac1bcb72a542",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AVSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a915fe4fb2564deb1ea6515348748f1feabf9dd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CURErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xec947a946826e7aa73d0b74245c98a6e1f953872",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PFFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8baef74020f42b87085a2a36e23b005b89e1558",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CSWCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2ca79c822d654d7224c5be106cb20e9a53aec27a",
      startBlock: 418568418, // TODO: Update with actual start block
    },
    "PNBKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c8fa0ae9da5a58c69bb6f84ef8aa448ac354bda",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EGOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4f958108f6497c2ea720c5955c80e176d9d69c5a",
      startBlock: 418908774, // TODO: Update with actual start block
    },
    "OBErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x360db5a8ba5ca33de702af64f71291f0fc340823",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ENTGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xebb571ea092d903d362fcb7b091c71dde503fc5a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4c522b59079d691f964fad5efdddc479a00b1dd",
      startBlock: 415802546, // TODO: Update with actual start block
    },
    "MRALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19feaf7b5b0923564197d9a4b8dccc3924f7b7af",
      startBlock: 415802182, // TODO: Update with actual start block
    },
    "ESLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe67ec8782147dc5f4aae243f230b3d15fc951da7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RPRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x47a4b3cf9e540653596df042259b5f819c60f76c",
      startBlock: 422018857, // TODO: Update with actual start block
    },
    "DRSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3fe0e9ca6205facb2e386e2bb3c22f415aa7b15d",
      startBlock: 415803127, // TODO: Update with actual start block
    },
    "PHUNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb133a9b508dd3222869a3e10a730266e2907984e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TNKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc59b3b3ab85e4d9180a02e3170d65d76568a371c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MASSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x52e6f80749b2177351015da7f84cfd9f6ab021fc",
      startBlock: 423752638, // TODO: Update with actual start block
    },
    "BUGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb8e0da3d7f58ac1215774b0a95bd4524e819b15f",
      startBlock: 420992259, // TODO: Update with actual start block
    },
    "APPFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6352c494967819d6058ced1ffe58e2cf2d42f422",
      startBlock: 427896651, // TODO: Update with actual start block
    },
    "EFArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe8ddd2838f9e701086a2d5e31e303beca8453f52",
      startBlock: 418221472, // TODO: Update with actual start block
    },
    "CGNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2bcfe5d8c7d859563960d5826847b8d4226222cb",
      startBlock: 421672782, // TODO: Update with actual start block
    },
    "SPRYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5fee9985f41b48c1df458db04b39d0ecc0ba0d4d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FDNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x31d515eb79b422b00ed59287fe5a53fd5d667fba",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SFYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x884ae9b59f049944c07fd4b5722a6efc364be302",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CLMTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa256a51e92c7e05eebed3faf55d4d59129b158f",
      startBlock: 415802874, // TODO: Update with actual start block
    },
    "BSLKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4eb0d5e44a40306321389921a1d464d96ee9d431",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PLUGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8cadd821d4581e9c767843b65621fae52ff0de30",
      startBlock: 409578654, // TODO: Update with actual start block
    },
    "TSMXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcad5e04520b22edb09c959a62fe76aa78d3d5008",
      startBlock: 415826250, // TODO: Update with actual start block
    },
    "JBLUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a6a232a43fda13f7bfc52a9a3b1931360a42eee",
      startBlock: 409578447, // TODO: Update with actual start block
    },
    "EQXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x16c821e490ab4d907d307616d67d918bb380ad31",
      startBlock: 410948250, // TODO: Update with actual start block
    },
    "IVFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7a7f34587df0f09b4ad86479e26616613df0d90",
      startBlock: 409585349, // TODO: Update with actual start block
    },
    "FIGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x222e66df7155da393201eda770fdbceb7739d9ae",
      startBlock: 372586688, // TODO: Update with actual start block
    },
    "ENPHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25292bda41aaede8bbe17dda608934455258cda6",
      startBlock: 351609658, // TODO: Update with actual start block
    },
    "JNJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x07fc5790484a8378c8b25b2861338af6b69e4ea4",
      startBlock: 353507680, // TODO: Update with actual start block
    },
    "OUNZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xacef7497591d433aa8143b13071dc65ba52a7f90",
      startBlock: 353162838, // TODO: Update with actual start block
    },
    "DKSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x82f8dc2fa442d860945c31fdcb023265220a6cf5",
      startBlock: 368030725, // TODO: Update with actual start block
    },
    "IWMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97b4fc0d0a1e8bac712200785bf63e65047964ae",
      startBlock: 353161950, // TODO: Update with actual start block
    },
    "SMHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5143ed81acc6dd7f6f0cc0274222a104fb06a910",
      startBlock: 353160829, // TODO: Update with actual start block
    },
    "UNHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x896ba1a79f5592973326a41a6ba0ab145df7e81b",
      startBlock: 353161790, // TODO: Update with actual start block
    },
    "WMTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb0bf53e66fe2602cf237e8688f63ba9a021778f5",
      startBlock: 353508770, // TODO: Update with actual start block
    },
    "BITUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9cc44ef381f8d2a7677e946570d47cf42502f15",
      startBlock: 353506435, // TODO: Update with actual start block
    },
    "MSTZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x730e7e6f7a987881cb5c7ce6b7484ef9a313feee",
      startBlock: 353506569, // TODO: Update with actual start block
    },
    "UBERrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x034f5b2b91c5b7c1258c04acf36582d1a13f5819",
      startBlock: 353161527, // TODO: Update with actual start block
    },
    "ALABrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeca8f0cf7478fdc65db60ffe54beb92c5827121e",
      startBlock: 355575475, // TODO: Update with actual start block
    },
    "ROOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb425008ffe6186553f101ab36d56b5258ed50bf0",
      startBlock: 355573521, // TODO: Update with actual start block
    },
    "HIMSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60ac29454ab2ca3535128c99abbdb06b3ad68537",
      startBlock: 353161983, // TODO: Update with actual start block
    },
    "AMATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98a3adb61b69fd5845f7960697f1a0eb5828d726",
      startBlock: 353505273, // TODO: Update with actual start block
    },
    "ADMArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc0ecab89c5a32f5494f210212470dd1b0ff4e1d2",
      startBlock: 389280153, // TODO: Update with actual start block
    },
    "BTUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x74b4b639375bd5eefd6799c00d334df5037b722f",
      startBlock: 385815519, // TODO: Update with actual start block
    },
    "CROXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdc97d78dff4cc1659a880520360a69779db118e0",
      startBlock: 384433990, // TODO: Update with actual start block
    },
    "CRSProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdfc901977b3c0fbd4f53ed4f116abcde2bf54812",
      startBlock: 379935497, // TODO: Update with actual start block
    },
    "DGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa6c34b9b453895a35aad86306406b6c89df649ea",
      startBlock: 386857291, // TODO: Update with actual start block
    },
    "DDOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ca7930ca57215309756038119faeea17736f0ef",
      startBlock: 382354351, // TODO: Update with actual start block
    },
    "GDXUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x18333d5f295240e2c4645ac0f45aff7f60b94357",
      startBlock: 379936021, // TODO: Update with actual start block
    },
    "NUGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x77d13d3b7591ac31ba7f8e5caf6da82419b54e97",
      startBlock: 380972067, // TODO: Update with actual start block
    },
    "RHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf71f2b29e742cea867c608dc2654a933bbd88dbe",
      startBlock: 389646597, // TODO: Update with actual start block
    },
    "SEZLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05f0ed6e8e6c1536fe76a8a83dd7f13ad35f73bc",
      startBlock: 382353942, // TODO: Update with actual start block
    },
    "TECSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb24a050f7a302765bc0bd9113eb9dfb701091b65",
      startBlock: 390519741, // TODO: Update with actual start block
    },
    "GSATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8368e069c18de546c78846d8ed1a92518390e7d4",
      startBlock: 426870434, // TODO: Update with actual start block
    },
    "FLINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb170df98bf305de580d795a6cfe35cb9ae23145f",
      startBlock: 416480589, // TODO: Update with actual start block
    },
    "SPYVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa4ea4a1515b01fef4a622c6fd7419f6d495dc525",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LNTHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x882629d14c6daa4261c0a0b54f04509eaef9401c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "METCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5748c1d0a79827e8652ba66fdf7d3b5dd071364a",
      startBlock: 418572495, // TODO: Update with actual start block
    },
    "HYMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9371832b87c332938c1d077e2a09238b3e36dde3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ERXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19fdad52621351bff6007317b60b53d8656208ad",
      startBlock: 418573444, // TODO: Update with actual start block
    },
    "SNCYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc57d398e318bdc4d66043ae9caf13c179ea0fa09",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xebfdd5f98698341d24df175580441435be552808",
      startBlock: 419261708, // TODO: Update with actual start block
    },
    "CWHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb6b0e8e81afdaadc421b14ed434855fb1a641acf",
      startBlock: 420634321, // TODO: Update with actual start block
    },
    "FRGErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa499d86f19bfc66ace9e9602b5211c09d0b6a3f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UROYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7a91925993405ae0efbb023a52eb5df1363add59",
      startBlock: 416138370, // TODO: Update with actual start block
    },
    "RSSBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd6679b65e0f16c4c1d3fe36364b5c29cb79ad515",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AUUDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x76697c264872f11ece7a7939cf03ba3fb9fda102",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VFHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7ed1fdcbb5e111cc8b08005dafeb599661d0ee88",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WEBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x174d1f907cc5f2f90560ac59bd60d7d1ec78dd73",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TWGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd1cd0334ceb3d0dca69e3a48be13e578be2abba",
      startBlock: 423740823, // TODO: Update with actual start block
    },
    "BOOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ff580d6f230f86b2e82ab667f3fd308cbe6a487",
      startBlock: 415812045, // TODO: Update with actual start block
    },
    "TSLProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf2a72c1f150f3d53debbd8ca4dc072fa1d982bb4",
      startBlock: 419598393, // TODO: Update with actual start block
    },
    "TSLWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f1501fb29367250e345383b990abf37a31f34f2",
      startBlock: 415853443, // TODO: Update with actual start block
    },
    "KLIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bd55fb35d8f59745c948d1e4f2e42d78fce9ffd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CQQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x00670513d3c720383302bb2e21bd5a010d49bc72",
      startBlock: 416479143, // TODO: Update with actual start block
    },
    "LXEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa28194551bd555f964fc9b86a950bcbb9f2bc1b0",
      startBlock: 420631365, // TODO: Update with actual start block
    },
    "BCErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3534b261a33709d0656cb8f7f8b317036cc8a1f8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CPERrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xced65f3db08c9c27b16ba6189746d4a96792cf9f",
      startBlock: 415808366, // TODO: Update with actual start block
    },
    "IEIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7cf0ea440af65c803aa6cafb01595436ea70b261",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9754a16a346df954e9840e672883e1617cc0e28e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IGMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf4a4e2d37262a6333301e9985dae2f5a7d49d2aa",
      startBlock: 418574893, // TODO: Update with actual start block
    },
    "QDVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x31f38dc51eb5ec41fb1b51227ec1cf3f54ef2eb5",
      startBlock: 415802150, // TODO: Update with actual start block
    },
    "BWXTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d4c3d69c54df6da38ea857c98da03d53ff353bf",
      startBlock: 418565566, // TODO: Update with actual start block
    },
    "SHLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf28207ec44cb88639d25c8b5a1d46f40f8a5aee",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DGProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7e799aa354dd35a0d475b1ade7e066d7a030b154",
      startBlock: 426515331, // TODO: Update with actual start block
    },
    "WGRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfc5729868a4a0502b22fc9916e3fa1aca27f0d27",
      startBlock: 415841435, // TODO: Update with actual start block
    },
    "SCYBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdc832fe11e9f6b80dc6dd7960cdf08d4caaadb3a",
      startBlock: 415854590, // TODO: Update with actual start block
    },
    "ARENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc698f83746848243bcdf1508b2775c950fced1d4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EXErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x99407ae345b68db9926140a4672dce1e66aeb666",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NINErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5adc782badbae1048b6ad40d1c7b94ddae8593e2",
      startBlock: 415824333, // TODO: Update with actual start block
    },
    "ERYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd975ab8960dc40a25536683779627d8c2f9dcca2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BDTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x477b762eaacb8df16a1ff5db0eb1de3cf65ee3b8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CHKProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6fda9d34157bb7eb5ae9cb018eee59aad4cb2a5d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CLOIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xae22a7bc19216f84cd051d640b22d961e89d4c7b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STUBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd324fcb61de1e668444cb97e355478c8e2c6a93e",
      startBlock: 380525552, // TODO: Update with actual start block
    },
    "BTOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5174a0b8894ae6eebb48c161c1150bbeb13aa13f",
      startBlock: 411639192, // TODO: Update with actual start block
    },
    "PFLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdbf2f68fad5ae4cce333eeb4fbc2a4fde14c39da",
      startBlock: 425474960, // TODO: Update with actual start block
    },
    "NCNOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaf269f77d64442801210b47d50b958eee6beaffe",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FIATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9fae6d6b931e7873347ee0e9c724cef79098f468",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CARTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1f611d691cd1cb156ddecbf78ca3de67397639a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ANFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc34e146a6c4d7b503a80818debfc016c9128e98",
      startBlock: 420982001, // TODO: Update with actual start block
    },
    "Trobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97713403dbb2a8f5e577989c04e844a11124f1c3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SLIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x17e601657be1e394b50b5633164a1e287b41d893",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KTTArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4b8870dee18a629c54f230bbcde6d0a8de461e8b",
      startBlock: 413371936, // TODO: Update with actual start block
    },
    "WEATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe52e9d40dbedbeed4cbbc6e0472b76577788aa9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LEVIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x46136522a935fa606b7a9b381c97979cfe7939e5",
      startBlock: 410953158, // TODO: Update with actual start block
    },
    "VTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc407248fe5aa01bcfd0afde35791ec66940e1dd2",
      startBlock: 392249385, // TODO: Update with actual start block
    },
    "ZIMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf62ea675fe7f1051215ffc01b3c8927d7c4b5725",
      startBlock: 355573154, // TODO: Update with actual start block
    },
    "LMTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a57ffd6fb91bce9033f21d6b736cca8b82ea071",
      startBlock: 353506467, // TODO: Update with actual start block
    },
    "MARArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41500d34e9710c840eeb5e0519ffc4205c6ee480",
      startBlock: 353851801, // TODO: Update with actual start block
    },
    "SPXLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1aea4fd88c8990d9f0ab993df1a93d25dbc2afaf",
      startBlock: 353506393, // TODO: Update with actual start block
    },
    "BITIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e6a6209e0f83e8eb138a1412fd013a9c3dc6b52",
      startBlock: 355230415, // TODO: Update with actual start block
    },
    "SPYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x95a1335e5acb6b0da544cf58c04c2d57cf028d80",
      startBlock: 353160961, // TODO: Update with actual start block
    },
    "INODrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe056424b97d461302b9127dd701c919c019b13e",
      startBlock: 353160793, // TODO: Update with actual start block
    },
    "SHOProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x441b09eb697e46a72075060697e24610e00911d2",
      startBlock: 353508704, // TODO: Update with actual start block
    },
    "TTDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3df164e85387cac78de1baeb04b004c378a00fe1",
      startBlock: 353506671, // TODO: Update with actual start block
    },
    "SPHQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9520c3b749b1d945d11791b38b2fb3502d901f24",
      startBlock: 385127844, // TODO: Update with actual start block
    },
    "AGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x268a4c80f96b40c7948e01305b21079dba47ebd0",
      startBlock: 415838763, // TODO: Update with actual start block
    },
    "EPWKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3ae3c450ead8f01ca947d564e55c8730aa352fa3",
      startBlock: 413371147, // TODO: Update with actual start block
    },
    "APVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x47be84e19b763394de8a69a91dcf5c956eb18236",
      startBlock: 409908191, // TODO: Update with actual start block
    },
    "SBEVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x527a392c61bb013c98b09e8ae5d911c4bfd674b5",
      startBlock: 418554893, // TODO: Update with actual start block
    },
    "AGQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcd06f25d4ae7eab20772baef9d32102d01e030e1",
      startBlock: 409579381, // TODO: Update with actual start block
    },
    "SPYIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x58af7ffad338e8f1b505011300d47f50279996fc",
      startBlock: 409579463, // TODO: Update with actual start block
    },
    "JAAArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8803d31b5acfadf72cd98ad27f38bef1d72109bd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GRALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x838c707288318042de3bdf32c9bafa23dec0b380",
      startBlock: 410950782, // TODO: Update with actual start block
    },
    "PHIOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5c7afd6c2163f23e6bf7e13d4670b158ff3201b6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JYDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb9d83c834f567be7e1405849e3d2ad5b06adbdc6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FEATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb49a63acda01fe14686e440b725fc542aff58956",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "USAUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x57004f2909c6362a9fe27e7d37d3d8dd40b0316d",
      startBlock: 418570578, // TODO: Update with actual start block
    },
    "YETHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa5f209916fff8d23325305f8738e80f80f057bb9",
      startBlock: 416134528, // TODO: Update with actual start block
    },
    "PBFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b9ea9e7cd36820393a40753f8a872cc20d06aaa",
      startBlock: 415804624, // TODO: Update with actual start block
    },
    "FLUTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61f413775c95e0e14a5684e60901ec62dda6d31d",
      startBlock: 416134469, // TODO: Update with actual start block
    },
    "ISHGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0664d5c67e9b609f2e806c3e101e81b7d9bd2cca",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HELProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3b382e8ed0f1e616f96ab5c38acb3f7af61a53fc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xed3006b19fc874d24e18d4de3a01d469542a9c5d",
      startBlock: 418227262, // TODO: Update with actual start block
    },
    "KVYOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf290e53a12c1531aa7490e28ef5fade9216763cd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DDDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x38aeec7acb0cd09223944b4a592002792b9e2aeb",
      startBlock: 416831278, // TODO: Update with actual start block
    },
    "OMFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5e55795ce7b1949e5f3fb5ec825921da276d4b4f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MSFOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf72d5e46ae1912737ad229f57940dbd0e36c27a6",
      startBlock: 416829758, // TODO: Update with actual start block
    },
    "TNONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8d1c5f149ff8c9069abc28d2ee4ff51d6b68542",
      startBlock: 413712289, // TODO: Update with actual start block
    },
    "PORrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5778f618041358e78d5b4ae95ad52c20a6156acd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SLQTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf66c47b040b8f9545a0be04059e3673b2405328d",
      startBlock: 420976988, // TODO: Update with actual start block
    },
    "URNMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66c2c561837e463f3733f2cf2a762fed43c8a4a2",
      startBlock: 415807119, // TODO: Update with actual start block
    },
    "BERZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x169106744a846f03ef8da848d53b66c09634d6a1",
      startBlock: 419595570, // TODO: Update with actual start block
    },
    "EEMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x772c078c08e975e61b6237e52b7bcc3aaabba08f",
      startBlock: 418905295, // TODO: Update with actual start block
    },
    "MEDProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb29e89fe6b40219b85f99081029483af64a30ce",
      startBlock: 425821336, // TODO: Update with actual start block
    },
    "NUVBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x11a9d9abd446253e2c304ccb1f65c267a7da3c89",
      startBlock: 422012600, // TODO: Update with actual start block
    },
    "HHHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd88bb9d0740f8570758a44dc547c8ffc2eda4c1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VWOBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7597ad352062025c3c347c9131e3fb573d840861",
      startBlock: 421675263, // TODO: Update with actual start block
    },
    "EDITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3af488d939c3cacd030e9fca9c4763cabe186803",
      startBlock: 419256046, // TODO: Update with actual start block
    },
    "CHATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7af1f6146d9f47bf9c8385315edec5832a1d0630",
      startBlock: 415840216, // TODO: Update with actual start block
    },
    "SCCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98fddc175b04cb7907511f15bbf2b7f32a41a5be",
      startBlock: 415809134, // TODO: Update with actual start block
    },
    "PLGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9d8cb97f2fc5177d4f6203d2f447166b8ee12a09",
      startBlock: 415810844, // TODO: Update with actual start block
    },
    "OGIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xba25a0418be2792cdaccce38aa9f855e5d7e992b",
      startBlock: 418921044, // TODO: Update with actual start block
    },
    "ZGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc90d40e0ec7296cb492bfe76fd6dd4107cfd1fde",
      startBlock: 419254056, // TODO: Update with actual start block
    },
    "FCNCArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa35d08ab2b77b40b20ed5cf361967556eb64af40",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc804509abc2180be2fa0e8b8d79fc2850f0fb50",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMBArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa2bed09ea7b325d7d222b1b7d6fb537c8922b46b",
      startBlock: 418913201, // TODO: Update with actual start block
    },
    "UAVSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0ff0c4d3842446c361abcfe1ff40033901654f0b",
      startBlock: 416479217, // TODO: Update with actual start block
    },
    "OARKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdeec2f4f17498a57ee7ffaefadad5f1c490e5eb3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ICLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34ed8183640c4968f83c9ead7710382446835789",
      startBlock: 415858271, // TODO: Update with actual start block
    },
    "AAPWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa786762eb2e3e72d2bde02c88b288b479df0cb47",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MVISrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06c4faa247b7779595c4fedce39eb21a398a8535",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x146ced1bbba45e12964e6060ae0652133b42f22c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SBFMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3070987dc170ff55befbb90007d780412f8cdd17",
      startBlock: 418558006, // TODO: Update with actual start block
    },
    "TXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7fc8b699f9eb47b836c492247dbae197bab6f0a7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IGVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd58fae1ad9a63553fe025abd6b48bb224e0dcc7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ARQTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe7e64641f157797da3eab6f9d6253a188c4a1d6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SATSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7af3822f7f5f2f3823721f04eba7a7b9f06dfa64",
      startBlock: 397452003, // TODO: Update with actual start block
    },
    "PLTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x004c8b8c6f319ed8d13440387e8ff072a3ab9125",
      startBlock: 391900777, // TODO: Update with actual start block
    },
    "ETHUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcab101c36d864dbb7bcf10668150fc405f576cbb",
      startBlock: 391902720, // TODO: Update with actual start block
    },
    "XXRProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x94dbb8bef6236f19539abea760e4ceb1359bb7b2",
      startBlock: 391561531, // TODO: Update with actual start block
    },
    "ETHDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2825f7866fe13f9c69b63a3213c0868e007cb8c5",
      startBlock: 391899862, // TODO: Update with actual start block
    },
    "NDSNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x031ac855dcba3a383729b0991a0e9d6e6e8f1b29",
      startBlock: 397806371, // TODO: Update with actual start block
    },
    "SYYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6aa4110c61d42a1dec2cd68e6fc301ae2861cd4a",
      startBlock: 397806428, // TODO: Update with actual start block
    },
    "OKErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa845690f57decc432a1094a0c4a1ab49b7abf93b",
      startBlock: 409906199, // TODO: Update with actual start block
    },
    "ALLErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c0f67aff75fefc30859fa0c249d444333b3dbc9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d6de8fa31f9508a55ef7dc6629c620bce4d900c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ZTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb606d0d40395b32bb65e53c6a32a297aa66c9bc3",
      startBlock: 406441801, // TODO: Update with actual start block
    },
    "BENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6354a9baec5ced0d8090669fa9583eb5937ccf43",
      startBlock: 413373286, // TODO: Update with actual start block
    },
    "RVTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x09dc4614583643b3b75283cef7f87e41f1cc0822",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "URIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf643d02fe8550279bf31701831648dfa98fc632f",
      startBlock: 406100223, // TODO: Update with actual start block
    },
    "CARRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x22e14bed6104b5b68024ab79d8a48502df4f7105",
      startBlock: 406099451, // TODO: Update with actual start block
    },
    "NRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x49f40147aab1dc49c67c1182540e56334bed173a",
      startBlock: 403680221, // TODO: Update with actual start block
    },
    "CBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0d5a12b1f089a942bf2a82acdfa706c79931cdb2",
      startBlock: 399180245, // TODO: Update with actual start block
    },
    "CMSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf3232546dd8430040834651ee103c3dce0bb3872",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GPNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x27945a0fca7f754ee1ad981425637f2d80f13edc",
      startBlock: 418220974, // TODO: Update with actual start block
    },
    "DDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea3f7873eb80c3c76899acf58bba1c6088c133c0",
      startBlock: 406446732, // TODO: Update with actual start block
    },
    "FTECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeedeef8f7ca9176f98417621c43ad40c3f180a01",
      startBlock: 419598188, // TODO: Update with actual start block
    },
    "RZLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe1a777ef5568ab16facc03bc7fec3c833d776155",
      startBlock: 411645679, // TODO: Update with actual start block
    },
    "LTHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa82f45a79a8fed580e64e00a1065433789fce436",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc23f084df00b8f48139ceba0503ebe5c5551acdb",
      startBlock: 411296510, // TODO: Update with actual start block
    },
    "HUBSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7abe07e12681031144ccdb147f984c628c2912e7",
      startBlock: 421674507, // TODO: Update with actual start block
    },
    "SMLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x76c35e416b961e5b2b1291a7a8a0028c8c0624c9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GELSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x49274c3fad241a5cda4a9659f643a182a7a3ed1d",
      startBlock: 421323304, // TODO: Update with actual start block
    },
    "UUUUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d9ed28064d11f946522dc3ecd76e76ac1590cdd",
      startBlock: 415849073, // TODO: Update with actual start block
    },
    "GLMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x326e034beeb82a98842ed1317e40d02e5c5c6be3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VNMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa21286a5388402942349f53396067ea151361027",
      startBlock: 415849901, // TODO: Update with actual start block
    },
    "COTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc94816618937e400f00b101aacba9468a1a17624",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RDTLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48d29258a5f3376cd6f42d8f118ef718db7591c8",
      startBlock: 408523158, // TODO: Update with actual start block
    },
    "KDProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc728418ac7debd005040fd57dfb8f8e1e888fb73",
      startBlock: 394321965, // TODO: Update with actual start block
    },
    "NTAProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x789ea409d0a00f1466973027ada6a7b057ae7475",
      startBlock: 397806636, // TODO: Update with actual start block
    },
    "BKRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe317be6f58ac695b61a122b2cda40743f98dd32",
      startBlock: 418567710, // TODO: Update with actual start block
    },
    "TPLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5f826fa8611ca2608f2d5cea3c278d412a6baf8b",
      startBlock: 415827262, // TODO: Update with actual start block
    },
    "CErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06bf4105de7c15378a1d24b58e76241627396b6d",
      startBlock: 424431358, // TODO: Update with actual start block
    },
    "LHXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x088aabc96e8f23e7d94d414e501c3c689f9d83d5",
      startBlock: 419258098, // TODO: Update with actual start block
    },
    "WTWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x227cdcd928ba806d1c8a552460bc86afb698ce19",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NSCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1467a5c41d976fa20039da77160a0d98059a78de",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MOHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x302e3c84483d24edd73b7bcc5184f11a3466af6b",
      startBlock: 398841225, // TODO: Update with actual start block
    },
    "TFXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6abaeaa40f759373c7a6b66ceb9234849b075ebe",
      startBlock: 409221328, // TODO: Update with actual start block
    },
    "INCYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x273ee96e7b4f090cd44c0595c3b916a69a8c8e16",
      startBlock: 399877472, // TODO: Update with actual start block
    },
    "SNPSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd8c94bba4094873522b6788a8a97f524fe4bd526",
      startBlock: 396762576, // TODO: Update with actual start block
    },
    "ORCXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xca26a9266afe15295b506a5e7cc3160971e8723d",
      startBlock: 391898501, // TODO: Update with actual start block
    },
    "NAILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68f3fe9a737fea1eeb4574b27d08359120b7b0b8",
      startBlock: 412333839, // TODO: Update with actual start block
    },
    "VBKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1a3f5238ced4ae6b24ad6e6d985af330f68cd3b9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BXSLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7db7bac033391ea07332943718b447f47c81d9e9",
      startBlock: 413375771, // TODO: Update with actual start block
    },
    "ZBAOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x408ec7e60591f6c075186034336566e306a96cd4",
      startBlock: 420634973, // TODO: Update with actual start block
    },
    "KITTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1e559de6599ed5d79ebe69b8b48e46e33e9f58d3",
      startBlock: 412331561, // TODO: Update with actual start block
    },
    "GHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x992a8b3fb614e9158868ecb3049d7c4a3802d0f0",
      startBlock: 418900363, // TODO: Update with actual start block
    },
    "PRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x20cb6924d2a9e813b38f6d0667970212bc9be324",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FBYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x09bf7be26b476e26f2b536c0565fc6fbe4e5872c",
      startBlock: 420628397, // TODO: Update with actual start block
    },
    "QURErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe73cb88b6c06200457b0529350eb9837329948ee",
      startBlock: 411646196, // TODO: Update with actual start block
    },
    "ARDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xee7e7033f1b3fe0cafef8269308410cdb60a26ab",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VZLArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd5a6e604a3386a573ac3e2a9f497f56a91e9080",
      startBlock: 424085717, // TODO: Update with actual start block
    },
    "FTAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3a98d86d5a1404851ad6331227024f2eb2ee226f",
      startBlock: 415813665, // TODO: Update with actual start block
    },
    "VIKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6702f758fb951e2b6f5e3a90994a2f1755c6d539",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PENGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4451d3a5baddfc98c07d534b3874e4dd28637e06",
      startBlock: 418907074, // TODO: Update with actual start block
    },
    "INSWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc7442c06eb018e9f5eb0d21d99b41b3dd11044c7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FIVNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe925aae3a604b59d9e8373e5d34e2cf4d86742a3",
      startBlock: 411296991, // TODO: Update with actual start block
    },
    "GLBErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c8b22e1b48804e5bd311e40821d47ad1f7a6653",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ABATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69fc6481d142a4525e5690c1dfdafbd926eb6ad2",
      startBlock: 416479606, // TODO: Update with actual start block
    },
    "DNArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb27c4a6f56ae4934b6fb3f20e98316f48bb8bf76",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CYBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8688aaa6aa458bd7afd824b41d26855347e36b54",
      startBlock: 415804796, // TODO: Update with actual start block
    },
    "FENYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xac482d908ca0613f5ce2db0993bf045be75cfc3f",
      startBlock: 415852477, // TODO: Update with actual start block
    },
    "NDRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x417a775af6c67972282bbfd270ed50b6aa7bd27b",
      startBlock: 426856556, // TODO: Update with actual start block
    },
    "SIDUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb5f95910d155bd22af6ed1a278e9379173f7c061",
      startBlock: 413373083, // TODO: Update with actual start block
    },
    "GDHGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcae466e26853964a646cc089dac2f1c1b5d1dc65",
      startBlock: 423752671, // TODO: Update with actual start block
    },
    "GEMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa0c1dcb75851b43f87acdb30e77dea3eae8545d0",
      startBlock: 379932731, // TODO: Update with actual start block
    },
    "IMSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe868019c785c3c3671c5898a8cdab6e7c469f33e",
      startBlock: 416135827, // TODO: Update with actual start block
    },
    "RDTErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0135b387742febe9b59b3ce99dfb792d79407f1a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NFLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8d6f9469d3f2174338872df4c5e4fc7690617f68",
      startBlock: 410949336, // TODO: Update with actual start block
    },
    "DWTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51724493baf35a30f89f7aa8b4cb9b66208b8cff",
      startBlock: 415811950, // TODO: Update with actual start block
    },
    "BTCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1078326249b4bcdbb9fc858b9d1ee92748bdb1eb",
      startBlock: 416825457, // TODO: Update with actual start block
    },
    "ARMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd37b04e04dc036156d0864bd7a0d9ef770bc90b4",
      startBlock: 424091347, // TODO: Update with actual start block
    },
    "CNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4649e54cfce9dfa4660cfb44a91ad276b732738",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VXUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97b3bcd97640453d324a8a1bc81443e77a0208f0",
      startBlock: 391562160, // TODO: Update with actual start block
    },
    "QBTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea6460c3fe82b79df6e42fc229f7a400d1af1ce9",
      startBlock: 392592518, // TODO: Update with actual start block
    },
    "BABXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1a03b19d777135c9f74f449fdc0339d510def6e4",
      startBlock: 393975565, // TODO: Update with actual start block
    },
    "METUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69a995dc3485e8880969a85012390ae262ac0532",
      startBlock: 393976770, // TODO: Update with actual start block
    },
    "EArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x15b617ddb511049fc058175e922e589195ea7b5a",
      startBlock: 395012837, // TODO: Update with actual start block
    },
    "TRNRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8bf0a5d8beb9f1177ae4d8622bb3799a9f277bc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IBKRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9075a475f058d837a3c7c41ad189c35ef61a69c7",
      startBlock: 351145304, // TODO: Update with actual start block
    },
    "AXProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0d8e6e76c4520995c7e8c41f2f0dd46127b0819",
      startBlock: 380280621, // TODO: Update with actual start block
    },
    "BIIBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x13fe4bac685aaa9ccdd7f2a35b9724452428dab2",
      startBlock: 385473760, // TODO: Update with actual start block
    },
    "DLTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19b13e876030fee5ea66f99a27ca8b160efbffd0",
      startBlock: 394666822, // TODO: Update with actual start block
    },
    "INDArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x99b41b29625217b12b899150dbd239436a8551bc",
      startBlock: 379440152, // TODO: Update with actual start block
    },
    "KRErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbfc460641296522c986ff0b6c926c00cfe7d409f",
      startBlock: 425466980, // TODO: Update with actual start block
    },
    "LUVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf2871f885fa62c0829522d5f250cd252db68981c",
      startBlock: 382011787, // TODO: Update with actual start block
    },
    "MArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x58a7aa83149874579d7255803fae55f00be01bb3",
      startBlock: 380280416, // TODO: Update with actual start block
    },
    "MBLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa39e4db8a6440cb85e1facc2644905b73ff143f5",
      startBlock: 384435438, // TODO: Update with actual start block
    },
    "PAASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e9c7ad97f7bcd73cea98c372e7940cb7b85ad44",
      startBlock: 379590667, // TODO: Update with actual start block
    },
    "PGYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa13771e0f17fa4d683fb10881c57a3f71a403e66",
      startBlock: 380625707, // TODO: Update with actual start block
    },
    "RBRKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97b941ea7add9a6cc9e665b8ed6cda2e2946d191",
      startBlock: 379591384, // TODO: Update with actual start block
    },
    "TXNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x913239cd43e6bb8b0057ac8362dbd90ae4328eac",
      startBlock: 379440473, // TODO: Update with actual start block
    },
    "VRTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x298f4ec26316acbda146eab028e30e8e72a93890",
      startBlock: 379590236, // TODO: Update with actual start block
    },
    "XLErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65bea61da80d3b21a5d75bbb5f647a2ce4ab8f90",
      startBlock: 379590357, // TODO: Update with actual start block
    },
    "NFErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd26da0de72c91f89236defc31f05c9df7a0e80c5",
      startBlock: 409579301, // TODO: Update with actual start block
    },
    "APLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe4b4977045d4e77b8cf945bf9f1ad9b65a773b9",
      startBlock: 409579788, // TODO: Update with actual start block
    },
    "NVDDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x99d265eb5a614f4c9019d54ff20690c4fc38b868",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BCTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5c602d87a712079ad70127ded5113a17850fee9",
      startBlock: 411293153, // TODO: Update with actual start block
    },
    "WNWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x893537007f0d188cdb88386065d43fd5502cdf93",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CLOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8877dce702ebf1fdc55a4f36137d024924331f0f",
      startBlock: 409579272, // TODO: Update with actual start block
    },
    "OSRHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4aae1f68744398548d02213efa906c6518df7cbd",
      startBlock: 412335747, // TODO: Update with actual start block
    },
    "AVUVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb0d43c6453ed5c549b7b7de8a489176fe5e87c4",
      startBlock: 379590257, // TODO: Update with actual start block
    },
    "GLXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf93be401ead5f4058d1d0df4f3837285855093d",
      startBlock: 391561777, // TODO: Update with actual start block
    },
    "METArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5f5608dea75398f80906c49fccffbf402b699b1",
      startBlock: 351609499, // TODO: Update with actual start block
    },
    "OPENWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5765a6077222e497866abd3b669d5faac961ba15",
      startBlock: 404084867, // TODO: Update with actual start block
    },
    "GISrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x717d87dfeadf1bd0eb0dac7e9c6c3162183588c3",
      startBlock: 397806449, // TODO: Update with actual start block
    },
    "PHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa103a9342d86f4e18aeb30285b06b42a0ecd56cf",
      startBlock: 406790525, // TODO: Update with actual start block
    },
    "MKCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c1b51b51e66e809bf759f925d40813a085ab174",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd0a8e13948bd0d76f3793ae046f0ce238978772",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CBOErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x38a769b46bf9882bfbbb52ca4769acf25d2382ab",
      startBlock: 399527150, // TODO: Update with actual start block
    },
    "BLDRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa6064a8d0e4eb09f5c620d213863d563ce8e81eb",
      startBlock: 404365413, // TODO: Update with actual start block
    },
    "KKRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8fe06e7922177816e15c39d5810b6c1a60bcccb7",
      startBlock: 399872090, // TODO: Update with actual start block
    },
    "KMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xecf82133b38e63dc5557c58755acd93e61499677",
      startBlock: 399185495, // TODO: Update with actual start block
    },
    "HWMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf057e89cb06572ca6a1e8ac5af7f0fc8e24a54cf",
      startBlock: 407485548, // TODO: Update with actual start block
    },
    "IVZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf7eadd5f39ed001fc48f25120a0871badac887d",
      startBlock: 408523616, // TODO: Update with actual start block
    },
    "FIVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf25e1c5a49b37d7e7ed6daa9604f085eec5b898",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRWVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa59029e7eb06a33abd8ce178810f0467c0179547",
      startBlock: 391561185, // TODO: Update with actual start block
    },
    "GLDMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfad94d2ac1e163d5188117971de9043ed5e86c02",
      startBlock: 391900336, // TODO: Update with actual start block
    },
    "MUUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe80c28a762f66bafe3cba5bd0e403d3769464391",
      startBlock: 394324123, // TODO: Update with actual start block
    },
    "SSGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1fc6261f5a78f99c481eef830332404642462b5d",
      startBlock: 415802294, // TODO: Update with actual start block
    },
    "SNOYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x57581981b5507cb26ab7abbf00d1df2391722141",
      startBlock: 420629690, // TODO: Update with actual start block
    },
    "AIYYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x27fa0aef8a283c3e9c6af048bc3b60b0e364cde4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TMFCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x934723117af66e4df6527350f3c59d4f3159f02c",
      startBlock: 420635237, // TODO: Update with actual start block
    },
    "EWTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2341126069db7f659bee05bc24cd5e4bb143d882",
      startBlock: 425472830, // TODO: Update with actual start block
    },
    "BKLCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7e7786a1084a4b4ccc1c7f0d9c61d372c5b2e1c4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MISTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1569414d26164a58d49eade34f0a0abfd4f0d2f5",
      startBlock: 419258630, // TODO: Update with actual start block
    },
    "PRGSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d0e644c6ba388ec804f2fe7558acb1ab0fccb58",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HYFMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x64e4dab54d99a5d19718aaeb26f19ad46c8aa99c",
      startBlock: 416487748, // TODO: Update with actual start block
    },
    "CDTGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd44e9c8748e4d04ad6d0873f19cc6a4fa947635",
      startBlock: 413712463, // TODO: Update with actual start block
    },
    "IRBTQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x38d4f6a8b1b29c07d320ce236598d12ad0301cfd",
      startBlock: 415802208, // TODO: Update with actual start block
    },
    "IVVDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b0d743443dfc8f2f6a064cf810e1e986cc80509",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc97bdfb6670cf3f77bc2de8a76e733c5232e3b85",
      startBlock: 420974910, // TODO: Update with actual start block
    },
    "MTNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x972cdecb69579d1eee36520bbf1f69a1c1ccbe32",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ECXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa450ca489e4ada4ab95f7e0b335b4b150c1bee8e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NVDGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4ef6ea1d6b4de8d921eb2e90aaeb75f05a438cf5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSHArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06346b813f40ae3c8122e805970a7194b36224da",
      startBlock: 418920342, // TODO: Update with actual start block
    },
    "CYHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x85ca08e351852e0422869df8f043e5296f8cb751",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ITRMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xef5a7eec2097fbc40c1d387bc1f2b892f91c3d24",
      startBlock: 415803892, // TODO: Update with actual start block
    },
    "ZVRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x925a4d1b859f9115941e3a298ec84145f03e8e0b",
      startBlock: 416827188, // TODO: Update with actual start block
    },
    "BIYArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06f7649818cdd127641769343f43903def24540f",
      startBlock: 416136737, // TODO: Update with actual start block
    },
    "SSIIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdabd4e4a4f13e7fef1e878e22ef8da9c7cc93c24",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UGROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc463e6986fde064d37e592887942e2c03bb2c0b9",
      startBlock: 415802604, // TODO: Update with actual start block
    },
    "CLNErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbb14cae0eb0c7cfb3df6134e14b0a3f89c0fe972",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LESLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf3929a29985fc0ef15656ef8d4514375124503e",
      startBlock: 415802265, // TODO: Update with actual start block
    },
    "TDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf3cfde192806edc3b4e1e5f5f50e6fb593cdb7dd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "INMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05c44524487f39a54b8b2d72f1cf4d3cbfff7075",
      startBlock: 418220881, // TODO: Update with actual start block
    },
    "DENNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x349be60cb92be01c529b5aff377e83fc6589f47e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "INTJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65e2907296e9336868f52e6d726d010c6393ad98",
      startBlock: 419248640, // TODO: Update with actual start block
    },
    "NKTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdc48a24faa1315f64d2ba9dea35e515e78d9eaa1",
      startBlock: 418217813, // TODO: Update with actual start block
    },
    "IXHLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c16116e00341f519a84defb781d69c03e823966",
      startBlock: 422016391, // TODO: Update with actual start block
    },
    "VEEErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xff3cd1513effe63cf1a22c963ddb124d66f88fb4",
      startBlock: 425466240, // TODO: Update with actual start block
    },
    "TRGProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xac8342e358b906df9ee048baafe46a82892597ad",
      startBlock: 419264928, // TODO: Update with actual start block
    },
    "TRMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe554217a89b99f10dba2e7cf5fccf7e935e8e728",
      startBlock: 398839968, // TODO: Update with actual start block
    },
    "PFGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c64d2c262d778826a11d084aef832bf68a9c688",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f401b7a5dce80d077816830f268ffd22cc9b92f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x690f8ed03e519e7ffaac059a61c1a1b64f8d504f",
      startBlock: 408520961, // TODO: Update with actual start block
    },
    "HIIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x20eae9370d17e1e4ed8f6456adb485277c4a5b86",
      startBlock: 404020548, // TODO: Update with actual start block
    },
    "HASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ece20135a458d7ddf438e64281619d655c7a7dc",
      startBlock: 402645680, // TODO: Update with actual start block
    },
    "TYLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd4b997d816f91ed41b186d389d4c88094e67918",
      startBlock: 403674068, // TODO: Update with actual start block
    },
    "CTSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd79e140ffb9bf4a95242da7c98336ae5d0e7fdfa",
      startBlock: 409214200, // TODO: Update with actual start block
    },
    "LYBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x659fe7f99088698ac3b16ba5b8fe701b4a1ea604",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ULTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0ba21fcfa8bde8ad1c26658a17487e25ebf87f47",
      startBlock: 391560027, // TODO: Update with actual start block
    },
    "BULLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65a6f0d6f5642624bf5d3054154dc8b5431f2f91",
      startBlock: 392938585, // TODO: Update with actual start block
    },
    "SOLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe6a90ede4fe962dbb5a1d96802f58bc928a36332",
      startBlock: 391560101, // TODO: Update with actual start block
    },
    "ULTArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfd4c527bdea0ca0ca8e795614a654c9ec17bb682",
      startBlock: 415825069, // TODO: Update with actual start block
    },
    "CNProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf1b37aeea72f0d6521a465ed2871bd53e62dfac4",
      startBlock: 408526021, // TODO: Update with actual start block
    },
    "LDOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f26a3c00fe9a0d06bca3ab555f4605a7301a456",
      startBlock: 423053049, // TODO: Update with actual start block
    },
    "PAYXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfb71aacf81f096afd35ca4a83849edf93db5a185",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CAHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b2b869e5f519f7e190ab003ac828bdbb739c457",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ACGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8cefe37aea845c8c9d1c6f9a535c9f650538219",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08b64a18671b6ac922a4489d6ad44c9f416e8960",
      startBlock: 425821311, // TODO: Update with actual start block
    },
    "BYNDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x45ed9cb9ba73c075c3483fe777c9a73aaf0e1a81",
      startBlock: 400262093, // TODO: Update with actual start block
    },
    "SHAKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xebaae0edd26eb501b4464812f69b7c9710dd7f41",
      startBlock: 409906060, // TODO: Update with actual start block
    },
    "UUProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69de36076abe25ef847cac7d6a2038f5d4dc8064",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CVRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x12580ed127fc3b5e69fafbebddb4c01e4bac1f6a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LHSWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f03692f4e807a498be7b5b8d5d7d2f9cc6080cd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SKYErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e3050532eee674296b7ce921c56536a9db35d99",
      startBlock: 413417534, // TODO: Update with actual start block
    },
    "HXHXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c1f6976ae2c22de49c607a814ac5b5bce113272",
      startBlock: 415806283, // TODO: Update with actual start block
    },
    "IBIOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x15866edc300ba5edd28b4fc6033526b0d6f7bfd6",
      startBlock: 410950164, // TODO: Update with actual start block
    },
    "ZROZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0a7674b503507f51d134d833d3fc47ff2ad9729b",
      startBlock: 424090835, // TODO: Update with actual start block
    },
    "TOPTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb5ed31107f2c0577479df88b1dd92076b06306ab",
      startBlock: 415823928, // TODO: Update with actual start block
    },
    "VTEBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x13189aefb5eeff7700a045f16e7a4c1f270d0e24",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FTSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x725c53b6667ac32ae5d650c74213930220577b15",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8418bfdf842088323a63f712f194a763f21d1b3a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BLNKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfd8c76df3935d9336e2e1c0415fd78be389aef65",
      startBlock: 420975562, // TODO: Update with actual start block
    },
    "FROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7aa56ae2df0c8834d21267f531a8737743cb9fdf",
      startBlock: 423057855, // TODO: Update with actual start block
    },
    "ILMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x282739b3d8fcd581a43e913f3ca565f7157c3681",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OPFIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe749ba00950a78d89bfa058261056beb92437176",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GPIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x992def31353ed61acd725a80b8607633c2e902e0",
      startBlock: 415825335, // TODO: Update with actual start block
    },
    "NTNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeb82d1596b9f93f97ff388ddf639ce27e68bc648",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MUBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8a6961cc91476c5802ecbcdaaecbb67ef81fa6a4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VCSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8f88db4adb43644bdfdaef85c6db8037d2f68e9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BNZIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5a422e819ecaa8b24e985c23121be7676b9f423f",
      startBlock: 416482457, // TODO: Update with actual start block
    },
    "LITMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa552b93910267f588a7c5ecbc846f98403a7baa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JBIOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x35517bcf8ef88dbcdd69f02c4da9417ddeb6b22c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CNQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25eb558a349de357367f600adb2c46faccfdcc88",
      startBlock: 415841464, // TODO: Update with actual start block
    },
    "XHLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x31736099c0a0f6455938645b85c41d5ea2393172",
      startBlock: 426162094, // TODO: Update with actual start block
    },
    "VFSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x43a456783587d0aefea3750fef787ac113aac8c3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AWKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1eba2f5457420870cc775c2ea256c9ae0e396aec",
      startBlock: 420649509, // TODO: Update with actual start block
    },
    "XYLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce8944b060391e281b9edb78045722e132dc49f3",
      startBlock: 403678669, // TODO: Update with actual start block
    },
    "PNRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb8b175e71e6e73d41b3b1632732ea2c76aa4aeb5",
      startBlock: 409565918, // TODO: Update with actual start block
    },
    "MCKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0568a260d3ed31c78942269cb80a689aa31e07dd",
      startBlock: 406793180, // TODO: Update with actual start block
    },
    "PNCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa14fe456104712a4602daa4dc13b4515fcb1e56",
      startBlock: 416139071, // TODO: Update with actual start block
    },
    "IEXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xadcde1f524f1b2fa2fe2d343dc42caad2c44be93",
      startBlock: 423739578, // TODO: Update with actual start block
    },
    "HOLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ab219f2813889b30c294b0f31dc3b88e37db66a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MDLZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06f5bd42459f2d1728a7b2479465505da88eb8ce",
      startBlock: 404712493, // TODO: Update with actual start block
    },
    "GTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5f8f36b4644b3ecd8ba8c7d0d7fd0bed813748e3",
      startBlock: 418573845, // TODO: Update with actual start block
    },
    "ACMRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a73d098780133a27f2779d0c72b48122ec8f58c",
      startBlock: 419257376, // TODO: Update with actual start block
    },
    "ALITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x22eaf2bedaaea18a6eb9c36a8ce575cc5210fbb5",
      startBlock: 422025400, // TODO: Update with actual start block
    },
    "GWAVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x17cbb6a03f59bd0c54f8cae0a3167bf05ee3a873",
      startBlock: 423060576, // TODO: Update with actual start block
    },
    "GDXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3496eb06990a3a3ee431f9e5347ba59ff5029cd9",
      startBlock: 415807258, // TODO: Update with actual start block
    },
    "EXKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4313be6eb9da3a2d2775d982aeab838d36f1b02a",
      startBlock: 415839353, // TODO: Update with actual start block
    },
    "LBRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x13f1ce4454a9e52a0f1fde0424bc30db742fe4dc",
      startBlock: 415802058, // TODO: Update with actual start block
    },
    "TTECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x90f521f854f1f0595df4fdc44f8e5c524eba499d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FVRRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3d8a36ef29faeea71d90d80da9e8ad71cfbc20fd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NTRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd416593b04f8df3979f8bca791a11592ac69270",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CGTLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ee69ef8252a4f877c7dd45a11339df37615c4af",
      startBlock: 411983087, // TODO: Update with actual start block
    },
    "NErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4170600dd402df327c5c4e4d7647cfbbe785f232",
      startBlock: 418231095, // TODO: Update with actual start block
    },
    "BNDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29b40b3bc1ec964ebe87465f37d0d61dc3d592d7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "URGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd973354f17980d06d3f4de223c71ca5bc9b5b4c",
      startBlock: 426169984, // TODO: Update with actual start block
    },
    "SPCBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a5d88e87b35b981ade99e60e93ea80e644e75cb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VERUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa4af116e8ee9098b73536853f46b5e2e01bcb987",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb6ca6dff39898230d5c30bed01ccb0f9fc0f995f",
      startBlock: 410943664, // TODO: Update with actual start block
    },
    "AIQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41732d64f15081433984c2d45f6ac1c21b301642",
      startBlock: 415807766, // TODO: Update with actual start block
    },
    "MDGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdffee127c7ca1bc0ef43fe19be2dbc2feb00d06a",
      startBlock: 413417557, // TODO: Update with actual start block
    },
    "EWGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc3ec675c4fd8c26e2ed55097423dc36dee087092",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EXASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7f4cc2e84d3acba27bfa6375e8d6310dc6e2ca96",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VGITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x973b1059b67aa51b3adaf19d828bd9386b7c15d5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KBWDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6159401f546e121743864be6e9cc95e7305d362e",
      startBlock: 415801827, // TODO: Update with actual start block
    },
    "ESTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc39d76fdf91870c9aaa3cbc0a47c0ef65dee0047",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1e7f376c8033d3c02fdcc33d5995d6d88b66b8b7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PRCTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe55e54ca709681b5cf62c2080298a68b87f275a2",
      startBlock: 416133309, // TODO: Update with actual start block
    },
    "EZBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x71a894f86d9ee16fa56f36bfd09351e2f0719ad1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AXONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x94a83e3bf8c388cb22283e6fe23ef9a02338c4fd",
      startBlock: 393976447, // TODO: Update with actual start block
    },
    "BLKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0faeb2fc9b31029bc7a017421cb06d31a7eb903b",
      startBlock: 379591231, // TODO: Update with actual start block
    },
    "Crobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x13978c266e137d86137d01928b56212314d4a777",
      startBlock: 381907485, // TODO: Update with actual start block
    },
    "DPSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa105d5c5e558a88e400f5a6afad28ce88239b89b",
      startBlock: 379586982, // TODO: Update with actual start block
    },
    "FANGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x28025da2e96ef6bcd3afe30c4d0e6a6f977985a5",
      startBlock: 407484269, // TODO: Update with actual start block
    },
    "GFSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbeef3a0a157419f9400cb5bcf693d2ca967edcae",
      startBlock: 383396697, // TODO: Update with actual start block
    },
    "JOBYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1542fa5f0eb4f992aa5ebd47007ea71ced26a363",
      startBlock: 379440242, // TODO: Update with actual start block
    },
    "MOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d82d1e7f963d4e4a979d30016f1617704f64bd4",
      startBlock: 379440779, // TODO: Update with actual start block
    },
    "PGRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1339320e3261bbcb724e5a61fadd3b36948bb4be",
      startBlock: 380627597, // TODO: Update with actual start block
    },
    "SHVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41c0a75147b4f204cec6853468e5c82a69fc8308",
      startBlock: 395014155, // TODO: Update with actual start block
    },
    "SLBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x04a8e2772f6bb32169ca85c6fac5972e3395a36b",
      startBlock: 418556062, // TODO: Update with actual start block
    },
    "SYMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x15a8a62c6545e05bf6940c21a8581bb9bcdbcbe6",
      startBlock: 379936636, // TODO: Update with actual start block
    },
    "TWLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x89961cd9bad5a9eab4f3d148252bd6fca19ca8e8",
      startBlock: 386858005, // TODO: Update with actual start block
    },
    "VGKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbb2316b7fc02d7443b7489088c51412974fec0bf",
      startBlock: 379937624, // TODO: Update with actual start block
    },
    "VONGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5923f9c55b54461df838572b61fcafe42c94cba4",
      startBlock: 382355677, // TODO: Update with actual start block
    },
    "WBDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe36a2901ad5bbaf2bf8d0027c681560896fb4e9",
      startBlock: 379440539, // TODO: Update with actual start block
    },
    "CHPTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1fbe3f3972885748d3fd97b0ca267be43d155930",
      startBlock: 409578367, // TODO: Update with actual start block
    },
    "RRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf888f3ec56cc8a1629a1133bb47783ee31b2399a",
      startBlock: 409908616, // TODO: Update with actual start block
    },
    "KULRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa3c0ca5e5a1f31da554170667b65047b2a3ed84c",
      startBlock: 421681435, // TODO: Update with actual start block
    },
    "BOILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7811503cc706e139a973017fa5514f6ba379cdc2",
      startBlock: 409912867, // TODO: Update with actual start block
    },
    "IOVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e94fd23ddda5dfefcbf91ffba80162404dd7382",
      startBlock: 415822951, // TODO: Update with actual start block
    },
    "QYLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaf628c0ea56e4d2063db77fad54b467be09954f7",
      startBlock: 409584910, // TODO: Update with actual start block
    },
    "NVDQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x33453c92f130d01af071f7527a599f56e1741493",
      startBlock: 411292934, // TODO: Update with actual start block
    },
    "SMTIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x53c38258abb010d1e296e4d7caa7e4a706c08fda",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd1f387e88ae98b4e979a9067e780394b5b77a2e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VDCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7144986cf7ad2210628672bc9f7fb42ae521bd0b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GENIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8291adced07430b4332cf83441d34dacc0399100",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MODrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30a101c0b21f5ec6faf538234605e5697cc87ad1",
      startBlock: 418903974, // TODO: Update with actual start block
    },
    "SPTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe075e7ae6929be29820a85903216ac0f50b9cfc1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GEVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc3e3b8016d389603e20db6edcdff3778ca7f431a",
      startBlock: 425475277, // TODO: Update with actual start block
    },
    "IRWDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb61778454fb556fc5b88c01864fdeeaceda0167e",
      startBlock: 418221185, // TODO: Update with actual start block
    },
    "NGNErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2ab4ae03f78cf055bb0f2765cc2f958dc36d6fe2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HUBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ae6c59c3482a91e1527ea482b0e380e0ece6848",
      startBlock: 416482373, // TODO: Update with actual start block
    },
    "FLRNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x43fd5e5e9799366002f112ec041c535318c336af",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OXSQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5bc2118fb6c0e82f4099bbd34a2e8450b729fcd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EWTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xafdf8980927ed05c532f12d9ee3a2a7d34f0455e",
      startBlock: 415809408, // TODO: Update with actual start block
    },
    "SCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdcae7684643d4d84f757f755534ced090496a1de",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5cf6ed05a891c72c19e7f164d62d4686fdd29dac",
      startBlock: 415847412, // TODO: Update with actual start block
    },
    "TANrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2336d7e71d8d92ed45b8b3b4b618e399c21cb5a8",
      startBlock: 421325757, // TODO: Update with actual start block
    },
    "XMTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3d84cb5296968ff23036e9fb2550f7e47d8d880",
      startBlock: 418214307, // TODO: Update with actual start block
    },
    "AIFFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd4e4795f25eb8b14f40e1b1198c6655320fb41aa",
      startBlock: 415853245, // TODO: Update with actual start block
    },
    "GGGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5595848aaf442d9470f0657dd28b6519423544eb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EDZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3bcce5b59bc3a25c2de23fb62e9da162ca716ed0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DBOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x003465a162a927ffeb6d678d326a516b5cafca92",
      startBlock: 421324550, // TODO: Update with actual start block
    },
    "KROSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb9293c1c73f8cfe987bb4e11b2db75b8cad66370",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MTUMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3293f645727a0bac05e5141048fd87afa66ff05a",
      startBlock: 425471817, // TODO: Update with actual start block
    },
    "SCLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb1ddfa168a626f72e7c237c4edb7069a8f3bb022",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x92caba0cbe378023629180aa11d386e9544ed053",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PRMErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe01c292b49a3127bb99e328ab474d4f0cebd98da",
      startBlock: 415822261, // TODO: Update with actual start block
    },
    "ICLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xee3cd984e97e9fa0a4398607a088aa4b95ac34f1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RVPHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa77fededd2505683f9270006fed7fa8a80d8d200",
      startBlock: 415814098, // TODO: Update with actual start block
    },
    "ITRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcfee5636a0ad7bcd8668746d746b28bf903e987a",
      startBlock: 425824090, // TODO: Update with actual start block
    },
    "TFPMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd01220895cb4ca03265df0411396f917e4c30892",
      startBlock: 419261049, // TODO: Update with actual start block
    },
    "WNCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x122a189d5284a59f7ee01700cc8590475c0f2b7a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ACNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x96310cba9849c8a5efb30a0efe4cf9b9ab44b9e2",
      startBlock: 379935760, // TODO: Update with actual start block
    },
    "AZOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x337260cce0373193418c439808ea878c86b9d591",
      startBlock: 383395601, // TODO: Update with actual start block
    },
    "COKErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcabc51c4300e7215615f7f128725f80dfdbfec6e",
      startBlock: 397104749, // TODO: Update with actual start block
    },
    "DRIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefe7dba0e521640e2a0849c57e56c967a8d7336f",
      startBlock: 383396165, // TODO: Update with actual start block
    },
    "DUOLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcbc051080ae3a8abcbbc621fd97654ae1bee0286",
      startBlock: 379440443, // TODO: Update with actual start block
    },
    "ELVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf34a132d346a4de6cd3738de2cd268c64259448c",
      startBlock: 396415258, // TODO: Update with actual start block
    },
    "ENVXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4002b37f663519eaa7d6e422e2acb66d47a098f6",
      startBlock: 379588855, // TODO: Update with actual start block
    },
    "KRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x347447cd1f2b7ee103ee38e52e1f56ee055bc157",
      startBlock: 380970731, // TODO: Update with actual start block
    },
    "LULUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc69bf1e41b2a346ea6034cec939e51a9c4ce2703",
      startBlock: 379591209, // TODO: Update with actual start block
    },
    "MNDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe88e0ff23a8fbd9d6cd9f114e1568b02d70d30d7",
      startBlock: 385130531, // TODO: Update with actual start block
    },
    "NUErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x080b49d75449710c95e1f34c9a64cb2e867d1c00",
      startBlock: 379440330, // TODO: Update with actual start block
    },
    "NXPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x855cc942d5018c5f424ab60ba794860ae51b50a9",
      startBlock: 387200471, // TODO: Update with actual start block
    },
    "QDTErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe98c20457ec78f15c2134a1dafd0ab8bade6e4c7",
      startBlock: 379588806, // TODO: Update with actual start block
    },
    "SHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc9c6a4b594c6afbda87f6416c6f4a3c461d4a3ec",
      startBlock: 388243306, // TODO: Update with actual start block
    },
    "SPDNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9163424ddf8effbfd81e0f3ad11732ad7585bb3",
      startBlock: 384433246, // TODO: Update with actual start block
    },
    "Vrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x09e63dc0c1573e1645af730baa8219e0f2ee2f44",
      startBlock: 379440808, // TODO: Update with actual start block
    },
    "AMDLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4fde27c57ebbcbe2b3cfbaeeadb0666e6b2ff2c4",
      startBlock: 409584936, // TODO: Update with actual start block
    },
    "SEDGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb398778ec2ca437d72a00b04b37f8c21eefa037a",
      startBlock: 411294496, // TODO: Update with actual start block
    },
    "VGSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc92278cccdcfe98321d36d06e41a455157c6a8e4",
      startBlock: 420984272, // TODO: Update with actual start block
    },
    "RGTIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x211ca49e98905c8d5e40a63e4098bca36b538a9d",
      startBlock: 409578339, // TODO: Update with actual start block
    },
    "FSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf6ad3521e8a13b78ca81dbc55642f0f628cd9231",
      startBlock: 425827552, // TODO: Update with actual start block
    },
    "EOSErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xca15415deafadcbfdbbfbae266a2b6e77ac6a83c",
      startBlock: 411290146, // TODO: Update with actual start block
    },
    "UBRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x10ec2aef89cceea454cc566b44a6221a1c335d02",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OWLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5bd1272a0e44d905f4f4ed459efc23b01d2a8c5",
      startBlock: 416486346, // TODO: Update with actual start block
    },
    "DGXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7f42bced4396dcbc86425e9f223cca6cd08873b",
      startBlock: 418913009, // TODO: Update with actual start block
    },
    "PRMBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x71fc6b73f4111b70ac90ed6e4f503b14b97f89e0",
      startBlock: 415810761, // TODO: Update with actual start block
    },
    "FSLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb03385119d3f12ccef924c80fbb63e6b86f69f1d",
      startBlock: 426164931, // TODO: Update with actual start block
    },
    "ICONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe1e93e855d425661611adcdcfde4f110ed27614e",
      startBlock: 419257907, // TODO: Update with actual start block
    },
    "SBGIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9007f7995c03a11880806750a74ec87a6937605d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ONTOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf906723101c48f8755a6bfa24529de9435b8ec6f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GLADrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc12ca1d60928215d989ede7d9eaa5c9cfa210a4b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CACIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02ef79ab704ad3d0f9b9a7ec0433694216ab0a6f",
      startBlock: 426506145, // TODO: Update with actual start block
    },
    "FRPTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfae27d0e8084d5916666539ccb1b47bdf9d879f9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SDGRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0df0dd0f2d36188a9a316a6b935a9ad076db6a19",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3fdffc4f70e47c17a532ddd1cc16a6eed86546e4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HUNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3793dc51e4416fc0681debcae8a4c514d381b9f5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LPROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x979397f323108b752c0d6515da84fec34a63e458",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KOPNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x937e93dd1ce2fbc969f2af670d175a971737ec8c",
      startBlock: 423048691, // TODO: Update with actual start block
    },
    "IMUXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x536e0531e226c6cb3a97e177583c685988c60387",
      startBlock: 418213841, // TODO: Update with actual start block
    },
    "CCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdeab0188dc05af48e794ddc67bb395ab7de0234e",
      startBlock: 415802115, // TODO: Update with actual start block
    },
    "FBGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4eaafd21af987b4f5e1a4bcf7927e2515946e43b",
      startBlock: 415802689, // TODO: Update with actual start block
    },
    "DOMHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc029e4712281dc83955ee557d0c038a3b18eb8e7",
      startBlock: 418565712, // TODO: Update with actual start block
    },
    "VNOMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3515f24422f205e08725e0650fe01be49fbf7db5",
      startBlock: 420990465, // TODO: Update with actual start block
    },
    "ARCTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb6293d25a7750343e819ef7d79fc117500175b01",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VIVSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd5dacd1387186f679094cdf6fcb0b15dae489a36",
      startBlock: 426853249, // TODO: Update with actual start block
    },
    "CHRSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bd5bf70874199f5d578672b4377a50de3be960d",
      startBlock: 425822292, // TODO: Update with actual start block
    },
    "USASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x78b511d9aecf42d8ae503cade4bfa1468283b363",
      startBlock: 415814628, // TODO: Update with actual start block
    },
    "WNTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6689bf71fa1522999d4b1c42086027cd5fbbb808",
      startBlock: 419264185, // TODO: Update with actual start block
    },
    "URGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f8d75194d00e9e857f5522ac8809098b11d20b4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HAFNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x585506143030fe530d4d5aa31aeae9f15f623a80",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NVDWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7046593a151e7e595a37bd4b5774bac7d2f18317",
      startBlock: 415854753, // TODO: Update with actual start block
    },
    "OLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xba9365513bfa3977fdf20250611e1f99dd90e312",
      startBlock: 415848461, // TODO: Update with actual start block
    },
    "WIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa9e5e580ea923d573255df94dd5de767752340f",
      startBlock: 419251606, // TODO: Update with actual start block
    },
    "SMINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7825dd8f199091037ceb8d1fdf5edd8315bce831",
      startBlock: 420638406, // TODO: Update with actual start block
    },
    "GUTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb052f896d1bd8bd9b7bc4e0b7b6187ddcee9f019",
      startBlock: 418907827, // TODO: Update with actual start block
    },
    "INTUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x00499400f5ef31cd09d34cc7d13a3ec830fd72c2",
      startBlock: 396412055, // TODO: Update with actual start block
    },
    "AEErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc26de9476e0222b35b7e931b879d481b0f910c8b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa91bfacd09f852393aa53b48897194f68a2f36d9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MPCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d69057b4c04f402fba65ea685e971f1619cdd68",
      startBlock: 401947419, // TODO: Update with actual start block
    },
    "DVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x87a91a5cd1c3384e69a5c339427a70e0eff6ff6b",
      startBlock: 418217836, // TODO: Update with actual start block
    },
    "COOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x00290e080954fc1bfcaf21da696e50b3aeb43151",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CHTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x462963cdbadf214ae77d4c5248e5134f84aafa9e",
      startBlock: 415850649, // TODO: Update with actual start block
    },
    "CIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xddc94a36f8d764e8a24d295057faa678b24601f2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb219e63b71e66e1281042b944b4059b1bad8a959",
      startBlock: 405089822, // TODO: Update with actual start block
    },
    "XELrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51c226c098ad8d03537ed20ce2bd136e074478f2",
      startBlock: 401946024, // TODO: Update with actual start block
    },
    "BWArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd1f73ce6027c77072485188839ae09c71b31777a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GILDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc835c132405a5b28bfaee8ccf21fb9230d23f739",
      startBlock: 400262142, // TODO: Update with actual start block
    },
    "FTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x92692b53d29554abd35d83741dfd022cb23c27f5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WDCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97e6a30d286fd4bea00add3ebc4aaffaa790b2a4",
      startBlock: 393976550, // TODO: Update with actual start block
    },
    "BITBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9d38a7b432ee67c3ed0cba17950d0197e441fbff",
      startBlock: 379586304, // TODO: Update with actual start block
    },
    "FCXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x569cfd9094fbd2d2b59287a738ebdfbeb357495f",
      startBlock: 380970596, // TODO: Update with actual start block
    },
    "HErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4bca57854ace843450d2a43f54fb81007450ac2",
      startBlock: 379440210, // TODO: Update with actual start block
    },
    "IRENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a3e354ad8b1366fefec2a2c6e91372a75698640",
      startBlock: 379589280, // TODO: Update with actual start block
    },
    "LMNDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x94002eb72de2eeebe475cc706d627770fca2dffa",
      startBlock: 379934268, // TODO: Update with actual start block
    },
    "MAINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x593ad8dba77d2ad80a72c18d7e32dd4fd5a98cbc",
      startBlock: 381910204, // TODO: Update with actual start block
    },
    "PATHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1cd3a53e75443a1dbc3462d649af485ca9456094",
      startBlock: 379440272, // TODO: Update with actual start block
    },
    "PWRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c04e4e2cc0eb1d829b70c3d52f64ee6a006b4ae",
      startBlock: 385130316, // TODO: Update with actual start block
    },
    "PZZArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x585211d9750f8fc31f318adbf7127d3c736054da",
      startBlock: 396416406, // TODO: Update with actual start block
    },
    "VGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf57e5b3b62b1f272c1c537ba9ef6f795850274c7",
      startBlock: 409912690, // TODO: Update with actual start block
    },
    "NGDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x631ea4a010dc7d3a15e4efe3db6ac9d86b0e11be",
      startBlock: 409909263, // TODO: Update with actual start block
    },
    "SVIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3a72f342a7a74479f5bfe140a17a8266402f9542",
      startBlock: 423746549, // TODO: Update with actual start block
    },
    "SCHBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf1cf96c343ee2d45a7a774f8cd7649772ef1b0ef",
      startBlock: 416826396, // TODO: Update with actual start block
    },
    "NVNIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x75d4d290db5131126e2a36f86812e852d5ac979f",
      startBlock: 419597448, // TODO: Update with actual start block
    },
    "UGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf2f7c68906441d51a4c55738ab1d959bd0fe16e0",
      startBlock: 410954320, // TODO: Update with actual start block
    },
    "TNXProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xca80e657af5c3fc05b97ac9fbda4f1b5664e98bb",
      startBlock: 416139306, // TODO: Update with actual start block
    },
    "ITOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xecda4b96390e80dd5b86fb735cc861c8f9f71fa5",
      startBlock: 410944646, // TODO: Update with actual start block
    },
    "FBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5b61909f732fa5bf68daa7f9fefbd35911526708",
      startBlock: 409909500, // TODO: Update with actual start block
    },
    "NVDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3d38260c9a9672f95fcd964fe2366be260d8d5ef",
      startBlock: 415824162, // TODO: Update with actual start block
    },
    "LUNRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x250692b46d2d68eb2f05d8ca640a04eb56762c61",
      startBlock: 415841887, // TODO: Update with actual start block
    },
    "SMSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3fd0007bfa362558022ffa35611c0f29df05195",
      startBlock: 421328620, // TODO: Update with actual start block
    },
    "SPHDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x285746873d918509395dcf8705ccd1ac483dd87c",
      startBlock: 409909919, // TODO: Update with actual start block
    },
    "YANGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0adafa4f534cb13d64ccb42a9d0dd81f2512548a",
      startBlock: 411293873, // TODO: Update with actual start block
    },
    "NAKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3a7de362964f1bab91569ef239fd7364d6d09c5",
      startBlock: 418214076, // TODO: Update with actual start block
    },
    "RUMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x40365430587c358775ad06b2eddfe73104b7e5fd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SESrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x355a60ed6cb391e8a7a06f0c4d684c1ebffb1c3b",
      startBlock: 415807422, // TODO: Update with actual start block
    },
    "WWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xddf335057d365f799c7217ef091dc5f90ed95fe2",
      startBlock: 421322820, // TODO: Update with actual start block
    },
    "SVXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56f83944c5f6452aea1e1ced8a518abeeef4befc",
      startBlock: 420632045, // TODO: Update with actual start block
    },
    "CONYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x91a69454417d5e7fa132c75fcea5312defb9cf7c",
      startBlock: 353160927, // TODO: Update with actual start block
    },
    "NETrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xac266a150dbcbdb6ff93dac512607c6f3c4cddb1",
      startBlock: 353507826, // TODO: Update with actual start block
    },
    "BArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7639de4f3d46a577963865956e901c81b4a5a3f3",
      startBlock: 353161820, // TODO: Update with actual start block
    },
    "RIVNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcdfa197b257d670fdb0f07a70d0cc8427e414fa3",
      startBlock: 353162602, // TODO: Update with actual start block
    },
    "SBUXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c739d6596f9ca9eda3d9c5d19385a3e865d1c46",
      startBlock: 353506535, // TODO: Update with actual start block
    },
    "ANETrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a2a8c20f5fd0a84341bf6a093634ecafa1e9b86",
      startBlock: 353509085, // TODO: Update with actual start block
    },
    "COSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd2ca741550addc381a21076919b53cfed244580d",
      startBlock: 353162571, // TODO: Update with actual start block
    },
    "ELFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08ab0ccb04e6ea46cb0ebd3400cbfe1bd2bf5efe",
      startBlock: 355574934, // TODO: Update with actual start block
    },
    "NVDUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68c1812f0e28cf6fd9f75c560537d01519aa02ee",
      startBlock: 354196673, // TODO: Update with actual start block
    },
    "QCOMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6a77d0d9916fd1cda5bf5e9dbceec0ae239ff5d1",
      startBlock: 353505785, // TODO: Update with actual start block
    },
    "Frobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa135e0e5caaecc2d61162b776fcde89a417ab709",
      startBlock: 355920643, // TODO: Update with actual start block
    },
    "QQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3da74293c496524d5614416a5530d5d99dce16bc",
      startBlock: 353161627, // TODO: Update with actual start block
    },
    "SNAProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3e29191046bce2ec1a28ce5c39e4a9998342570",
      startBlock: 353505343, // TODO: Update with actual start block
    },
    "VSNTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7eb154c7fb3e8e4236dbcdbd153532954fc67519",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa0be8d0681173d0d65dc74a3935617489325e606",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bdb7ffc780a71d8854a82c82b15a565647b5fb3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PPLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d1a27309fa44d977550a79cde7d4bebddcb892d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FASTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x914b73738a4a3675c0037db5087e77e058de4af6",
      startBlock: 423752732, // TODO: Update with actual start block
    },
    "NVRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4abcbb499fe4b69fe7dc200e33743cebc12a7ec9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BF.Brobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf62fe4329d32f4838a3ab42a6afc4d136171e0ad",
      startBlock: 400262118, // TODO: Update with actual start block
    },
    "IProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x32f7513185682bc48b9e9ffa962df2999a2f54bd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "Qrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeefaafbd98241061b6add9adfdd71eb9b5f206c1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TCRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1be1b10d8e18a9e8cc9925083831a9d9e425741c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ALDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5207c9cb7c236399909f27bbf01d9af0466a6a4c",
      startBlock: 411293847, // TODO: Update with actual start block
    },
    "ABEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbfcfeb2d65733506c573c75fed7b079413a761d8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ULYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42f988cd99b714438a4feb8011e67409b4bdf658",
      startBlock: 416497041, // TODO: Update with actual start block
    },
    "Jrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf4ec486e82c877156d98af636db7a8708aba49fb",
      startBlock: 409578554, // TODO: Update with actual start block
    },
    "CAPRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf17348e8330449a890707ae5e261ff7481ba06ed",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IEFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e9b2282984a94e13493548e53d3c35238de7188",
      startBlock: 423739332, // TODO: Update with actual start block
    },
    "JDSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x32de3ec6ef5cbd0e6e8088e84ef6d8f138a1f1dd",
      startBlock: 392250795, // TODO: Update with actual start block
    },
    "Brobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefa9deb68617766b9bb671ccbf90173ca3bdd207",
      startBlock: 392590360, // TODO: Update with actual start block
    },
    "SNDKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7fc3dd412980f28f1d3e2718d0fc6821808c2137",
      startBlock: 393975830, // TODO: Update with actual start block
    },
    "TEMTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf62c0c4b87834c30980f597b77131e18742ac98",
      startBlock: 415814385, // TODO: Update with actual start block
    },
    "FEZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1227295d3f598bc31a7c831afb59ffc359a883b5",
      startBlock: 380971569, // TODO: Update with actual start block
    },
    "FNGSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x93df38fbd59e517750caebe236dda884f02da3b7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PFIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd39e943c0b9e612499835aed6ebd527b5f488ed2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ACLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x76c0f8a25ae7561ea96ab7952efccc4a7e5717d4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BBIOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfdf3609cd16792ef886eef4bb19b2648ae696aee",
      startBlock: 421670275, // TODO: Update with actual start block
    },
    "VVPRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdb65bb2f08d4da7d9637c4cb834eb624be3ff802",
      startBlock: 410945262, // TODO: Update with actual start block
    },
    "TLTWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9dbfc9bc93337cba7083b23cb73afee2fbbbc24c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ATHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x24986985f41cc5c77c5c50f8fe1b4c6b24ae6628",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MAROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfd87cade020e93eb0eb8ec1f3491e7e308d815f5",
      startBlock: 411294053, // TODO: Update with actual start block
    },
    "INMDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30869cbaa5f75269b563c97d8c7afb489ce99178",
      startBlock: 420652780, // TODO: Update with actual start block
    },
    "PIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xae39f4c4b62c8f910319dd66e10bc382ba8c20ff",
      startBlock: 419604954, // TODO: Update with actual start block
    },
    "BLMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x58936696df2c2ecaaedb290fe5087998c9d521cb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VOOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc471df434155948042cf3f3aaca6ba9031fab327",
      startBlock: 415836955, // TODO: Update with actual start block
    },
    "WGMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25cc5690c854f8e28f90bedfe82d673816b5b15c",
      startBlock: 411644883, // TODO: Update with actual start block
    },
    "ALMSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0a06d51952911ef2f9bf9c263ffdd89ecfeae5ee",
      startBlock: 418918613, // TODO: Update with actual start block
    },
    "RNAZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x201671cc00d0aa8691ddaf07244b26e48bcf45a4",
      startBlock: 425827037, // TODO: Update with actual start block
    },
    "BHVNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3bdb48dbb1bdecfc358a4d060451c590cae199d",
      startBlock: 415845728, // TODO: Update with actual start block
    },
    "CALYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x207740f2c3a2c7b3cba591c11b5b0b2f60326622",
      startBlock: 424443568, // TODO: Update with actual start block
    },
    "XRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05c4cb301aaee68b7e64c9d656fd19a02fc091e4",
      startBlock: 416831733, // TODO: Update with actual start block
    },
    "CBRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c636848a37527c02b794af072c553a3e3f65226",
      startBlock: 415813913, // TODO: Update with actual start block
    },
    "AORrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61b5045b0625832f5949a35eb0a9533cb05ad2f0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "URArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5d21642a40da3ae484677bc9ca036ce254e8094",
      startBlock: 410952676, // TODO: Update with actual start block
    },
    "OILUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcadefa3a64c79c989c92accbdb09a4bdd27d96db",
      startBlock: 418566937, // TODO: Update with actual start block
    },
    "OLBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd11effb2cac61dfcc7a5d3631579e265800285c0",
      startBlock: 415807229, // TODO: Update with actual start block
    },
    "LRNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c1013bce16955ce71495d06aec8e8aaa6040f75",
      startBlock: 426159142, // TODO: Update with actual start block
    },
    "BNSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68349e03e5c0c51af0379b5bd0f62cdfd042c334",
      startBlock: 418559695, // TODO: Update with actual start block
    },
    "RZLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1204b75a40dce9200697a27e90c98dcf29037b2",
      startBlock: 415801861, // TODO: Update with actual start block
    },
    "TARKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0c4604c9abbde7da51249060158a142fad49c797",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NWLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60b479171aa66714ce29cb11ebf0ff26bcfe200f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HTGCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x83fac0476b99b5ed19892af0ff1ca492bd0d9ab7",
      startBlock: 420646305, // TODO: Update with actual start block
    },
    "GESrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c77fa7420ce224a2eef7e7ddd27794a9fead7df",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RETLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa13f1fe3da9013b816dc5970552959b23ef0421",
      startBlock: 421330067, // TODO: Update with actual start block
    },
    "CSGProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaedcbfc8bed09979471be0f515edf26127861429",
      startBlock: 397806605, // TODO: Update with actual start block
    },
    "HSYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcd77fe8df06e8c78f041a0d9171256cf4ccc8fd4",
      startBlock: 421332630, // TODO: Update with actual start block
    },
    "EFXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe6065246c1cdfe932af6a6812b53364d96917992",
      startBlock: 402342754, // TODO: Update with actual start block
    },
    "SWKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c0a31c9a4bc3dad739938131ec3ba135ce9868b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KEYSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56d901e4e77411df3e0ac883c2397465d0eb2b0c",
      startBlock: 399186852, // TODO: Update with actual start block
    },
    "MMMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xedcf80e8f218383903966431c4737f7d5ce2c170",
      startBlock: 399874902, // TODO: Update with actual start block
    },
    "CLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf9c73d9e631dbeb67124c24593328b80323683fa",
      startBlock: 418566962, // TODO: Update with actual start block
    },
    "ROSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x905e0bd10fafd0e479ae6b074237fa6e8723e1a5",
      startBlock: 426512918, // TODO: Update with actual start block
    },
    "IPGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x07039a82417bb8378883794fbea422e5721eb199",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PCARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0cbdd1264051e17bf6c0938a4e683228fb70381",
      startBlock: 408523673, // TODO: Update with actual start block
    },
    "ETNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2254732c2d175737665f8d568fe2570cf2d2e5dd",
      startBlock: 401257043, // TODO: Update with actual start block
    },
    "BKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdab714cdb261cf4cca2c956c9013fb1b91d2e6d3",
      startBlock: 399530494, // TODO: Update with actual start block
    },
    "SPACEXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc311a25b6b6331405052e4e2e6542cb7d7bd71b5",
      startBlock: 355351639, // TODO: Update with actual start block
    },
    "DHIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa012e3ca0bf1d1c80c1e56ed0e3837bb55410d64",
      startBlock: 394671442, // TODO: Update with actual start block
    },
    "CCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd20971596f8594f0a29a71508eb186d4b9a71940",
      startBlock: 356610213, // TODO: Update with actual start block
    },
    "NKErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x11496133b739ac157e1feb18987f89fbe2ece8f6",
      startBlock: 351609754, // TODO: Update with actual start block
    },
    "PYPLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0e217f3304183a93f21de1b516af52c06a3abe1a",
      startBlock: 353161429, // TODO: Update with actual start block
    },
    "PINSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a65436b28fadf08bd9ddb2c3891391324acfce1",
      startBlock: 353852924, // TODO: Update with actual start block
    },
    "RKTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9de884722a3ca675a006a1c4dc4f93fa23a1c434",
      startBlock: 353507538, // TODO: Update with actual start block
    },
    "DOCSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa91a4c1258be0a9edce7ed7c09019aea62a27f9c",
      startBlock: 356609422, // TODO: Update with actual start block
    },
    "Trobinhood_2": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc3c4a1c9496710219777f754483cf9a2fe2eb51e",
      startBlock: 353850817, // TODO: Update with actual start block
    },
    "ROKUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd398f1e0666611c1a629f1762239f7d62eacb4af",
      startBlock: 353161165, // TODO: Update with actual start block
    },
    "TMDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7582aa0657a2ddcdeadad74fbf19cdfb0900779",
      startBlock: 354197461, // TODO: Update with actual start block
    },
    "SOXLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbde7bf41c3e467a1a84c1eacedff4b078a1f46d3",
      startBlock: 353853996, // TODO: Update with actual start block
    },
    "AESrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x11d5f3d3ce6bd71d921c3eca973db06c2da06818",
      startBlock: 385127896, // TODO: Update with actual start block
    },
    "ASHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5379daf1f833fa42bed9607a6a5d88168fb3849",
      startBlock: 379440002, // TODO: Update with actual start block
    },
    "BErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9db905db6201d14df2f8004aa8480a4b0fe1a4ad",
      startBlock: 379933606, // TODO: Update with actual start block
    },
    "CDErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x86cace05773b937035ec4ae1e246a2d9e6f31606",
      startBlock: 379440054, // TODO: Update with actual start block
    },
    "KTOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd84afc889b4de724600a96c846b63568157acf79",
      startBlock: 379440676, // TODO: Update with actual start block
    },
    "MDBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x93e488bd101410fe55ef331118e82e3dedbac07b",
      startBlock: 379590405, // TODO: Update with actual start block
    },
    "SGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x465b11304006e39d6d05db50042f60c8325a84c0",
      startBlock: 382010408, // TODO: Update with actual start block
    },
    "SILJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d549a8a3e98f4040611c0a620b28eec823cb572",
      startBlock: 379936127, // TODO: Update with actual start block
    },
    "SIRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc44a4685f4bea0317d828ba68c7927279c5d8a3",
      startBlock: 387204252, // TODO: Update with actual start block
    },
    "URTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x486c5fc9e41a4d770913a373d45c1f9e6c285faa",
      startBlock: 380627792, // TODO: Update with actual start block
    },
    "VKTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa8df8964feb50b63e96f79c000cc604be662d1ef",
      startBlock: 386859285, // TODO: Update with actual start block
    },
    "NFXSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7ab19b56299f8937785762b18ff189368d71de8",
      startBlock: 426513428, // TODO: Update with actual start block
    },
    "YCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd815df7d35bd64f7edc884c5d91605e116a5d192",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SOXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa2ac45ca3141205f23f0c79cb3c326c7360bbcce",
      startBlock: 415824413, // TODO: Update with actual start block
    },
    "SHNYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa3740cddd60ebbcdb9a1dfaa9f0a007873d00cc0",
      startBlock: 410951659, // TODO: Update with actual start block
    },
    "LFGYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0ec3c7ab21e219b2fbf299aa61765143bb4f1572",
      startBlock: 416483222, // TODO: Update with actual start block
    },
    "WTFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3f79b619961bb2f049936477b8e602d71da8dd8b",
      startBlock: 415824658, // TODO: Update with actual start block
    },
    "UCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x40e65e15af52b3e25f242420d6ca1641f4d06459",
      startBlock: 415829193, // TODO: Update with actual start block
    },
    "FUBOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd52eec1aee65391bdc1a745db1a3c34caeda07d9",
      startBlock: 415811458, // TODO: Update with actual start block
    },
    "MVSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x028c5ae73193164864cf69cb38a56914978f43e6",
      startBlock: 424085029, // TODO: Update with actual start block
    },
    "AZTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c040962363e94bf484a0b27262132670b4a2d01",
      startBlock: 424086245, // TODO: Update with actual start block
    },
    "NOBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5383bc4bfea4bbe2f58f06a3a3b0b8af0daff2ca",
      startBlock: 421680258, // TODO: Update with actual start block
    },
    "AQSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x18bf2466feb8a25db67368af2773d59e2cab2601",
      startBlock: 420635466, // TODO: Update with actual start block
    },
    "GBILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x27d2a5e76c290783041c21b488a72ba9dad38f57",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JETSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x46a9f1c8306dc52e87c492560b952f322ebbc37d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RILYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f0f2460d98ea97e72251475c6c09377905f0a43",
      startBlock: 421679812, // TODO: Update with actual start block
    },
    "TVGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb79d6a659ea5694fd0782e3d1084fff839f898cd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c174bbb4a60b030aa64c1737f572f1230f63d1c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BDRYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x830823d7717d619710b6e263b4a3ef560b271bb6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OPKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5cb2da875fd0c76fe27ba9fad6c9b537bc638884",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EBSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb92575e240f0bba8596c087217219c0b20423d1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XLIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x604ce7ae890208700b64134d965509883610d0a1",
      startBlock: 415803937, // TODO: Update with actual start block
    },
    "DBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe904157f1a45be583354b1b6f0ed16ae47cee556",
      startBlock: 416487615, // TODO: Update with actual start block
    },
    "AMTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3b85facc69552cfc1a3c5175e56b84c1a8ed80d",
      startBlock: 426513582, // TODO: Update with actual start block
    },
    "XAIRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4ea70b2480f1a343b7bb083a9bbe62231870a11b",
      startBlock: 421327967, // TODO: Update with actual start block
    },
    "LUCDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3779072e7c8385349f05aac7bf6ce44b21a92cc4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IEFArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe199de189bde8840b017d0bd6671ef20f64b1fee",
      startBlock: 416134811, // TODO: Update with actual start block
    },
    "TURrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1dd64d06395deafb56d058a6cb0cb8e1aa5183a3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NRDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f7380385640f473255cc4bb1ba68d2afbe762ff",
      startBlock: 422013592, // TODO: Update with actual start block
    },
    "IHErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41400ead5c4fc5d7e2ccb39241d075aac96dae28",
      startBlock: 418909068, // TODO: Update with actual start block
    },
    "HOOXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9baf80b0a47d718f3d2f65dcca191c33291c8f8f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FLBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdb4f59dfb9bb27dd1e37d45aee41b24a5619f737",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CASYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25c6c06e335bb4a5b1d8dc1c16949091bd6aa215",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CNKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf499437b2092d2479b437f4762fb5261d0b55d65",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LPSNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xad99d06ac7e868b5bae70910762b637336967f51",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3021839492eb36aa47a875bc4e0e8bcbf6960272",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UTZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6e9509658ec740d193d95bc66154b54b2f961481",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CERTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0a71c882242cdb4db5d81a6e0bedde755bdd8733",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RCIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x275804c7b71de3a3d99734c2f6bc05e52767ab0a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BLZErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48b1561fc86a6d905331d239daa33104bcffe450",
      startBlock: 421681776, // TODO: Update with actual start block
    },
    "UTHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x36084fb4b35c27c1042ce346a33f25d68cfc9b98",
      startBlock: 415830469, // TODO: Update with actual start block
    },
    "OXMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc84d54a8c745913e7e37c5f8075a3b418a10189a",
      startBlock: 423742925, // TODO: Update with actual start block
    },
    "PACSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1efb1e939d545e5a6a5e71ef73211022fe45c4ab",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ATKRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x36d341fb40abe4cbdcc93e893e056c43969f893b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSMYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3c6a656358ddb149ab6c5213aca86c7f33c9c291",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PBIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5a8bfcd1b1c5c6320232ec13021d7ada774a1668",
      startBlock: 419594215, // TODO: Update with actual start block
    },
    "UVXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x840abb4bc97c4e5a16d0c51e0e9a5af3a5dabc84",
      startBlock: 409909636, // TODO: Update with actual start block
    },
    "PLTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x019db453c782aca45ca7dd630c5a91ef45e8d753",
      startBlock: 352124915, // TODO: Update with actual start block
    },
    "DASHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9ad26a772df5d1be715c6122b7e68a17a8b88e16",
      startBlock: 353853583, // TODO: Update with actual start block
    },
    "GOOGLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x043c1841e915a2dc175e3278f96a5deebeb6911a",
      startBlock: 353162484, // TODO: Update with actual start block
    },
    "RBLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8d5271f1e719c92935adfb6b84872574a963a740",
      startBlock: 353854023, // TODO: Update with actual start block
    },
    "Frobinhood_2": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3922ecf4e5d62564ec19fb333d69f1c162f0c085",
      startBlock: 353507505, // TODO: Update with actual start block
    },
    "KGCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08be264ad5a463566f55b70d63f42c5fb353540c",
      startBlock: 353507755, // TODO: Update with actual start block
    },
    "SQQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1db11a31e8f677fd41e2574d9686c40fe25bf9f3",
      startBlock: 353161855, // TODO: Update with actual start block
    },
    "GAProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9425973f8375e6fe912bb22718b233f6f617e66",
      startBlock: 360762743, // TODO: Update with actual start block
    },
    "KHCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcfb3061ec23cbf0a582dc8a32ed2e0e68712e00b",
      startBlock: 353852164, // TODO: Update with actual start block
    },
    "JPMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7767bdee1988f31996a255a8813bcd02b766f148",
      startBlock: 353507166, // TODO: Update with actual start block
    },
    "HUTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x10f255e0e852796a137c238428f0ad9ee0638e12",
      startBlock: 353852895, // TODO: Update with actual start block
    },
    "ARKBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5bce9430833e835064cd9741733c808ddb7ca8ac",
      startBlock: 355572876, // TODO: Update with actual start block
    },
    "TSLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe13802d9677b08d7dddaeca7f22619ebf39c958f",
      startBlock: 353160329, // TODO: Update with actual start block
    },
    "WDAYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6167f63b185caada2f328d967be973b22bf58858",
      startBlock: 365257514, // TODO: Update with actual start block
    },
    "TMFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56d793f4213352799ba50f41f5fc1b5451ad9cf9",
      startBlock: 353160660, // TODO: Update with actual start block
    },
    "CVXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd296cbfc8fb7a9846c197c8b052962cd03077b5b",
      startBlock: 353508807, // TODO: Update with actual start block
    },
    "OKTArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x681e62416f496bd79ff7274eac76657d2842492f",
      startBlock: 355232534, // TODO: Update with actual start block
    },
    "MProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51a598d841b5cb96140b470bdb076771e9b36e0e",
      startBlock: 356608356, // TODO: Update with actual start block
    },
    "PODDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x39cb8517bb11fbb5930783cd6e93177f4222b8d6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HPQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe8fe0c781f219701ade4cd0a26ec8ce05f10d6fb",
      startBlock: 402349287, // TODO: Update with actual start block
    },
    "RSGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x822235467402dc8cd3596e17b13cac36e09387d7",
      startBlock: 407185247, // TODO: Update with actual start block
    },
    "HCArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x83e91da70cb080372f905b83ad2fb985d52fbeba",
      startBlock: 400262034, // TODO: Update with actual start block
    },
    "PHMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbde791c47525f1457707288af49582623111f474",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PAYCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf4e0a90762e767e2d06b29dc61dbb0f1cce2ccf1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x12ad4ba3dbbfaca3252aece17b7b8c68b09c8f0b",
      startBlock: 418562724, // TODO: Update with actual start block
    },
    "ROLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa76f1c3124236fc7a1e7dbd86cd10ab4ffd4569d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ROProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x85e78fa99200e5c7601995658171c703878256bd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SWKSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe656cbcda1f71ead89798bbfacdc92994dde04dc",
      startBlock: 419262918, // TODO: Update with actual start block
    },
    "AOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x45c80638e0d24c5d9e77cb90a1679d3ee4df8e24",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3f70a33b5f3f446c479561c53a667f2233a66496",
      startBlock: 415847301, // TODO: Update with actual start block
    },
    "JBHTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72ae0195787d3a91c68044f4a718483932ccd22f",
      startBlock: 421320453, // TODO: Update with actual start block
    },
    "EVRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x089d4b7d0cb3fd53e0b35bd0ae65fd4d5a42903e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FFIVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf45592cd8f5b8dad268c4b1024ad8c0be5b27ae5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb295430dd1f780312f5a4fae9edad6e5524f2acd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x339eab7451b0a5175925dbb1455fed645bc4ef81",
      startBlock: 401254490, // TODO: Update with actual start block
    },
    "JCIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x45b3ed9b74043d2642168ef063654b7efe04d51a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PPGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd6fcb7fd94089ce31040b355ddf4b4bfbd88c904",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ZBHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3079b239d60377fdbd6d5e4ac848a43a784c8261",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbfdbd28def7604d1eb394d48c396c9ee984b97a7",
      startBlock: 413365899, // TODO: Update with actual start block
    },
    "OPENZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4b8f9189f6f0169689d8906acda3f8c9b64d3481",
      startBlock: 403787401, // TODO: Update with actual start block
    },
    "INEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d50d2e4de209ce0cfb29a7f9854403def63833b",
      startBlock: 415810316, // TODO: Update with actual start block
    },
    "GLOBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xef3ae26ebc1e5527d8638e0796ca10b152143a45",
      startBlock: 420649652, // TODO: Update with actual start block
    },
    "HNRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd281ec3a4f46aedb96a8e6887042a56c03d2d01e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FRGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54785f480e60951e150ffeba25cd27559db5bd3b",
      startBlock: 424445917, // TODO: Update with actual start block
    },
    "VITLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1016ff480b0d3f8662b942ab1576b55613d46135",
      startBlock: 415802829, // TODO: Update with actual start block
    },
    "BKLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcfe518b690a80b1af02a4d38fae0b17ed3393a3b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BNGOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x14079b74457905924d5598874db62e1433cdb5b0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PROProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51f143ccef23d6ec2c4e11234bd91cd42fd48ee6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8e9d83c0c05b77bedfb29c6c1a732cfcf9bd74d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ABCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9f541feb0fa0dec153340265914a2cc1cc788dcb",
      startBlock: 415806718, // TODO: Update with actual start block
    },
    "UIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc541321b5ce23ed4ac1d08e8978b93c31235a6b3",
      startBlock: 419602251, // TODO: Update with actual start block
    },
    "FWRDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x799523fe7d9687e5152e61829c0e428d488245ef",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x13cd29d51a3f833b4c529ab9f5954181d2f8c81c",
      startBlock: 421675666, // TODO: Update with actual start block
    },
    "USOIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ba707abceda5a64d485a6f0bcdb0d4841ee4688",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MVRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c70bd7e44f4d4d2f44460dde0744037c05b2f92",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BFLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b151529dd8764ee0ad01b109681b9accc6ffe3e",
      startBlock: 415809605, // TODO: Update with actual start block
    },
    "HMRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xba167bac3f5a5ba88bc6fe733c435d45541abab7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AISProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc448599fa24db8439488b64bb1c45bd4dac0d690",
      startBlock: 416135713, // TODO: Update with actual start block
    },
    "SCHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9ff3913b11b1551c6ccefdee29680f936bc55249",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MXLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8cb212b9358e6c4b23a422c791d205dd16f092f4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PPLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3b242fc1d94e9ecfbd23d529901e3d37ef4f8e58",
      startBlock: 415802514, // TODO: Update with actual start block
    },
    "CEPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x284084599a4ccaa61d893fec4fa649142d02fe3e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CSHIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25882c49cc93b52d2a48c98d11c1a5f99069fc30",
      startBlock: 423741287, // TODO: Update with actual start block
    },
    "YETIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34fc5a4612d3e5df005457f810e0b6773b523daf",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BHATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54ebd3341dd285117cd712ae4f488504780db08b",
      startBlock: 419261567, // TODO: Update with actual start block
    },
    "STNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeba0dccf139eed6cfdb8484f79a95a8d399434c8",
      startBlock: 420976229, // TODO: Update with actual start block
    },
    "MKLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61402990eb543efe071fedb4ae96c5b3c1ed8caf",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "QNTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d021c37064d446d94c7b38fd77fc4cc733eef9a",
      startBlock: 423747401, // TODO: Update with actual start block
    },
    "IWBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5969360071237bcb89fbdcdc6d91d1e25c98a41e",
      startBlock: 421333064, // TODO: Update with actual start block
    },
    "MOATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe3da4d1fd121f2a3b7dd64fbc8890f40d7c8edc2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ATECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c4432e4143cc7825fa81d63f7a65de3db182594",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8e3368e4aa5a3e2268df05a39ade12de3d513103",
      startBlock: 416133287, // TODO: Update with actual start block
    },
    "NEOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65c23fe13be158b8680bc0722d9acec419628ed6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4fe76ee03ab45078f762c41c439fa71d9d830fa8",
      startBlock: 419598658, // TODO: Update with actual start block
    },
    "SNDLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0cbe56c53da492504fc8081d5f57975dcf90f4d",
      startBlock: 410950263, // TODO: Update with actual start block
    },
    "XLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x38ac87a73b1c63e23d1cf8d299a20e06913785b9",
      startBlock: 411637953, // TODO: Update with actual start block
    },
    "TOSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xca724ceebc1e992dc16314360cb2291fb81f1244",
      startBlock: 418920116, // TODO: Update with actual start block
    },
    "CISOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0ae759d20ec1d8459c75210d71b931be6061bbce",
      startBlock: 412335720, // TODO: Update with actual start block
    },
    "WXMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x084200daa83428e809e4744248c899203f0fc888",
      startBlock: 410946350, // TODO: Update with actual start block
    },
    "AEHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29a26ec39066e5f3e8eeaa8b3959fdfcb26bc658",
      startBlock: 420641507, // TODO: Update with actual start block
    },
    "CGONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a1c953a74bfad449f653dba30a01927d24e9e97",
      startBlock: 415837112, // TODO: Update with actual start block
    },
    "IRDMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd599ebbe948dba986cb94cc6d92a27673aa686b3",
      startBlock: 415834979, // TODO: Update with actual start block
    },
    "SIVRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa07532295856c6c10aab2d6944b78426b8500338",
      startBlock: 410945728, // TODO: Update with actual start block
    },
    "EMErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5c61047abec72d5d606ccc082f4d0bf76b171c8c",
      startBlock: 410945623, // TODO: Update with actual start block
    },
    "CSIQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b437f4cb9144d129eab0853a9dbfd9b4f439428",
      startBlock: 420983229, // TODO: Update with actual start block
    },
    "RGTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xda633ef64027189e6a5e844f35bdd1371594943d",
      startBlock: 415806798, // TODO: Update with actual start block
    },
    "MRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x433bd9500f4527dd9ee89e52ff6098e86b1d0310",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KIDZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x09119253e48ebaa92fbf7e7a95209a3d8ad48e92",
      startBlock: 411991063, // TODO: Update with actual start block
    },
    "ONCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x778ca507d17df12ea684756d117a52037c129733",
      startBlock: 423743409, // TODO: Update with actual start block
    },
    "LQDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x199896f75b2734f662910b4c7e2f1e817e839450",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CMFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdad51a8c031370812f81dc6da3c059f36c17e87c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SABRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61fce3be8ab5f27dc511cd4e7f9b8b701b0d0494",
      startBlock: 413417635, // TODO: Update with actual start block
    },
    "GGLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3792ab01b04ae0a75f56155f86b1d170842ad22e",
      startBlock: 421326981, // TODO: Update with actual start block
    },
    "CADLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02f1ccfd5f63ca2252c74648af47d4dd6558b15d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPYTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd57d58b0457752aff4e4c68a0d4d76ef4068d934",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TBHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce77bf6646ffae70a5c91f6ae1dfa995ca277aa6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AGENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7aec80bc3aff46c3335555ee107b7bacda467af",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48043f041647d6c8eea1ab3a9cfed493948df59f",
      startBlock: 426857104, // TODO: Update with actual start block
    },
    "PRFXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaeaf96598f3e98c134bf9949b6c3095865618e57",
      startBlock: 420974282, // TODO: Update with actual start block
    },
    "JAGXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe17688a3c137e1dc328a291a9879006d1bf045c",
      startBlock: 420975100, // TODO: Update with actual start block
    },
    "ATPCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa46bf19b1d4d084304e7466515c8e9e4f5346a77",
      startBlock: 413427566, // TODO: Update with actual start block
    },
    "TIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a48bbaf3f7a827e0b19312bac12d91e36c9e494",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RIGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2b3c92105aee48c54e6b351c868743be5d92e238",
      startBlock: 415843388, // TODO: Update with actual start block
    },
    "PLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea76e9648a70cdbc408c552431779e4e50a73cee",
      startBlock: 413417608, // TODO: Update with actual start block
    },
    "EWBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6aa5eab581ab44047f934b5d34638b840b2deb1b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PSTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x18e9ee12751ad63d6350bdc6c732c8f8994600b6",
      startBlock: 411984843, // TODO: Update with actual start block
    },
    "MGNIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x45800477a0911b91e3f58c7840bec466f35a1e83",
      startBlock: 412336889, // TODO: Update with actual start block
    },
    "AMZYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42ff08dc2b474e848ebce6a99cc41865e8ab4ee6",
      startBlock: 416827839, // TODO: Update with actual start block
    },
    "DFTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc8ea42161912105231f5dbb8904b7b61061f4fd9",
      startBlock: 411297564, // TODO: Update with actual start block
    },
    "HIVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4018aad3ee245384d29c6f978891f3e740cf5e31",
      startBlock: 415840328, // TODO: Update with actual start block
    },
    "CHDNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe2c2bfb3d1c97dcd8f21cdd57b3f724202066161",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ZMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1574dfe874b695b80eeb18074e41a2e63b2a365e",
      startBlock: 416828638, // TODO: Update with actual start block
    },
    "MDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3d12b6bd353a670036ed25e15b80bcb9a9479425",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SLXNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd64cea148e2de945209a4b8d2cea6b1687c75c36",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KODKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa4b7506afa6d578e86ea6cedc9ea4ac151dd5b86",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AKBArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1491f0f4e3937d6248fc451b3d4e3e7c94e0131",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "POWLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x83934a04d67871fba79b85dd2965ada73e055dc1",
      startBlock: 423060600, // TODO: Update with actual start block
    },
    "GEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c1bc754b63ce5f9c552c5aa088ecb6bf712c53a",
      startBlock: 415855194, // TODO: Update with actual start block
    },
    "FCELrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3123d5f69d30d3738f637f812ca61768cc17a3e2",
      startBlock: 412333392, // TODO: Update with actual start block
    },
    "CPRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4e70f996c0d4cde8c4ddac10726077d650cfca6",
      startBlock: 424089687, // TODO: Update with actual start block
    },
    "AMDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3ad77478cd6d8fd10d3b98ea8e0150bc96f9d4fe",
      startBlock: 411292439, // TODO: Update with actual start block
    },
    "IWYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd8d41fdf2ff212f1b556c8ccec5206dfb29e39c8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SAILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x340091bf17fe9d0472b2bd1214e4776bafbab3de",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5840f8d1fc1a29d0f04d28054824c7a484d97a7a",
      startBlock: 419248561, // TODO: Update with actual start block
    },
    "DOCNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x987d8db478d57c1a10e64c10c23e01f5b28ebcfa",
      startBlock: 411291429, // TODO: Update with actual start block
    },
    "SCHProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x47f92a2177135a2fea683becda66c10550e6c6b1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EDHLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe6b4af8da7d819d1ebcb146d37bf443042e8a7f9",
      startBlock: 415802022, // TODO: Update with actual start block
    },
    "MANHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3824e57b9325266cb9cc0597e4fd7bce064e2d24",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VSTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60c1bffd2611163a10a875f2a8f67f8dd9049b1b",
      startBlock: 419260075, // TODO: Update with actual start block
    },
    "RNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08668dba12036ed5057267b2c0286635ff88369a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BKKTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2f5b58e21d876c0ea1ffe32308a8244b43f8f408",
      startBlock: 418560399, // TODO: Update with actual start block
    },
    "RYETrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69dbcccb2d6b8aab34a888bc0bd7cda02d57bf95",
      startBlock: 412334033, // TODO: Update with actual start block
    },
    "ULCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x85f20073c6c2cf3e02ce6986e4fcaad56e4ffff8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GPROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3a4e5994c3983b816aa75d612b1e407b76ecca71",
      startBlock: 412337060, // TODO: Update with actual start block
    },
    "MBrobinhood_2": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c492f1ca2b605c45c9ea78f6b6ff0066d8708bf",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FEPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x282e00fb373b18eea1cf1b1992362a8650d4a6dd",
      startBlock: 418223401, // TODO: Update with actual start block
    },
    "MSOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3cfb8c3d8c33fec85db333c36a6e2c9bffd992ac",
      startBlock: 410961006, // TODO: Update with actual start block
    },
    "TSDDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa9c855849b90d34e614ec61885727fdc8a841468",
      startBlock: 391902676, // TODO: Update with actual start block
    },
    "SRTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa8b88d5511293e46c31c1169fc182e0b1c66c6f3",
      startBlock: 423740182, // TODO: Update with actual start block
    },
    "MSTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe56a3516bfb29c91aafc4f7e8cecc66da3a9df32",
      startBlock: 391559157, // TODO: Update with actual start block
    },
    "RKLXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x23baa740a67363d23b7426243112f33221c50a8a",
      startBlock: 395359160, // TODO: Update with actual start block
    },
    "SPYUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe1f97bf4120081f2db3ae052882a16e0b9b574fb",
      startBlock: 392245306, // TODO: Update with actual start block
    },
    "Krobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4dc22cc63f90bca82f28fa749244442f74ddbdec",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41696341138dce6c3f1fc78be17d897da7a51d7e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GRMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc6befa3660d912cc57992720cc17dfb1ce61db9a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x59067b2352b3595cc15ebf219d867d788a64f675",
      startBlock: 425479208, // TODO: Update with actual start block
    },
    "FErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x84e7e376209634e0c708245e6c4b9b071823b9ca",
      startBlock: 413383472, // TODO: Update with actual start block
    },
    "FDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4eab51d3ff8e375333fe31d9bdc86d86c8095c1",
      startBlock: 415849605, // TODO: Update with actual start block
    },
    "MTBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x941545908268beb2a0a3523bce71002b640cd0b8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7a353fbba54e39967f1a0a0398f5c71838bc68d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SHWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a10174c01fa619f54a01dc137e4cabbf38023ad",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRWDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3d27f3b10f869eb161bb07d9a92977a35d7c079b",
      startBlock: 353507061, // TODO: Update with actual start block
    },
    "SPOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1c5d03a6c3458d71c20d008241bbc46d7ead7ea",
      startBlock: 353162449, // TODO: Update with actual start block
    },
    "UPSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcbed8bd766af742f4820bf07060ba8b12b5194d9",
      startBlock: 353506794, // TODO: Update with actual start block
    },
    "SOFIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4b65297e54036cf8d9f2e6ba84dfb20934ecf498",
      startBlock: 353161366, // TODO: Update with actual start block
    },
    "GErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x35b56005423de939391d6a7596ac2baa51e2f795",
      startBlock: 353508309, // TODO: Update with actual start block
    },
    "SMCXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdeaa82e1ffdf701c380d39b8ad6d6d44a37bc37d",
      startBlock: 353507354, // TODO: Update with actual start block
    },
    "GLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7623435a36a573757040a362a1299ea93d3aa43f",
      startBlock: 353161028, // TODO: Update with actual start block
    },
    "Trobinhood_3": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcf983c00b3ef7ec43d9ad2588254bd807d521bd0",
      startBlock: 353162282, // TODO: Update with actual start block
    },
    "TSLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb749adf15446201a53e1d3452cf4cb7abd67dbd9",
      startBlock: 353507131, // TODO: Update with actual start block
    },
    "Erobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc2df68d801c8b90a27e5e599d6bb3a7e9feb891f",
      startBlock: 353162249, // TODO: Update with actual start block
    },
    "UPROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2723462e2cc79107dd154cf741be6f5f9cce5297",
      startBlock: 353852743, // TODO: Update with actual start block
    },
    "VXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc3ba1ce9f47905f16b35ac51b5f7e3a0da002bcd",
      startBlock: 353160285, // TODO: Update with actual start block
    },
    "RWMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1944103cedc4b7de33e5b9d1c47b5f540f0738e3",
      startBlock: 366294946, // TODO: Update with actual start block
    },
    "CRMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4b3d6816aa36db0f0745a6dd7c37af107098abde",
      startBlock: 353506769, // TODO: Update with actual start block
    },
    "OXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd52ff5d55101c84015d858624dfeebf29d6cac6e",
      startBlock: 353853454, // TODO: Update with actual start block
    },
    "PFErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2baa39d0207bdf76ca2f5c38695480fb732f3062",
      startBlock: 354195415, // TODO: Update with actual start block
    },
    "VZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc5d3837003014482b1bbfdbe00ba9d95710da5c4",
      startBlock: 353162703, // TODO: Update with actual start block
    },
    "MIRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3df24bccda06b3011b37f8f53f5a382064d65767",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PAYOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0ca34cebdbe44962a177b60a7251d3c6c1af0ad7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ENBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x450ca76d5adb1a78b7f1aa791317167701027a1c",
      startBlock: 415803064, // TODO: Update with actual start block
    },
    "QQQUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4aaf2bb0a83d3e7515046426c591aae549d63438",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x511492194dad7c040f2ef2f9ddc018090c0f99e6",
      startBlock: 411296535, // TODO: Update with actual start block
    },
    "LRHCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc24ddf811a5be1a8b2ec9226b54632da4f99bc38",
      startBlock: 410945230, // TODO: Update with actual start block
    },
    "ELABrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa6c18e72fe247023c6b310b3e4942b811b044827",
      startBlock: 418900083, // TODO: Update with actual start block
    },
    "QUALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c04833cc477ee54e117a96df2a1b6801c452c19",
      startBlock: 415807739, // TODO: Update with actual start block
    },
    "WKHSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf4b42ebae9e490ae478dca0f2f2a22e7b2766d5a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AAPXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3fea88072d8b05f1df44cd935fb5740a6a4ab0c2",
      startBlock: 419601336, // TODO: Update with actual start block
    },
    "PDYNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x321a8b3de41f0e3365b8ff9ea3d8c08b66872163",
      startBlock: 418900286, // TODO: Update with actual start block
    },
    "NVTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcbb6afbb7bbd1346c787633291f2ed0c7f57f5f3",
      startBlock: 412329094, // TODO: Update with actual start block
    },
    "GPIQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x55d60b944ffe6c43765f8322582f2cabf2966417",
      startBlock: 418923192, // TODO: Update with actual start block
    },
    "IWFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5b943d03e415e5e85b8fb4de0ec63c6e1b43fc0",
      startBlock: 411637404, // TODO: Update with actual start block
    },
    "FPErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcd96f55055590491e511b8cf8abfc9610db0637a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RIOXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7489113a0aad0fbea08726bde09fa55a74c55280",
      startBlock: 415814359, // TODO: Update with actual start block
    },
    "AUIDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7dece2b879f792fd73f7f62c8f76b55ca90aaa65",
      startBlock: 422012945, // TODO: Update with actual start block
    },
    "KDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x516ba853fa716d09878e62f6c1191b811ad6cae2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BURUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xab106def03df9688ac7ba4cd5b6c9f0fa26e66be",
      startBlock: 412330921, // TODO: Update with actual start block
    },
    "SDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe773438eff333f45719c9d40022f9194c2bd31f3",
      startBlock: 415810152, // TODO: Update with actual start block
    },
    "ARKFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c5f5a84b2226febc613dc92f58420e1a119389d",
      startBlock: 415849546, // TODO: Update with actual start block
    },
    "YQQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf669ed5f01b8023b3a8fa95e2ece70cd107ea7a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PMAXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x99da65b9a8226ddde929e9c73af0fa7c3dfdcf56",
      startBlock: 415834184, // TODO: Update with actual start block
    },
    "IBBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xffd1b32eef35205122ae8caf98a6c9eb37b45589",
      startBlock: 411645621, // TODO: Update with actual start block
    },
    "SGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4391f7279db328b65d21f580c7b10b13e88a3dbe",
      startBlock: 418570547, // TODO: Update with actual start block
    },
    "AXSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ddb0cdf9fd42d97d809c5bb1be20fd02a9efc88",
      startBlock: 416828541, // TODO: Update with actual start block
    },
    "ARKGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xab1cedbc86c6397750324af2a15e9a95d334f944",
      startBlock: 389156727, // TODO: Update with actual start block
    },
    "RFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x819d0ff2a0cf5d8cba1c1c2ddfe9f886f6197b84",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GPCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66182039c0ee2c26e14dfb262d7226046442a74c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WRBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea390cab4d650a24b6f921507aba413d4fed0805",
      startBlock: 408523532, // TODO: Update with actual start block
    },
    "CTASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3026e072364a674150d8d2b4503efbcbc9e1311f",
      startBlock: 424086990, // TODO: Update with actual start block
    },
    "LINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf778b8db3fac9eeb20a444261b743318e193ff34",
      startBlock: 409566395, // TODO: Update with actual start block
    },
    "HLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1380239d5ee24e8bd68f4576566dd91724a1c2df",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PULSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xabe6feff033e24a81d534fb0cca174525380c560",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ZENArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc85d71e68972b69c3e162b97df94f0f529eb0ad",
      startBlock: 423742234, // TODO: Update with actual start block
    },
    "PTLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1938d8785af6c256b1c3ff0e6e198e955ceb3e3b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "COHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x890f312a7227a582abfe35687ede6ca6de0d231f",
      startBlock: 418908078, // TODO: Update with actual start block
    },
    "LAZRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7680842307096dd1dd707a366d48d80d65ca88cd",
      startBlock: 409909039, // TODO: Update with actual start block
    },
    "GNPXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x781729068a6cc8d55bf49479601a4a167e54fabf",
      startBlock: 409579114, // TODO: Update with actual start block
    },
    "QSIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf1d7bb2fe139928b33b4530d0e88fd9bfd6f4616",
      startBlock: 416133700, // TODO: Update with actual start block
    },
    "SCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9429ebb48ae9820af434289af86cfd6db33b11b6",
      startBlock: 409579033, // TODO: Update with actual start block
    },
    "FXErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xccb08304bfd57be286ba6b61332652723b14dcca",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPCErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x817b46fa8896507b827a6c3db80e693a13ddf40a",
      startBlock: 409579518, // TODO: Update with actual start block
    },
    "AVGXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x16b5200a6207738844ee77b7e8d5338ba3d9c105",
      startBlock: 391898987, // TODO: Update with actual start block
    },
    "FGDLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0740b890183232504a937cea95f5e731a5cc31a9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TALKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56cdf641d3f539c4be783f3e828d5289c2eede8e",
      startBlock: 416829544, // TODO: Update with actual start block
    },
    "RJETrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42e9fbb32504f3285990307858e16f235fcd1906",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CHAUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc15888d3e9fae18536ff404c0b8d88b9ba96a859",
      startBlock: 421333803, // TODO: Update with actual start block
    },
    "BRKUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c28d15bb8f39cdc25678371f88c19c2853401f4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HRZNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x293da75b9ad9778d30df0572e2daa82ce814e3e8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CPNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf7355cc88c0d6dc3bd074a01ac69949523c8506",
      startBlock: 421677607, // TODO: Update with actual start block
    },
    "PLTWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x73576a11ca9afeebba80aaaebecf72d7c31cc42b",
      startBlock: 410946804, // TODO: Update with actual start block
    },
    "PEGArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x160a05b8f70d24691f2cb035a55a0bcaca21d117",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SMXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7382a6ef9e5e27606eba169f27f119fdd405c6c5",
      startBlock: 412336237, // TODO: Update with actual start block
    },
    "BFRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d090df85ac72a6ce003732c190876a0411833dd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMPXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72a83f2605ce3cd203ff4222a31a3d176793cccd",
      startBlock: 413372981, // TODO: Update with actual start block
    },
    "ALLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7b83bf00b943f5aa0fa8b22a82e22ab2f63164e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa80ba6706347d49a6b89d33cce24e91a9920d712",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XOProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7717e905d82df3c1fd0fb1aaac536445a944741",
      startBlock: 415811293, // TODO: Update with actual start block
    },
    "OBIOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c5206bc6bd104d827d607a6068997544b219002",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PSTGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa18b3ce044546a869d59d7363671da88ab2fc853",
      startBlock: 423392979, // TODO: Update with actual start block
    },
    "ARQQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f796de69b10468d426593d2b69f29a6275e3fac",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ASPNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc1e6198a244fecc1f74d76b7cc2de8e15ed721d4",
      startBlock: 419264429, // TODO: Update with actual start block
    },
    "TBTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x079b05d478e77ee5f666fbc74799451cd46ac5f4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IMNMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9104d0f70b86b8cc5bd7b72614e1f73019dd7bd2",
      startBlock: 413374741, // TODO: Update with actual start block
    },
    "MYNZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x24c87f2d8ba5454bb4e39d663362ae09b3b7c068",
      startBlock: 413369761, // TODO: Update with actual start block
    },
    "CRNCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x425d0dbdaa0ada8674b267112791fc523022305c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea96237d9270cd47dfe12d12f990e41d218487b7",
      startBlock: 419607391, // TODO: Update with actual start block
    },
    "CBLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf41ce895201d7cf364fcab78dfbb6a844c97cfb0",
      startBlock: 418558041, // TODO: Update with actual start block
    },
    "ASSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x92c47d9165f1c3cfd9e6cc082fe87dbc04c42db0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcbcfe96adb72220a63b5984d2d474598b8da09e8",
      startBlock: 392590504, // TODO: Update with actual start block
    },
    "AGIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8da45dd06cd25a681af4a22b77785f39a0636b44",
      startBlock: 379591036, // TODO: Update with actual start block
    },
    "CHWYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4f3d26d68c25589469eb2b77f8fbd0edbb7d7c3",
      startBlock: 388242387, // TODO: Update with actual start block
    },
    "FASrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x01046d73aa4c709769c0fa880adfd5bdfb3aba0d",
      startBlock: 379590099, // TODO: Update with actual start block
    },
    "FDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd6d87ee5c07b5ccf62f34df0c4e27749935a26c1",
      startBlock: 379932752, // TODO: Update with actual start block
    },
    "LRCXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2df35140ca8ce31085cdc63d6f640b9f8ab0c70c",
      startBlock: 379440919, // TODO: Update with actual start block
    },
    "TMOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x88d053d90d4f81467e586a881f9c9b8d0ecd3a69",
      startBlock: 380971114, // TODO: Update with actual start block
    },
    "WMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc73b860be29408b3732a38905f5c6759cab91d80",
      startBlock: 380970412, // TODO: Update with actual start block
    },
    "XDTErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7f07384fda8531d4fcecb555ec6e0b965e4444eb",
      startBlock: 379591301, // TODO: Update with actual start block
    },
    "XLFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x097bd616401cf21bf0583425c9cdda2d8908486f",
      startBlock: 379440889, // TODO: Update with actual start block
    },
    "SPWHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x968f4f5d93e3c0a1077a76348bf3207e9537dc04",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPYDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe89b981c2b5619cd5e4ba4a9c45ba5b1631ecaac",
      startBlock: 418208200, // TODO: Update with actual start block
    },
    "AIPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7d3ab69a8c3cc0e2e3238986c0ff9188486a592e",
      startBlock: 421678568, // TODO: Update with actual start block
    },
    "IVWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa08dfe69950d3e97a432b8a915b446fcbf6f4a80",
      startBlock: 419264131, // TODO: Update with actual start block
    },
    "XLProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe8dc77ec64654e858af7987103d9d1e65ebf6a5",
      startBlock: 416136203, // TODO: Update with actual start block
    },
    "NIVFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1266f2c7b17dad57bc903826c0bd1c19e75d82b9",
      startBlock: 409578626, // TODO: Update with actual start block
    },
    "EUADrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb850a60085ac74127eee3e25e6e4d2c1ce283b8e",
      startBlock: 418910515, // TODO: Update with actual start block
    },
    "AAOIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeef40749c62d75fe68893a9f45152813679df8a6",
      startBlock: 426158952, // TODO: Update with actual start block
    },
    "CVNYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x96c573504491a6e131f257be3f9c2ae6820d5f07",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SMCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xabf1cc28252b7486078a918773078c7ece385ec1",
      startBlock: 413375000, // TODO: Update with actual start block
    },
    "VUSBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5a6c8e4a5daae3984207bcc4ad372f6364c07bac",
      startBlock: 415855062, // TODO: Update with actual start block
    },
    "PTIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x977b7cef411c08eeb09b72e36a21ab4e43053553",
      startBlock: 415847167, // TODO: Update with actual start block
    },
    "AMZUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4fe2bcac4bf30c453bc860f32a9d1688df4e400c",
      startBlock: 394321775, // TODO: Update with actual start block
    },
    "APTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x58787b5b3900c338886aef563871116744f4f882",
      startBlock: 397806746, // TODO: Update with actual start block
    },
    "UHSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8df1f28b354993461787dc05f867cefc42ff624b",
      startBlock: 397806582, // TODO: Update with actual start block
    },
    "IFFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9cdafc648ff3502d55727071bb9175ed2ae4ed3c",
      startBlock: 425820419, // TODO: Update with actual start block
    },
    "AFLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1b9725c34bc0edeab7a9e470fd1b03ad15433971",
      startBlock: 425480126, // TODO: Update with actual start block
    },
    "EMRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x52824c659c537ecd53870ec4679dab65ddf36d1e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VLTOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48ddef40d13df0cefedc4a8f2d6b687dbd1c5c55",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd30ac13a0302bfaeb2c5599eb31244e6cb569ae5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FITBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5aa9e5f9f817797738ba2df7800b71af796e97cc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3b84eb71dffa73f38ecb76fe57c7fd5bc69ffdbf",
      startBlock: 415826065, // TODO: Update with actual start block
    },
    "BBYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfdf4a71b92ea1daa43512a0ebfafb61d982a74f7",
      startBlock: 405058889, // TODO: Update with actual start block
    },
    "ALGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x453b369a4c90174725dd1f7535e207158f05c2be",
      startBlock: 402292905, // TODO: Update with actual start block
    },
    "LENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5babab0b854ec3ffab9f8760f5a6e4dc44a49d2d",
      startBlock: 390521904, // TODO: Update with actual start block
    },
    "GGLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe8dadb8282475a4c920e4d55cf6dc4c882ea117",
      startBlock: 392591558, // TODO: Update with actual start block
    },
    "HIMZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x78a29e34ccdb8643c28ee13d222a886fb009bf2f",
      startBlock: 391559857, // TODO: Update with actual start block
    },
    "DPZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7ebbd8515cb6bebf97c78b47866fb1c6274cc03",
      startBlock: 401254462, // TODO: Update with actual start block
    },
    "DXCMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5810872d598dcc5eac62e7789a2f40879b440326",
      startBlock: 398834061, // TODO: Update with actual start block
    },
    "HUBBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3cfbbb7cd2fb1e40b0d748ca145f9fbdaa44867d",
      startBlock: 418904938, // TODO: Update with actual start block
    },
    "DUKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xae26595db9df22e21e4794bb6bc1567d6a0a78ad",
      startBlock: 401947444, // TODO: Update with actual start block
    },
    "CBRErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x69259c145d4878b61912ae159e41956b09e719a0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ALLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcafc45a5e403ce7d1feaaf222fc9e30eae561a1b",
      startBlock: 399185150, // TODO: Update with actual start block
    },
    "MSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3e3b517d8556d52da57d75caa94677406ef6207e",
      startBlock: 399185857, // TODO: Update with actual start block
    },
    "MOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bdd5f87dbc0a5412d9173e873527a11ddc997a2",
      startBlock: 419249036, // TODO: Update with actual start block
    },
    "ODFLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa30c578f6be8f6b474b2a2b40862e0bd47c0308",
      startBlock: 421678795, // TODO: Update with actual start block
    },
    "GNRCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x423198bff49f8f58ec8ced6ec2c37f39ed294080",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SJMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x954cf25c8fca3430a4ea81eaa6c6670914222648",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ARCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2724e229b6fd4be691b928a8da02dd854da65835",
      startBlock: 391560076, // TODO: Update with actual start block
    },
    "BTDRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x875583d774c641c6bd9f0f0646f6cea702790e96",
      startBlock: 379439946, // TODO: Update with actual start block
    },
    "CNCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb27a6137fc733dfdd516dc090b96fb179a835399",
      startBlock: 384088459, // TODO: Update with actual start block
    },
    "CRDOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x76a0c64475aca0524433efd04e95f993257750b2",
      startBlock: 379440503, // TODO: Update with actual start block
    },
    "ETSYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x904ae4ef5c42f30c6ebec379b1d9f635457162cf",
      startBlock: 382012333, // TODO: Update with actual start block
    },
    "NDAQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e66bd94e053b745be294533e213368a4739dcae",
      startBlock: 379591013, // TODO: Update with actual start block
    },
    "NEErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x261e5f42964a61394c1057f4a069cef71829e589",
      startBlock: 379440754, // TODO: Update with actual start block
    },
    "NVAXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68fa81b00ba7dc55776f60a7a39009bd01e56d12",
      startBlock: 379937176, // TODO: Update with actual start block
    },
    "STZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9876504db8994d7f2448850a0e31513adee99d95",
      startBlock: 382354172, // TODO: Update with actual start block
    },
    "USBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x912810348a85e50bff7c807b798ea344f8727236",
      startBlock: 380277617, // TODO: Update with actual start block
    },
    "USOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6668ec42a4d0c13472251904ba04a7656cba169d",
      startBlock: 384779430, // TODO: Update with actual start block
    },
    "XLKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4124ec7e16b6cdd31bdfcb1c5feff5ee054b6255",
      startBlock: 382013550, // TODO: Update with actual start block
    },
    "QQQIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9cb03cccbd8fcaeafc447a40d99e6242fc0dd612",
      startBlock: 409578419, // TODO: Update with actual start block
    },
    "PTONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xee9a6a7fe2efb4f514e0e9242c62d638333e12a4",
      startBlock: 418901154, // TODO: Update with actual start block
    },
    "WGSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ae08cff36a46d09121c5c689865c18f21cd5fb4",
      startBlock: 421335580, // TODO: Update with actual start block
    },
    "RXRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5499d6cd194d507658b0c8b958eaaad2eddf60d4",
      startBlock: 411982701, // TODO: Update with actual start block
    },
    "UPXIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8858bbc18dde55301234b0d38888dc3b8d4277f3",
      startBlock: 420982699, // TODO: Update with actual start block
    },
    "MINTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x91e3b83067e966949d03de0533d3ea65df8b29a5",
      startBlock: 409579409, // TODO: Update with actual start block
    },
    "FATNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4204946a8b36588bde90ad2bd40e513abc811819",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BITFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9afed9280cb4217e179558ca486e7e79361b029e",
      startBlock: 409910555, // TODO: Update with actual start block
    },
    "RHIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb74e55f353537e11346ef11bae1e3b09fe4826a5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VONErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4042f46364f464ec968d1b92715822fc48cd95f0",
      startBlock: 420985385, // TODO: Update with actual start block
    },
    "NATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x515781b6bff8b113d0200f342d19f7e7f7890b5b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EWYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf9ac4904302d132477ee536a06159487bc6d9ad1",
      startBlock: 419249670, // TODO: Update with actual start block
    },
    "REKRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3aa78725a2a9c9136f695af3b401bc3574122e28",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xccc96b1119639e314f3faed639a3a0d2027465d7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KINSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b3582e1e299fc23fa7666103aa4dbd2ab1342fe",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NRGUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02c16e40d2381051442b9b176b9577088214f7cf",
      startBlock: 418573219, // TODO: Update with actual start block
    },
    "DRCTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb574c4837dcca85129003b0005359125d6481fb8",
      startBlock: 415804901, // TODO: Update with actual start block
    },
    "ABVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5256be32a917c051021aeed4c80a92d35e4d6fd8",
      startBlock: 415802718, // TODO: Update with actual start block
    },
    "SCHLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x497971978c4d975e019b5f27f0f084a5704dc0ae",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TXGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd228ae43e15682423ff4fa8b75b0811f79318f97",
      startBlock: 423745406, // TODO: Update with actual start block
    },
    "MVLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4312e3f4903d4a621aa35037226b16e443ff485d",
      startBlock: 415806498, // TODO: Update with actual start block
    },
    "ATGErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x81b84766fffdd3ed270e635f0d77088079223fcc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LITErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d93647a58243b8f8b582b817748de6b7fc155fe",
      startBlock: 416479166, // TODO: Update with actual start block
    },
    "PCORrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd48d3494e63b50a458bb6fd748803cac7134a2c4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ILLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3e8899e12a199237c7ebda0ec0c36e5aa1df293c",
      startBlock: 416198522, // TODO: Update with actual start block
    },
    "STIMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60963601c2b933988e62ccfa9699337a41c53c90",
      startBlock: 418906944, // TODO: Update with actual start block
    },
    "LDDRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdec2cd61d32f8da1b08357e9055b363a62a81d17",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GOSSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd9a1f14eef3391f23d28ba25a9cf722e402f40be",
      startBlock: 419254519, // TODO: Update with actual start block
    },
    "SWKHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x171db3ae2b62a0edc1eba1cc984c149b75b85ece",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GERNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4094b76586fb6c7ece615efde948d337c83e16e1",
      startBlock: 415802375, // TODO: Update with actual start block
    },
    "KNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0a305bc94f7f1d9151332ff8b1c2c58b85f3fb6b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ABVCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9548ab0862ce1ee754d0f1e1b8ee4997ee4d431c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FNDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd340b498a89edfc6042f3815833a8ea158447ef5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UWMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8cecab3a0f0346210f8870f187a94b578bc47df8",
      startBlock: 420992396, // TODO: Update with actual start block
    },
    "NAGErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7df7d743a9d09f64ff342163b94d314c52077315",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MRVIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x75ab1ba9f7ce28be4e3ad73f7b1c04cbae4e192f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PDEXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x560fccec54c56c0069b120002d33230f969813af",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SCMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68c611038e2f2691f39eaba96fbcbb222bf8dba4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SDRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d5a97a7980f8e028eb54a733d9a88fdfff115f3",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MAXNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x583c26b096263a5944ab721277d6fa7ae7373735",
      startBlock: 425473550, // TODO: Update with actual start block
    },
    "WFRDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbc933c84f3e2ebf13a257bbbc0ccd5dfc3d36506",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "009CVR044robinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c592fa1488c0f131efb6b6205d844cc182b698d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MSTUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bad4d86c0fd6a77800142dd000aa04206742fab",
      startBlock: 409221560, // TODO: Update with actual start block
    },
    "IBITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30246c9bdb52d6966e0554ab9faa03e4f0723fe0",
      startBlock: 351609627, // TODO: Update with actual start block
    },
    "IONQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc42f2c18f304a7400267c91387478eed6ab9fa36",
      startBlock: 353529023, // TODO: Update with actual start block
    },
    "SBITrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x503416c0b67ea0dcf6325df0d518d2734c75f184",
      startBlock: 378553761, // TODO: Update with actual start block
    },
    "TEMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x67cd47dede616de9adefa61bcbd05199bc57093f",
      startBlock: 353160563, // TODO: Update with actual start block
    },
    "DKNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4db7fd0d10a617a45707a514a231e79e4bcb12a1",
      startBlock: 353505752, // TODO: Update with actual start block
    },
    "Frobinhood_3": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x63695745bc31efe7791e5256a61dc1b61932ec92",
      startBlock: 354196773, // TODO: Update with actual start block
    },
    "NUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe61065749d2feda0698d3e947d64cdab19afac91",
      startBlock: 353160465, // TODO: Update with actual start block
    },
    "SCHDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9338c846c0460e691f87a07b135600aa5de97f22",
      startBlock: 353160628, // TODO: Update with actual start block
    },
    "AALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3e054b180b177a6d260e2fabd869226f74708a77",
      startBlock: 353506136, // TODO: Update with actual start block
    },
    "RIOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54138b96669525b8cf562f5766ca51b767402eb8",
      startBlock: 353509013, // TODO: Update with actual start block
    },
    "JEPQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xee06fcfcbd116b97950b3cb702ac9e8f2f244270",
      startBlock: 353505719, // TODO: Update with actual start block
    },
    "QUBTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcec220c4f0c8b7672fd3de58cd3c269810d762aa",
      startBlock: 411296591, // TODO: Update with actual start block
    },
    "SUNErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4db0548f5b59bcade35f212f42c79b3433d78af",
      startBlock: 409584641, // TODO: Update with actual start block
    },
    "UAMYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xed9dba00fe64ccec222c6263ea82c94ead2755c2",
      startBlock: 416133981, // TODO: Update with actual start block
    },
    "EWHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdfb9c9325c9ea1ca37d82ed70c9b78f08aa00e00",
      startBlock: 424091254, // TODO: Update with actual start block
    },
    "DBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x74c41e1b3944ea8b83b2f0b3ec0f8a7a1199dc0d",
      startBlock: 420975772, // TODO: Update with actual start block
    },
    "LCIDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc29d7eed585a6df7f37ff1d6b200b0a5da2c2571",
      startBlock: 409579004, // TODO: Update with actual start block
    },
    "ENSCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ae7adabc4449b017243e6801f61c69ab1b3f95a",
      startBlock: 409579546, // TODO: Update with actual start block
    },
    "STLArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5aaff73369ea293627d81844bc241c359704ce2c",
      startBlock: 411639065, // TODO: Update with actual start block
    },
    "SKBLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1b57f6b0a256b28a574de3cde9284a771ec7f335",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WLDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x14df5075f2274c3226aa9a63840cb8481d2288f7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VEEVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x73011d3e550736c312c78160e53a68c3e1b0be92",
      startBlock: 425468672, // TODO: Update with actual start block
    },
    "SKYTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x04613c8437b53b848c03314cea7a722ebde87eaa",
      startBlock: 418577085, // TODO: Update with actual start block
    },
    "ZYBTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x901803dac5ee066c5f4ea934d991e1fcd3adcab7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x721c9dbfaf390fb89620f61d61d46b6b47f5fbfd",
      startBlock: 413712315, // TODO: Update with actual start block
    },
    "CRONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25fd4062f32977df707ff52495d3443cea1a0f2c",
      startBlock: 415802423, // TODO: Update with actual start block
    },
    "AVGErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa9fa440521f21b4919d6ae75aa84fb5adff1b1c0",
      startBlock: 420631937, // TODO: Update with actual start block
    },
    "EURLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68b1598a6b11c440077de7e9442479be09cd7456",
      startBlock: 425825904, // TODO: Update with actual start block
    },
    "AMLProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2b1e4967fe1e71d3dc4188e92f8adbb627d93ce0",
      startBlock: 423742749, // TODO: Update with actual start block
    },
    "CLOZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd4fe33c78e434280b6f65f525ddc5f9064d29661",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x958d126e26b3a4065e29acfe8d02ec2ddb4ee636",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AGXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce107b932a8359b3c0a4dfe0b80f51b3bb57efd4",
      startBlock: 419253363, // TODO: Update with actual start block
    },
    "ATYRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x421ed1d405ff4a98b1aacb30c26548faf12a35e7",
      startBlock: 420992135, // TODO: Update with actual start block
    },
    "HAINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xde26ea957071aed6309cfef0630930fde0b69bfd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GRDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7b4301d510bc41b0d4a5f8e257e02236756ca2fa",
      startBlock: 416480560, // TODO: Update with actual start block
    },
    "QQQErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa95cd524942dced20aea097066894b8d9f43f252",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SWBIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8c98a21f7cc17f5af42a2e81d11ea20f487b58b6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SCVLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x145ff049b2bff539591938bc3a976c4b9eddf1f9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DIVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe786ddbc5c1c0d7350640e2ea7de363ab96603c4",
      startBlock: 415802320, // TODO: Update with actual start block
    },
    "GSHDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe53a43b77a030b214c37a0a7ea6379e8efe0b7aa",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMZProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbac4186ad475b7443b2b146775193a3b8e2b1376",
      startBlock: 421337514, // TODO: Update with actual start block
    },
    "CNRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x235c85ddb00697f2db0da7095e8e68df673fc7ad",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CEPOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5447d873274e5e85708bc26613e5d548a40abd1e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1f2792f71e10a8b1c099dd02095c0e138cdf5729",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GMMFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd5c93379ab385b4101f966988b46dcad6b4f9215",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1277e544788b0f085f81ded6c5da638c7e263bb7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CCCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd18d3bff3458df22393e3db520ffe1824eb1109a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VTLErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaa4350da45c1dc8cded35a8f89be67c8c45ac07c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LDIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d658e82908eb2fb466e1fdd734d1b14fb5d5f32",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TRUGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd86504d2b374321e14f4ba7f3bb241ce63b22283",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ABNBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51e0472d993a8a416fb3c051213365269664e473",
      startBlock: 353508944, // TODO: Update with actual start block
    },
    "NVDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3044f4918bd91ae4f9f4fca8997b9141b0729a9f",
      startBlock: 353162518, // TODO: Update with actual start block
    },
    "BILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ab1f753a4ec947fe27bda249f84635039cb9fc9",
      startBlock: 353853645, // TODO: Update with actual start block
    },
    "CVSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc2b28b5427eeb305ce3cc8460bea751f832f2fcb",
      startBlock: 356609097, // TODO: Update with actual start block
    },
    "HUMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6634fe73b0bb72ac1253da7916c83f16ba61a8ce",
      startBlock: 357992033, // TODO: Update with actual start block
    },
    "BITOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x811f4a17ac889a64e9dd4b3e53bfb3ad8d3e7a6a",
      startBlock: 353162080, // TODO: Update with actual start block
    },
    "GEVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x941d7bcc7aba1a6906128066e02bfb3f352afbfb",
      startBlock: 353508636, // TODO: Update with actual start block
    },
    "GDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x322ea6be57e1a9162e1fcfab40be025da96c6768",
      startBlock: 353162736, // TODO: Update with actual start block
    },
    "MRVLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa94fc52c8c3c61376659c70df8a8782d4168138d",
      startBlock: 353160994, // TODO: Update with actual start block
    },
    "SGOLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x811d8b9e5804aa5e5b357cd50d501ff01ce92750",
      startBlock: 353851083, // TODO: Update with actual start block
    },
    "Lrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8669540693e49ed802033c7bdab618b3448ab772",
      startBlock: 406103339, // TODO: Update with actual start block
    },
    "MTCHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa784d0284562f30295750143854d43b4df36495d",
      startBlock: 418210761, // TODO: Update with actual start block
    },
    "ADSKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ac8846d211a0f64d39a5727414ed8850c47d4c3",
      startBlock: 406445679, // TODO: Update with actual start block
    },
    "MPWRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa9527fcfec04f939c6c67b635c443996e354be8",
      startBlock: 402351692, // TODO: Update with actual start block
    },
    "BSXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc44dbb3a52c42a81e2a79d69d90029344b2a3833",
      startBlock: 399875066, // TODO: Update with actual start block
    },
    "HSICrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf27a8209a212b6d409cc97230a662fde8296319e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x707368f9d236abc8437bbf32fddacc9ae9b2a7a2",
      startBlock: 401947551, // TODO: Update with actual start block
    },
    "ERIErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xafc2c1d8fb5a08e2e689f52a68e65d9062296cd5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TJXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0304b41ebbb4e73d99a5b292e8e97e6189412555",
      startBlock: 400220996, // TODO: Update with actual start block
    },
    "ORLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x26faf8254a01170f2fd2b0008df321cc3533edef",
      startBlock: 398844321, // TODO: Update with actual start block
    },
    "AMZZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c188ef09f063788c751126f21cbf69b5ee0bf83",
      startBlock: 401946896, // TODO: Update with actual start block
    },
    "ADBErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34f1b927884a0e578dbc72b5f66c59cb3307cc5a",
      startBlock: 379439916, // TODO: Update with actual start block
    },
    "ARKKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa6d5dd013102f00a324b545f273b9e0f465b388b",
      startBlock: 379589383, // TODO: Update with actual start block
    },
    "BOXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbf3298268ea44eb603c875e0676418da0e620564",
      startBlock: 404024519, // TODO: Update with actual start block
    },
    "CDNSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72226b44f63d3e8d98e160e5524d516a8b36e594",
      startBlock: 379439976, // TODO: Update with actual start block
    },
    "COProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbfded98bacd03b5d4f638edf14d6c662662691b7",
      startBlock: 379936072, // TODO: Update with actual start block
    },
    "GEHCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x779bc008ac44f56f28becd60507b78f045b8b91a",
      startBlock: 407482450, // TODO: Update with actual start block
    },
    "HBMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3c080c735341b2bc8d084c30b32a00a8d3e17fef",
      startBlock: 382356763, // TODO: Update with actual start block
    },
    "MGKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8d5218d709793597bbd868c15999469f2ceeb451",
      startBlock: 380624313, // TODO: Update with actual start block
    },
    "RDWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe87a374030db919b98119bc44ee3d656d187871d",
      startBlock: 379440384, // TODO: Update with actual start block
    },
    "SPYGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3352afc0924f70fbb55254a5dd0833f1cb87fae8",
      startBlock: 382359128, // TODO: Update with actual start block
    },
    "VIGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c93cd3d3945135836881e7fb94364b9f6a8ea1c",
      startBlock: 379590791, // TODO: Update with actual start block
    },
    "VSCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x02686267f85c0262f05411abc861fbb2b624053c",
      startBlock: 379440586, // TODO: Update with actual start block
    },
    "Xrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0e4056af165f5a9557db1c5bea9cb637666ef91",
      startBlock: 381906936, // TODO: Update with actual start block
    },
    "YMAGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x972ad3bc8cb954f843fb6188d1597ba12d8da39b",
      startBlock: 379589555, // TODO: Update with actual start block
    },
    "ASOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5b01629d52601281cf1c0f531961a8bf9ad9797",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ESPRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xecf38e6d558b4682e047bc8603e2a5cc45f39a4a",
      startBlock: 418918121, // TODO: Update with actual start block
    },
    "Brobinhood_2": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x48cb88c3f2a4a5e18ebe8c0f3ad8225f3ba87118",
      startBlock: 411644795, // TODO: Update with actual start block
    },
    "CORTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7e49b68bc26962084a877b17355d0d5cc9c0f2b5",
      startBlock: 416824874, // TODO: Update with actual start block
    },
    "PGXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbae2a9c02b8ffa932c141938467e67788168183e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ARRYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7b5c7d737927d503f4fbee6de14f0977ec160a94",
      startBlock: 418210269, // TODO: Update with actual start block
    },
    "IJRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xae82e0e52c4cb2d4bad6fe92dc997b22bbf637ed",
      startBlock: 409578704, // TODO: Update with actual start block
    },
    "FLNCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe3cd381b788ec7f2750db644babd994289050050",
      startBlock: 410943826, // TODO: Update with actual start block
    },
    "RGLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf0c37e46d0c895d964269eee437c670b65717896",
      startBlock: 409584775, // TODO: Update with actual start block
    },
    "WINGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d593614126813cbee87cd1df112ad6ff5e1f706",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPLBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8a7da93adb3184bf9fc8ee0ef5a285a1f790d902",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PMMFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7a99695638459c9bf0ccb9fca224ac7a65bc707e",
      startBlock: 418211934, // TODO: Update with actual start block
    },
    "BRZErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf08dcf916557658f92a4d0dceccb3e0b44070b1b",
      startBlock: 409224098, // TODO: Update with actual start block
    },
    "TSLRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x47ca155b6488298296d37c3fed32a1d4f88ceb03",
      startBlock: 395360882, // TODO: Update with actual start block
    },
    "AAPLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x012c768e5162d5ed965d45935634efce705a57ac",
      startBlock: 351609255, // TODO: Update with actual start block
    },
    "QBTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc7936d047858fca92e10040aa9235060eb4e7a26",
      startBlock: 409578396, // TODO: Update with actual start block
    },
    "GRABrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3eed6a37c784925325bc7f2e54fee1626ca1b6d8",
      startBlock: 411645896, // TODO: Update with actual start block
    },
    "NUTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3b0568cdd27dff55a902a1f99f6ab67c8af5086",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RCATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x49ac8c512d5bd7d80e2add99a6958bce0d6e23af",
      startBlock: 415812124, // TODO: Update with actual start block
    },
    "STSSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe6084d1d620db60e21dc2c4a1798756d498905c",
      startBlock: 420978127, // TODO: Update with actual start block
    },
    "BIAFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd1aa75fc0d4c9e5c7395456f06723e19e43a79a4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "USARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0715c304eaa8e5f398946af5ba6cb28b05d7f9b9",
      startBlock: 409914074, // TODO: Update with actual start block
    },
    "TIVCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf0fd0bec27a96e3df9f6669bec60ef2e843670c1",
      startBlock: 415830104, // TODO: Update with actual start block
    },
    "VHTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0cd4d2a5f4e840d8a58f81b575e57a8ec38fc679",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "APLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6291f267bd707d15578af2dcb37fb3184c3aeb4a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRSRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x65491339f6f18c467dcc4dc49eb4a34e20f45f73",
      startBlock: 416143168, // TODO: Update with actual start block
    },
    "MEXXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7d81347042de4f915b203c36780c0bb5197cdab",
      startBlock: 423060961, // TODO: Update with actual start block
    },
    "CMBTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6b82221e1eae631fb170955f371804d5160562d5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MSFLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54c7fc63d41f5f2dceb67546339ff3f5d2d3132d",
      startBlock: 424439648, // TODO: Update with actual start block
    },
    "XLGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7bf129fe2ff7ef2cebf2c326b4d7374d8e364e78",
      startBlock: 416144131, // TODO: Update with actual start block
    },
    "ARBErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2b81e38e4f9f89e5a5477f304fb3de56d9bb2679",
      startBlock: 415810128, // TODO: Update with actual start block
    },
    "NOTErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08fb0a17e34090af05c93b8a367a13ecab312b52",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CHGGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaf8c23b2ff834d84fbc5bf0a9bb1fdcaa18f268a",
      startBlock: 413712373, // TODO: Update with actual start block
    },
    "BINCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd222492650d88b2d0931fafa253ee95aedb371e8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JNKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x954a5bd48e69cb6d8e66d860faeb697201a95a62",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "KORUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe4da14a0ae1e07ac0f6d0b09af59e5123389d54",
      startBlock: 420635540, // TODO: Update with actual start block
    },
    "MNKDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5e7fa16f524a231816e3d813b3e0786f44e61616",
      startBlock: 416135416, // TODO: Update with actual start block
    },
    "DVYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4cf68d6d87297f07ac0b70e65f4737198c35945",
      startBlock: 416137839, // TODO: Update with actual start block
    },
    "UNCYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb48f50a6ae7776bc1cb00d589c9dd10cb0d2a468",
      startBlock: 419248614, // TODO: Update with actual start block
    },
    "HLFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x38e47979dc187a17e5e6a3c8c01df4041337bca9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TDUProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe156db85598bf5f7d57098ba8db93dd4f72cc077",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VISNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb72104b43c5cf3868ee29a624792d878211d3993",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5a5a00edd9069bf03be9f2ee6b4365a15254987e",
      startBlock: 416142889, // TODO: Update with actual start block
    },
    "EPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x432c32a73d395c50cca6923811fcbd8caf5dbd0a",
      startBlock: 416141090, // TODO: Update with actual start block
    },
    "DIPSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd9cb23b3246f1ce7bcb0bbca3ef10a159b988da",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PSQHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x12f072a33f33e68b34612d683eb57c0741702098",
      startBlock: 423395337, // TODO: Update with actual start block
    },
    "LARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0063f2e725e82149b53f511aee578fb5bfc93f65",
      startBlock: 415828915, // TODO: Update with actual start block
    },
    "ETHErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3fda056b52aa9b2ad4ece96e34299aa27177807f",
      startBlock: 379440415, // TODO: Update with actual start block
    },
    "HALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x442c22aa779951d138b25ac1980c77ccee03ee92",
      startBlock: 382354298, // TODO: Update with actual start block
    },
    "NOCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2127c9a49987152d8dc9c6414b26a9414a975ebf",
      startBlock: 379440302, // TODO: Update with actual start block
    },
    "SARKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x33531d975fd7c5d45e052a6758fde58487c20fde",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56f0a3d43f17401de05d618744985349f78e7d20",
      startBlock: 379591163, // TODO: Update with actual start block
    },
    "ZSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xebedacd1677d2a89ed785e07a8e28236caaa0c94",
      startBlock: 379589436, // TODO: Update with actual start block
    },
    "GLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb0ac3b2bc99562523a197c2650869904630a8ca2",
      startBlock: 415840905, // TODO: Update with actual start block
    },
    "AEHLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd6a6a16b659e722da67c19fcbab8724a301594de",
      startBlock: 416487523, // TODO: Update with actual start block
    },
    "XXIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x812e1b595630d16c70eda75811000452f8ddc93c",
      startBlock: 409581164, // TODO: Update with actual start block
    },
    "DFDVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdbd2a84a681d2fc47edcf2883c0957a9a3bc89f2",
      startBlock: 409585323, // TODO: Update with actual start block
    },
    "BRK.Arobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb26341aa7fb2c33d5eeecedf74a674e5f65cb2a9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AKROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x31ce19f3f122579559561e5528321c120b43b1d2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SAIArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7a68216780898b5d2d1951fd3c9020b0ee801cc8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa21f8f30dc9007437586ba80cb298f6fbab0c1a3",
      startBlock: 410944706, // TODO: Update with actual start block
    },
    "VIXYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5fbdfcf8fd8caacc1bcaeb6bda59a8a6587f0f5",
      startBlock: 409579607, // TODO: Update with actual start block
    },
    "VEROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d3eae335f0230acd32688e9dae4ed7de5e4940c",
      startBlock: 422018683, // TODO: Update with actual start block
    },
    "CSAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9ccf9ddd751e36b069c86a7fa12fa75d20ca77a3",
      startBlock: 409579490, // TODO: Update with actual start block
    },
    "GRRRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ed1ba6c5b45c788058d2af51f7514e6e156c43f",
      startBlock: 421326027, // TODO: Update with actual start block
    },
    "AVLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf1c2dcba8d35d6509d78e134856a35646a2e4554",
      startBlock: 409584587, // TODO: Update with actual start block
    },
    "ZIONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefd3bc1e24f6f497500daac28bcf2e8340b5dd4e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ODDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8a6115b8626f0e8acfaf3b405d94969dceac103f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HRTGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbace1388b8ad8aee8bfffa02f7b224d42d06f06b",
      startBlock: 418211668, // TODO: Update with actual start block
    },
    "VOTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c1ce1ba8b56206f616cfb2451f5e4bdbcd80dfc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LEGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa1a7c403404a98f177225fdfb630e9b57968d8a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "JTAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf0732f209931a0aadb4d338b17ed8403fef7c7e4",
      startBlock: 415835989, // TODO: Update with actual start block
    },
    "ZEOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb822b58e129828beecf64171a0835018e4d25ffd",
      startBlock: 413712342, // TODO: Update with actual start block
    },
    "PALLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x26b8d0593c4a86fdc6f2a1cd0a5ea5952569f0ec",
      startBlock: 415827757, // TODO: Update with actual start block
    },
    "BORRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61495e3e20240d7b77e65f9d3621919e0f5a5436",
      startBlock: 415804235, // TODO: Update with actual start block
    },
    "FDVVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2eb548b60283d2ed57db82361327bf30c96879cb",
      startBlock: 421675714, // TODO: Update with actual start block
    },
    "HOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xedd600dc2db2f6dc82b2c7dc162d845a1616006e",
      startBlock: 419594266, // TODO: Update with actual start block
    },
    "AMPYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbca96b31b92737ba0790885e5d9653f960f39e23",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PFFArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ec9f0a752c8bbec1bba6fd2cd412759844402cd",
      startBlock: 425827012, // TODO: Update with actual start block
    },
    "TLHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x802f2ac0aa8486c84d266ce51ea3a178483109c2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EVGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x680989ac76b80c202dffe79b34d49a8d219fc2a6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "INVZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1512cc7497aaf0c3dffde279f3f15901e51b688f",
      startBlock: 415807709, // TODO: Update with actual start block
    },
    "LOARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b589c1b4a2cd00d20f4701eb5d9b470273aa934",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "VUZIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b258c778a19fd3d5f2e15f650a58f7fdc373b23",
      startBlock: 415822893, // TODO: Update with actual start block
    },
    "AMRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbdc54eba045669341c6660772989a594851c8d13",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IGOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x04364a8a32bcf84911abdc171c6da2093c1c80d6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IYRIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x39972106ef9d6b93c439ac720dff1d39dffad6a3",
      startBlock: 415802578, // TODO: Update with actual start block
    },
    "MSFDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5fdb613b8943f3e41efcaef6741e04d9636931c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ESGVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x18bbcc3011153c38297bfdadbb206420160ca3b6",
      startBlock: 423747129, // TODO: Update with actual start block
    },
    "SRLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbfd3593f2f271f1e8b4d34cd054ed47702351331",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SONMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x01170d700d0dfa49cdd582171174f00167a2c799",
      startBlock: 423746200, // TODO: Update with actual start block
    },
    "CHRDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfd32fd204d860dce23da9594374c3358892161a5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "YHCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x594d720dc0fb053e4185ef7d156885e8063343b9",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PHOErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x28e317b71e2e56f55651a5e706d483cd18b34e47",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PRPHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb147bc2567a71d90f7d7f8a8743787128c759362",
      startBlock: 415802236, // TODO: Update with actual start block
    },
    "CHEFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb5f1636e0446a94a066d2987f4a4bfd9bdcca84c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LSCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf0b8e7adb944b9c5dcc20c30dde7dcd1acc43417",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XHBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdcf246a56456322459d99347aa17b12c7b444859",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EXODrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3676c79d64043fe28dcc2edadd46f1a88e826d7f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SUUNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3002452e776983733f7497eb6bcb2cdfd74e4fbd",
      startBlock: 413712401, // TODO: Update with actual start block
    },
    "OLLIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x663e5da76e7a566aceb0c164ae3354fec0149d24",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xad673ee6bfc4c4031195d28e3e6310ccea176b27",
      startBlock: 416140795, // TODO: Update with actual start block
    },
    "SMRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29c811435c057ed9d09a477638abf3d86729ebcd",
      startBlock: 353160861, // TODO: Update with actual start block
    },
    "LABUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1f969639465529c3c201c065bac7324702b65dba",
      startBlock: 355232224, // TODO: Update with actual start block
    },
    "NOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc37f64d584130cc3bc434be53adffc402902f1f7",
      startBlock: 353506329, // TODO: Update with actual start block
    },
    "SNOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25d3a662808583e115dc17734e7fcc917a67deaf",
      startBlock: 353506063, // TODO: Update with actual start block
    },
    "SRPTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf831bb8ae94c547f92c90876710eec1c0a99173",
      startBlock: 353851287, // TODO: Update with actual start block
    },
    "NVDLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25dadac522037cb62420f3887d90140b175d9e44",
      startBlock: 353528993, // TODO: Update with actual start block
    },
    "OSCRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25a1cb3feea8da1a43e5d57b11eae0637ea8fc60",
      startBlock: 353160250, // TODO: Update with actual start block
    },
    "TGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa59f95cbeb5250ef424e9b34bb2338306bde2218",
      startBlock: 353851195, // TODO: Update with actual start block
    },
    "PANWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb017e15951f6b7ef7bc9334904f1e9127d713b5e",
      startBlock: 353854340, // TODO: Update with actual start block
    },
    "QQQMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x913c415dc5f5e3fa6c6bd911904c4ca2f60fd475",
      startBlock: 353161331, // TODO: Update with actual start block
    },
    "AFRMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a886a3dc140965ea07af65b638890aa5f76fcbe",
      startBlock: 357648192, // TODO: Update with actual start block
    },
    "MUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x201929f36b3aa507001ef7a390e23284966b7202",
      startBlock: 353850979, // TODO: Update with actual start block
    },
    "CEGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2ae339a9447dcc4b4edf8bcfcb66b5e72b31c27f",
      startBlock: 353507646, // TODO: Update with actual start block
    },
    "DELLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c26783f426c9883466c59665b83b9cc7de12b22",
      startBlock: 355232566, // TODO: Update with actual start block
    },
    "DALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9f01ed59e7760b9dd291e0403084a8efb194ddce",
      startBlock: 354197175, // TODO: Update with actual start block
    },
    "TErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1cafd03f452762bac4a8dac3df9c2642183bf3ba",
      startBlock: 354196445, // TODO: Update with actual start block
    },
    "HDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb46a361295d18dbd7c20a8546c325426111c4b6a",
      startBlock: 356955919, // TODO: Update with actual start block
    },
    "MSTYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0d9bcb590a3f0f4bcfadd291c10a2a50b608558e",
      startBlock: 353161461, // TODO: Update with actual start block
    },
    "USFRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61c6dacb3da6753c2622e4499f6400286076b920",
      startBlock: 363187296, // TODO: Update with actual start block
    },
    "DJTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68e3d7eea5f0ce7bb750167d82c7bb9a20bb6b72",
      startBlock: 353162638, // TODO: Update with actual start block
    },
    "CSCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3ea29fcd49db5a3fd92fe390c614beaef69b395a",
      startBlock: 353852537, // TODO: Update with actual start block
    },
    "ELrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x53a20d569b121a82ce723fc5a500e621b09754d6",
      startBlock: 356262236, // TODO: Update with actual start block
    },
    "YMAXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x892baa8bda21677939a9d28c7e69c8d17fa34edd",
      startBlock: 353506862, // TODO: Update with actual start block
    },
    "VWOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e60709e01405ce451649ee36a365eb058fdc679",
      startBlock: 379590074, // TODO: Update with actual start block
    },
    "KLACrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7f7d76a499027133c4a12615ad55dfdcd294c9e6",
      startBlock: 406789935, // TODO: Update with actual start block
    },
    "TDGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5f887ce208dc96e06a3962c1fe4a86a63a4b3b15",
      startBlock: 412331641, // TODO: Update with actual start block
    },
    "ATOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x52f4474715b6cc0231d5aed0bd860c859ea830fd",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TAProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xaf1f693f8d1b2b5f2de782798c0f2b10057734b3",
      startBlock: 423054927, // TODO: Update with actual start block
    },
    "CINFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x687af1dec58d3cbcb502ab22a7acce29249f002b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd7d44bb5c6b449289d4e44419bc584b43b734f8c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NWSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xefb812712ee73d7ef4566c00b15f12efc9efc7ad",
      startBlock: 402293625, // TODO: Update with actual start block
    },
    "HNSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56e5db432c1a1466d6ae97ff7226a7d64163248c",
      startBlock: 409579730, // TODO: Update with actual start block
    },
    "DNUTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc96662afaa7f7e05a46db1d20c803dbd4fd81d11",
      startBlock: 410944032, // TODO: Update with actual start block
    },
    "QMCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea54e4d3d7428548485f2c61e0ffbd051bebcb23",
      startBlock: 424442018, // TODO: Update with actual start block
    },
    "EWZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x540ed85983193ea665f160f1ce4a4fa4358e1fbe",
      startBlock: 410947555, // TODO: Update with actual start block
    },
    "VGLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c36b58f7fd6115f234d99b233edf3945abebfb4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ACrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2e571d95e6f6152e653d998d0aab8feeda88a9b2",
      startBlock: 410944213, // TODO: Update with actual start block
    },
    "EWArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54aec995e79bec218f2909fb39cdcdd94984a3cf",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OCGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x70187d03eda906d80db907d65d4032bd62e7c20d",
      startBlock: 419260793, // TODO: Update with actual start block
    },
    "Jrobinhood_2": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeaaa020542a348dee254ffbd0894059315f3507b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FIGRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf910728b70db7d55a2b3ec5a28876c66041719d8",
      startBlock: 396758206, // TODO: Update with actual start block
    },
    "PLTUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc04a5f196386c9cba7b7f1ddd235a4359dc994ae",
      startBlock: 394669873, // TODO: Update with actual start block
    },
    "SMMTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7fa66b2e3abccf133b901e1f79e31c40dd7a0649",
      startBlock: 396760606, // TODO: Update with actual start block
    },
    "BBWIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa0986981ce83e347d6cfd1bfb3d3463e69d414ab",
      startBlock: 394667270, // TODO: Update with actual start block
    },
    "OKLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5168c3a75717ac7deafde5747c0c00ab63adf204",
      startBlock: 392937260, // TODO: Update with actual start block
    },
    "BLIVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x95743ea20d65ff98142c33b88a13c349bddcec0c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BKSYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d3e364d1ebe7077119d9fde2139109471801762",
      startBlock: 415851577, // TODO: Update with actual start block
    },
    "ARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x17e5b160a82fa27bbc824e2dd38c783815e73df0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EZPWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9fc1b64b2328b494364abbbaaeecd01e961e07c3",
      startBlock: 421325007, // TODO: Update with actual start block
    },
    "PLCErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb974e097440aafea59c4b7c87522b663fd4c8940",
      startBlock: 412330186, // TODO: Update with actual start block
    },
    "NNOXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x688093a8a3161cd21bd5e5a912bda0044280de0c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SENSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3bb9badaf91a25a2b6a471a7604abd6433c68cf7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DFENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x30096afa7e75b2a2c748dbfb253e618176869830",
      startBlock: 415845311, // TODO: Update with actual start block
    },
    "INDIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6270772821436dd7835f05afe6f49af11d23c816",
      startBlock: 421675943, // TODO: Update with actual start block
    },
    "TSSIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6e716fd8125624b31235fdac9e89980a712c497e",
      startBlock: 421330135, // TODO: Update with actual start block
    },
    "QQQYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0bd3f7bdc29488f3c3311abed0bc744bf58f7df1",
      startBlock: 416830270, // TODO: Update with actual start block
    },
    "MTVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x391b1092914677177ca429f2fe9fb7b30ab04c73",
      startBlock: 422018028, // TODO: Update with actual start block
    },
    "ACRVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xae0abc6a471b70c4cf963f622a73a118953de339",
      startBlock: 415801990, // TODO: Update with actual start block
    },
    "XLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x715818f9ce7cbb065cd56335a464c8a5dc056c50",
      startBlock: 416139517, // TODO: Update with actual start block
    },
    "Hrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbae62a43ed3607e453992024a7d5b0a924df99a4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IWMYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0a95eeb665a3cfac1534e330d9d2578672232d4d",
      startBlock: 425822599, // TODO: Update with actual start block
    },
    "IYWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeaf55b3fd388d43a61b896da805b65ab95d68951",
      startBlock: 412335819, // TODO: Update with actual start block
    },
    "LBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x947e4b94f566d025664c377fe8dda5a6a18ea631",
      startBlock: 416826620, // TODO: Update with actual start block
    },
    "CRWLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x192cd95d2215762ca0fe6b9f08179eb0e9db4813",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TBLLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbcebf24ca9e11b94c84b1d045b3977740a993519",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MRNYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc3666e238b9b7fbbd814e4be228cb27271f6cf07",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ORLArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb9fce6db7a18ef02992c6bc8fa68009b9d1e8943",
      startBlock: 423745692, // TODO: Update with actual start block
    },
    "ACDCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x45bd6067b0ab7f7d873ad895ff4c8cdcc66c228b",
      startBlock: 421333288, // TODO: Update with actual start block
    },
    "KNSLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x95fdd3104dc2d9db940ffa0f4207b3dd4d7de24a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WTIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x428b5656a9aa727fec037894c50cbb577ebd1bff",
      startBlock: 416830774, // TODO: Update with actual start block
    },
    "ACIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3dbd374bf6fd9c31431639a2d235e3eb3aed2028",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7506abd94ff40ef7245433dbfd86db3f1a97f0c",
      startBlock: 397806719, // TODO: Update with actual start block
    },
    "CRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x34319febfaf971336c052d39ae9eaaf685e8885b",
      startBlock: 416143193, // TODO: Update with actual start block
    },
    "MRSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5b8df0ba67fe23d4ff9657eb7dc0c9057f834d86",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EBAYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2236439cdff43a4b862f5922b0f798183ad7cdcb",
      startBlock: 402643763, // TODO: Update with actual start block
    },
    "EXPErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa072d64e8476c8aae0a13eb125d704099b02f9a6",
      startBlock: 418224482, // TODO: Update with actual start block
    },
    "AEMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfdd2d27dd6f981de106a91a41e32bbc4fa6f54ff",
      startBlock: 380278440, // TODO: Update with actual start block
    },
    "AAPUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x59aff06d2c76e2d665543ecf3a80f20acba0f40e",
      startBlock: 395016906, // TODO: Update with actual start block
    },
    "MLTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x767bec9a88ad0a1d8f5ce282b130b2d2d5a915c7",
      startBlock: 397800505, // TODO: Update with actual start block
    },
    "AVAVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd55a4370fb75481050280b6d1dbf976e3cd52684",
      startBlock: 380281281, // TODO: Update with actual start block
    },
    "BNDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc6e23383c5dd04cc5c4f4efae738ba16af11a7a0",
      startBlock: 382357159, // TODO: Update with actual start block
    },
    "BXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xce936d4bcaa5492a02fe75c2c8bc4458c67af77a",
      startBlock: 379933676, // TODO: Update with actual start block
    },
    "IBMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x58bee50d727be4e785315d19cf95a8a07bcb3cb5",
      startBlock: 379591252, // TODO: Update with actual start block
    },
    "ISRGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe470e1bead3383b276cf7b05a520b1c8bdcc240e",
      startBlock: 379440944, // TODO: Update with actual start block
    },
    "MGMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb62b8adf6ed01710f15ce09da2c2200e19271524",
      startBlock: 404019474, // TODO: Update with actual start block
    },
    "NNErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60fcc033c65f168050c159cbdd2b34e3328f159b",
      startBlock: 379591552, // TODO: Update with actual start block
    },
    "PCGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c2c8fc1ee0a371810b744b5caa5144b149816c0",
      startBlock: 384434307, // TODO: Update with actual start block
    },
    "SSOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4b39c8ab32d4a01b5da6113a6701aaaece37f1f",
      startBlock: 383396824, // TODO: Update with actual start block
    },
    "TDOCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdc99ad35dd491fca13b2804e0a34b90f0b78efda",
      startBlock: 380627329, // TODO: Update with actual start block
    },
    "TMVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x206d8dc9523419e6d87ded724bbeb66ea1513f3d",
      startBlock: 382357688, // TODO: Update with actual start block
    },
    "VNQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4675f00e6ea85b0c441f4213eb016f74771d1a44",
      startBlock: 379936184, // TODO: Update with actual start block
    },
    "PDBCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x84e99209ff51e485304b0732956f1ba17216fd0c",
      startBlock: 420648265, // TODO: Update with actual start block
    },
    "IBGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2df7fac4be29ac6dd143d2ac3fcc91c87f9222ae",
      startBlock: 423745208, // TODO: Update with actual start block
    },
    "KSSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x368ed60e339a33ae6a41438431b1fe9180d70627",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SXTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x27a877a2a81267b797f79fd3d648bbcf12c50e18",
      startBlock: 416827548, // TODO: Update with actual start block
    },
    "ARECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x17bc19e4e2b047e510958c95650ef39a946b7d32",
      startBlock: 416141039, // TODO: Update with actual start block
    },
    "WULFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4bc7cdc8778c0c8e3f6026a59d41bfc088b60b04",
      startBlock: 420631095, // TODO: Update with actual start block
    },
    "HTZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x259b0ce1fa3f6a530c5e3b1f302602b3597ce871",
      startBlock: 415836051, // TODO: Update with actual start block
    },
    "QSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1e6045a22e6dfe3f88f0981f295f640873efc59e",
      startBlock: 409584618, // TODO: Update with actual start block
    },
    "UWMCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0faedeb52c05991a47842b3fba1cb2aaba13392e",
      startBlock: 423058297, // TODO: Update with actual start block
    },
    "SOUNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3ca6697db5dc71f19e50139ca71991b0f59d0778",
      startBlock: 409911737, // TODO: Update with actual start block
    },
    "KLARrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x454ea5ac109cfc0cfb97966a3664e8ebd86df527",
      startBlock: 378526705, // TODO: Update with actual start block
    },
    "UVIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6dc399baec9b4547581fc3ab714e57c2a25e84ba",
      startBlock: 409906032, // TODO: Update with actual start block
    },
    "PAGSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9a0bcd574766e7d8af801122625cd1ab772f9212",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GSBDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdb82f7e7c727326a675f95be378c93c3a22243e4",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ITBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x25f2469d807289ef9cbeae7ddc6a122ff10df762",
      startBlock: 426856897, // TODO: Update with actual start block
    },
    "RCKTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd4a39f5275552276ee9eca0b28328acf9729cec0",
      startBlock: 415854518, // TODO: Update with actual start block
    },
    "PCTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3581cb15d45cb75ca67938bf26adcace6a895e3c",
      startBlock: 420640506, // TODO: Update with actual start block
    },
    "AESIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xccf89e353e7bcfba1ed2ef6d853130bfc13b208b",
      startBlock: 423053946, // TODO: Update with actual start block
    },
    "MSOXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6d710d9e395e3eb602513795e2cf45172279bac5",
      startBlock: 415802348, // TODO: Update with actual start block
    },
    "XPOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbeccc3404be06d2d7cfcbe48cdb2dd453ab1d2d8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GOOSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7c8ee99aac74cbf691c87f8b6b90f16058fb6508",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "THCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x396ff10dd2c0af5233e5e88a62a1f9f5413ea9cb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "REMXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb2fc6a4ea0317ce8e5e2921724e340e6f36ad9b5",
      startBlock: 415839098, // TODO: Update with actual start block
    },
    "CHErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x676c7526524c681e3be250cbbc99ea99bf023419",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "USMVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4461274d9242a99c4c5466ca5a821978fc82cdd1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FSKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0c6b869e0a9e2f6ca5d90a03407917e18904641",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GOVZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdb5de8545c0e0221a9151700de42cdaf8a50ff4d",
      startBlock: 415802910, // TODO: Update with actual start block
    },
    "EXELrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x64bf6528601cfd105925672f535a1b981836f36e",
      startBlock: 415826273, // TODO: Update with actual start block
    },
    "LOVErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe61b9ee4cbaff430219621c4ca948a775a0e2b9d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IDRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe14b4b1028c0c0812822c559fcbc3ea8bb8f3d9d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "XTIArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbd991f6b8ed368a664f28f76275982d2879ed312",
      startBlock: 416829500, // TODO: Update with actual start block
    },
    "ANNXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2126ed2e7a4126083f0e9ce32cd8be72697cb7f5",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NUVLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f1aac5d59b94bd07b5182fb057ca322479374cf",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SPIRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc375fe10945b7f9148b349916e0dc143d912ec77",
      startBlock: 421323417, // TODO: Update with actual start block
    },
    "INOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7e7e9b778c1f58cc0d726f38228a5b9af56c376",
      startBlock: 416136956, // TODO: Update with actual start block
    },
    "WALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x902293786a08b1691ff2c485adfe0cc8b8c3c11c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CRSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2318c431a6d4fceceadd95bd4101aa0593f9b2b2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BIZDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4f558ed53d84e735f144c1f2b2e22e9ec925e9b4",
      startBlock: 415802667, // TODO: Update with actual start block
    },
    "MGRXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56c26c3015b257b17b4ae1bf127a75d97f6e44f7",
      startBlock: 415802742, // TODO: Update with actual start block
    },
    "EOLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7facbbb4cd207c84db003f0fe19d68b70ee1d698",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "OCSLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x529849478c205b9b8a149b9b84a9721497d9d128",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EUFNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf7419baeb7312aeb7268a6390de9ffc4e0049843",
      startBlock: 416482240, // TODO: Update with actual start block
    },
    "ALGTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x262355a0eb92655b82861aec3511836d4ce8c61a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BLNDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xada1740df07189b93390083b0b3eadec91413cc9",
      startBlock: 418569137, // TODO: Update with actual start block
    },
    "HELErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1d8166d4e58d4a9bb8341783de17576d8445f2b6",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "COINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b9c0b85e04e3500fb82278f88783d6c772258b4",
      startBlock: 351609692, // TODO: Update with actual start block
    },
    "MSTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x949d5d5ca6a31215aa9bfa84383d6909fda3855f",
      startBlock: 351608297, // TODO: Update with actual start block
    },
    "BROSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf689c8f6c4f561636750a938f4c44f62a3c74b1c",
      startBlock: 353161229, // TODO: Update with actual start block
    },
    "INTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x260bdd1030a3355002c7845932c613acecf5e6e4",
      startBlock: 353509154, // TODO: Update with actual start block
    },
    "XYZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf8b74aadc932b5637139de87438faa667d7f241a",
      startBlock: 353160365, // TODO: Update with actual start block
    },
    "RUNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa6fd1421ec2fc291dd9b5f63d66681e837d42535",
      startBlock: 353161920, // TODO: Update with actual start block
    },
    "SMCIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x572f7c10860f943b38ef5162e0c4be8d335009cb",
      startBlock: 353162769, // TODO: Update with actual start block
    },
    "AVGOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6432176f6c36cfc311e339f068d7b6fd8f28d6ef",
      startBlock: 353162014, // TODO: Update with actual start block
    },
    "VOOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x90fe2bbdefa8fbcac4ec69552e1d2ed5e5e6082d",
      startBlock: 351782024, // TODO: Update with actual start block
    },
    "CLSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2651c54945205bf43ce6f7d9c354ea2ea151ce65",
      startBlock: 355916869, // TODO: Update with actual start block
    },
    "CONLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa64ec657b24a2f69151c7ff70168724cbba70678",
      startBlock: 351782057, // TODO: Update with actual start block
    },
    "Urobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x839169ee6ff6d0f46777d339d3af5f39282e0cee",
      startBlock: 354196056, // TODO: Update with actual start block
    },
    "CLIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9bb213ef7e4db94495390ef255853f01a9b33683",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WPMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf6454553bdc58a47108adb891d82270d03639a57",
      startBlock: 409906906, // TODO: Update with actual start block
    },
    "GNWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb005e124d53b5f085dcc3c56385bcbc7677c1869",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4156330e75ab088e865c07b6c084bc9070693c59",
      startBlock: 412332276, // TODO: Update with actual start block
    },
    "LUMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29f96f2bfdd02f71878940b2be7dbf6ed79d6706",
      startBlock: 409578280, // TODO: Update with actual start block
    },
    "AUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x39ff3f039b6941b1b827f7ad98c409c3972f5548",
      startBlock: 415856780, // TODO: Update with actual start block
    },
    "CYCUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa130e7863963f3f2058cc7f25701be2bfab31337",
      startBlock: 409581656, // TODO: Update with actual start block
    },
    "LACrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcb3e3fe74fa0cdaf790fc16c750216a910a18080",
      startBlock: 411982604, // TODO: Update with actual start block
    },
    "TMDErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x581d73372846032fb64c2e7e351cc6babab1183a",
      startBlock: 410946776, // TODO: Update with actual start block
    },
    "NTLArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0f38449d88d48007ccd6fcb96cb6ed66c953bc6",
      startBlock: 409908427, // TODO: Update with actual start block
    },
    "IAGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa7aebdd41aace0517ec60e82d469d21c71945213",
      startBlock: 415846249, // TODO: Update with actual start block
    },
    "VCLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfee3391d1b5112db2100b6fbbd25ada2a8c17cf0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbafc0a6a3a064d52b34d37e786d2896c8e62e515",
      startBlock: 392246568, // TODO: Update with actual start block
    },
    "IONXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3694d723d82719c52e9347a24adbed00b013ec2",
      startBlock: 394670348, // TODO: Update with actual start block
    },
    "CCJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x27e8983e3aafb642e30f2613932de9e5f8dc50c5",
      startBlock: 391560896, // TODO: Update with actual start block
    },
    "ASANrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x64ae092f1f088d2721265d39aa06c3e9f137ff91",
      startBlock: 411296481, // TODO: Update with actual start block
    },
    "EMNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5fb2b363d47d7fdf44d319ac9be0dcf8b3be3522",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SCHWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ad1f0688224c64820c3ca8e3ddfba82ab9bb81d",
      startBlock: 397806693, // TODO: Update with actual start block
    },
    "GWWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4e3adfcb48b67bd41ad1474eadbc791a534b2a8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GDDYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0f99acfcc5e1304cef5d827a55baec0c819e4bc",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xca133bd5a06faed4e1bba76a6a9b1740e850a8ad",
      startBlock: 415806175, // TODO: Update with actual start block
    },
    "MNSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb5d83396eff47d56e401a59775e47ef8ca584f36",
      startBlock: 399181033, // TODO: Update with actual start block
    },
    "HRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x26830ed229f44e63eaeaef10d085e8097a244910",
      startBlock: 399184756, // TODO: Update with actual start block
    },
    "ADMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x07de39c80d2f76be18e6ed00ff482fcce7ef4bad",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "PSKYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xda36c18be650b8776523e71cdb88041db480046b",
      startBlock: 399181523, // TODO: Update with actual start block
    },
    "ZBRArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xeaaebf02b6fec703e2d7729d518bfe1a8f8c0289",
      startBlock: 397806774, // TODO: Update with actual start block
    },
    "TGTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe7ab123333af925a03c8aadadd100c807f793cdf",
      startBlock: 402645430, // TODO: Update with actual start block
    },
    "TSLQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b107e388a1e4bfb009c460134c873414f3763ab",
      startBlock: 391562185, // TODO: Update with actual start block
    },
    "CRCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf1c5b6d3622e8fd1aed2d1ec4d1a46cf7edd65a8",
      startBlock: 372586724, // TODO: Update with actual start block
    },
    "OPAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xda0987e5af105a910ca43caabe8014d209a6350b",
      startBlock: 355351672, // TODO: Update with actual start block
    },
    "IVVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x56a51a65be4feb98057586340326870c61c8b1c4",
      startBlock: 353508907, // TODO: Update with actual start block
    },
    "LABDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x103641f7a4f5f4c77cd0a87a3449894afb3de1be",
      startBlock: 355230664, // TODO: Update with actual start block
    },
    "NCLHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x33347ec37878f5c808d00e724d6fcce92ab55d91",
      startBlock: 355573245, // TODO: Update with actual start block
    },
    "SDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0353d5702935f1f5066290f12674ce6df790d5a3",
      startBlock: 374608357, // TODO: Update with actual start block
    },
    "Trobinhood_4": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x68a0b6bcff6f52d0d41afd4499f425c3afae8969",
      startBlock: 353853134, // TODO: Update with actual start block
    },
    "QLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x94bf50cc409b52d8c01e98f2d8f933617af76479",
      startBlock: 353854160, // TODO: Update with actual start block
    },
    "ORCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60fc7f30d7f952366638d1096ed5bba2b47ea146",
      startBlock: 353161597, // TODO: Update with actual start block
    },
    "TTWOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8bf8a2aa715c7d3be214be0cbcc7dc484082260c",
      startBlock: 353850913, // TODO: Update with actual start block
    },
    "CMGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4e1fb6e39d22ba1a5d32c7e14b24c58d4de65f06",
      startBlock: 353506898, // TODO: Update with actual start block
    },
    "MELIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x29241281c077476151917174a8d718308a4f5989",
      startBlock: 353162415, // TODO: Update with actual start block
    },
    "APArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xac7d13b8c27ce5f8504fa5816b8e84494747d222",
      startBlock: 379932705, // TODO: Update with actual start block
    },
    "ASTSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x476332389839b3ebe7d79585f27a0e7daf794852",
      startBlock: 379586667, // TODO: Update with actual start block
    },
    "CMCSArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3efa1164221ce0476319d4cfeb875af2114c3977",
      startBlock: 379440078, // TODO: Update with actual start block
    },
    "DOCUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x62fa7ad43297aeb62569665c5f7f695ea3d1b4bc",
      startBlock: 382354446, // TODO: Update with actual start block
    },
    "HPErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8577cf1ba12e95fe34c51fd8515adc974895a7a6",
      startBlock: 407482043, // TODO: Update with actual start block
    },
    "MCDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9815b0ff0c89c2986cbc6cd156ab5955d0a1860",
      startBlock: 380627859, // TODO: Update with actual start block
    },
    "ONONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x093c32f2346362dd94b8099397d17a2c6d1f0be3",
      startBlock: 380282463, // TODO: Update with actual start block
    },
    "PSQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x98cd1d2df7e3e1b4975c30d8e1e00689b64add52",
      startBlock: 402640959, // TODO: Update with actual start block
    },
    "PMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x43978f65270dd31d4c5c099709e8267509273038",
      startBlock: 379932873, // TODO: Update with actual start block
    },
    "REGNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x968f2d3a906346a7a22622243ca588a78a78e4a3",
      startBlock: 381908241, // TODO: Update with actual start block
    },
    "RSProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x19d817e446bc49ab014799096fd02852cf711b32",
      startBlock: 379440702, // TODO: Update with actual start block
    },
    "SCHFrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0074f2e9208f5938aeaacd4726b018dbf80f190b",
      startBlock: 379936615, // TODO: Update with actual start block
    },
    "UAArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3973572a1b914908e8341208d6b8f501ce86eb37",
      startBlock: 382353766, // TODO: Update with actual start block
    },
    "WHRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe5b001db5125167f3f4ac7ebab946ce53686537",
      startBlock: 382353870, // TODO: Update with actual start block
    },
    "OMEXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfcbcd406f41e2df7a897a4e8d7be07f505fc7587",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CLIKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xa0b74f2a13444e977789fa9cc5f8c132ec72a50f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NMAXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe4bb9bf0989cd1f71ffe8a26b967876e1821f3b9",
      startBlock: 409579062, // TODO: Update with actual start block
    },
    "BJDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x60d9274abcb140be2e79179e1fef3f713c2e1cd4",
      startBlock: 415809552, // TODO: Update with actual start block
    },
    "DNNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x42f1f7abe03c5117f4336f888006603e19990826",
      startBlock: 409909838, // TODO: Update with actual start block
    },
    "AREBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfb05db6efebed7d61b6ac703e5885518bfd6cc99",
      startBlock: 409579434, // TODO: Update with actual start block
    },
    "VBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xec538b571193d4b1a39da1a69fa41582790abea6",
      startBlock: 415819999, // TODO: Update with actual start block
    },
    "CXAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x06d9083b2a044e8cf640000e68b2be3ed32064cf",
      startBlock: 409578756, // TODO: Update with actual start block
    },
    "HLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x167070fcb65ea5240a31aaf7efd6231e9e3ae8bd",
      startBlock: 410947580, // TODO: Update with actual start block
    },
    "YINNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x672dfc33861618f4ec0debd1b143dfb7d2e34494",
      startBlock: 415829133, // TODO: Update with actual start block
    },
    "AURrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe2da292d2af680df47ef9020de9650b76d240f0",
      startBlock: 416135959, // TODO: Update with actual start block
    },
    "COPXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd1ed43855ea392e511758a03094850ff9cf753ea",
      startBlock: 415802638, // TODO: Update with actual start block
    },
    "DULLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfe056f29ebf97e565dea244aa483fa67688b6d45",
      startBlock: 415809762, // TODO: Update with actual start block
    },
    "YOUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x77c19015d59371f66dd791d45f3f6b0f50bf1fe8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BAHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe202085061d97a0f0406ecbced11e8efcfe6bc46",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c88549e250823f2bc7cc4af088ef550013e0d20",
      startBlock: 416481981, // TODO: Update with actual start block
    },
    "FNGOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf3a072a09bc0d117c9a79ae21af459cee6930c6a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "LGCBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9b541d2edeadc7f9fdd564766879e93fbfbcea7d",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SCHArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe484f225d521f3da96e2bdb4f7ada6006d0bbef0",
      startBlock: 420629984, // TODO: Update with actual start block
    },
    "SPLVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2975581169c1610c59a2a52c6192ee75edd6a462",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EWWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8442f0c408269d5c07977b41f810f69253c0aae6",
      startBlock: 427899785, // TODO: Update with actual start block
    },
    "COCOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ef84fb23c3fafd34a100648db4ae97218d5baab",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DCTHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd497a88e49169dac490e9b45663751300ec30892",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UDNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x20721f64897ba9aae16042768ca5e796cc8aa80f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NOTVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x05b83bdf83830200f7f238e0941f43b8abadaf05",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GMEUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4a17a03122b6db6192f092635e7848b8d5acd5d2",
      startBlock: 413712440, // TODO: Update with actual start block
    },
    "COURrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x274ab7a6fbca52b5087e5e2a15c120631692f2f1",
      startBlock: 418574619, // TODO: Update with actual start block
    },
    "RYTMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0580de09ef8db19b8f67359069d017123d1f9642",
      startBlock: 419604060, // TODO: Update with actual start block
    },
    "FNKOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x97933514f598ad315e2f3bba2c25b8b470d0fe5a",
      startBlock: 424439410, // TODO: Update with actual start block
    },
    "AEVArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdf120e6c84c134b53a313c9c09f2003309273e2f",
      startBlock: 418571486, // TODO: Update with actual start block
    },
    "AVDVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x051ecebd47eea5726e11de1804e20355d7dc8b1b",
      startBlock: 425478620, // TODO: Update with actual start block
    },
    "STRLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc4c8ef71a408a747f76fe23e56027293e5285d07",
      startBlock: 418573822, // TODO: Update with actual start block
    },
    "PVHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8a5c30ca8155bff1f81d862a600606b90e468d31",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NUKKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8042d8e827e198b4c4842c0e40df5847bed0dd29",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TTANrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9cdb61d5edd0bf218afc6d88b710ab46050216bd",
      startBlock: 416141756, // TODO: Update with actual start block
    },
    "FLOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1ebd2003899f719fc468ecb8a26c6242fffcb338",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CEFSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc40fe376044a9581c41391f5d0c4fb701dbb1359",
      startBlock: 418576862, // TODO: Update with actual start block
    },
    "TRIProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5ab5c6ebfbdcfcfe5302b3b6d04024a7ce48f296",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BWXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6e2fbc92d97aee6c70efd692bc40a6bd54804cc7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "APLYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8681aeb52bcdea2c71bd056a53d16c40f029e0ba",
      startBlock: 418211856, // TODO: Update with actual start block
    },
    "TKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66edbb7100c3d712c365293c46c990468d0430f7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SAMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3386d380ede2348d70aa45647db93748f62f8be",
      startBlock: 418557771, // TODO: Update with actual start block
    },
    "JPIErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6c720981f116196a48f3d6d3fc187eaed5325744",
      startBlock: 425814560, // TODO: Update with actual start block
    },
    "FNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1b94ae0023e72711d5b2372d8f34aa89446eaf8a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x52ed905f3a5d624bdd95de9efab701d2860fbd62",
      startBlock: 351609529, // TODO: Update with actual start block
    },
    "BMNRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x9c15b69731774acba30887f0e9b6b5f01a856c20",
      startBlock: 373236952, // TODO: Update with actual start block
    },
    "MTDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x72f552701d28672967514f08bd74139d9eeab239",
      startBlock: 424088733, // TODO: Update with actual start block
    },
    "DTErobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x87d54d79f3c25973963f77b599b3e7295530712f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ITWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x54f0aecbbb4d6765d8d3cfc11e1f130ae95a18e1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FISVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b2fa6cad97609136d3e96b5745770e969aca13c",
      startBlock: 401945915, // TODO: Update with actual start block
    },
    "AVYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe3eeb20b0b3112d56f130f3314f38ea8020d4a3b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2ef1d72befc3510379c055861ab7e1e7452edbd7",
      startBlock: 424445747, // TODO: Update with actual start block
    },
    "SYKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4bb780aa728808328713f86c76f46d7fcb946a39",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AONrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf890d23256546fffac3b723ca098b49305fa4d35",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CHRWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x71f61f5275f7cf2b5d76f727367c15b0e4111975",
      startBlock: 423052300, // TODO: Update with actual start block
    },
    "FOXArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xea454a845c841bea96cbdfa54959bf219b861b8f",
      startBlock: 402644526, // TODO: Update with actual start block
    },
    "AKAMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x14f12ec514f6bc876ddeffe5069ec446e4b209ac",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ARBBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf8c486fd33b3099ac27b2e8aea50e6d32c6c6593",
      startBlock: 426513200, // TODO: Update with actual start block
    },
    "VBILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4c03adf56336520f5d06af791582e6a73d7957f8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TSLGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4df12acdedf14a6d76c64fb23d218d5bc1f49d38",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SHFSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x66224ca8fee4df618dc8b726ce742dc476083ea9",
      startBlock: 409579349, // TODO: Update with actual start block
    },
    "HOOYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfb9de723d5bcaf621c226b017c868533858fef9a",
      startBlock: 391558799, // TODO: Update with actual start block
    },
    "ROBNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc394e7cf6ee912dd3e6e2214e550b7c0f128fc19",
      startBlock: 392249436, // TODO: Update with actual start block
    },
    "NGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1eb0c2fe8ae6c85c3b02b75387430b6a456289f2",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd3d17505f5d3efe295576bf646e6c460ef19699a",
      startBlock: 415843439, // TODO: Update with actual start block
    },
    "CRMLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x22c9c0777af061f59de45b013cb931376925ffbb",
      startBlock: 418226002, // TODO: Update with actual start block
    },
    "KRUSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c0f8857d9494a8692accd9b5d2e3ec5c7e19898",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HLALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc47289f4209c7aa82f00cb0b3608f4675c7ee3ad",
      startBlock: 413371402, // TODO: Update with actual start block
    },
    "GCTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7166d11fa3cba7d12a6e6b6d4c20b26ea6e44da6",
      startBlock: 426160275, // TODO: Update with actual start block
    },
    "WORXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x51455a514e66918373f20dc78b3f29bb4b222b50",
      startBlock: 410949719, // TODO: Update with actual start block
    },
    "ABSIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08b37846308d53a831697d783ef3630b028ba9a1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EDVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a38c7fc13643e3c995c05e6d96a45489ae041ab",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "STEMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5438c486b84520fd7d1923fc32bc2a1fb48f1e0e",
      startBlock: 413370648, // TODO: Update with actual start block
    },
    "DIVOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfcda86c6bb4a4154d56e96fd7a16672c85d34212",
      startBlock: 413367278, // TODO: Update with actual start block
    },
    "FLTRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5f13b43410c6021585f67e8c20a8084f95c91c99",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BGLCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8b0504db6ab090be4fba05fb53680b79d5b6a17b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FLGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4f709421510c0e08aa6e552d7e1583cd5d8fbc73",
      startBlock: 424444710, // TODO: Update with actual start block
    },
    "VSATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdec03e3ffd6a0cf21332ed8095d3469cc8f66ed2",
      startBlock: 418919616, // TODO: Update with actual start block
    },
    "GOVTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x714fc91d0df4597bc035808b0a84228213662845",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TNMGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdcb7d270bd8284ea42687c4238374d10c7da337a",
      startBlock: 410950573, // TODO: Update with actual start block
    },
    "OZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe9a4ada96f8d0ef36c5a51a0198f75ee9d7dcd5f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "POETrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd5799ffdff2aba0dfe43be88f98bb9ad227374ed",
      startBlock: 412336859, // TODO: Update with actual start block
    },
    "VPUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb88a2b878dace85a32a3535afd84aecc3e20b32a",
      startBlock: 419593823, // TODO: Update with actual start block
    },
    "ALHCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb3eac7a6961d429f3db09c65637e886aaf5068d6",
      startBlock: 421676808, // TODO: Update with actual start block
    },
    "XERSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x087bbfe626a7613496af5563da3d058c7217fcc7",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CONIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x24e1a8c2920b5e8a1fd711cf5b070a3c33cbae6f",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CIBRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x53de44d8cf56772f8e882179421fa9c14176d2c7",
      startBlock: 418559958, // TODO: Update with actual start block
    },
    "FNVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6edb3ee4a3215e11ba487fdf59477e4523a7e321",
      startBlock: 415825142, // TODO: Update with actual start block
    },
    "KMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe49cc22c5224ad714e163b7061549cbc08352232",
      startBlock: 397806559, // TODO: Update with actual start block
    },
    "LNTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x757080fabc26a5f5a32a27c526b73c5eda465d7e",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "EWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5a7e5b07cee4ed9a9c13384b40b86b98d9e99231",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CORrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb7310e2b8e2786ea8a5ab585bfdd7a80dd090ac8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "MKTXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x561820fa5fbf055cf4db3045f4290be08c298154",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ESrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0041e0e791a1d7e73a4a0ecbe12cf021bf81d873",
      startBlock: 402291939, // TODO: Update with actual start block
    },
    "SCHHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c22ade7ff84afed837c842e31e636383cb50376",
      startBlock: 379937646, // TODO: Update with actual start block
    },
    "NVDXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbddcb0118af395b6362660534bd3cc2e6dfdbff1",
      startBlock: 391902218, // TODO: Update with actual start block
    },
    "MSFUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfa2a4600b5ae60340473d04d1810567ee80ecc31",
      startBlock: 391900446, // TODO: Update with actual start block
    },
    "ONDSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe5f1d41d03bbfeb8d54075b6aecf6c55c4e4ce5e",
      startBlock: 409579843, // TODO: Update with actual start block
    },
    "PSECrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcadfdc313a389aa080d5b04fb0b63781da9aac28",
      startBlock: 423753943, // TODO: Update with actual start block
    },
    "SCHGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1cdb7d6afe918b7f16264429b342b02f3c4bcc67",
      startBlock: 409907437, // TODO: Update with actual start block
    },
    "IBOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe1fd77273948cd865bcfdf0b8f5ad622c9114879",
      startBlock: 409578603, // TODO: Update with actual start block
    },
    "AAPDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x24b8270289dd876f3550cf90e4f89b7639b8e7f0",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BBAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdc080487c35ba3c515c4a00b6180d7195d8788ba",
      startBlock: 409579577, // TODO: Update with actual start block
    },
    "PACBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2c347e8a8b30801580612822578d0f0a83adce08",
      startBlock: 413374074, // TODO: Update with actual start block
    },
    "VOOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0b05222696955c43fb98efd8a10c6c244d42da9e",
      startBlock: 409584800, // TODO: Update with actual start block
    },
    "PEWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xafcd54e27cc69391ab4eeec33ba8536a1e52a24a",
      startBlock: 410945049, // TODO: Update with actual start block
    },
    "NWTGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4f6148014d3223af7dbd460a54848fa3a0c818fe",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CIFRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x47da06af8bf99d37f4a1c52fb517a649e4db0c8c",
      startBlock: 409584851, // TODO: Update with actual start block
    },
    "FFAIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5854485ccaa793c9dd84be0dc7f68ea286c75a67",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AGMHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfd13d7d7f8d0524375b8ad6a5de94dfbd702e1b8",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "FEEDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x16c1f6766d894d74c4619b480b23dc64cd1d1cab",
      startBlock: 420635437, // TODO: Update with actual start block
    },
    "NFXLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2d647db662accc99a4ba683ea3c6edc7d027edd9",
      startBlock: 409585015, // TODO: Update with actual start block
    },
    "GOROrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd5ba9ed8472148252be708af9b22336b7356e3ec",
      startBlock: 418900441, // TODO: Update with actual start block
    },
    "FLDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x41ef6376eb9224f37a2d942e48411851b3f55365",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f7d01e3b22a43c78ec7efb4e5720bab49401b04",
      startBlock: 426868247, // TODO: Update with actual start block
    },
    "USOYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6dea82d8b5fa020fc018575551f01e69601f6874",
      startBlock: 415846272, // TODO: Update with actual start block
    },
    "CNEYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6f5df6e20173765b9d47460b948ec551dfcaa054",
      startBlock: 415812421, // TODO: Update with actual start block
    },
    "SONOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x74e74d7f34bb023329c8b5e766ee1fe48693a306",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "WEAVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4ae54c36e5e05d6394d45f390444ea2ff917f3a8",
      startBlock: 415845536, // TODO: Update with actual start block
    },
    "PHATrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe1b6eb0da635e4047e8c09f954c4d1cc84bb5d7c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AAPBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f2e64a00237665d9037035d6cd3197556db21c7",
      startBlock: 415802088, // TODO: Update with actual start block
    },
    "SOXQrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6cc1850cab2cfe14065594d1457b1d20a78c6b9c",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IWMIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdfb060eaf545a501f80ad7e5d054a9ad82acc4da",
      startBlock: 418913753, // TODO: Update with actual start block
    },
    "URNJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf19fdda0de06667c324b4a229ff1f61b975c3f2f",
      startBlock: 416143648, // TODO: Update with actual start block
    },
    "TSPYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1da22ee21494cb220074656d876f950e92e91bf1",
      startBlock: 424085539, // TODO: Update with actual start block
    },
    "TNYArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x085ff8ce5dcecd51119d864d8f4101939fd3771d",
      startBlock: 415836185, // TODO: Update with actual start block
    },
    "BLMZrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x74fc520eb1aab5d14c40a8673aeafab6cb5148d1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AMSCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xceb3f948a32666cb458b74fd21c7ecfb80823f7b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "UFGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xdd978ea8443434c5d77b697e867e1e28810d5d69",
      startBlock: 418585730, // TODO: Update with actual start block
    },
    "ARTLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc9ab0fd479353bdb26d860eb700e63866d70f138",
      startBlock: 420634350, // TODO: Update with actual start block
    },
    "PENrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x08960a13122dea23748a6943c31889a68237e058",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "SLDBrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0f58dba0301a0ad66c03a30ef148120cf356f9bd",
      startBlock: 421326235, // TODO: Update with actual start block
    },
    "HCCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xf4874df479a1d605c6e89a3785420b1a11c0fc36",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "NEOVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xfeb6d087ee3bd7fdc5e50bb3b487b62d7ea31212",
      startBlock: 416483648, // TODO: Update with actual start block
    },
    "GOOYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe653318b29f2f4633d7fc76f251ca5dc3dc8da93",
      startBlock: 415850877, // TODO: Update with actual start block
    },
    "TWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d9d8e7abbad6a850da791968b11aac304e6ad93",
      startBlock: 422017362, // TODO: Update with actual start block
    },
    "HACKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8f0eec8e16d2a07ddbf81c62b8081ff11dd1c041",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "CYTKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xe11a4f3671b3ff8be6a230cbf0fc78fd1d860833",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "BTALrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xd0e511d15991ecacad7f820af0e2d308b78eefd4",
      startBlock: 421336264, // TODO: Update with actual start block
    },
    "INSMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4024a38255d7dfbc8390203f16369dc5119a4850",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "HYLNrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcd2f195de6da7a1df2138786ef5fc2a47614a738",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "INDLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8ac2f3b86e6a74096c23730877808c15f1219e67",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "IHRTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xcc1318f270ee4ebdbd54468731816d20a1a2879a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DXDrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x61e549bfe16f6724b73e631f148f604b8eda7404",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "TUArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0d3b21fc4d8c73cb54e8727c8be0b6c7a3458e55",
      startBlock: 420993780, // TODO: Update with actual start block
    },
    "PRTArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1750618732874adf692ff74cf723b583b43c063b",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "RFIXrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xc963fe5c1ae5ba222f46b1e2d1a28c584e173917",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "ALNYrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x589b78785b8afa6f4a9fce27c5218f5f0022e326",
      startBlock: 424096852, // TODO: Update with actual start block
    },
    "GAINrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5c458578b2a608d15fe6729c7485bb2f71cdb7ce",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AVXLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x937e637b5b47e698c3ae85a9fbcf14c8e1f3d3eb",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "AArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3183866e8ebe4677f240d687a42318349e546988",
      startBlock: 388242696, // TODO: Update with actual start block
    },
    "ABBVrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x1c5c1a4297b7dde18f4e2a890b7c364900c95870",
      startBlock: 380278460, // TODO: Update with actual start block
    },
    "ALKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xad11812cf0f5fd512bf923d61e8eebaaad6c070a",
      startBlock: 385473280, // TODO: Update with actual start block
    },
    "BKNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x480fa91ffc5428c740dca04df0ca7697369c6568",
      startBlock: 380625866, // TODO: Update with actual start block
    },
    "CZRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x85e3963f02be307d319ef37f77140ffe5065cd3a",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "DOWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2a22c61b52ada057c5b63f66e38a3f39acf03c14",
      startBlock: 386510144, // TODO: Update with actual start block
    },
    "FXIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x82bc37a1023d83b8a744a1f22a9a750763efae75",
      startBlock: 379440616, // TODO: Update with actual start block
    },
    "GDXJrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x83c08de5e4bf4a765c8259ebd1ddbbd625711c1f",
      startBlock: 380280901, // TODO: Update with actual start block
    },
    "GSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x6b9c1b33e52eb519e0285b9181676d9bebf2fdea",
      startBlock: 379440187, // TODO: Update with actual start block
    },
    "GUSHrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5eae5f9c5391f26d6cda7237dc60ab68654927a9",
      startBlock: 383394984, // TODO: Update with actual start block
    },
    "LEUrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0411cfda5b43795b2af3270ddf8ae72ad559c259",
      startBlock: 380280114, // TODO: Update with actual start block
    },
    "OUSTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x63278591355f3aa3d602dc7b8fa44a421a6d429d",
      startBlock: 380624334, // TODO: Update with actual start block
    },
    "RCLrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x3d64d20aba5077188ededa42d9a4c25340ed75e6",
      startBlock: 379440836, // TODO: Update with actual start block
    },
    "SLNOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x8784d2a754368f322e3811d7dfaeb68b7da8b89b",
      startBlock: 379589655, // TODO: Update with actual start block
    },
    "TEAMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x23617f3e956eaa786304b36550bbd88fac1ad3a3",
      startBlock: 384435485, // TODO: Update with actual start block
    },
    "UNGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x885ea947ae54f53c1b3c1c8adcca1f9cb634e86f",
      startBlock: 380282836, // TODO: Update with actual start block
    },
    "YBTCrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xbe5e997e252c7ab900116976e60718de21b0a6d0",
      startBlock: 379589102, // TODO: Update with actual start block
    },
    "AMCRrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x4d94a239dc5266eb5b5cc15c0f6067c7aa485d29",
      startBlock: 394321005, // TODO: Update with actual start block
    },
    "INTWrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x88183e2d63158cb983f32d2332e9f756630ffe1b",
      startBlock: 392249123, // TODO: Update with actual start block
    },
    "TBILrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x0576daeb6b9947f2663de7f2a2d9c9b0e44b4aa1",
      startBlock: 339773155, // TODO: Update with actual start block
    },
    "GOOGrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x106d190967970b2d4003375456b4fe93dc856f26",
      startBlock: 353161132, // TODO: Update with actual start block
    },
    "DISrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x7e2631a63da9b72a903a2913dafd3705f2862702",
      startBlock: 355575719, // TODO: Update with actual start block
    },
    "IAUMrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d7f572b38e7b3ec372047e3380be447c6fb836b",
      startBlock: 353507284, // TODO: Update with actual start block
    },
    "JEPIrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x726c3992434afd27c88c78931a39c6dd116f6033",
      startBlock: 353161195, // TODO: Update with actual start block
    },
    "MRKrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb532e436744a157968ddcd240d510771d0e6a106",
      startBlock: 354195933, // TODO: Update with actual start block
    },
    "MRNArobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x2264f8c71bfa862b7133e83de9c19e0431663e6f",
      startBlock: 353506262, // TODO: Update with actual start block
    },
    "SPXSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x04cc73d63a631e80300b99491c16a181731e51b0",
      startBlock: 355575163, // TODO: Update with actual start block
    },
    "KOrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x5d646d154bd66bb7f55e609371b5f8397f31345a",
      startBlock: 352124832, // TODO: Update with actual start block
    },
    "RDDTrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xb5d82861d96f16115c5eb7c14f3883e996bb75da",
      startBlock: 353160893, // TODO: Update with actual start block
    },
    "PEProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x327df08935aa2d6d2764253b9d0b4ec8e585f290",
      startBlock: 353160757, // TODO: Update with actual start block
    },
    "APProbinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0xef3a50b8c6fe69e00b03652eff5efc740e51ede4",
      startBlock: 353509223, // TODO: Update with actual start block
    },
    "SOXSrobinhood": {
      chain: "arbitrum",
      abi: RobinhoodTokenABI,
      address: "0x80e5fdd3897f360e10a715d152908187cc1f4c23",
      startBlock: 353853913, // TODO: Update with actual start block
    },
  },
});
