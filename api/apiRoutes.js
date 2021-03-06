const router = require("express").Router();

const authRoutes = require("../auth/authRouter");
const bookingRoutes = require("../Booking/bookingRoutes");
const usersRoutes = require("../user/usersRoutes");
const profilesRoutes = require("../profile/profileRoutes");
// const tripRoutes = require("../Trip/tripRoutes");

router.use("/auth", authRoutes);
router.use("/booking", bookingRoutes);
router.use("/users", usersRoutes);
router.use("/profiles", profilesRoutes);
// router.use("trip", tripRoutes);

module.exports = router;
