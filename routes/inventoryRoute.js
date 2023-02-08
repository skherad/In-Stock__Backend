// imports
const express = require('express');
const router = express.Router();
// inventory controller
const inventoryController = require("../controllers/inventoryController");

// inventory routes
router
.route("/")
.get(inventoryController.index)
.post(inventoryController.addInventoryItem);

// /:inventoryId endpoint
router
.route("/:inventoryId")
.get(inventoryController.singleInventoryItem)
.delete(inventoryController.deleteInventoryItem)
.put(inventoryController.editInventoryItem);

// /warehouse/:warehosueId
router
.route("/warehouse/:warehouseId")
.get(inventoryController.warehouseInventory)

module.exports = router;