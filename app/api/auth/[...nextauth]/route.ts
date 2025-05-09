import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectionToDatabase from "@/lib/dbconnect";
import users from "@/modals/users";
export const authOption = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Crediantial auth", credentials);
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        await connectionToDatabase();
        const user = await users.findOne({ email: credentials?.email });
        console.log("testing as a user ", user);
        if (!user || credentials?.password !== user.password) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.Username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.Username;
        token.role = user.role;
      }
      return token;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
