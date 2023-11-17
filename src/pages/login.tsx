import image from "@/../public/assets/finnancas-image.svg";
import Input from "@/components/Input";
import useAuthStore from "@/store/useAuthStore";
import styles from "@/styles/Login.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [signIn, isAuthenticated] = useAuthStore(
    (state) => [
      state.signIn,
      state.isAuthenticated
    ]
  );

  const onSubmit = async (data: any) => {
    signIn(data.email, data.password)
    reset();
  };

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home")
    }
  }, []);

  return (
    <>
      <Head>
        <title>Login - EasyPay Bank</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <article className={styles.formArea}>
            <div className={styles.formDetails}>
              <h2>Login</h2>
              <p>Enter you account details</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="email"
                placeholder="E-mail"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "Email is required",
                  minLength: {
                    value: 3,
                    message: "Please enter a minimum of 3 characters"
                  }
                }}
                name="email"
                required
              />

              <Input
                name="password"
                type="password"
                placeholder="Password"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "Password is required"
                }}
                required
              />

              <button type="submit">Login</button>
            </form>
          </article>

          <div className={styles.bottomArea}>
            <p>Don't have an account?</p>
            <Link passHref href="/register" legacyBehavior>
              <a>Sign up</a>
            </Link>
          </div>
        </section>

        <section className={styles.ads}>
          <div className={styles.title}>
            <h3>
              Welcome to <span>Easy pay</span>
            </h3>
            <small>Login to access your account</small>
          </div>

          <div className={styles.imageSection}>
            <Image alt="Image" src={image} className={styles.image} />
          </div>
        </section>
      </main>
    </>
  );
}
