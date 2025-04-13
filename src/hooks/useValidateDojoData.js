export default function useValidateDojoData(dojos) {
  if (!dojos || dojos.length === 0) {
    return { isValid: false, message: 'Loading...' };
  }
  if (!dojos[0].id || !dojos[0].name) {
    return { isValid: false, message: 'Invalid data format' };
  }
  return { isValid: true, message: '' };
}