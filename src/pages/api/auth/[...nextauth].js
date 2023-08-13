import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    // signIn: "http://localhost:3000/login",
    // signIn: "/login",

    signIn: `${process.env.NEXT_PUBLIC_NEXT_APP_URL}/login`,
  },
  // secret: process.env.NEXTAUTH_SECRET,
};


export default NextAuth(authOptions);
