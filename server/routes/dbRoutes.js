import express from "express";

const router = express.Router();

import { 
    getClientID,
    createClientID,
    getTodolist,
    createTodolist, 
    getNote, 
    createNote,

    getQuicklink,
    createQuicklink,
    getEvent,
    createEvent
} from "../controllers/dbControllers";

router.route("/clientid").get(getClientID);
router.route("/clientid").post(createClientID);

router.route("/todolist").get(getTodolist);
router.route("/todolist").post(createTodolist);

router.route("/note").get(getNote);
router.route("/note").post(createNote);

// router.route("/calender").get();
// router.route("/calender").post();

router.route("/quicklink").get(getQuicklink);
router.route("/quicklink").post(createQuicklink);

router.route("/event").get(getEvent);
router.route("/event").post(createEvent);

export default router;