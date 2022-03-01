import { auth, googleAuthProvider } from "../lib/firebase";
import toast from "react-hot-toast";
const Enter = () => {
  // 1 user signed out <signinbutton/>
  // 2 user signed in, but misdsing username <usernameform/>
  // 3 user signed in but has username <signoutbutton/>

  const user = null;
  const username = null;

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};
export default Enter;
``;
function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      toast.error(
        "Woah there, something just went wrong and we don't know what"
      );
    }
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}
