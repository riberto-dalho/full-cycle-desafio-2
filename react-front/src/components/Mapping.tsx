import {useEffect, useState } from 'react';
import { Route } from '../util/model';
 
export const Mapping = () => {
    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/routes')
            .then(data => data.json())
            .then(data => setRoutes(data))
    }, []);

    return (
        <table className="fullCenter">
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Título</td>
                    <td>Posição Inícial</td>
                    <td>Posição Final</td>
                </tr>
                {
                    routes.map(route => {
                        return ( 
                            <tr>
                                <td>{route._id}</td>
                                <td>{route.title}</td>
                                <td>Lat: {route.startPosition.lat} Lng: {route.startPosition.lng}</td>
                                <td>Lat: {route.endPosition.lat} Lng: {route.endPosition.lng}</td>
                            </tr> );
                    })
                }
            </tbody>
        </table>
    );
    
}