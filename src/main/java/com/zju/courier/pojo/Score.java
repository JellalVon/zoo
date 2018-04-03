package com.zju.courier.pojo;

import com.zju.courier.entity.APInfo;

public class Score {
    private int apId;
    private int num;
    private int times;
    private float total;
    private float avg;
    private int distance;
    private float score;
    private int days;
    private APInfo apInfo;

    public Score() {
        num=0;
        times=0;
        total=0;
        avg=0;
        score=0;
        days=0;
    }

    public APInfo getApInfo() {
        return apInfo;
    }

    public void setApInfo(APInfo apInfo) {
        this.apInfo = apInfo;
    }

    public int getDays() {
        return days;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public int getApId() {
        return apId;
    }

    public void setApId(int apId) {
        this.apId = apId;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getTimes() {
        return times;
    }

    public void setTimes(int times) {
        this.times = times;
    }

    public float getTotal() {
        return total;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    public float getAvg() {
        return avg;
    }

    public void setAvg(float avg) {
        this.avg = avg;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Score{" +
                "apId=" + apId +
                ", num=" + num +
                ", times=" + times +
                ", total=" + total +
                ", avg=" + avg +
                ", distance=" + distance +
                ", score=" + score +
                ", days=" + days +
                '}';
    }
}
