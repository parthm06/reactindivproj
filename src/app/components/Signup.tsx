"use client";
import { useState } from 'react';
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 

interface SignupProps {
  onAddUser: (user: {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
  }) => void;
}

export default function Signup({ onAddUser }: SignupProps) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      ...formData
    };
    onAddUser(newUser);
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      imageUrl: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="imageUrl">Image Link</label>
          <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="imageUrl"
            type="url"
            placeholder="Enter image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
  
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}
  