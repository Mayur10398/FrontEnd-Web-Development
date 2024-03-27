class item{
    constructor (name, quantity, price, category, sku){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
        this.sku = sku;
    }
}

function addItem(name, quantity, price, category, sku) {
    let newItem = new Item(name, quantity, price, category, sku);
    // Add the new item to the inventory
    inventory.push(newItem);
}

function updateItemQuantity(sku, newQuantity) {
    let itemToUpdate = inventory.find(item => item.sku === sku);
    if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
        console.log(`Quantity for ${itemToUpdate.name} updated to ${newQuantity}`);
    } else {
        console.log(`Item with SKU ${sku} not found`);
    }
}

function removeItem(sku) {
    let indexToRemove = inventory.findIndex(item => item.sku === sku);
    if (indexToRemove !== -1) {
        inventory.splice(indexToRemove, 1);
        console.log(`Item with SKU ${sku} removed from inventory`);
    } else {
        console.log(`Item with SKU ${sku} not found`);
    }
}

function searchItems(criteria) {
    let results = inventory.filter(item => 
        item.name.includes(criteria) || 
        item.category.includes(criteria) || 
        item.sku.includes(criteria)
    );
    return results;
}