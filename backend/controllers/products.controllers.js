import Product from "../models/product.models.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data:products });
    } catch (error) {
        res.status(500).json({ message: 'error fetching all products', error: error.message });
    }

}

export const updateProduct =  async (req, res) => {
    const { id } = req.params
    const productData = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true});
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
}



export const createProduct = async (req, res)=> {
    const products = req.body;

    if (!products.name || !products.price || !products.image) {
        return res.status(400).json({ message: 'Name  price and image are required' });
    }

    const newProduct = new Product(products)
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
    
}

export const deleteProduct = async (req,res) => {
    try {
        const { id } = req.params
        
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted successfully' });
        
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
}