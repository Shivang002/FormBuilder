import React from 'react';
import { useFormTemplate } from './hooks/useFormTemplate';
import FormBuilder from './components/Builder/FormBuilder';
import FormPreview from './components/Preview/FormPreview';
import Header from './components/Shared/Header';

function App() {
  const {
    templates,
    activeTemplate,
    addTemplate,
    deleteTemplate,
    setActiveTemplateId,
  } = useFormTemplate();

  return (
    <div className="flex min-h-screen">
      {/* Left Pane: Template list and form builder */}
      <div className="w-1/2 p-4 bg-white border-r">
        <Header />

        <button
          onClick={addTemplate}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          + New Template
        </button>

        <div className="mt-4">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => {
                console.log('Clicked template ID:', tpl.id); // ✅ Debug
                setActiveTemplateId(tpl.id);
              }}
              className={`cursor-pointer p-2 mb-2 border rounded ${
                activeTemplate?.id === tpl.id ? 'bg-blue-100' : ''
              }`}
            >
              {tpl.name}
            </div>
          ))}
        </div>

        <div className="mt-6">
          {activeTemplate && (
            <>
              <div className="text-sm text-gray-600 mb-2">
                Current Template: <strong>{activeTemplate.name}</strong>
              </div>
              <FormBuilder />
            </>
          )}
        </div>
      </div>

      {/* Right Pane: Live preview */}
      <div className="w-1/2 p-4 bg-gray-50">
        {activeTemplate && (
          <FormPreview sections={activeTemplate.sections} />
        )}
      </div>
    </div>
  );
}

export default App;
