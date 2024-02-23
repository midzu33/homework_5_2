import { useState } from 'react';

let SocialNetworks = [
    { id: 0, name: 'instagram' },
    { id: 1, name: 'facebook'},
    { id: 2, name: 'WhatsApp'},
    { id: 3, name: 'TikTok'},
    { id: 4, name: 'Threads'},
    { id: 5, name: 'telegram'},
    { id: 6, name: 'vk'},
];

export default function List() {
    const [networks, setNetworks] = useState(
        SocialNetworks
    );

    return (
        <>
            <h1>Popular Social Networks</h1>
            <ul>
                {networks.map(network => (
                    <li key={network.id}>
                        {network.name}{' '}
                        <button onClick={() => {
                            setNetworks(
                                networks.filter(a =>
                                    a.id !== network.id
                                )
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
