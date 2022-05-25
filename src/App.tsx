import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

function App() {
  const authRequest = {
    scopes: ["User.Read"],
  };
  const { instance, inProgress } = useMsal();
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    >
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="currently logged in user" />
          <p>Logged in as {instance.getActiveAccount()?.username || "none"}</p>
          <button
            className="App-link"
            onClick={() => instance.logoutRedirect()}
          >
            Log out
          </button>
        </header>
      </div>
    </MsalAuthenticationTemplate>
  );
}

export default App;
