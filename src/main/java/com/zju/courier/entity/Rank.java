package com.zju.courier.entity;

public class Rank {
    private int id;
    private int ap_id;
    private int num_pre;
    private int times_pre;
    private float total_time;
    private float avg_time;
    private String release_date;

    @Override
    public String toString() {
        return "Rank{" +
                "id=" + id +
                ", ap_id=" + ap_id +
                ", num_pre=" + num_pre +
                ", times_pre=" + times_pre +
                ", total_time=" + total_time +
                ", avg_time=" + avg_time +
                ", release_date='" + release_date + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Rank rank = (Rank) o;

        if (id != rank.id) return false;
        if (ap_id != rank.ap_id) return false;
        if (num_pre != rank.num_pre) return false;
        if (times_pre != rank.times_pre) return false;
        if (Float.compare(rank.total_time, total_time) != 0) return false;
        if (Float.compare(rank.avg_time, avg_time) != 0) return false;
        return release_date != null ? release_date.equals(rank.release_date) : rank.release_date == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + ap_id;
        result = 31 * result + num_pre;
        result = 31 * result + times_pre;
        result = 31 * result + (total_time != +0.0f ? Float.floatToIntBits(total_time) : 0);
        result = 31 * result + (avg_time != +0.0f ? Float.floatToIntBits(avg_time) : 0);
        result = 31 * result + (release_date != null ? release_date.hashCode() : 0);
        return result;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAp_id() {
        return ap_id;
    }

    public void setAp_id(int ap_id) {
        this.ap_id = ap_id;
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

    public float getTotal_time() {
        return total_time;
    }

    public void setTotal_time(float total_time) {
        this.total_time = total_time;
    }

    public float getAvg_time() {
        return avg_time;
    }

    public void setAvg_time(float avg_time) {
        this.avg_time = avg_time;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }
}
