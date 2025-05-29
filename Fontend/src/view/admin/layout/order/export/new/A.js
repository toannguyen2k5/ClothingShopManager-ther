// React Component: CreateSalesSlip.js
import React, { useState, useEffect } from "react";

const CreateSalesSlip = () => {
  const [slip, setSlip] = useState({
    idCreater: "",
    idDeliverer: "",
    idClient: "",
    deliveryAddress: "",
    shippingFee: 0,
    note: "",
    discountCode: "",
    details: [],
  });

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Gọi API để lấy users/clients/products
    fetch("/api/user").then(res => res.json()).then(setUsers);
    fetch("/api/client").then(res => res.json()).then(setClients);
    fetch("/api/product/detail").then(res => res.json()).then(setProducts);
  }, []);

  const addProduct = () => {
    setSlip({
      ...slip,
      details: [...slip.details, { idDetailProduct: "", quantity: 1, price: 0 }]
    });
  };

  const updateDetail = (index, key, value) => {
    const details = [...slip.details];
    details[index][key] = value;
    setSlip({ ...slip, details });
  };

  const submit = async () => {
    const createDate = new Date().toISOString().split('T')[0];
    const payload = {
      ...slip,
      createDate,
      deliveryStatus: false,
      totalBill: slip.details.reduce((sum, d) => sum + d.price * d.quantity, 0),
    };

    const res = await fetch("/api/salesslip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    alert(result.message || "Tạo đơn hàng thành công!");
  };

  return (
    <div>
      <h2>Tạo đơn xuất hàng</h2>
      <div>
        <label>Người tạo:</label>
        <select onChange={(e) => setSlip({ ...slip, idCreater: e.target.value })}>
          <option>-- Chọn --</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>
      <div>
        <label>Người giao:</label>
        <select onChange={(e) => setSlip({ ...slip, idDeliverer: e.target.value })}>
          <option>-- Chọn --</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>
      <div>
        <label>Khách hàng:</label>
        <select onChange={(e) => setSlip({ ...slip, idClient: e.target.value })}>
          <option>-- Chọn --</option>
          {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
      <div>
        <label>Địa chỉ giao:</label>
        <input onChange={(e) => setSlip({ ...slip, deliveryAddress: e.target.value })} />
      </div>
      <div>
        <label>Phí giao hàng:</label>
        <input type="number" onChange={(e) => setSlip({ ...slip, shippingFee: +e.target.value })} />
      </div>
      <div>
        <label>Mã giảm giá:</label>
        <input onChange={(e) => setSlip({ ...slip, discountCode: e.target.value })} />
      </div>
      <h3>Chi tiết sản phẩm</h3>
      {slip.details.map((item, index) => (
        <div key={index}>
          <select onChange={(e) => updateDetail(index, "idDetailProduct", e.target.value)}>
            <option>-- Chọn sản phẩm --</option>
            {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input type="number" value={item.quantity} onChange={(e) => updateDetail(index, "quantity", +e.target.value)} />
          <input type="number" value={item.price} onChange={(e) => updateDetail(index, "price", +e.target.value)} />
        </div>
      ))}
      <button onClick={addProduct}>+ Thêm sản phẩm</button>
      <br />
      <button onClick={submit}>Tạo đơn hàng</button>
    </div>
  );
};

export default CreateSalesSlip;
