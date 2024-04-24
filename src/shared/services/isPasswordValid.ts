export default function isPasswordValid(password: string) {
  if (typeof password !== 'string') return false;
  if (password.length < 8) return false;
  return true;
}
