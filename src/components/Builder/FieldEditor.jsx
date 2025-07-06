import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FieldEditor = ({ field, onUpdate, onDelete }) => {
  const handleLabelChange = (e) => {
    onUpdate({ ...field, label: e.target.value });
  };

  const handleHelpTextChange = (e) => {
    onUpdate({ ...field, helpText: e.target.value });
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    onUpdate({ ...field, type });
  };

  const handleRequiredChange = (e) => {
    onUpdate({ ...field, required: e.target.checked });
  };

  const handleOptionAdd = () => {
    const newOption = { label: '', value: '' };
    onUpdate({
      ...field,
      options: [...(field.options || []), newOption],
    });
  };

  const handleOptionRemove = (index) => {
    const newOptions = [...(field.options || [])];
    newOptions.splice(index, 1);
    onUpdate({
      ...field,
      options: newOptions,
    });
  };

  const handleOptionLabelChange = (index, value) => {
    const newOptions = [...(field.options || [])];
    newOptions[index].label = value;
    onUpdate({
      ...field,
      options: newOptions,
    });
  };

  const handleOptionValueChange = (index, value) => {
    const newOptions = [...(field.options || [])];
    newOptions[index].value = value;
    onUpdate({
      ...field,
      options: newOptions,
    });
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{field.label}</h3>
        <button onClick={onDelete} className="text-red-500">
          Delete
        </button>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Label</label>
        <input
          type="text"
          value={field.label}
          onChange={handleLabelChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Help Text</label>
        <input
          type="text"
          value={field.helpText || ''}
          onChange={handleHelpTextChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Field Type</label>
        <select
          value={field.type}
          onChange={handleTypeChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="short-answer">Short Answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="dropdown">Dropdown</option>
          <option value="radio">Radio</option>
          <option value="yes-no">Yes/No</option>
          <option value="upload">Upload</option>
          <option value="image">Image</option>
        </select>
      </div>

      {(field.type === 'dropdown' || field.type === 'radio') && (
        <div className="mb-2">
          <label className="block text-sm font-medium">Options</label>
          {field.options?.map((opt, i) => (
            <div key={i} className="flex items-center gap-2 mb-1">
              <input
                type="text"
                placeholder="Label"
                value={opt.label}
                onChange={(e) => handleOptionLabelChange(i, e.target.value)}
                className="flex-1 border rounded px-2 py-1"
              />
              <input
                type="text"
                placeholder="Value"
                value={opt.value}
                onChange={(e) => handleOptionValueChange(i, e.target.value)}
                className="flex-1 border rounded px-2 py-1"
              />
              <button
                onClick={() => handleOptionRemove(i)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleOptionAdd} className="text-blue-500 mt-1">
            Add Option
          </button>
        </div>
      )}

      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          checked={field.required}
          onChange={handleRequiredChange}
          id={`required-${field.id}`}
          className="mr-2"
        />
        <label htmlFor={`required-${field.id}`}>Make this required</label>
      </div>
    </div>
  );
};

export default FieldEditor;
