import contacts from "../models/contacts.model.js";

export const openContactForm = (req, res) => {
  res.render("add-contact");
};

export const getAllContacts = async (req, res) => {
  const allContacts = await contacts.find();
  res.render("home", { allContacts });
};

export const getOneContact = async (req, res) => {
  const showContact = await contacts.findById(req.params.id);
  res.render("show-contact", { showContact });
};

export const addContact = async (req, res) => {
  if (req.body.name && req.body.phone) {
    await contacts.insertOne({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.redirect("/");
  } else {
    res.redirect("/add-contact");
  }
};

export const getUpdateDetails = async (req, res) => {
  const updateContact = await contacts.findById(req.params.id);
  res.render("update-contact", { updateContact });
};

export const updateContact = async (req, res) => {
  if (req.body.name && req.body.phone) {
    await contacts.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } else {
    res.redirect(`/update-contact/${req.params.id}`);
  }
};

export const deleteContact = async (req, res) => {
  await contacts.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
