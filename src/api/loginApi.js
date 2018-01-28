



export function init() {
  let googleAuth = gapi.auth2.getAuthInstance();
  googleAuth.isSignedIn.listen((signedIn) => {
    console.log(signedIn);

    if(signedIn) {
      console.log(googleAuth.currentUser.get().getBasicProfile())
      let profile = googleAuth.currentUser.get().getBasicProfile();
      let user = {
        id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        token: googleAuth.currentUser.get().getAuthResponse().id_token,
        provider: 'google'
      };
    }
  })
}

export function signIn() {

}

export function signOut() {
  let auth2 = gapi.auth2.getAuthInstance();
  return auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

export default {init, signIn, signOut }
