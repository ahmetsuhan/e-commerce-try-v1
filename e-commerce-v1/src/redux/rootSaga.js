import { all, call } from "redux-saga/effects";

import { shopSagas } from "./Shop/shopSagas";
import { userSagas } from "./User/userSagas";
import { cartSagas } from "./Cart/cartSagas";

function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

export { rootSaga };
