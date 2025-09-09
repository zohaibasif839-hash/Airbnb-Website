const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport= require("passport");
const { saveRedirectUrl } = require("../middleware.js")

const userController = require("../controllers/users.js"); 
console.log("userController");

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post("/login", 
    
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true,
    }),
   userController.login
);
router.get("/logout", userController.logout);
module.exports = router;