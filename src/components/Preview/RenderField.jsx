import React from 'react';

const RenderField = ({ field }) => {
  switch (field.type) {
    case 'label': {
      const Tag = `h${field.headingLevel}`;
      return React.createElement(Tag, {}, field.label);
    }

    case 'text':
      return (
        <div className="mb-4">
          <label className="block font-medium mb-1">{field.label}</label>
          <input
            type="text"
            placeholder={field.placeholder}
            required={field.required}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      );

    case 'number':
      return (
        <div className="mb-4">
          <label className="block font-medium mb-1">{field.label}</label>
          <input
            type="number"
            placeholder={field.placeholder}
            required={field.required}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      );

    case 'boolean':
      return (
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id={field.id}
            required={field.required}
            className="mr-2"
          />
          <label htmlFor={field.id}>{field.label}</label>
        </div>
      );

    case 'enum':
      return (
        <div className="mb-4">
          <label className="block font-medium mb-1">{field.label}</label>
          <select
            required={field.required}
            className="w-full border rounded px-2 py-1"
          >
            {field.options?.map((opt) => (
              <option key={opt.id} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

export default RenderField;
