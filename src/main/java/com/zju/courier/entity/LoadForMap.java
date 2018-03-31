package com.zju.courier.entity;

public class LoadForMap {
    private float lat;
    private float lng;
    private int count;


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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "LoadForMap{" +
                "lat=" + lat +
                ", lng=" + lng +
                ", count=" + count +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LoadForMap that = (LoadForMap) o;

        if (Float.compare(that.lat, lat) != 0) return false;
        if (Float.compare(that.lng, lng) != 0) return false;
        return count == that.count;
    }

    @Override
    public int hashCode() {
        int result = (lat != +0.0f ? Float.floatToIntBits(lat) : 0);
        result = 31 * result + (lng != +0.0f ? Float.floatToIntBits(lng) : 0);
        result = 31 * result + count;
        return result;
    }
}
