const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const form = evt.target;
    const { login, password } = form.elements;

    // Посилання на DOM-елементи
    console.log(login, password);

    onLogin({
      login: login.value,
      password: password.value,
    });
    // Значення полів
    console.log("After onLogin", login.value, password.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
