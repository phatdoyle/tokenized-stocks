import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";
import analytics from "./analytics/routes/index.js";
import onchainMarketcap from "./analytics/onchainMarketcap.js";

const app = new Hono();

app.use("/sql/*", client({ db, schema }));

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

app.route("/", analytics);
app.route("/", onchainMarketcap);

app.get("/up", (c) => c.json({ message: "Hello World" }));

export default app;
