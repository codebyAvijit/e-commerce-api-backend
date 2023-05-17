const router = require("express").Router();
const User = require("../schema/data");

//API CALL TO RETRIEVE ALL PRODUCTS DATA

router.get("/getall", async (req, res) => {
  try {
    const allData = await User.find();
    return res.status(200).send(allData);
  } catch (err) {
    console.log(err);
  }
});

//API CALL TO RETRIEVE DATA OF PRODUCT BY ID

router.get("/getById/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById({ _id: id });
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

//API CALL TO CREATE PRODUCT DATA

router.post("/create", async (req, res) => {
  try {
    const { id, name, description, price, category } = req.body;
    const uploadData = new User({
      id,
      name,
      description,
      price,
      category,
    });
    const saveData = await uploadData.save();
    if (saveData) {
      res.status(200).send(saveData);
    }
  } catch (err) {
    res.status(401).send({
      error: "Please enter all details",
    });
  }
});

//API CALL TO UPDATE THE PRODUCT DETAILS

router.put("/update/:id", async (req, res) => {
  try {
    const updateData = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updateData) {
      res.status(200).send(updateData);
    }
  } catch (err) {
    console.log(err);
  }
});

//API CALL TO DELETE THE PRODUCT

router.delete("/remove/:id", async (req, res) => {
  try {
    const deleteData = await User.findByIdAndDelete(req.params.id);
    if (deleteData) {
      res.status(200).json({
        message: "Product Deleted Successfully",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
