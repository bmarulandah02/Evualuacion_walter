import db from "../../config/dbconexion.js";
import bcrypt from "bcryptjs";

export const UserModel = {
  findALL: async () => {
    const sql = "SELECT * FROM proveedores  ORDER BY id_proveedor DESC LIMIT 10";
    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id) => {
    const sql = "SELECT * FROM proveedores WHERE id_proveedor=?";
    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM proveedores WHERE id_proveedor=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  create: async (data) => {
    let email = data.email;
    console.log(data);
    // Validamos que el email no exista, el usuario lo validaremos por el email
    const [emailExiste] = await db.query(
      "SELECT * FROM proveedores WHERE email = ?",
      [email]
    );
    if (emailExiste.length > 0) {
      throw new Error("El email ya está registrado");
    }
    const userNuevo = {
      contacto: data.contacto,
      nit: data.nit,
      razon_social: data.razon_social,
      email: data.email,
      telefono: data.telefono,
      ciudad: data.ciudad,
      estado: data.estado,
      Fecha_creacion: new Date(),
    };
    const sql = "INSERT INTO proveedores SET ?";
    const [rows] = await db.query(sql, [userNuevo]);
    return rows;
  },

  update: async (id, data) => {
    const sql = "UPDATE proveedores SET ? WHERE id_proveedor = ?";
    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
