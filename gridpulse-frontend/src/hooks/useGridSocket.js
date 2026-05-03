import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export const useGridSocket = () => {
  const [readings, setReadings] = useState([]);
  const stompClientRef = useRef(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/grid-websocket'),
      onConnect: () => {
        console.log('Connected to GridPulse!');
        client.subscribe('/topic/readings', (message) => {
          const newReading = JSON.parse(message.body);
          setReadings((prev) => {
            const updated = [...prev, newReading];
            return updated.length > 20 ? updated.slice(-20) : updated;
          });
        });
      },
    });

    client.activate();
    stompClientRef.current = client;

    return () => {
      if (stompClientRef.current) stompClientRef.current.deactivate();
    };
  }, []);

  return readings;
};