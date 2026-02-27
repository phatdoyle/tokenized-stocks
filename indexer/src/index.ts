import { ponder } from "ponder:registry";

// Import Ondo protocol handlers
import "./handlers/ondo/approval";
import "./handlers/ondo/complianceSet";
import "./handlers/ondo/initialized";
import "./handlers/ondo/nameChanged";
import "./handlers/ondo/roleAdminChanged";
import "./handlers/ondo/roleGranted";
import "./handlers/ondo/roleRevoked";
import "./handlers/ondo/symbolChanged";
import "./handlers/ondo/tokenPauseManagerSet";
import "./handlers/ondo/tokenDeployed";
import "./handlers/ondo/transfer";

// Import xStock protocol handlers
import "./handlers/xStock/deployed";
import "./handlers/xStock/approval";
import "./handlers/xStock/delegateModeChange";
import "./handlers/xStock/delegateWhitelistChange";
import "./handlers/xStock/multiplierUpdated";
import "./handlers/xStock/newBurner";
import "./handlers/xStock/newMinter";
import "./handlers/xStock/newMultiplierUpdater";
import "./handlers/xStock/newPauser";
import "./handlers/xStock/newSanctionsList";
import "./handlers/xStock/newTerms";
import "./handlers/xStock/ownershipTransferred";
import "./handlers/xStock/pauseModeChange";
import "./handlers/xStock/transfer";
import "./handlers/xStock/transferShares";
