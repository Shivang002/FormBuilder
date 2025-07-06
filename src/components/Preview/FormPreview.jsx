import React from 'react';
import RenderField from './RenderField';

const FormPreview = ({ sections }) => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md h-full overflow-y-auto">
      {sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          {section.fields.map((field) => (
            <RenderField key={field.id} field={field} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
