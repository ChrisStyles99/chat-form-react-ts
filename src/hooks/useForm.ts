import { useState, ChangeEvent } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return { formData, handleInputChange };
}