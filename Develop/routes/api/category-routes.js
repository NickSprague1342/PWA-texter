const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const productCategories = await Category.findAllProducts({
    include: [allProducts],
  });
  res.json(productCategories);
} catch (error){
  res.status(500).JSON (error);
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const productCategories = await Category.findProductByID (req.params.id, {
      include: [allProducts],
    });
    if (Category) {
      return message.JSON({ message: 'Product located!'});
    }

    else
    return message.JSON ({message: 'Product not found!'})
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const postCategory = await Category.create(req.body)
    res.status(201).JSON(postCategory)
  } catch (error) {
    res.status(401).JSON(error)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const newCatrgory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
