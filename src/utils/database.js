import firebase from 'firebase';

export const userOnDB = firebase.database().ref('/user/list');
export const workspaceOnDB = firebase.database().ref('/workspace/list');
export const directMessageOnDB = firebase.database().ref('/directMessage');