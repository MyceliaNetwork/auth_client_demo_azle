import { ActorSubclass } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { html, render } from "lit-html";
import { renderIndex } from ".";
import { _SERVICE } from "../../../declarations/azle_starter/azle_starter.did";

const content = () => html`<div class="container">
  <style>
    #azle_starter {
      border: 1px solid #1a1a1a;
      margin-bottom: 1rem;
    }
  </style>
  <h1>Internet Identity Client</h1>
  <h2>You are authenticated!</h2>
  <p>To see how a canister views you, click this button!</p>
  <button type="button" id="azle_starterButton" class="primary">
    Who am I?
  </button>
  <input type="text" readonly id="azle_starter" placeholder="your Identity" />
  <button id="logout">log out</button>
</div>`;

export const renderLoggedIn = (
  actor: ActorSubclass<_SERVICE>,
  authClient: AuthClient
) => {
  render(content(), document.getElementById("pageContent") as HTMLElement);

  (document.getElementById("azle_starterButton") as HTMLButtonElement).onclick =
    async () => {
      try {
        const response = await actor.get_message();
        console.log(response);
        (
          document.getElementById("azle_starterButton") as HTMLInputElement
        ).value = response.toString();
      } catch (error) {
        console.error(error);
      }
    };

  (document.getElementById("logout") as HTMLButtonElement).onclick =
    async () => {
      await authClient.logout();
      renderIndex();
    };
};
