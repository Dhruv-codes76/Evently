export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6;
}

export function validateEvent({ title, date, location }) {
  if (!title || title.trim().length < 3) return false;
  if (!location || location.trim().length < 3) return false;
  if (!date) return false;
  const today = new Date();
  today.setHours(0,0,0,0);
  const inputDate = new Date(date);
  if (inputDate < today) return false;
  return true;
}
