// ANCHOR: Constant Import
import { ERROR_VALIDATION_CONSTANT } from "@state/constants";

export function errorLog(errorType: string, errorData: any): void {
  switch (errorType) {
    case ERROR_VALIDATION_CONSTANT:
      alert(`Validation Error: ${errorData}`);
      break;
    default:
      alert(`Error: ${errorData}`);
  }
}
