import React, { useState } from 'react';
import  './FormComponent.css'

const FormComponent = () => {
    const [formData, setFormData] = useState({
        educationLevel: '',
        professionalTraining: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour envoyer les données de formulaire, par ex., envoyer à une API
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <h1>Niveau d'études et compétences</h1>
            <form onSubmit={handleSubmit}>
                <label>Quel est votre niveau d'études le plus élevé ?</label>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
                    <option value="">Sélectionner...</option>
                    <option value="aucun">Aucun diplôme</option>
                    <option value="ecole_secondaire">École secondaire</option>
                    <option value="baccalaureat">Baccalauréat</option>
                    <option value="diplome_universitaire">Diplôme universitaire (BTS, Licence, Master, etc.)</option>
                    <option value="autre">Autre (précisez)</option>
                </select>
                <br />
                <label>Avez-vous suivi des formations professionnelles récemment ?</label>
                <input type="radio" name="professionalTraining" value="oui" onChange={handleChange} /> Oui (précisez) :
                <input type="text" name="formationDetails" onChange={handleChange} />
                <input type="radio" name="professionalTraining" value="non" onChange={handleChange} /> Non
                <br />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default FormComponent;
