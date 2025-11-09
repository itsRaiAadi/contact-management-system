import express from "express";
import {
  openContactForm,
  getAllContacts,
  getOneContact,
  addContact,
  getUpdateDetails,
  updateContact,
  deleteContact,
} from "../controller/contacts.controller.js";

const router = express.Router();

router.get("/", getAllContacts);

router.get("/show-contact/:id", getOneContact);

router.get("/add-contact", openContactForm);

router.post("/add-contact", addContact);

router.get("/update-contact/:id", getUpdateDetails);

router.post("/update-contact/:id", updateContact);

router.get("/delete-contact/:id", deleteContact);

export default router;
