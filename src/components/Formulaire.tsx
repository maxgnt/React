import { useState } from "react";

export default function Formulaire () {
  const [title, setTitle] = useState ("");
  const [descirption, setDescription] = useState ("");
  const [priority, setPriority] = useState ("low,medium,high");
  const [dueDate, setDueDate] = useState ("");
  const [category, setCategory] = useState ("");
  const [tags, setTags] = useState ([""]);
  const [envoi, setEnvoi] = useState (false);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault ();

    setEnvoi(true); 

    setTitle ("");
    setDescription ("");
    setPriority ("low,medium,high");
    setDueDate ("");
    setCategory ("");
    setTags ("");
  };


  return (
    <form onSubmit= {handleSubmit} className="max-w-md mx-auto mt-6 bg-white p-6 rounded shadow">
      
      <h2 className="text-1xl font-bold mb-4 text-center">Ajouter une tâche</h2>

      <input 
      type="text"
      placeholder="Nom de la tâche"
      ></input>

      
      
      </form>
  )
}