package com.gridpulse.gridpulse.service;

import com.gridpulse.gridpulse.dto.SensorReading; // <-- THIS IS THE FIXED LINE
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@EnableScheduling
public class GridSimulatorService {

    private final SimpMessagingTemplate messagingTemplate;
    private final Random random = new Random();

    public GridSimulatorService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 1000)
    public void generateAndSendData() {
        double basePower = 40 + (120 - 40) * random.nextDouble();

        SensorReading reading = new SensorReading(
                "SECTOR-A-WIND",
                basePower,
                System.currentTimeMillis()
        );

        messagingTemplate.convertAndSend("/topic/readings", reading);
    }
}