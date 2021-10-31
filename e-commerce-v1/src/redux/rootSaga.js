import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./Shop/shopSagas";
import { userSagas } from "./User/userSagas";

function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}

export { rootSaga };
