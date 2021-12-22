// ANCHOR: GQL request
import { GQL } from "@requests/method";

// ANCHOR: GraphQL Definition
import { userRegisterDefinition } from "@definitions/index";

// ANCHOR: Data Type
import type { userRegisterRequestResultInterface } from "@interfaces/index";
import type { userRegisterRequestParametersInterface } from "@interfaces/index";

// ANCHOR: Validation
import { userRegisterValidation } from "@validations/index";

export async function userRegisterRequest(userRegisterRequestParameters: userRegisterRequestParametersInterface): Promise<userRegisterRequestResultInterface> {
  if (userRegisterValidation(userRegisterRequestParameters)) {
    return (await GQL('/data', userRegisterDefinition(userRegisterRequestParameters))) as userRegisterRequestResultInterface;
  } else {
    console.log("Validation error!");
  }
}
