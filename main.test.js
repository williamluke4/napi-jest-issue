const fs = require("fs");
const path = require("path");

test("query logs", async () => {
  const datamodel = fs
    .readFileSync(path.join(__dirname, "schema.prisma"))
    .toString();
  process.env.BLOOP = "file:dev.db";
  const engine = require(`./libquery_engine_napi-debian-openssl-1.1.x.so.node`);

  let qe = new engine.QueryEngine(
    {
      datamodel: datamodel,
      logLevel: "info",
      datasourceOverrides: {},
    },
    (err, log) => {
      console.log(err, log);
    }
  );
});
