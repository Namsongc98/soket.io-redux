import React, { useEffect, useState } from 'react'
import ConnectionState from './ConnectionState'
import Events from './Events'
import ConnectionManager from './ConnectionManager'
import MyForm from './MyForm'
import { socket } from "../socket";

const Socket = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([] as any);
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function getIdSoket(data) {
            console.log(data)
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value: any) {
            setFooEvents((previous: any[]) => [...previous, value]);
        }

        socket.on("connect", onConnect);
        socket.on("getId", getIdSoket);
        socket.on("disconnect", onDisconnect);
        socket.on("foo", onFooEvent);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("foo", onFooEvent);
        };
    }, []);
    return (
        <>
            <ConnectionState isConnected={isConnected} />
            <Events events={fooEvents} />
            <ConnectionManager />
            <MyForm />
        </>
    )
}

export default Socket