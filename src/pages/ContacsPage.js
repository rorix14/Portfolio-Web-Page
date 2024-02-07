import React from 'react';

function ContactsPage({contacts}) {
    const renderedContacts = contacts.map((contact, index) => {
        return (
            <div key={index} className="flex space-y-4 space-x-4">
                <a href={contact.link} target="_blank" rel="noopener noreferrer"
                   className="p-4 rounded-full transition duration-500 bg-tangerine hover:bg-dark-tangerine">
                    <contact.icon className="text-3xl text-white"/>
                </a>
                <a href={contact.link} target="_blank" rel="noopener noreferrer"
                   className="text-lg hover:underline underline-offset-4 decoration-2 decoration-tangerine text-iris">{contact.description}</a>
            </div>
        )
    })

    return (
        <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-milky-way">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2 text-twilight">Contacts</h1>
                <p className="text-lg mb-10 text-twilight">Feel free to reach out through the following channels:</p>
            </div>
            <div className="flex flex-col space-y-4">
                {renderedContacts}
            </div>
            <p className="text-twilight mt-20">Copyright © 2024 Pedro Silva</p>
        </div>
    );
}

export default ContactsPage;