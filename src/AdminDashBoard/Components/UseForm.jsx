import { useState } from 'react';

function useFrom(initialState, onSubmit) {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return {
    formState,
    handleChange,
    handleSubmit,
  };
}

export default useFrom;
