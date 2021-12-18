// ANCHOR: GQL request
import { GQL } from "@requests/index";

// ANCHOR: GraphQL Definition
import { userLoginDefinition } from "@definitions/index";

// ANCHOR: Data Type
import type { userLoginRequestResultInterface } from "@interfaces/index";
import type { userLoginRequestParametersInterface } from "@interfaces/index";

// ANCHOR: Validation
import { userLoginValidation } from "@validations/index";

export async function userLoginRequest(userLoginRequestParameters: userLoginRequestParametersInterface): Promise<userLoginRequestResultInterface> {
  if(userLoginValidation(userLoginRequestParameters)){
    const data = await GQL('/data', userLoginDefinition(userLoginRequestParameters));
    return (await data) as userLoginRequestResultInterface;
  } else {
    alert("Validation failed!");
  };
}
