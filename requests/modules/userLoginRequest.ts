// ANCHOR: GQL request
import { GQL } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/index";

// ANCHOR: Data Type
import type { userLoginRequestInterface } from "@interfaces/index";

// ANCHOR: Validation
import { userLoginValidation } from "@validations/index";

export async function userLoginRequest(email: string, password: string): Promise<userLoginRequestInterface> {
  if(userLoginValidation({ email, password })){
    const data = await GQL('/data', userLoginDefinition(email, password));
    return (await data) as userLoginRequestInterface;
  } else {
    alert("Validation failed!");
  };
}
