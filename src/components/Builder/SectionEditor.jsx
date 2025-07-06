import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FieldEditor from './FieldEditor';

const SectionEditor = ({ section, onUpdate }) => {
  const [fields, setFields] = useState(section.fields);

  const handleAddField = () => {
    const newField = {
      id: uuidv4(),
      label: 'New Field',
      type: 'text',
    };
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
    onUpdate({ ...section, fields: updatedFields });
  };

  const handleUpdateField = (updatedField) => {
    const updatedFields = fields.map((f) => (f.id === updatedField.id ? updatedField : f));
    setFields(updatedFields);
    onUpdate({ ...section, fields: updatedFields });
  };

  const handleDeleteField = (fieldId) => {
    const updatedFields = fields.filter((f) => f.id !== fieldId);
    setFields(updatedFields);
    onUpdate({ ...section, fields: updatedFields });
  };

  return (
    <div className="border p-4 mb-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{section.title}</h3>

      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <FieldEditor
            field={field}
            onUpdate={handleUpdateField}
            onDelete={() => handleDeleteField(field.id)}
          />
        </div>
      ))}

      <button onClick={handleAddField} className="text-blue-600 mt-2">
        + Add Field
      </button>
    </div>
  );
};

export default SectionEditor;
