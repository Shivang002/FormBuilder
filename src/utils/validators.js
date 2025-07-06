export const validateField = (field, value) => {
  if (!field.required) return null;

  if (value === null || value === undefined || value === '') {
    return `${field.label} is required.`;
  }

  switch (field.type) {
    case 'text':
      if (typeof value !== 'string') {
        return `${field.label} must be a string.`;
      }
      if (value.trim().length === 0) {
        return `${field.label} cannot be empty.`;
      }
      break;

    case 'number':
      if (isNaN(value)) {
        return `${field.label} must be a valid number.`;
      }
      break;

    case 'boolean':
      if (typeof value !== 'boolean') {
        return `${field.label} must be true or false.`;
      }
      break;

    case 'enum':
      const options = field.options?.map(opt => opt.value);
      if (!options?.includes(value)) {
        return `${field.label} must be one of the allowed options.`;
      }
      break;

    case 'label':
      // Labels are just static text, no validation needed.
      break;

    default:
      console.warn(`No validator implemented for field type: ${field.type}`);
      break;
  }

  return null;
};
