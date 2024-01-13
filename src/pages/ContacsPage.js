import React from 'react';

function ContactsPage({contacts}) {
    const renderedContacts = contacts.map((contact, index) => {
        return (
            <div key={index} className="flex space-y-4 space-x-4">
                <a href={contact.link} target="_blank" rel="noopener noreferrer"
                   className="p-4 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300">
                    <contact.icon className="text-3xl text-white"/>
                </a>
                <a href={contact.link} target="_blank" rel="noopener noreferrer"
                   className="text-lg hover:underline underline-offset-4">{contact.description}</a>
            </div>
        )
    })

    return (
        <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-slate-200">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Contacts</h1>
                <p className="text-lg mb-10">Feel free to reach out through the following channels:</p>
            </div>
            <div className="flex flex-col space-y-4 ">
                {renderedContacts}
            </div>
        </div>
    );
}

export default ContactsPage;