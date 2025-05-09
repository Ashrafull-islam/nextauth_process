'use client';
import React, { useEffect, useState } from 'react';
import './AllProduct.css';

interface Product {
  _id: string;
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  photo: string;
  price: number;
}

const AllProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  const fetchData = async () => {
    const res = await fetch('/api/product');
    const data = await res.json();
    setProducts(data.users || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/product/${id}`, { method: 'DELETE' });
    if (res.ok) {
      fetchData();
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editing) return;

    const res = await fetch(`/api/product/${editing._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editing),
    });

    if (res.ok) {
      setEditing(null);
      fetchData();
    }
  };

  return (
    <div className="container">
      <h1 className="title">Admin Coffee Panel</h1>

      {editing && (
        <form onSubmit={handleUpdate} className="edit-form">
          <h2 className="edit-title">Update Coffee: {editing.name}</h2>
          {Object.entries(editing).map(([key, value]) =>
            key !== '_id' ? (
              <input
                key={key}
                type="text"
                value={value}
                onChange={(e) => setEditing({ ...editing, [key]: e.target.value })}
                placeholder={key}
                className="edit-input"
              />
            ) : null
          )}
          <div className="edit-buttons">
            <button type="submit" className="btn update-btn">Update</button>
            <button type="button" onClick={() => setEditing(null)} className="btn cancel-btn">Cancel</button>
          </div>
        </form>
      )}

      <div className="product-grid">
        {products.map((item) => (
          <div key={item._id} className="product-card">
            <div>
              <h2 className="product-name">{item.name}</h2>
              <p className="product-details">{item.details}</p>
              <p className="product-price">Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="product-actions">
              <button onClick={() => setEditing(item)} className="btn edit-btn">Edit</button>
              <button onClick={() => handleDelete(item._id)} className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
