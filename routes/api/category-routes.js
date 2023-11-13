const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({ include: Product });
  res.status(200).json(categories);
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category =  await Category.findByPk(req.params.id, { include: Product });
    
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
  // create a new category
  const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (!updatedCategory[0]) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  res.status(200).json({ message: 'Category updated successfully' });
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!deletedCategory) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  res.status(200).json({ message: 'Category deleted successfully' });
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}
});

module.exports = router;
