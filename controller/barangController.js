import connection from "../config/database.js";

const getAllBarang = async (req, res) => {
  const sql = `SELECT * FROM barang`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ msg: error });
      return;
    }
    res.send(result);
  });
};

const getAllBarangById = async (req, res) => {
  const { id_barang } = req.params;

  const sql = `SELECT * FROM barang WHERE id_barang = ?`;
  connection.query(sql, [id_barang], (error, result) => {
    if (error) {
      res.send(error);

      res.status(500).json({ msg: error });
      return;
    }
    if (result.length === 0) {
      res.status(400).json({ error: "user not found" });
      return;
    }
    res.json(result(0));
  });
};

const createBarang = (req, res) => {
  const { nama_barang, spesifikasi, tgl_pembelian, jumlah_barang } = req.body;
  const sql =
    "INSERT INTO barang (nama_barang, spesifikasi, tgl_pembelian, jumlah_barang) VALUES (?,?,?,?)";
  connection.query(sql, [nama_barang, spesifikasi, tgl_pembelian, jumlah_barang], (error, result) => {
    if (error) {
      // jika ada error
      res.status(400);
      res.send(error);
    }
    // jika tidak ada error
    res.status(201);
    res.json(result);
  });
};

const updateBarang = (req, res) => {
    const id_barang = req.query.id_barang;
  
    // menangkap req body
    const { nama_barang, spesifikasi, tgl_pembelian, jumlah_barang } = req.body;
    // mengecek nim, nama
    if (nama_barang || spesifikasi || tgl_pembelian || jumlah_barang) {
      // query Update table mahasiswa
      const query = `Update mahasiswa SET nama_barang = "${nama_barang}", spesifikasi = "${spesifikasi}", tgl_pembelian = "${tgl_pembelian}", jumlah_barang = "${jumlah_barang}" WHERE id_barang = ${id_barang}`;
      //mengirim query ke database
      db.query(query, (error, result) => {
        if (error) res.status(400).send(error.message);
  
        res.json(result);
      });
    } else {
      res.send("isi body nya");
    }
  }

const deleteBarang = async (req, res) => {
  const id_barang = req.params.id_barang;
  const sql = "DELETE FROM barang WHERE id_barang = ?";
  connection.query(sql, [id_barang], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
};

export {
  getAllBarang,
  getAllBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
};
