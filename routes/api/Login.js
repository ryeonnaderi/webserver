const express = require("express")
const router = express.Router();

router.post("/login", (req,res) =>{
   res.send("logged in successfully")
});
module.exports = router