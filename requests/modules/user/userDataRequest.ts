// ANCHOR: GQL request
import { GQL } from "@requests/method";

// ANCHOR: GraphQL Definition
import { userDataDefinition } from "@definitions/index";

// ANCHOR: Data Type
import type { userDataRequestResultInterface } from "@interfaces/index";
import type { userDataRequestParametersInterface } from "@interfaces/index";

// ANCHOR: Validation
import { userDataValidation } from "@validations/index";

export async function userDataRequest(userDataRequestParameters: userDataRequestParametersInterface): Promise<userDataRequestResultInterface> {
  if (userDataValidation(userDataRequestParameters)) {
    return (await GQL('/data', userDataDefinition, userDataRequestParameters)) as userDataRequestResultInterface;
  } else {
    console.log("Validation error!");
  }
}
