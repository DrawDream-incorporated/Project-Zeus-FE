import TextField from 'components/atoms/TextField';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <>
      <TextField value={email} onChange={handleChangeEmail} label="이메일" />
    </>
  );
}
