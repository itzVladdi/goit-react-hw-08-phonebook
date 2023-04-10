// ----- User Selectors --------------------------------
export const selectUserStatus = state => state.user.status;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUserData = state => state.user.user;
export const selectToken = state => state.user.token;

// ----- Contacts Selectors --------------------------------
export const selectContactsStatus = state => state.contacts.status;
export const selectContacts = state => state.contacts.contacts;
export const selectContactsError = state => state.contacts.error;

// ----- Filter Selectors --------------------------------
export const selectFilter = state => state.filter;
