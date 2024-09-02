import{
    getAllBarang,
    getAllBarangById,
    createBarang,
    updateBarang,
    deleteBarang,
} from "../controller/barangController.js"

import express from "express"

const app = express()

app.get('/barang', getAllBarang);
app.get('/barang/:id', getAllBarangById);
app.post('/barang', createBarang)
app.put('/barang/:id', updateBarang)
app.delete('/barang/:id', deleteBarang)

export default app;