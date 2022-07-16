const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const FILESYSTEM = require("fs");
const PATH = require("path");
const FILESEXEPTION = ["Core", "tempCodeRunnerFile"];

FILESYSTEM.readdirSync(__dirname).forEach((file) => {
  const NAMEFILEROUTEWITHOUTEXTENSION = PATH.basename(file, PATH.extname(file));
  if (!FILESEXEPTION.includes(NAMEFILEROUTEWITHOUTEXTENSION)) {
    ROUTER.use(`/${NAMEFILEROUTEWITHOUTEXTENSION}`, require(`./${file}`));
  }
});

module.exports = ROUTER;
