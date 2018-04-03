package com.zju.courier.entity;

public class Criteria {

    private int criteria_id;
    private int num_pre;
    private int times_pre;
    private float avg_time;
    private float total_time;
    private int distance;
    private String release_date;

    public int getCriteria_id() {
        return criteria_id;
    }

    public void setCriteria_id(int criteria_id) {
        this.criteria_id = criteria_id;
    }

    public int getNum_pre() {
        return num_pre;
    }

    public void setNum_pre(int num_pre) {
        this.num_pre = num_pre;
    }

    public int getTimes_pre() {
        return times_pre;
    }

    public void setTimes_pre(int times_pre) {
        this.times_pre = times_pre;
    }

    public float getAvg_time() {
        return avg_time;
    }

    public void setAvg_time(float avg_time) {
        this.avg_time = avg_time;
    }

    public float getTotal_time() {
        return total_time;
    }

    public void setTotal_time(float total_time) {
        this.total_time = total_time;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    @Override
    public String toString() {
        return "Criteria{" +
                "criteria_id=" + criteria_id +
                ", num_pre=" + num_pre +
                ", times_pre=" + times_pre +
                ", avg_time=" + avg_time +
                ", total_time=" + total_time +
                ", distance=" + distance +
                ", release_date='" + release_date + '\'' +
                '}';
    }
}
