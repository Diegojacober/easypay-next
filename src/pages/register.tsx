import Head from "next/head";
import { useEffect, useState } from "react";
import image from "@/../public/assets/finnancas-image.svg";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import useAuthStore from "@/store/useAuthStore";
import Router from "next/router";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const [signUp, isAuthenticated] = useAuthStore(
    (state) => [
      state.signUp,
      state.isAuthenticated
    ]
  );

  const onSubmit = async (data: any) => {
    signUp(data.email, data.password, data.firstName, data.lastName, data.cpf, reset)
  };


  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home")
    }
  }, []);


  return (
    <>
      <Head>
        <title>Register - EasyPay Bank</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <article className={styles.formArea}>
            <div className={styles.formDetails}>
              <h2>Register</h2>
              <p>Create your account</p>
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
                type="text"
                placeholder="First Name"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "Please enter a minimum of 3 characters"
                  }
                }}
                name="firstName"
                required
              />

              <Input
                type="text"
                placeholder="Last Name"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "Last name is required",
                  minLength: {
                    value: 3,
                    message: "Please enter a minimum of 3 characters"
                  }
                }}
                name="lastName"
                required
              />

              <Input
                type="text"
                placeholder="CPF(no special characters)"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "CPF is required",
                  minLength: {
                    value: 11,
                    message: "Please enter 11 characters"
                  }
                }}
                name="cpf"
                required
              />

              <Input
                type="password"
                placeholder="Password"
                errors={errors}
                register={register}
                validationSchema={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Please enter a minimum of 6 characters"
                  }
                }}
                name="password"
                required
              />

              <button type="submit">Register</button>
            </form>
          </article>

          <div className={styles.bottomArea}>
            <p>I've an account</p>
            <Link passHref href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </div>
        </section>

        <section className={styles.ads}>
          <div className={styles.title}>
            <h3>
              Welcome to <span>Easy pay</span>
            </h3>
            <small>Register your new account</small>
          </div>

          <div className={styles.imageSection}>
            <Image alt="Image" src={image} className={styles.image} />
          </div>
        </section>
      </main>
    </>
  );
}
