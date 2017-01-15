// class AuthCtrl {
//   constructor($state, AuthService) {
//     this.title = $state.currnet.title;
//     this.authSvc = authSvc;
//
//     this._User = User;
//     this.isSignedIn = false;
//     this.first = '';
//     this.last = '';
//     this.email = '';
//     this.password = '';
//   }
//
//   logIn() {
//     this.isSubmitting = true;
//
//     this._User.attmeptAuth(this.authType, this.formData)
//       .then((_res) => {
//         this.$state.go('home');
//       },
//       (err) => {
//         this.isSubmitting = false;
//         this.errors = err.data.errors;
//       });
//   }
//
//   getState() {
//     return this.signinSvc.getState();
//   }
//
//   register(first, last, email, password) {
//     return this.signupSvc.signUp(first, last, email, password);
//   }
//
//   signOut() {
//     this.signinSvc.signOut();
//     this.cartSvc.cart.length = 0;
//   }
// }
//
// AuthCtrl.$inject = ['AuthService', '$state'];
//
// export default AuthCtrl;
//
// // class SignInCtrl {
// //   constructor(signinSvc, cartSvc) {
// //     this.cartSvc = cartSvc;
// //     this.signinSvc = signinSvc;
// //     this.email = '';
// //     this.password = '';
// //   }
// //
//   // getState() {
//   //   return this.signinSvc.getState();
//   // }
// //
// //   signIn(email, password) {
// //     this.signinSvc.signIn(email, password);
// //   }
// //
// //   signOut() {
// //     this.signinSvc.signOut();
// //     this.cartSvc.cart.length = 0;
// //   }
// // }
// //
// // SignInCtrl.$inject = ['SignInService', 'CartService'];
// //
// // export default SignInCtrl;
