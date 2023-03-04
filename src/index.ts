import { $query, $update } from "azle";

// This is a global variable that is stored on the heap
let message: string = "hoax";

// Query calls complete quickly because they do not go through consensus
$query;
export function get_message(): string {
  return message;
}

// Update calls take a few seconds to complete
// This is because they persist state changes and go through consensus
$update;
export function set_message(new_message: string): void {
  message = new_message; // This change will be persisted
}
