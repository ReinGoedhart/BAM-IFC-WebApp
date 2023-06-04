import { Events } from "./../../middleware/event-handler";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Action } from "../../middleware/actions";
import { Building } from "../../types";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

export const databaseHandler = {
  Login: () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  },
  Logout: () => {
    const auth = getAuth();
    signOut(auth);
  },

  deleteBuilding: async (building: Building, events: Events) => {
    const dbInstance = getFirestore(getApp());
    await deleteDoc(doc(dbInstance, "buildings", building.uid));
    events.trigger({ type: "CLOSE_BUILDING" });
  },

  updateBuilding: async (building: Building) => {
    const dbInstance = getFirestore(getApp());
    await updateDoc(doc(dbInstance, "buildings", building.uid), {
      ...building,
    });
  },
};
