"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import "./AddCoffee.css"; // Import the raw CSS file

type InputFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
};

function InputField({ id, label, placeholder, className = "" }: InputFieldProps) {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} placeholder={placeholder} />
    </div>
  );
}

export default function UpdateCoffee() {
  const handleCoffee = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const coffeeData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
      price: (form.elements.namedItem("price") as HTMLInputElement)?.value,
      description: (form.elements.namedItem("description") as HTMLInputElement)?.value,
      photo1: (form.elements.namedItem("photo1") as HTMLInputElement)?.value,
      photo2: (form.elements.namedItem("photo2") as HTMLInputElement)?.value,
      photo3: (form.elements.namedItem("photo3") as HTMLInputElement)?.value,
      exclution: (form.elements.namedItem("exclution") as HTMLInputElement)?.value,
    };

    fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));

    form.reset();
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <div className="back-link">
          <Link href="/home">
            <span className="arrow-icon"><ArrowLeft size={16} /></span> Back to home
          </Link>
        </div>

        <div className="form-box">
          <h1>Update Existing Coffee Details</h1>
          <p className="description">
            It is a long established fact that a reader will be distracted by the readable content...
          </p>

          <form onSubmit={handleCoffee}>
            <div className="input-grid">
              <InputField id="name" label="Name" placeholder="Americano Coffee" />
              <InputField id="title" label="title" placeholder="Sugarcane Jaggery Block" />
              <InputField id="price" label="price" placeholder="800" />
              <InputField id="description" label="description" placeholder="Product Description" />
              <InputField id="photo1" label="Photo1" placeholder="https://i.ibb.co/PGg4fhg/123ng" />
              <InputField id="photo2" label="Photo2" placeholder="https://i.ibb.co/PGg4fhg/123ng" />
              
            </div>

            <InputField id="photo3" label="Photo3" placeholder="https://i.ibb.co/PGg4fhg/123ng" />

            <button type="submit">Update Coffee Details</button>
          </form>
        </div>
      </div>
    </div>
  );
}

