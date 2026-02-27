import { Hono } from "hono";
import * as volume from "./volume.js";
import * as transferCount from "./transferCount.js";
import * as tokensVolume from "./tokensVolume.js";
import * as tokensActivity from "./tokensActivity.js";
import * as addressesVolume from "./addressesVolume.js";
import * as tokenStats from "./tokenStats.js";
import * as tokenTransfers from "./tokenTransfers.js";
import * as addressTransfers from "./addressTransfers.js";
import * as addressSummary from "./addressSummary.js";
import * as transfersRecent from "./transfersRecent.js";
import * as tokenTransfersRecent from "./tokenTransfersRecent.js";
import * as stats from "./stats.js";
import * as statsByProtocol from "./statsByProtocol.js";
import * as transferSharesVolume from "./transferSharesVolume.js";

const app = new Hono();

volume.register(app);
transferCount.register(app);
tokensVolume.register(app);
tokensActivity.register(app);
addressesVolume.register(app);
tokenStats.register(app);
tokenTransfers.register(app);
addressTransfers.register(app);
addressSummary.register(app);
transfersRecent.register(app);
tokenTransfersRecent.register(app);
stats.register(app);
statsByProtocol.register(app);
transferSharesVolume.register(app);

export default app;
