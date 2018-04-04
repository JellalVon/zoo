package com.zju.courier.pojo;

public class SumByDate {
    private int apId;
    private String apName;
    private int  num;
    private int times;
    private int total;
    private float avg;

    public String getApName() {
        return apName;
    }

    public void setApName(String apName) {
        this.apName = apName;
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

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public float getAvg() {
        return avg;
    }

    public void setAvg(float avg) {
        this.avg = avg;
    }

    @Override
    public String toString() {
        return "SumByDate{" +
                "apId=" + apId +
                ", apName='" + apName + '\'' +
                ", num=" + num +
                ", times=" + times +
                ", total=" + total +
                ", avg=" + avg +
                '}';
    }
}
