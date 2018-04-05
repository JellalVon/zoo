package com.zju.courier.pojo;

public class StaffPosition {
    private String name;
    private String tel;
    private String title;
    private String apName;
    private float lat;
    private float lng;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getApName() {
        return apName;
    }

    public void setApName(String apName) {
        this.apName = apName;
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

    @Override
    public String toString() {
        return "StaffPosition{" +
                "name='" + name + '\'' +
                ", tel='" + tel + '\'' +
                ", title='" + title + '\'' +
                ", apName='" + apName + '\'' +
                ", lat=" + lat +
                ", lng=" + lng +
                '}';
    }
}
