const categoryModels = require("../models/categories");
const { v4: uuid } = require("uuid");

// Create new category
const createCategory = async (req, res, next) => {
  try {
    const title = req.body.title

    const date = new Date();
    const datetime =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    const data = {
      id: uuid().split('-').join(''),
      title,
      createdAt: datetime,
      updatedAt: datetime
    }

    await categoryModels.createCategory(data)

    res.status(201);
    res.json({
      message: 'Successfully created new category',
      data
    });
  } catch (error) {
    next(new Error(error.message))
  }
}

// Get categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryModels.getCategories()

    if (categories.length > 0) {
      res.status(200);
      res.json({
        data: categories
      });
    } else {
      res.status(404).send({
        message: 'Data not found!'
      });
    }
  } catch (error) {
    next(new Error(error.message))
  }
}

module.exports = {
  createCategory,
  getCategories
}