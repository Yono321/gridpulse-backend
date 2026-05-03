// src/main/java/com/gridpulse/dto/SensorReading.java
package com.gridpulse.gridpulse.dto;

public class SensorReading {
    private String sensorId;
    private double power;
    private long timestamp;

    public SensorReading(String sensorId, double power, long timestamp) {
        this.sensorId = sensorId;
        this.power = power;
        this.timestamp = timestamp;
    }

    // Getters (Required for Jackson JSON serialization)
    public String getSensorId() { return sensorId; }
    public double getPower() { return power; }
    public long getTimestamp() { return timestamp; }
}
