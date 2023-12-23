export const API_URL = "https://app.loops.so/api/v1/";

export type CreateContactPayload = {
  email: string;
  subscribed: boolean;
};

export type CreateContactResult = {
  success: boolean;
  id?: string;
  message?: string; // error message
};
