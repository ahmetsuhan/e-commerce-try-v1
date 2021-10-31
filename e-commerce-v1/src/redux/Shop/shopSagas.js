import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shopTypes";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebaseUtils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shopActions";

export function* fetchCollectionAsync() {
  yield console.log("I am fired!!!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  // .get()
  // .then((snapshot) => {
  //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // })
  // .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all(call(fetchCollectionsStart));
}
