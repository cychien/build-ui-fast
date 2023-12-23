import {
  API_URL,
  CreateContactPayload,
  CreateContactResult,
} from "./constants";

async function createContact(
  contact: CreateContactPayload,
): Promise<CreateContactResult> {
  return fetch(`${API_URL}/contacts/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
    },
    body: JSON.stringify(contact),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return {
        success: false,
        message: error.message,
      };
    });
}

export { createContact };
