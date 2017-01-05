var express = require("express");
var router = express.Router();

/*static defined*/
router.use("/", express.static('./public/')); //public folder run by gulp
router.use("/", express.static('./client/')); //client folder also taken as static 



module.exports = router;