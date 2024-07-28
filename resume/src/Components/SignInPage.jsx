import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-card">
        <h1>Sign In</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-secondary">Sign In</button>
        </form>
        <div className="additional-options">
          <Link to="/forgot-password" className="forget-password">Forget Password?</Link>
          <button className="btn btn-google">Login with Google</button>
        </div>
      </div>
    </div>
  );
}
