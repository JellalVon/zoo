package com.zju.courier.entity;

public class APInfo {
    private int ap_id;
    private String ap_name;
    private String mac;
    private float lat;
    private float lng;
    private float radius;
    private String addr;
    private int distance;
    private int max_num;
    private String img;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public void setAll(int ap_id, String ap_name, String mac, float lat, float lng,
                       float radius, String addr, int distance, int max_num) {
        this.ap_id = ap_id;
        this.ap_name = ap_name;
        this.mac = mac;
        this.lat = lat;
        this.lng = lng;
        this.radius = radius;
        this.addr = addr;
        this.distance = distance;
        this.max_num = max_num;
    }

    @Override
    public String toString() {
        return "APInfo{" +
                "ap_id=" + ap_id +
                ", ap_name='" + ap_name + '\'' +
                ", mac='" + mac + '\'' +
                ", lat=" + lat +
                ", lng=" + lng +
                ", radius=" + radius +
                ", addr='" + addr + '\'' +
                ", distance=" + distance +
                ", max_num=" + max_num +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        APInfo apInfo = (APInfo) o;

        if (ap_id != apInfo.ap_id) return false;
        if (Float.compare(apInfo.lat, lat) != 0) return false;
        if (Float.compare(apInfo.lng, lng) != 0) return false;
        if (Float.compare(apInfo.radius, radius) != 0) return false;
        if (distance != apInfo.distance) return false;
        if (max_num != apInfo.max_num) return false;
        if (ap_name != null ? !ap_name.equals(apInfo.ap_name) : apInfo.ap_name != null) return false;
        if (mac != null ? !mac.equals(apInfo.mac) : apInfo.mac != null) return false;
        return addr != null ? addr.equals(apInfo.addr) : apInfo.addr == null;
    }

    @Override
    public int hashCode() {
        int result = ap_id;
        result = 31 * result + (ap_name != null ? ap_name.hashCode() : 0);
        result = 31 * result + (mac != null ? mac.hashCode() : 0);
        result = 31 * result + (lat != +0.0f ? Float.floatToIntBits(lat) : 0);
        result = 31 * result + (lng != +0.0f ? Float.floatToIntBits(lng) : 0);
        result = 31 * result + (radius != +0.0f ? Float.floatToIntBits(radius) : 0);
        result = 31 * result + (addr != null ? addr.hashCode() : 0);
        result = 31 * result + distance;
        result = 31 * result + max_num;
        return result;
    }

    public int getAp_id() {
        return ap_id;
    }

    public void setAp_id(int ap_id) {
        this.ap_id = ap_id;
    }

    public String getAp_name() {
        return ap_name;
    }

    public void setAp_name(String ap_name) {
        this.ap_name = ap_name;
    }

    public String getMac() {
        return mac;
    }

    public void setMac(String mac) {
        this.mac = mac;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public float getRadius() {
        return radius;
    }

    public void setRadius(float radius) {
        this.radius = radius;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getMax_num() {
        return max_num;
    }

    public void setMax_num(int max_num) {
        this.max_num = max_num;
    }
}
