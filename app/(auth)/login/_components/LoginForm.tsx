"use client";
import TextFeild from "@/components/inputs/TextFeild";
import React, { useState } from "react";
import styles from "@/styles/login.module.scss";
import { Button } from "@/components/buttons/Buttons";
import Link from "next/link";

function LoginFormPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className={styles.formScreenMainContainer}>
      <div className={styles.formScreenInner}>
        <div>
          <h1>Welcome !</h1>
          <p>Enter details to login.</p>
        </div>
        <form>
          <TextFeild placeholder="Email" type="email" />
          <div className={styles.passwordFeildContainer}>
            <TextFeild
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <div
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              show
            </div>
          </div>

          <p>
            <Link href="/" className={styles.link}>
              {" "}
              Forgot Password?
            </Link>
          </p>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
