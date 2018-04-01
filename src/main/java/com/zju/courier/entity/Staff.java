package com.zju.courier.entity;

public class Staff {
    private int id;
    private String staff_mac;
    private int ap_id;
    private String name;
    private String sex;
    private String tel;
    private String birth;
    private String title;

    public Staff() {
    }

    public Staff(int id, String staff_mac, int ap_id, String name, String sex, String tel, String birth, String title) {
        this.id = id;
        this.staff_mac = staff_mac;
        this.ap_id = ap_id;
        this.name = name;
        this.sex = sex;
        this.tel = tel;
        this.birth = birth;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStaff_mac() {
        return staff_mac;
    }

    public void setStaff_mac(String staff_mac) {
        this.staff_mac = staff_mac;
    }

    public int getAp_id() {
        return ap_id;
    }

    public void setAp_id(int ap_id) {
        this.ap_id = ap_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Staff{" +
                "id=" + id +
                ", staff_mac='" + staff_mac + '\'' +
                ", ap_id=" + ap_id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", tel='" + tel + '\'' +
                ", birth='" + birth + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
