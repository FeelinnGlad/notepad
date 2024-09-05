function Auth() {
  console.log('>> Auth');
  return (
    <div>
      <div>
        <h3>Auth page</h3>
        <input placeholder="username" name="username" />
        <input placeholder="password" name="password" />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Auth;
