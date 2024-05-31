/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import app from "../services/firebase/config";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Center, Heading, Text, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await auth.setPersistence(browserSessionPersistence);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          console.log(token);
        }
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast({
          title: "Log in with Google successfully!",
          description: `Welcome, ${user.displayName}`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        navigate("/questions");
      })
      .catch((error) => {
        console.error(error.message);
        toast({
          title: "Unable to login with Google",
          description: error.message,
          status: "error",
        });
      });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await auth.setPersistence(browserSessionPersistence);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Account created successfully!", userCredential);
        toast({
          title: "Sign up successfully!",
          description: "Account created successfully!",
          status: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error in account creation:", errorMessage);
        toast({
          title: "Error in account creation",
          description: errorMessage,
          status: "error",
        });
      });
  };

  return (
    <Center flexDirection="column" mt="5">
      <Heading
        as="h2"
        size="2xl" 
        textAlign="center"
        fontFamily="'Poppins', sans-serif" 
        fontWeight="700" 
        color="white" 
        borderRadius="full"
        letterSpacing="wider"
        backgroundColor="#FFD700" 
        p={4} 
      >
       AI4 Career Guider
      </Heading>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="700"
      >
       User Registration
      </Heading>
      <Text p="4" textAlign="center" my={2} size="10px">
        To get started, please enter your desire email and password.
      </Text>
      <Button
        data-testid="loginButton"
        leftIcon={<FcGoogle />}
        onClick={handleGoogleSignIn}
        colorScheme="yellow"
        variant="outline"
        mb={2}
        marginBottom="25px"
      >
        <Text mb="0">Continue with Google</Text>
      </Button>
      
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{marginBottom: "10px", width: "100",
          padding: "10px",
          marginBottom: "10px",
          border: "2px solid #ddd",
          borderRadius: "4px",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          fontSize: "16px"}}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{marginBottom: "10px", width: "100",
          padding: "10px",
          marginBottom: "10px",
          border: "2px solid #ddd",
          borderRadius: "4px",
          boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          fontSize: "16px"}}
        />
        <button className="btn btn-primary my-custom-hover" style={{		  backgroundColor: '#FFD700', border: "none", marginRight: "10px", color: "black", fontWeight: "bold", borderRadius: "5px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",   cursor: "pointer",   transition: "backgroundColor 0.3s ease, transform 0.3s ease" }} onClick={handleRegister}>Register</button>
      
    </Center>
  );
};
{
  /* <div className="container mt-5">
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button type="button" onClick={handleRegister}>
        Register
      </button>{" "}
      {/* Add a register button */
}

// Remove the trailing */ comment delimiter
export default Register;
