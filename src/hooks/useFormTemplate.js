import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';


export function useFormTemplate() {
  const [templates, setTemplates] = useLocalStorage('templates', []);
  const [activeTemplateId, setActiveTemplateId] = useState(null);

  const activeTemplate = templates.find(t => t.id === activeTemplateId);
   console.log('Active Template ID:', activeTemplateId);
   console.log('Active Template:', activeTemplate);


  const addTemplate = () => {
    if (templates.length >= 5) return;

    const newTemplate = {
  id: uuidv4(), // ✅ Unique template ID
  name: `Template ${templates.length + 1}`,
  sections: [
    {
      id: uuidv4(), // ✅ Unique section ID
      title: 'Section 1',
      fields: [],
    },
  ],
};


    const updatedTemplates = [...templates, newTemplate];
    setTemplates(updatedTemplates);
    setActiveTemplateId(newTemplate.id);
  };

  const deleteTemplate = (id) => {
    const updatedTemplates = templates.filter(t => t.id !== id);
    setTemplates(updatedTemplates);
    if (updatedTemplates.length > 0) {
      setActiveTemplateId(updatedTemplates[0].id);
    }
  };

  const updateTemplate = (template) => {
    const updatedTemplates = templates.map(t =>
      t.id === template.id ? template : t
    );
    setTemplates(updatedTemplates);
  };

  return {
    templates,
    activeTemplateId,
    activeTemplate,
    addTemplate,
    deleteTemplate,
    setActiveTemplateId,
    updateTemplate,
  };
}
